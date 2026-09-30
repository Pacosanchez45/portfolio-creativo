import { Resend } from 'resend';

export const runtime = 'nodejs';

const allowedTypes = new Set(['ux-ui', 'web', 'redesign', 'product', 'frontend', 'other']);
const typeLabels: Record<string, string> = { 'ux-ui': 'Diseño UX/UI', web: 'Web / Landing Page', redesign: 'Rediseño', product: 'Producto digital', frontend: 'Front-End', other: 'Otro' };
const attempts = new Map<string, number[]>();

type ContactPayload = { name?: unknown; email?: unknown; projectType?: unknown; message?: unknown; website?: unknown; startedAt?: unknown };

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character] ?? character);
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const recent = (attempts.get(identifier) ?? []).filter(time => now - time < 15 * 60_000);
  if (recent.length >= 5) return true;
  recent.push(now);
  attempts.set(identifier, recent);
  if (attempts.size > 500) attempts.clear();
  return false;
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) return Response.json({ ok: false, code: 'invalid-origin' }, { status: 403 });
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > 20_000) return Response.json({ ok: false, code: 'payload-too-large' }, { status: 413 });

  let payload: ContactPayload;
  try { payload = await request.json() as ContactPayload; } catch { return Response.json({ ok: false, code: 'invalid-json' }, { status: 400 }); }

  // Honeypot submissions return success without sending so bots receive no signal.
  if (clean(payload.website, 200)) return Response.json({ ok: true });
  const startedAt = typeof payload.startedAt === 'number' ? payload.startedAt : 0;
  if (!startedAt || Date.now() - startedAt < 2_000) return Response.json({ ok: false, code: 'too-fast' }, { status: 400 });

  const name = clean(payload.name, 100);
  const email = clean(payload.email, 254).toLowerCase();
  const projectType = clean(payload.projectType, 30);
  const message = clean(payload.message, 4_000);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (name.length < 2 || !emailPattern.test(email) || !allowedTypes.has(projectType) || message.length < 10) {
    return Response.json({ ok: false, code: 'validation' }, { status: 400 });
  }

  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
  if (isRateLimited(forwardedFor)) return Response.json({ ok: false, code: 'rate-limit' }, { status: 429 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) return Response.json({ ok: false, code: 'not-configured' }, { status: 503 });

  const sentAt = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Europe/Madrid' }).format(new Date());
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nuevo proyecto desde UIverse — ${typeLabels[projectType]}`,
      text: `Nuevo contacto desde UIverse\n\nNombre: ${name}\nCorreo: ${email}\nTipo de proyecto: ${typeLabels[projectType]}\nFecha y hora: ${sentAt}\n\nMensaje:\n${message}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:640px;color:#161714"><h1>Nuevo contacto desde UIverse</h1><p><strong>Nombre:</strong> ${escapeHtml(name)}</p><p><strong>Correo:</strong> ${escapeHtml(email)}</p><p><strong>Tipo de proyecto:</strong> ${escapeHtml(typeLabels[projectType])}</p><p><strong>Fecha y hora:</strong> ${escapeHtml(sentAt)}</p><hr><p style="white-space:pre-wrap">${escapeHtml(message)}</p></div>`,
    });
    if (error) return Response.json({ ok: false, code: 'provider' }, { status: 502 });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, code: 'provider' }, { status: 502 });
  }
}
