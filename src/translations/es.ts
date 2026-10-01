import { projects } from '@/data/projects';
import { capabilities } from '@/data/capabilities';
import { processSteps } from '@/data/process';
import { about } from '@/data/about';

export const es = {
  contact: { eyebrow: '¿TIENES UN PROYECTO EN MENTE?', title: 'HABLEMOS', description: 'Si buscas diseñar o mejorar un producto digital, una web o una experiencia, podemos hablar.', cta: 'CONTACTAR', projectsCta: 'VER TODOS LOS PROYECTOS' },
  contactPage: {
    eyebrow: 'CONTACTO', title: 'CUÉNTAME QUÉ QUIERES MEJORAR DE TU WEB O PRODUCTO DIGITAL.', description: 'Si tienes una idea, una web que no termina de convencerte o una pantalla que necesita más claridad, escríbeme. Revisaré el contexto y te responderé con una primera orientación.',
    signals: [{ value: '24–48H', label: 'TIEMPO HABITUAL DE RESPUESTA' }, { value: 'REMOTO', label: 'ESPAÑA Y PROYECTOS ONLINE' }, { value: 'FIGMA + FRONT-END', label: 'DISEÑO E IMPLEMENTACIÓN' }],
    formEyebrow: 'HABLEMOS', formTitle: 'DESCRIBE TU PROYECTO', formIntro: 'Cuanto más contexto me des, mejor podré orientarte.',
    fields: { name: 'Nombre', namePlaceholder: 'Tu nombre', email: 'Correo electrónico', emailPlaceholder: 'tucorreo@ejemplo.com', type: 'Tipo de proyecto', typePlaceholder: 'Selecciona una opción', message: 'Mensaje' },
    projectTypes: [{ value: 'ux-ui', label: 'Diseño UX/UI' }, { value: 'web', label: 'Web / Landing Page' }, { value: 'redesign', label: 'Rediseño' }, { value: 'product', label: 'Producto digital' }, { value: 'frontend', label: 'Front-End' }, { value: 'other', label: 'Otro' }],
    submit: 'ENVIAR MENSAJE', sending: 'ENVIANDO…', legal: 'Al enviar aceptas ser contactado para atender tu consulta. Sin newsletter, sin ruido.',
    success: 'Mensaje enviado. Te responderé lo antes posible.', error: 'No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbeme por email.',
    validation: { name: 'Escribe tu nombre.', email: 'Introduce un correo electrónico válido.', type: 'Selecciona un tipo de proyecto.', message: 'Cuéntame brevemente en qué consiste el proyecto.' },
    notes: [{ number: '01', title: 'QUÉ INCLUIR EN EL MENSAJE', text: 'Objetivo del proyecto, enlace si ya existe, qué no te convence ahora y qué resultado te gustaría conseguir.' }, { number: '02', title: 'CÓMO RESPONDO', text: 'Te contestaré con una primera lectura del problema, posibles siguientes pasos y qué necesitaría para presupuestarlo.' }, { number: '03', title: 'OTROS CANALES', text: 'También puedes escribirme a pacosansan97@gmail.com o conectar por LinkedIn.' }],
    emailLabel: 'Escribir a pacosansan97@gmail.com', linkedinLabel: 'Conectar por LinkedIn (abre una pestaña nueva)', back: 'VOLVER AL INICIO', projects: 'VER PROYECTOS',
  },
  projectsPage: { eyebrow: 'ARCHIVO / 2026', title: 'PROYECTOS', subtitle: 'TRABAJO SELECCIONADO Y EXPERIMENTAL', intro: 'Cinco proyectos donde conviven investigación, diseño de producto, dirección visual y ejecución Front-End.', technologies: 'TECNOLOGÍAS', viewCase: 'VER CASO', viewProject: 'VER PROYECTO', github: 'GITHUB', contact: 'HABLEMOS DE TU PROYECTO', back: 'VOLVER AL INICIO', coverLabel: 'PORTADA DE PROYECTO', openLabel: 'Abrir proyecto' },
  footer: {
    description: 'Portfolio de UX/UI, producto digital y front-end con enfoque visual, estructural y funcional.',
    navigation: 'NAVEGACIÓN', featured: 'PROYECTOS DESTACADOS', contact: 'CONTACTO',
    home: 'Inicio', projects: 'Proyectos', about: 'Sobre mí', contactLink: 'Contacto', location: 'Málaga, España',
    copyright: '© 2026 UIverse', credit: 'Diseñado y desarrollado por Francisco Sánchez', external: 'abre en una pestaña nueva', namiLabel: 'Visitar Nami Design (abre en una pestaña nueva)',
  },
  seo: { title: 'UIverse — Diseño UX/UI y desarrollo Front-End', description: 'Diseño experiencias digitales claras, funcionales y visualmente cuidadas. Portfolio de diseño UX/UI y desarrollo Front-End.' },
  routeSeo: { contact: { title: 'UIverse — Contacto', description: 'Cuéntame tu proyecto digital y recibe una primera orientación sobre diseño UX/UI y desarrollo Front-End.' }, projects: { title: 'UIverse — Proyectos', description: 'Selección completa de proyectos de UX/UI, producto digital y desarrollo Front-End.' } },
  nav: { home: 'UIverse, inicio', label: 'Navegación principal', work: 'Proyectos', about: 'Sobre mí', contact: 'Contacto', soon: 'Disponible próximamente', language: 'Idioma', skip: 'Saltar al contenido' },
  hero: { portfolio: 'PORTFOLIO — 2026', motto: 'DISEÑO CON INTENCIÓN. CÓDIGO CON SENTIDO.', role: 'DISEÑADOR UX/UI', development: 'Y DESARROLLADOR FRONT-END', description: 'Diseño experiencias digitales claras, funcionales y visualmente cuidadas.', work: 'PROYECTOS SELECCIONADOS', note: 'DE LA IDEA A LA EXPERIENCIA.', index: '01 / INICIO' },
  work: { label: '02 / PROYECTOS', selection: '2026 — SELECCIÓN DE PROYECTOS', title: 'Proyectos', intro: ['Ideas que toman forma.', 'Diseño que se convierte en experiencia.'], sample: 'SELECCIÓN CONCEPTUAL · IMÁGENES Y CONTENIDO DE EJEMPLO', progress: 'Progreso de proyectos', cta: 'VER PROYECTO', exploration: 'EXPLORACIÓN DE DISEÑO', close: 'CERRAR', closeLabel: 'Cerrar ficha del proyecto', sampleCase: 'FICHA DE EJEMPLO' },
  capabilities: { label: '03 / CAPACIDADES', eyebrow: 'QUÉ HAGO', title: 'CAPACIDADES', statement: 'Diseño experiencias digitales que tienen sentido.', lines: ['DISEÑO EXPERIENCIAS', 'DIGITALES', 'CON ', 'SENTIDO.'] },
  process: { label: '04 / PROCESO', eyebrow: 'CÓMO TRABAJO', title: 'PROCESO', progress: 'Progreso del proceso', statement: 'De la idea a la experiencia.', words: ['DE LA', 'IDEA', 'A LA', 'EXPERIENCIA.'] },
  about: { label: '05 / SOBRE MÍ', lines: ['DISEÑADOR', 'CON VISIÓN', 'FRONT-END', 'Y CRITERIO.'], experienceNumber: '03', experienceSign: '+', experienceLabel: 'Más de tres años de experiencia', experienceLines: ['AÑOS', 'COMO FREELANCE', 'DISEÑANDO', 'EXPERIENCIAS', 'DIGITALES'], statement: 'No solo diseño pantallas. Diseño cómo funcionan.', statementLines: ['NO SOLO DISEÑO PANTALLAS.', 'DISEÑO ', 'CÓMO ', 'FUNCIONAN.'], tools: 'HERRAMIENTAS QUE UTILIZO', toolsLabel: 'Herramientas', pause: 'PAUSAR MOVIMIENTO', resume: 'REANUDAR MOVIMIENTO' },
  projects,
  capabilityItems: capabilities.map((item, index) => ({ ...item, name: ['DISEÑO UX/UI', 'DISEÑO DE PRODUCTO', 'DISEÑO WEB', 'FRONT-END'][index] })),
  processSteps: processSteps.map((step, index) => ({ ...step, title: ['ENTENDER', 'DEFINIR', 'DISEÑAR', 'CONSTRUIR'][index], note: index === 3 ? 'DESARROLLO / ADAPTABILIDAD / CALIDAD' : step.note })),
  aboutContent: { ...about, meta: [
    { label: 'ROL', value: 'DISEÑADOR UX/UI Y DESARROLLADOR FRONT-END' },
    { label: 'UBICACIÓN', value: 'MÁLAGA, ESPAÑA' },
    { label: 'ENFOQUE', value: 'PRODUCTOS DIGITALES / WEB / INTERACCIÓN' },
    { label: 'EXPERIENCIA', value: '3+ AÑOS FREELANCE' },
  ], company: { label: 'EMPRESA', name: 'NAMI DESIGN', description: 'DISEÑO WEB / SEO / REDES SOCIALES', ariaLabel: 'Visitar la web de Nami Design' } },
};

export type Content = typeof es;
