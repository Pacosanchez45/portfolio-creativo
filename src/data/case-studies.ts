export type CaseStudySlug = 'uxsignal' | 'clinica-dental-lb';

export interface CaseMedia {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  portrait?: boolean;
}

export interface CaseStudySection {
  number: string;
  eyebrow: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  items?: Array<{ title: string; text: string }>;
  media?: CaseMedia[];
  layout?: 'split' | 'wide' | 'gallery' | 'phones';
}

export interface CaseStudy {
  slug: CaseStudySlug;
  projectId: string;
  index: string;
  year: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  heroImage: CaseMedia;
  summary: Array<{ label: string; value: string }>;
  sections: CaseStudySection[];
  final: {
    eyebrow: string;
    title: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  labels: {
    back: string;
    projects: string;
    next: string;
    top: string;
  };
}

const uxMedia = {
  hero: { src: '/cases/uxsignal/04.png', width: 2559, height: 1439 },
  dashboard: { src: '/cases/uxsignal/01.png', width: 2559, height: 1439 },
  setup: { src: '/cases/uxsignal/02.png', width: 2559, height: 1439 },
  processing: { src: '/cases/uxsignal/03.png', width: 2559, height: 1439 },
  finding: { src: '/cases/uxsignal/05.png', width: 2559, height: 1439 },
  report: { src: '/cases/uxsignal/06.png', width: 2559, height: 1439 },
  mobileDashboard: { src: '/cases/uxsignal/mob-07.jpeg', width: 1290, height: 2657, portrait: true },
  mobileFinding: { src: '/cases/uxsignal/mob-08.jpeg', width: 1290, height: 2643, portrait: true },
  mobileMenu: { src: '/cases/uxsignal/mob-09.jpeg', width: 1290, height: 2652, portrait: true },
} as const;

export const caseStudiesEs: Record<CaseStudySlug, CaseStudy> = {
  uxsignal: {
    slug: 'uxsignal', projectId: 'uxsignal', index: '01 / 02', year: '2026',
    eyebrow: 'DISEÑO DE PRODUCTO / INVESTIGACIÓN UX / IA', title: 'UXSIGNAL',
    subtitle: 'INVESTIGACIÓN UX ASISTIDA POR IA, CON EVIDENCIAS TRAZABLES Y REVISIÓN HUMANA.',
    intro: 'Diseñé y desarrollé un producto que transforma entrevistas y notas en hallazgos estructurados, mostrando sus fuentes, contradicciones y nivel de confianza antes de incorporarlos a un informe.',
    heroImage: { ...uxMedia.hero, alt: 'Vista general de hallazgos en UXSignal.', caption: 'INTERFAZ PRINCIPAL / HALLAZGOS' },
    summary: [
      { label: 'ROL', value: 'PRODUCT DESIGNER & FRONT-END' },
      { label: 'TIPO', value: 'PROYECTO PERSONAL / MVP' },
      { label: 'STACK', value: 'NEXT.JS / REACT / TYPESCRIPT' },
      { label: 'AÑO', value: '2026' },
    ],
    sections: [
      { number: '01', eyebrow: 'CONTEXTO', title: 'EL RETO NO ERA RESUMIR. ERA CONSERVAR LA EVIDENCIA.', layout: 'split', paragraphs: ['En equipos pequeños, revisar entrevistas sigue siendo un proceso manual: localizar patrones, seleccionar citas, detectar contradicciones y preparar informes.', 'La herramienta debía acelerar la síntesis sin convertir el análisis en una caja negra. Cada conclusión tenía que mantener visible su relación con las fuentes originales.'], media: [{ ...uxMedia.dashboard, alt: 'Dashboard de proyectos de investigación en UXSignal.', caption: 'DASHBOARD / ESTUDIOS ACTIVOS' }] },
      { number: '02', eyebrow: 'ARQUITECTURA', title: 'UN FLUJO COMPLETO, DE LA FUENTE AL INFORME.', paragraphs: ['El producto acompaña todo el proceso de investigación y mantiene la decisión final en manos de la persona investigadora.'], bullets: ['Crear y definir un estudio.', 'Añadir entrevistas, notas y transcripciones.', 'Configurar el tipo de análisis.', 'Revisar hallazgos, confianza y contradicciones.', 'Consultar las evidencias originales.', 'Construir un informe editable.'], media: [{ ...uxMedia.setup, alt: 'Formulario de creación de estudio en UXSignal.', caption: '01 / DEFINICIÓN DEL ESTUDIO' }, { ...uxMedia.processing, alt: 'Procesamiento simulado en UXSignal.', caption: '02 / ESTADO DEL ANÁLISIS' }], layout: 'gallery' },
      { number: '03', eyebrow: 'DECISIONES DE DISEÑO', title: 'DISEÑAR CONFIANZA ALREDEDOR DE LA IA.', items: [{ title: 'HALLAZGOS TRAZABLES', text: 'Cada conclusión muestra participantes, evidencias, contradicciones, confianza y fuentes relacionadas.' }, { title: 'REVISIÓN HUMANA VISIBLE', text: 'La IA propone. La persona acepta, edita, descarta o incorpora cada resultado al informe.' }, { title: 'CONTRADICCIONES EXPLÍCITAS', text: 'La evidencia que limita una conclusión aparece con jerarquía propia y nunca queda oculta.' }, { title: 'CONFIANZA COMPRENSIBLE', text: 'Un porcentaje y una etiqueta cualitativa ayudan a valorar la solidez de cada hallazgo.' }], media: [{ ...uxMedia.finding, alt: 'Detalle de un hallazgo con evidencias y revisión humana.', caption: 'DETALLE / EVIDENCIAS / DECISIÓN' }], layout: 'wide' },
      { number: '04', eyebrow: 'SÍNTESIS', title: 'DE HALLAZGOS REVISADOS A UN INFORME EDITABLE.', layout: 'split', paragraphs: ['Los resultados aceptados se incorporan al informe sin modificar la fuente original. El investigador conserva el control sobre el resumen, la metodología, el orden y las recomendaciones.'], media: [{ ...uxMedia.report, alt: 'Constructor de informe editable en UXSignal.', caption: 'INFORME / CONTENIDO EDITABLE' }] },
      { number: '05', eyebrow: 'RESPONSIVE', title: 'LA MISMA JERARQUÍA EN UNA PANTALLA MÁS PEQUEÑA.', paragraphs: ['En móvil, la interfaz reorganiza tarjetas, filtros y navegación para conservar las acciones principales sin trasladar literalmente el escritorio.'], media: [{ ...uxMedia.mobileDashboard, alt: 'Dashboard móvil de UXSignal.', caption: 'DASHBOARD MÓVIL' }, { ...uxMedia.mobileFinding, alt: 'Revisión de hallazgos en móvil.', caption: 'HALLAZGOS' }, { ...uxMedia.mobileMenu, alt: 'Menú móvil abierto en UXSignal.', caption: 'NAVEGACIÓN' }], layout: 'phones' },
      { number: '06', eyebrow: 'ALCANCE', title: 'UN MVP FUNCIONAL Y TRANSPARENTE.', paragraphs: ['Diseñé e implementé el flujo completo, sus estados y la persistencia independiente de cada estudio.', 'La versión actual utiliza resultados simulados para demostrar la experiencia. No realiza llamadas reales a una IA ni incluye backend, autenticación o colaboración en tiempo real.'], bullets: ['Procesamiento real de transcripciones.', 'Backend y almacenamiento seguro.', 'Autenticación y espacios de trabajo.', 'Colaboración e historial de revisiones.', 'Pruebas con usuarios reales.'] },
    ],
    final: { eyebrow: 'EXPLORA EL PRODUCTO', title: 'UNA EXPERIENCIA COMPLETA PARA CONVERTIR INVESTIGACIÓN EN DECISIONES.', primary: { label: 'PROBAR PRODUCTO', href: 'https://uxsignal-ai.vercel.app/' }, secondary: { label: 'VER GITHUB', href: 'https://github.com/Pacosanchez45/uxsignal-ai' } },
    labels: { back: 'VOLVER AL PORTFOLIO', projects: 'TODOS LOS PROYECTOS', next: 'SIGUIENTE CASO', top: 'VOLVER ARRIBA' },
  },
  'clinica-dental-lb': {
    slug: 'clinica-dental-lb', projectId: 'clinica-dental-lb', index: '02 / 02', year: '2026',
    eyebrow: 'UX/UI / SALUD / RESPONSIVE', title: 'CLÍNICA DENTAL LB',
    subtitle: 'CONFIANZA Y CLARIDAD DESDE EL PRIMER SCROLL.',
    intro: 'Una propuesta web completa para una clínica dental que necesita explicar sus tratamientos con orden, transmitir profesionalidad y convertir visitas en solicitudes de cita.',
    heroImage: { src: '/projects/covers/dental-clinic-cover-ai.webp', width: 1536, height: 960, alt: 'Interior luminoso de una clínica dental contemporánea.', caption: 'DIRECCIÓN VISUAL / SALUD' },
    summary: [
      { label: 'ROL', value: 'UX/UI DESIGN & FRONT-END' },
      { label: 'ENFOQUE', value: 'CONFIANZA / CLARIDAD / CONVERSIÓN' },
      { label: 'STACK', value: 'HTML / CSS / JAVASCRIPT' },
      { label: 'AÑO', value: '2026' },
    ],
    sections: [
      { number: '01', eyebrow: 'DIAGNÓSTICO', title: 'UNA WEB DE SALUD DEBE REDUCIR DUDAS ANTES DE PEDIR UNA CITA.', paragraphs: ['La primera impresión necesitaba transmitir profesionalidad y tranquilidad. La solicitud de cita debía estar presente sin competir con la información.', 'También era necesario ordenar los tratamientos y mostrar antes los datos que refuerzan la confianza local.'], bullets: ['Mensaje principal directo.', 'Acciones de cita visibles.', 'Tratamientos fáciles de escanear.', 'Ubicación y contacto accesibles.'] },
      { number: '02', eyebrow: 'DIRECCIÓN', title: 'UNA EXPERIENCIA CÁLIDA, CLARA Y PROFESIONAL.', layout: 'split', paragraphs: ['La dirección visual combina una base limpia con tonos sanitarios contenidos, fotografía realista y una jerarquía que ayuda a decidir qué hacer a continuación.', 'La interfaz evita saturar al paciente y convierte la reserva, la llamada y WhatsApp en acciones reconocibles.'], media: [{ src: '/cases/dental/site-preview.png', width: 1600, height: 1000, alt: 'Vista de la web de la clínica dental Sonrisa Clara.', caption: 'HOME / RESERVA / TRATAMIENTOS' }] },
      { number: '03', eyebrow: 'DECISIONES UX/UI', title: 'CADA BLOQUE RESPONDE A UNA PREGUNTA DEL PACIENTE.', items: [{ title: '¿DÓNDE ESTOY?', text: 'La propuesta y la especialidad se entienden en el primer vistazo.' }, { title: '¿PUEDO CONFIAR?', text: 'Equipo, opiniones, ubicación y tono cercano aparecen antes de generar fricción.' }, { title: '¿QUÉ TRATAMIENTOS HAY?', text: 'Los servicios se agrupan con una estructura breve y escaneable.' }, { title: '¿CÓMO PIDO CITA?', text: 'Reserva, llamada y WhatsApp permanecen visibles en los momentos clave.' }] },
      { number: '04', eyebrow: 'IMPLEMENTACIÓN', title: 'DEL CONCEPTO A UNA WEB RESPONSIVE REAL.', paragraphs: ['La propuesta se llevó a código con componentes visuales coherentes, navegación móvil, llamadas a la acción y formularios preparados para acompañar la conversión.', 'La siguiente evolución sería conectar una agenda real, validar los contenidos con una clínica y ampliar la arquitectura SEO de tratamientos.'], bullets: ['Diseño responsive completo.', 'Estados de interacción y navegación móvil.', 'Formulario y acciones de contacto.', 'Estructura preparada para SEO local.'], media: [{ src: '/cases/dental/site-preview.png', width: 1600, height: 1000, alt: 'Web responsive de la clínica dental.', caption: 'IMPLEMENTACIÓN / FRONT-END' }], layout: 'wide' },
    ],
    final: { eyebrow: 'VER EL RESULTADO', title: 'UNA EXPERIENCIA DIGITAL PENSADA PARA GENERAR CONFIANZA Y FACILITAR LA PRIMERA CITA.', primary: { label: 'VER WEB COMPLETA', href: 'https://clinicadental.uiverse.es/' }, secondary: { label: 'VER GITHUB', href: 'https://github.com/Pacosanchez45/clinica-dental-ejemplo' } },
    labels: { back: 'VOLVER AL PORTFOLIO', projects: 'TODOS LOS PROYECTOS', next: 'SIGUIENTE CASO', top: 'VOLVER ARRIBA' },
  },
};

export const caseStudiesEn: Record<CaseStudySlug, CaseStudy> = {
  uxsignal: {
    ...caseStudiesEs.uxsignal,
    eyebrow: 'PRODUCT DESIGN / UX RESEARCH / AI',
    subtitle: 'AI-ASSISTED UX RESEARCH WITH TRACEABLE EVIDENCE AND HUMAN REVIEW.',
    intro: 'I designed and built a product that turns interviews and notes into structured findings, showing sources, contradictions and confidence before they become part of a report.',
    heroImage: { ...caseStudiesEs.uxsignal.heroImage, alt: 'Overview of findings in UXSignal.', caption: 'MAIN INTERFACE / FINDINGS' },
    summary: [{ label: 'ROLE', value: 'PRODUCT DESIGNER & FRONT-END' }, { label: 'TYPE', value: 'PERSONAL PROJECT / MVP' }, { label: 'STACK', value: 'NEXT.JS / REACT / TYPESCRIPT' }, { label: 'YEAR', value: '2026' }],
    sections: [
      { number: '01', eyebrow: 'CONTEXT', title: 'THE CHALLENGE WAS NOT SUMMARISING. IT WAS PRESERVING THE EVIDENCE.', layout: 'split', paragraphs: ['In small teams, interview review remains manual: finding patterns, selecting quotes, detecting contradictions and preparing reports.', 'The tool had to speed up synthesis without turning analysis into a black box. Every conclusion needed a visible link to its original sources.'], media: [{ ...uxMedia.dashboard, alt: 'Research projects dashboard in UXSignal.', caption: 'DASHBOARD / ACTIVE STUDIES' }] },
      { number: '02', eyebrow: 'ARCHITECTURE', title: 'A COMPLETE FLOW, FROM SOURCE TO REPORT.', paragraphs: ['The product supports the entire research process while keeping the final decision with the researcher.'], bullets: ['Create and define a study.', 'Add interviews, notes and transcripts.', 'Configure the analysis.', 'Review findings, confidence and contradictions.', 'Inspect the original evidence.', 'Build an editable report.'], media: [{ ...uxMedia.setup, alt: 'Study creation form in UXSignal.', caption: '01 / STUDY DEFINITION' }, { ...uxMedia.processing, alt: 'Simulated processing in UXSignal.', caption: '02 / ANALYSIS STATUS' }], layout: 'gallery' },
      { number: '03', eyebrow: 'DESIGN DECISIONS', title: 'DESIGNING TRUST AROUND AI.', items: [{ title: 'TRACEABLE FINDINGS', text: 'Every conclusion shows participants, evidence, contradictions, confidence and related sources.' }, { title: 'VISIBLE HUMAN REVIEW', text: 'AI proposes. The person accepts, edits, rejects or adds each result to the report.' }, { title: 'EXPLICIT CONTRADICTIONS', text: 'Evidence that limits a conclusion has its own hierarchy and never remains hidden.' }, { title: 'CLEAR CONFIDENCE', text: 'A percentage and qualitative label help assess the strength of each finding.' }], media: [{ ...uxMedia.finding, alt: 'Finding detail with evidence and human review.', caption: 'DETAIL / EVIDENCE / DECISION' }], layout: 'wide' },
      { number: '04', eyebrow: 'SYNTHESIS', title: 'FROM REVIEWED FINDINGS TO AN EDITABLE REPORT.', layout: 'split', paragraphs: ['Accepted findings become part of the report without altering the original source. The researcher controls the summary, methodology, order and recommendations.'], media: [{ ...uxMedia.report, alt: 'Editable report builder in UXSignal.', caption: 'REPORT / EDITABLE CONTENT' }] },
      { number: '05', eyebrow: 'RESPONSIVE', title: 'THE SAME HIERARCHY ON A SMALLER SCREEN.', paragraphs: ['On mobile, the interface reorganises cards, filters and navigation to preserve key actions without literally reproducing the desktop layout.'], media: [{ ...uxMedia.mobileDashboard, alt: 'UXSignal mobile dashboard.', caption: 'MOBILE DASHBOARD' }, { ...uxMedia.mobileFinding, alt: 'Mobile findings review.', caption: 'FINDINGS' }, { ...uxMedia.mobileMenu, alt: 'UXSignal mobile navigation.', caption: 'NAVIGATION' }], layout: 'phones' },
      { number: '06', eyebrow: 'SCOPE', title: 'A FUNCTIONAL AND TRANSPARENT MVP.', paragraphs: ['I designed and implemented the complete flow, its states and independent persistence for each study.', 'The current version uses simulated results to demonstrate the experience. It does not call a real AI or include a backend, authentication or real-time collaboration.'], bullets: ['Real transcript processing.', 'Secure backend and storage.', 'Authentication and workspaces.', 'Collaboration and revision history.', 'Testing with real users.'] },
    ],
    final: { eyebrow: 'EXPLORE THE PRODUCT', title: 'A COMPLETE EXPERIENCE FOR TURNING RESEARCH INTO DECISIONS.', primary: { label: 'TRY THE PRODUCT', href: 'https://uxsignal-ai.vercel.app/' }, secondary: { label: 'VIEW GITHUB', href: 'https://github.com/Pacosanchez45/uxsignal-ai' } },
    labels: { back: 'BACK TO PORTFOLIO', projects: 'ALL PROJECTS', next: 'NEXT CASE', top: 'BACK TO TOP' },
  },
  'clinica-dental-lb': {
    ...caseStudiesEs['clinica-dental-lb'],
    eyebrow: 'UX/UI / HEALTHCARE / RESPONSIVE', title: 'DENTAL CLINIC LB',
    subtitle: 'TRUST AND CLARITY FROM THE FIRST SCROLL.',
    intro: 'A complete website concept for a dental clinic that needs to explain treatments clearly, convey professionalism and turn visits into appointment requests.',
    heroImage: { ...caseStudiesEs['clinica-dental-lb'].heroImage, alt: 'Bright interior of a contemporary dental clinic.', caption: 'VISUAL DIRECTION / HEALTHCARE' },
    summary: [{ label: 'ROLE', value: 'UX/UI DESIGN & FRONT-END' }, { label: 'FOCUS', value: 'TRUST / CLARITY / CONVERSION' }, { label: 'STACK', value: 'HTML / CSS / JAVASCRIPT' }, { label: 'YEAR', value: '2026' }],
    sections: [
      { number: '01', eyebrow: 'DIAGNOSIS', title: 'A HEALTHCARE WEBSITE MUST REDUCE DOUBTS BEFORE AN APPOINTMENT.', paragraphs: ['The first impression needed to communicate professionalism and calm. Booking had to remain visible without competing with the information.', 'Treatments also needed a clearer structure, with local trust signals shown earlier.'], bullets: ['Direct main message.', 'Visible appointment actions.', 'Scannable treatments.', 'Accessible location and contact.'] },
      { number: '02', eyebrow: 'DIRECTION', title: 'A WARM, CLEAR AND PROFESSIONAL EXPERIENCE.', layout: 'split', paragraphs: ['The visual direction combines a clean foundation, restrained healthcare colours, realistic photography and a hierarchy that supports the next decision.', 'The interface avoids overwhelming patients and makes booking, calling and WhatsApp easy to recognise.'], media: [{ src: '/cases/dental/site-preview.png', width: 1600, height: 1000, alt: 'Sonrisa Clara dental clinic website.', caption: 'HOME / BOOKING / TREATMENTS' }] },
      { number: '03', eyebrow: 'UX/UI DECISIONS', title: 'EVERY BLOCK ANSWERS A PATIENT QUESTION.', items: [{ title: 'WHERE AM I?', text: 'The service and specialism are clear at first glance.' }, { title: 'CAN I TRUST THEM?', text: 'Team, reviews, location and an approachable tone appear before friction builds.' }, { title: 'WHICH TREATMENTS?', text: 'Services are grouped in a short, scannable structure.' }, { title: 'HOW DO I BOOK?', text: 'Booking, phone and WhatsApp remain visible at key moments.' }] },
      { number: '04', eyebrow: 'IMPLEMENTATION', title: 'FROM CONCEPT TO A REAL RESPONSIVE WEBSITE.', paragraphs: ['The proposal was implemented with consistent visual components, mobile navigation, calls to action and forms designed to support conversion.', 'The next evolution would connect a real booking system, validate content with a clinic and expand the treatment SEO architecture.'], bullets: ['Complete responsive design.', 'Interaction states and mobile navigation.', 'Form and contact actions.', 'Structure ready for local SEO.'], media: [{ src: '/cases/dental/site-preview.png', width: 1600, height: 1000, alt: 'Responsive dental clinic website.', caption: 'IMPLEMENTATION / FRONT-END' }], layout: 'wide' },
    ],
    final: { eyebrow: 'VIEW THE RESULT', title: 'A DIGITAL EXPERIENCE DESIGNED TO BUILD TRUST AND MAKE THE FIRST APPOINTMENT EASIER.', primary: { label: 'VIEW LIVE WEBSITE', href: 'https://clinicadental.uiverse.es/' }, secondary: { label: 'VIEW GITHUB', href: 'https://github.com/Pacosanchez45/clinica-dental-ejemplo' } },
    labels: { back: 'BACK TO PORTFOLIO', projects: 'ALL PROJECTS', next: 'NEXT CASE', top: 'BACK TO TOP' },
  },
};

export const caseStudySlugs = Object.keys(caseStudiesEs) as CaseStudySlug[];
