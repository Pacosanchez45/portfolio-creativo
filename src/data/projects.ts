export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  technologies: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  imageFit?: 'cover' | 'contain';
  layout: 'featured' | 'right' | 'left';
  visualTreatment: 'analysis' | 'tool' | 'clinic' | 'cinema' | 'fitness';
  visualCaption: string;
  caseUrl: string | null;
  projectUrl: string | null;
  githubUrl: string | null;
  concept: string;
}

/** Fuente única: Home consume los tres primeros y /proyectos los cinco. Los assets `-cover-ai` son portadas reemplazables. */
export const projects: readonly Project[] = [
  {
    id: 'uxsignal', number: '01', name: 'UXSIGNAL',
    category: 'Diseño de producto / Investigación UX / IA', technologies: 'Next.js / TypeScript', year: '2026', layout: 'featured',
    description: 'Plataforma de investigación UX asistida por IA para convertir entrevistas y notas en hallazgos trazables, evidencias originales e informes revisados por una persona.',
    image: '/projects/covers/uxsignal-cover-ai.webp', imageAlt: 'Herramienta de investigación UX con entrevistas, hallazgos y evidencias en una interfaz oscura.', imageWidth: 1536, imageHeight: 960,
    visualTreatment: 'analysis', visualCaption: 'INVESTIGACIÓN / EVIDENCIA / DECISIÓN',
    caseUrl: '/casos/uxsignal', projectUrl: 'https://uxsignal-ai.vercel.app/', githubUrl: 'https://github.com/Pacosanchez45/uxsignal-ai',
    concept: 'Producto de investigación UX que conecta hallazgos, evidencias y decisiones en un flujo revisado por una persona.',
  },
  {
    id: 'generador-botones', number: '02', name: 'GENERADOR DE BOTONES',
    category: 'Herramienta interactiva / JavaScript', technologies: 'HTML / CSS / JavaScript', year: '2026', layout: 'left',
    description: 'Aplicación para diseñar botones, probar variantes en tiempo real y copiar HTML y CSS listo para usar.',
    image: '/projects/covers/button-generator-cover-ai.webp', imageAlt: 'Generador de botones en un portátil con controles, estados y panel de código.', imageWidth: 1536, imageHeight: 960,
    visualTreatment: 'tool', visualCaption: 'INTERACCIÓN / ESTADOS / CÓDIGO',
    caseUrl: '/casos/generador-botones', projectUrl: 'https://buttons.uiverse.es/', githubUrl: 'https://github.com/Pacosanchez45/uiverse-botones',
    concept: 'Herramienta interactiva para unir decisión visual y lógica Front-End mediante una edición inmediata y código reutilizable.',
  },
  {
    id: 'clinica-dental-lb', number: '03', name: 'CLÍNICA DENTAL LB',
    category: 'UX/UI / Salud / Responsive', technologies: 'HTML / CSS / JavaScript', year: '2026', layout: 'right',
    description: 'Concepto completo de una clínica dental centrado en confianza, claridad y solicitud de cita desde móvil.',
    image: '/projects/covers/dental-clinic-cover-ai.webp', imageAlt: 'Interior cálido y luminoso de una clínica dental contemporánea.', imageWidth: 1536, imageHeight: 960,
    visualTreatment: 'clinic', visualCaption: 'CONFIANZA / CLARIDAD / SALUD',
    caseUrl: '/casos/clinica-dental-lb', projectUrl: 'https://clinicadental.uiverse.es/', githubUrl: 'https://github.com/Pacosanchez45/clinica-dental-ejemplo',
    concept: 'Rediseño UX/UI para presentar tratamientos con claridad, generar confianza y reducir la fricción al solicitar una cita.',
  },
  {
    id: 'frame-festival', number: '04', name: 'FRAME FESTIVAL',
    category: 'Diseño de producto / JavaScript / Multipágina', technologies: 'HTML / CSS / JavaScript', year: '2026', layout: 'left',
    description: 'Experiencia multipágina para un festival de cine de suspense, desde el descubrimiento de películas hasta la selección de entradas y la simulación del pago.',
    image: '/projects/covers/frame-festival-cover-ai.webp', imageAlt: 'Dirección visual de un festival de suspense con interfaz, carteles y entradas.', imageWidth: 1536, imageHeight: 960,
    visualTreatment: 'cinema', visualCaption: 'CINE / CULTURA / EXPERIENCIA',
    caseUrl: '/casos/frame-festival', projectUrl: 'https://frame.uiverse.es/', githubUrl: 'https://github.com/Pacosanchez45/frame',
    concept: 'Experiencia de producto que conecta programación, detalle de película, selección de entradas y pago simulado.',
  },
  {
    id: 'urbangym-pro', number: '05', name: 'URBANGYM PRO',
    category: 'Landing / UI/UX / Responsive', technologies: 'HTML / CSS / JavaScript', year: '2026', layout: 'right',
    description: 'Landing bilingüe para una propuesta fitness premium con identidad contundente y fuerte llamada a la acción.',
    image: '/projects/covers/urbangym-cover-ai.webp', imageAlt: 'Landing fitness premium presentada en pantallas dentro de un gimnasio urbano.', imageWidth: 1536, imageHeight: 960,
    visualTreatment: 'fitness', visualCaption: 'MARCA / ENERGÍA / CONVERSIÓN',
    caseUrl: '/casos/urbangym-pro', projectUrl: 'https://urbangym.uiverse.es/', githubUrl: 'https://github.com/Pacosanchez45/UrbanGym',
    concept: 'Landing responsive bilingüe orientada a conversión, con una identidad directa y una jerarquía visual clara.',
  },
];
