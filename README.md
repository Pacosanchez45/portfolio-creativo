# UIverse · Portfolio

Portfolio de UIverse con Home, archivo de proyectos, casos de estudio y página de contacto. Next.js App Router, TypeScript, Tailwind CSS, GSAP, ScrollTrigger, Lenis y Resend.

## Desarrollo

```sh
npm install
npm run dev
```

Preview: http://127.0.0.1:3000. Validación: `npm run lint`, `npm run typecheck`, `npm run build`.

## Estructura

- `src/app/globals.css`: tokens Tailwind v4, tipografía Manrope local, spacing, breakpoints y estilos responsive.
- `src/components/header.tsx`: navegación y estado al hacer scroll.
- `src/components/hero.tsx`: composición y animación GSAP aislada con cleanup.
- `src/components/motion-provider.tsx`: Lenis sincronizado con ScrollTrigger; scroll nativo móvil y reduced motion.

La Home muestra tres proyectos destacados desde la misma fuente usada por `/proyectos`. Sobre mí usa `id="about"`; la CTA final enlaza a `/contacto` y `/proyectos`.

## Identidad e idiomas

- `src/translations/es.ts` y `en.ts`: textos de interfaz, SEO y versiones localizadas del contenido. Español es el idioma inicial; los datos base y los assets siguen en `src/data/`.
- `LanguageProvider`: cambio en tiempo real, `html.lang`, título y descripción; guarda `es` o `en` en `localStorage` bajo `uiverse.language.v1`. Si el almacenamiento está bloqueado, mantiene la elección en memoria.
- Las traducciones conservan las claves de los componentes animados y refrescan las medidas de ScrollTrigger sin recrear las secciones.
- `src/components/brand-mark.tsx`: monograma UI editable en SVG. `src/app/icon.svg`: favicon de la marca.
- About presenta la experiencia como una pieza tipográfica. Sus textos están en los diccionarios ES/EN; los nombres de herramientas conservan su denominación original.

## Selected Work

- `src/data/projects.ts`: nombres, categorías, años, descripciones, imágenes, alt y `caseUrl` editables.
- `src/components/selected-work/`: componentes SelectedWork y ProjectShowcase, hook GSAP con cleanup y CSS Module aislado.
- `public/projects/`: mockups SVG originales de ejemplo. Reemplazables por imágenes de proyectos reales.
- `caseUrl: null` abre una ficha conceptual accesible con diálogo nativo, cierre con Escape y retorno de foco. Una URL real convierte el CTA en enlace.
- Revelado de títulos e imágenes, escala progresiva, parallax suave y hover. En móvil se simplifican los efectos; reduced motion muestra todo sin animación. No hay pinning ni scroll-jacking.

El Hero separa las transformaciones de entrada, cursor y scroll en wrappers distintos. La entrada dura 1,45 s; el punto usa un rebote breve. El cursor mueve las líneas en direcciones opuestas (máximo 8 px horizontales y 3 px verticales), excluyendo equipos táctiles. ScrollTrigger aplica parallax y opacidad progresiva al desplazarse hacia Selected Work.

El contenido es visible sin JavaScript. `prefers-reduced-motion` desactiva las entradas y el seguimiento del cursor. Las animaciones se limpian al desmontar y al cambiar preferencias.


## Contacto

- Enlaces de correo y LinkedIn editables en `src/data/contact.ts`.
- La Home usa `src/components/contact/` como CTA; el formulario está en `src/components/contact-page/`.
- `POST /api/contact` valida los datos, aplica honeypot, tiempo mínimo y un límite básico por IP, y envía con Resend desde el servidor.
- Copia `.env.example` a `.env.local` y configura las tres variables obligatorias: `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` y `CONTACT_TO_EMAIL`.
- Para producción, verifica `uiverse.es` en Resend y usa `CONTACT_FROM_EMAIL=contacto@uiverse.es`.
- Todos los formularios se envían a `CONTACT_TO_EMAIL=pacosansan97@gmail.com`; el endpoint conserva como `Reply-To` el email introducido por la persona que escribe.
- El Hero conserva el nombre Francisco Sánchez; UIverse permanece como marca del sitio.

## Archivo de proyectos

- `src/data/projects.ts` es la fuente única de los cinco proyectos, enlaces, tecnologías y portadas.
- La Home toma los tres primeros; `/proyectos` muestra los cinco con sus enlaces de caso, demo y GitHub.
- Las portadas editables generadas para esta versión están en `public/projects/covers/` y se identifican con el sufijo `-cover-ai`.

## Casos de estudio

- `/casos/uxsignal` y `/casos/clinica-dental-lb` comparten una plantilla editorial con contenido específico, imágenes reales, motion, responsive y traducción ES/EN.
- `src/data/case-studies.ts` centraliza todo el contenido, metadata, enlaces y medios de ambos casos.
- Las antiguas URLs terminadas en `.html` redirigen desde `next.config.ts`, por lo que enlaces publicados y favoritos siguen funcionando.
- Los casos enlazan al portfolio, al archivo de proyectos, a la demo publicada y a GitHub.

## Producción

- Dominio canónico: `https://uiverse.es`.
- El proyecto está preparado para desplegarse en Vercel desde la raíz del repositorio.
- Configura en Vercel `RESEND_API_KEY`, `CONTACT_FROM_EMAIL=contacto@uiverse.es` y `CONTACT_TO_EMAIL=pacosansan97@gmail.com` antes de probar el formulario en producción.
