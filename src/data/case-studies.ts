export type CaseStudySlug = 'uxsignal' | 'generador-botones' | 'clinica-dental-lb' | 'frame-festival' | 'urbangym-pro';

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
    slug: 'uxsignal', projectId: 'uxsignal', index: '01 / 05', year: '2026',
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
  'generador-botones': {
    slug: 'generador-botones', projectId: 'generador-botones', index: '02 / 05', year: '2026',
    eyebrow: 'HERRAMIENTA INTERACTIVA / UI / FRONT-END', title: 'GENERADOR DE BOTONES',
    subtitle: 'DISEÑAR, PROBAR Y LLEVAR UNA DECISIÓN VISUAL A CÓDIGO EN EL MISMO FLUJO.',
    intro: 'Diseñé una herramienta que permite construir botones, comparar estados y obtener HTML y CSS reutilizable sin separar la exploración visual de la implementación.',
    heroImage: { src: '/cases/button-generator/builder-interface.webp', width: 1536, height: 960, alt: 'Generador de botones presentado en un portátil con controles, vista previa y código.', caption: 'EDITOR / ESTADOS / CÓDIGO' },
    summary: [
      { label: 'ROL', value: 'UX/UI DESIGN & FRONT-END' },
      { label: 'TIPO', value: 'HERRAMIENTA INTERACTIVA' },
      { label: 'STACK', value: 'HTML / CSS / JAVASCRIPT' },
      { label: 'AÑO', value: '2026' },
    ],
    sections: [
      { number: '01', eyebrow: 'OPORTUNIDAD', title: 'REDUCIR LA DISTANCIA ENTRE PROBAR UNA IDEA Y PODER UTILIZARLA.', paragraphs: ['Ajustar un botón suele implicar saltar entre diseño, navegador y código. La herramienta reúne esas decisiones en una única superficie y hace visible el resultado de cada cambio al instante.', 'El objetivo era mantener el control suficiente para experimentar sin convertir la interfaz en un panel técnico difícil de recorrer.'], bullets: ['Vista previa en tiempo real.', 'Controles agrupados por intención.', 'Estados normal, hover, active y disabled.', 'Código listo para copiar.'] },
      { number: '02', eyebrow: 'INTERACCIÓN', title: 'CADA CONTROL EXPLICA SU EFECTO EN EL PROPIO RESULTADO.', layout: 'split', paragraphs: ['La interfaz ordena contenido, caja, color, borde, sombra y comportamiento. Los cambios se reflejan en el botón y en el código, de modo que el usuario entiende qué propiedad está modificando.', 'Los presets y la generación aleatoria permiten empezar con una base útil y después refinarla.'], media: [{ src: '/cases/button-generator/builder-interface.webp', width: 1536, height: 960, alt: 'Interfaz completa del generador con controles y previsualización del botón.', caption: 'CONTROLES / PREVIEW / EXPORTACIÓN' }] },
      { number: '03', eyebrow: 'DECISIONES UX/UI', title: 'UNA HERRAMIENTA TÉCNICA QUE SIGUE SIENDO FÁCIL DE LEER.', items: [{ title: 'PROGRESIÓN CLARA', text: 'Los controles siguen el orden natural de una decisión visual: contenido, forma, color y comportamiento.' }, { title: 'ESTADOS VISIBLES', text: 'El usuario puede comprobar hover, active y disabled antes de copiar el resultado.' }, { title: 'CÓDIGO SIN RUIDO', text: 'HTML y CSS aparecen separados, listos para reutilizar y sin ocultar qué se está generando.' }, { title: 'PERSISTENCIA LOCAL', text: 'La configuración se conserva en el navegador para continuar una exploración más tarde.' }] },
      { number: '04', eyebrow: 'RESULTADO', title: 'DE UNA CONFIGURACIÓN ABSTRACTA A UN COMPONENTE QUE YA SE PUEDE USAR.', paragraphs: ['La herramienta transforma parámetros técnicos en una experiencia directa: mover, comparar y copiar. El resultado demuestra cómo el diseño de interacción puede hacer más accesible una tarea de Front-End.', 'La implementación funciona sin dependencias de interfaz y mantiene navegación por teclado, estados reconocibles y adaptación a pantallas pequeñas.'], bullets: ['Presets editables.', 'Variaciones aleatorias controladas.', 'Copia independiente de HTML y CSS.', 'Responsive y persistencia local.'] },
    ],
    final: { eyebrow: 'PRUEBA LA HERRAMIENTA', title: 'UN FLUJO DIRECTO PARA CONVERTIR DECISIONES VISUALES EN CÓDIGO.', primary: { label: 'ABRIR GENERADOR', href: 'https://buttons.uiverse.es/' }, secondary: { label: 'VER GITHUB', href: 'https://github.com/Pacosanchez45/uiverse-botones' } },
    labels: { back: 'VOLVER AL PORTFOLIO', projects: 'TODOS LOS PROYECTOS', next: 'SIGUIENTE CASO', top: 'VOLVER ARRIBA' },
  },
  'clinica-dental-lb': {
    slug: 'clinica-dental-lb', projectId: 'clinica-dental-lb', index: '03 / 05', year: '2026',
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
  'frame-festival': {
    slug: 'frame-festival', projectId: 'frame-festival', index: '04 / 05', year: '2026',
    eyebrow: 'PRODUCT DESIGN / CULTURA / MULTIPÁGINA', title: 'FRAME FESTIVAL',
    subtitle: 'UNA EXPERIENCIA CINEMATOGRÁFICA QUE CONECTA DESCUBRIMIENTO, PROGRAMACIÓN Y ENTRADAS.',
    intro: 'Diseñé y desarrollé una experiencia multipágina para un festival de suspense, desde la exploración de películas hasta una simulación completa de selección y pago de entradas.',
    heroImage: { src: '/projects/covers/frame-festival-cover-ai.webp', width: 1536, height: 960, alt: 'Dirección visual de FRAME Festival con cartelera, interfaz y entradas.', caption: 'IDENTIDAD / CARTELERA / ENTRADAS' },
    summary: [
      { label: 'ROL', value: 'PRODUCT DESIGN & FRONT-END' },
      { label: 'TIPO', value: 'EXPERIENCIA MULTIPÁGINA' },
      { label: 'STACK', value: 'HTML / CSS / JAVASCRIPT' },
      { label: 'AÑO', value: '2026' },
    ],
    sections: [
      { number: '01', eyebrow: 'CONCEPTO', title: 'EL FESTIVAL NECESITABA SENTIRSE COMO UNA EXPERIENCIA, NO COMO UNA CARTELERA.', paragraphs: ['FRAME parte de una identidad oscura y cultural para convertir la programación en una narrativa. La interfaz debía despertar curiosidad sin sacrificar fechas, sesiones o acciones de compra.', 'La tensión visual del suspense se construye mediante contraste, ritmo tipográfico y fotografía cinematográfica, manteniendo una navegación directa.'], bullets: ['Identidad reconocible desde la primera pantalla.', 'Programación fácil de explorar.', 'Jerarquía clara entre película, sesión y compra.', 'Continuidad visual entre todas las páginas.'] },
      { number: '02', eyebrow: 'DESCUBRIMIENTO', title: 'UNA PROGRAMACIÓN QUE INVITA A ENTRAR EN CADA HISTORIA.', layout: 'split', paragraphs: ['La selección combina referentes del suspense con una presentación editorial. Cada película funciona como una puerta de entrada a sinopsis, ficha y sesiones disponibles.', 'La composición evita una retícula comercial uniforme y alterna escala, imagen y ritmo para conservar el carácter de festival.'], media: [{ src: '/cases/frame/festival-programming.webp', width: 1920, height: 1080, alt: 'Fotograma utilizado en la programación de FRAME Festival.', caption: 'PROGRAMACIÓN / SUSPENSE / DIRECCIÓN VISUAL' }] },
      { number: '03', eyebrow: 'RECORRIDO', title: 'DEL INTERÉS POR UNA PELÍCULA A LA ENTRADA, SIN ROMPER LA ATMÓSFERA.', items: [{ title: 'INICIO', text: 'Presenta identidad, fechas y una selección destacada para comenzar la exploración.' }, { title: 'PELÍCULAS', text: 'Agrupa la programación y permite comparar títulos sin perder contexto.' }, { title: 'DETALLE', text: 'Amplía sinopsis, datos y sesiones antes de iniciar la compra.' }, { title: 'CHECKOUT SIMULADO', text: 'Completa selección, datos de pago y estados de confirmación o error.' }] },
      { number: '04', eyebrow: 'PRODUCTO', title: 'UN PROTOTIPO MULTIPÁGINA QUE DEMUESTRA EL FLUJO COMPLETO.', layout: 'wide', paragraphs: ['El proyecto no se limita a una landing: conecta páginas, mantiene el lenguaje visual y simula los estados necesarios para comprender el recorrido del usuario.', 'La implementación responsive adapta la navegación, la cartelera y las acciones de compra para conservar claridad en móvil.'], media: [{ src: '/cases/frame/film-detail.webp', width: 1366, height: 768, alt: 'Fotograma de Origen dentro del universo visual de FRAME Festival.', caption: 'DETALLE / CONTEXTO / SESIONES' }], bullets: ['Siete páginas conectadas.', 'Búsqueda e interacción con JavaScript.', 'Flujo de compra simulado.', 'Estados de confirmación y error.'] },
    ],
    final: { eyebrow: 'ENTRA EN FRAME', title: 'UNA EXPERIENCIA CULTURAL QUE CONVIERTE LA PROGRAMACIÓN EN RECORRIDO.', primary: { label: 'VER FESTIVAL', href: 'https://frame.uiverse.es/' }, secondary: { label: 'VER GITHUB', href: 'https://github.com/Pacosanchez45/frame' } },
    labels: { back: 'VOLVER AL PORTFOLIO', projects: 'TODOS LOS PROYECTOS', next: 'SIGUIENTE CASO', top: 'VOLVER ARRIBA' },
  },
  'urbangym-pro': {
    slug: 'urbangym-pro', projectId: 'urbangym-pro', index: '05 / 05', year: '2026',
    eyebrow: 'DIRECCIÓN VISUAL / INTERACCIÓN / FRONT-END', title: 'URBANGYM PRO',
    subtitle: 'UNA EXPERIENCIA FITNESS CON MÁS CARÁCTER, CONTEXTO Y CONTROL PARA EL USUARIO.',
    intro: 'Rediseñé la web completa de UrbanGym para convertir una landing básica en una experiencia editorial, bilingüe e interactiva que comunica método, comunidad y rendimiento.',
    heroImage: { src: '/cases/urbangym/site-home.webp', width: 1600, height: 1000, alt: 'Hero de la nueva web de UrbanGym con fotografía de entrenamiento y gran tipografía editorial.', caption: 'HOME / DIRECCIÓN VISUAL / CONVERSIÓN' },
    summary: [
      { label: 'ROL', value: 'UX/UI DESIGN & FRONT-END' },
      { label: 'ENFOQUE', value: 'MARCA / INTERACCIÓN / CONVERSIÓN' },
      { label: 'STACK', value: 'HTML / CSS / JAVASCRIPT' },
      { label: 'AÑO', value: '2026' },
    ],
    sections: [
      { number: '01', eyebrow: 'DIAGNÓSTICO', title: 'EL PRODUCTO NECESITABA DEJAR DE PARECER UNA PLANTILLA FITNESS.', paragraphs: ['La versión anterior agrupaba información correcta, pero la presentaba mediante bloques y tarjetas muy previsibles. Faltaban una narrativa de marca, contraste entre secciones y motivos para explorar.', 'El rediseño parte de una promesa más concreta: entrenamiento con intención, seguimiento y progresión medible.'], bullets: ['Jerarquía editorial más reconocible.', 'Fotografía con una dirección consistente.', 'Menos tarjetas y más composición.', 'Acciones claras sin repetir el mismo patrón.'] },
      { number: '02', eyebrow: 'DIRECCIÓN VISUAL', title: 'FUERZA VISUAL SIN CONVERTIR LA EXPERIENCIA EN UN CLICHÉ.', layout: 'split', paragraphs: ['La identidad combina negro, blanco cálido y un verde ácido muy contenido. La tipografía condensada aporta energía, mientras la retícula y las líneas técnicas ordenan la información.', 'La fotografía se usa como contexto y atmósfera. Evité brillos, fondos futuristas y recursos que hicieran parecer la web un concepto generado sin criterio.'], media: [{ src: '/cases/urbangym/training-class.webp', width: 1536, height: 1024, alt: 'Clase funcional en un gimnasio urbano contemporáneo.', caption: 'FOTOGRAFÍA / ENERGÍA / COMUNIDAD' }] },
      { number: '03', eyebrow: 'ARQUITECTURA', title: 'UNA PÁGINA QUE SE PUEDE EXPLORAR, NO SOLO RECORRER.', items: [{ title: 'PROGRAMAS INTERACTIVOS', text: 'Cuatro pestañas actualizan imagen, objetivos, duración y nivel sin abandonar el contexto.' }, { title: 'AGENDA POR DÍAS', text: 'El usuario consulta horarios, plazas y coach desde una navegación compacta y accesible.' }, { title: 'MEMBRESÍAS COMPARABLES', text: 'El selector mensual o anual actualiza precios y mantiene visibles las diferencias clave.' }, { title: 'RESERVA CONTEXTUAL', text: 'Las acciones abren un diálogo de primera sesión desde los momentos de mayor intención.' }] },
      { number: '04', eyebrow: 'EXPERIENCIA', title: 'EL RITMO VISUAL ACOMPAÑA EL RITMO DEL ENTRENAMIENTO.', paragraphs: ['Los reveals, cambios de pestaña, microinteracciones y el ligero movimiento del hero añaden respuesta sin ralentizar la navegación.', 'El movimiento se reduce automáticamente cuando el sistema lo solicita y desaparece donde podría perjudicar la estabilidad en móvil.'], media: [{ src: '/cases/urbangym/recovery-space.webp', width: 1536, height: 1024, alt: 'Zona de recuperación y movilidad del club UrbanGym.', caption: 'RECUPERACIÓN / CONTRASTE / RESPIRACIÓN' }], layout: 'wide' },
      { number: '05', eyebrow: 'RESULTADO', title: 'UNA MARCA MÁS CREÍBLE Y UNA WEB CON MÁS RAZONES PARA INTERACTUAR.', paragraphs: ['La nueva experiencia equilibra impacto, información y utilidad: presenta el método, permite explorar programas y horarios, muestra al equipo y conduce hacia una sesión de prueba.', 'La implementación mantiene dos idiomas, navegación por teclado, estados accesibles, responsive completo y un enlace claro de regreso al portfolio.'], bullets: ['ES / EN en tiempo real.', 'Menú y layout responsive.', 'Pestañas accesibles y agenda dinámica.', 'Preferencias de movimiento respetadas.', 'Assets optimizados para web.'] },
    ],
    final: { eyebrow: 'VER EL RESULTADO', title: 'UNA EXPERIENCIA FITNESS MÁS HUMANA, DIRECTA Y MEMORABLE.', primary: { label: 'VER WEB COMPLETA', href: 'https://urbangym.uiverse.es/' }, secondary: { label: 'VER GITHUB', href: 'https://github.com/Pacosanchez45/UrbanGym' } },
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
  'generador-botones': {
    ...caseStudiesEs['generador-botones'],
    title: 'BUTTON GENERATOR',
    eyebrow: 'INTERACTIVE TOOL / UI / FRONT-END',
    subtitle: 'DESIGN, TEST AND TURN A VISUAL DECISION INTO CODE IN THE SAME FLOW.',
    intro: 'I designed a tool for building buttons, comparing states and producing reusable HTML and CSS without separating visual exploration from implementation.',
    heroImage: { ...caseStudiesEs['generador-botones'].heroImage, alt: 'Button generator shown on a laptop with controls, preview and code.', caption: 'EDITOR / STATES / CODE' },
    summary: [{ label: 'ROLE', value: 'UX/UI DESIGN & FRONT-END' }, { label: 'TYPE', value: 'INTERACTIVE TOOL' }, { label: 'STACK', value: 'HTML / CSS / JAVASCRIPT' }, { label: 'YEAR', value: '2026' }],
    sections: [
      { number: '01', eyebrow: 'OPPORTUNITY', title: 'REDUCING THE DISTANCE BETWEEN TESTING AN IDEA AND USING IT.', paragraphs: ['Adjusting a button often means moving between design, browser and code. The tool brings those decisions into one surface and makes the result of every change immediately visible.', 'The goal was to offer enough control for exploration without turning the interface into a difficult technical panel.'], bullets: ['Real-time preview.', 'Controls grouped by intent.', 'Normal, hover, active and disabled states.', 'Code ready to copy.'] },
      { number: '02', eyebrow: 'INTERACTION', title: 'EVERY CONTROL EXPLAINS ITS EFFECT THROUGH THE RESULT.', layout: 'split', paragraphs: ['The interface organises content, box, colour, border, shadow and behaviour. Changes appear in both the button and the code, making each property easier to understand.', 'Presets and controlled random generation provide a useful starting point before refinement.'], media: [{ src: '/cases/button-generator/builder-interface.webp', width: 1536, height: 960, alt: 'Complete generator interface with controls and button preview.', caption: 'CONTROLS / PREVIEW / EXPORT' }] },
      { number: '03', eyebrow: 'UX/UI DECISIONS', title: 'A TECHNICAL TOOL THAT REMAINS EASY TO READ.', items: [{ title: 'CLEAR PROGRESSION', text: 'Controls follow the natural order of a visual decision: content, shape, colour and behaviour.' }, { title: 'VISIBLE STATES', text: 'Users can inspect hover, active and disabled before copying the result.' }, { title: 'CODE WITHOUT NOISE', text: 'HTML and CSS remain separate, reusable and transparent.' }, { title: 'LOCAL PERSISTENCE', text: 'The configuration stays in the browser so an exploration can continue later.' }] },
      { number: '04', eyebrow: 'OUTCOME', title: 'FROM ABSTRACT SETTINGS TO A COMPONENT READY TO USE.', paragraphs: ['The tool turns technical parameters into a direct experience: move, compare and copy. It shows how interaction design can make a Front-End task more accessible.', 'The implementation works without UI dependencies and retains keyboard navigation, recognisable states and small-screen adaptation.'], bullets: ['Editable presets.', 'Controlled random variations.', 'Independent HTML and CSS copying.', 'Responsive layout and local persistence.'] },
    ],
    final: { eyebrow: 'TRY THE TOOL', title: 'A DIRECT FLOW FOR TURNING VISUAL DECISIONS INTO CODE.', primary: { label: 'OPEN GENERATOR', href: 'https://buttons.uiverse.es/' }, secondary: { label: 'VIEW GITHUB', href: 'https://github.com/Pacosanchez45/uiverse-botones' } },
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
  'frame-festival': {
    ...caseStudiesEs['frame-festival'],
    eyebrow: 'PRODUCT DESIGN / CULTURE / MULTI-PAGE',
    subtitle: 'A CINEMATIC EXPERIENCE CONNECTING DISCOVERY, PROGRAMMING AND TICKETS.',
    intro: 'I designed and built a multi-page experience for a suspense film festival, covering the journey from discovering films to a complete simulated ticket selection and payment flow.',
    heroImage: { ...caseStudiesEs['frame-festival'].heroImage, alt: 'FRAME Festival visual direction with programme, interface and tickets.', caption: 'IDENTITY / PROGRAMME / TICKETS' },
    summary: [{ label: 'ROLE', value: 'PRODUCT DESIGN & FRONT-END' }, { label: 'TYPE', value: 'MULTI-PAGE EXPERIENCE' }, { label: 'STACK', value: 'HTML / CSS / JAVASCRIPT' }, { label: 'YEAR', value: '2026' }],
    sections: [
      { number: '01', eyebrow: 'CONCEPT', title: 'THE FESTIVAL NEEDED TO FEEL LIKE AN EXPERIENCE, NOT A LISTING.', paragraphs: ['FRAME uses a dark cultural identity to turn programming into a narrative. The interface had to build curiosity without sacrificing dates, sessions or purchase actions.', 'The visual tension of suspense comes through contrast, typographic rhythm and cinematic photography while navigation remains direct.'], bullets: ['A recognisable identity from the first screen.', 'Programming that is easy to explore.', 'Clear hierarchy between film, session and purchase.', 'Visual continuity across every page.'] },
      { number: '02', eyebrow: 'DISCOVERY', title: 'A PROGRAMME THAT INVITES PEOPLE INTO EACH STORY.', layout: 'split', paragraphs: ['The selection combines suspense references with an editorial presentation. Each film becomes an entry point to its synopsis, details and available sessions.', 'The composition avoids a uniform commercial grid and alternates scale, image and rhythm to preserve the feeling of a festival.'], media: [{ src: '/cases/frame/festival-programming.webp', width: 1920, height: 1080, alt: 'Film still used in the FRAME Festival programme.', caption: 'PROGRAMME / SUSPENSE / VISUAL DIRECTION' }] },
      { number: '03', eyebrow: 'JOURNEY', title: 'FROM INTEREST IN A FILM TO A TICKET WITHOUT BREAKING THE ATMOSPHERE.', items: [{ title: 'HOME', text: 'Introduces identity, dates and a featured selection to begin exploring.' }, { title: 'FILMS', text: 'Groups the programme and supports comparison without losing context.' }, { title: 'DETAIL', text: 'Expands synopsis, information and sessions before purchase.' }, { title: 'SIMULATED CHECKOUT', text: 'Completes selection, payment details and confirmation or error states.' }] },
      { number: '04', eyebrow: 'PRODUCT', title: 'A MULTI-PAGE PROTOTYPE THAT DEMONSTRATES THE COMPLETE FLOW.', layout: 'wide', paragraphs: ['The project goes beyond a landing page: it connects pages, maintains its visual language and simulates the states needed to understand the user journey.', 'The responsive implementation adapts navigation, programming and purchase actions to keep the experience clear on mobile.'], media: [{ src: '/cases/frame/film-detail.webp', width: 1366, height: 768, alt: 'Inception still within the FRAME Festival visual world.', caption: 'DETAIL / CONTEXT / SESSIONS' }], bullets: ['Seven connected pages.', 'Search and JavaScript interactions.', 'Simulated purchase flow.', 'Confirmation and error states.'] },
    ],
    final: { eyebrow: 'ENTER FRAME', title: 'A CULTURAL EXPERIENCE THAT TURNS PROGRAMMING INTO A JOURNEY.', primary: { label: 'VIEW FESTIVAL', href: 'https://frame.uiverse.es/' }, secondary: { label: 'VIEW GITHUB', href: 'https://github.com/Pacosanchez45/frame' } },
    labels: { back: 'BACK TO PORTFOLIO', projects: 'ALL PROJECTS', next: 'NEXT CASE', top: 'BACK TO TOP' },
  },
  'urbangym-pro': {
    ...caseStudiesEs['urbangym-pro'],
    eyebrow: 'VISUAL DIRECTION / INTERACTION / FRONT-END',
    subtitle: 'A FITNESS EXPERIENCE WITH MORE CHARACTER, CONTEXT AND USER CONTROL.',
    intro: 'I redesigned the complete UrbanGym website, turning a basic landing page into an editorial, bilingual and interactive experience that communicates method, community and performance.',
    heroImage: { ...caseStudiesEs['urbangym-pro'].heroImage, alt: 'New UrbanGym hero with training photography and large editorial typography.', caption: 'HOME / VISUAL DIRECTION / CONVERSION' },
    summary: [{ label: 'ROLE', value: 'UX/UI DESIGN & FRONT-END' }, { label: 'FOCUS', value: 'BRAND / INTERACTION / CONVERSION' }, { label: 'STACK', value: 'HTML / CSS / JAVASCRIPT' }, { label: 'YEAR', value: '2026' }],
    sections: [
      { number: '01', eyebrow: 'DIAGNOSIS', title: 'THE PRODUCT NEEDED TO STOP FEELING LIKE A FITNESS TEMPLATE.', paragraphs: ['The previous version contained the right information but presented it through predictable blocks and cards. It lacked a brand narrative, contrast between sections and reasons to explore.', 'The redesign starts from a clearer promise: purposeful training, coaching and measurable progression.'], bullets: ['A more recognisable editorial hierarchy.', 'Photography with consistent direction.', 'Fewer cards and stronger composition.', 'Clear actions without repeating one pattern.'] },
      { number: '02', eyebrow: 'VISUAL DIRECTION', title: 'VISUAL STRENGTH WITHOUT TURNING THE EXPERIENCE INTO A CLICHÉ.', layout: 'split', paragraphs: ['The identity combines black, warm white and a restrained acid green. Condensed typography adds energy while the grid and technical rules organise information.', 'Photography creates context and atmosphere. I avoided glow, futuristic backgrounds and devices that would make the site feel like an unconsidered generated concept.'], media: [{ src: '/cases/urbangym/training-class.webp', width: 1536, height: 1024, alt: 'Functional class in a contemporary urban gym.', caption: 'PHOTOGRAPHY / ENERGY / COMMUNITY' }] },
      { number: '03', eyebrow: 'ARCHITECTURE', title: 'A PAGE TO EXPLORE, NOT SIMPLY SCROLL THROUGH.', items: [{ title: 'INTERACTIVE PROGRAMS', text: 'Four tabs update the image, goals, duration and level without removing the user from context.' }, { title: 'DAILY SCHEDULE', text: 'Users can inspect time, availability and coach through compact, accessible navigation.' }, { title: 'COMPARABLE MEMBERSHIPS', text: 'The monthly or annual switch updates prices while keeping the main differences visible.' }, { title: 'CONTEXTUAL BOOKING', text: 'Actions open the first-session dialog at moments of strongest intent.' }] },
      { number: '04', eyebrow: 'EXPERIENCE', title: 'THE VISUAL RHYTHM SUPPORTS THE TRAINING RHYTHM.', paragraphs: ['Reveals, tab changes, microinteractions and subtle hero movement add response without slowing navigation.', 'Motion is automatically reduced when requested by the system and removed where it could affect mobile stability.'], media: [{ src: '/cases/urbangym/recovery-space.webp', width: 1536, height: 1024, alt: 'UrbanGym recovery and mobility area.', caption: 'RECOVERY / CONTRAST / SPACE' }], layout: 'wide' },
      { number: '05', eyebrow: 'OUTCOME', title: 'A MORE CREDIBLE BRAND AND MORE REASONS TO INTERACT.', paragraphs: ['The new experience balances impact, information and utility: it presents the method, lets people explore programs and schedules, introduces the team and leads toward a trial session.', 'The implementation keeps both languages, keyboard navigation, accessible states, complete responsive behaviour and a clear route back to the portfolio.'], bullets: ['Real-time ES / EN.', 'Responsive menu and layout.', 'Accessible tabs and dynamic schedule.', 'Reduced-motion preferences respected.', 'Web-optimised assets.'] },
    ],
    final: { eyebrow: 'VIEW THE RESULT', title: 'A MORE HUMAN, DIRECT AND MEMORABLE FITNESS EXPERIENCE.', primary: { label: 'VIEW LIVE WEBSITE', href: 'https://urbangym.uiverse.es/' }, secondary: { label: 'VIEW GITHUB', href: 'https://github.com/Pacosanchez45/UrbanGym' } },
    labels: { back: 'BACK TO PORTFOLIO', projects: 'ALL PROJECTS', next: 'NEXT CASE', top: 'BACK TO TOP' },
  },
};

export const caseStudySlugs = Object.keys(caseStudiesEs) as CaseStudySlug[];
