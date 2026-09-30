export const processSteps: readonly ProcessStage[] = [
  { number: '01', title: 'UNDERSTAND', description: 'Entender el problema, el contexto, los usuarios y los objetivos antes de diseñar cualquier solución.', note: 'CONTEXTO / USUARIOS / OBJETIVOS' },
  { number: '02', title: 'DEFINE', description: 'Ordenar la información, definir flujos, prioridades y estructura del producto o experiencia.', note: 'ESTRUCTURA / FLUJOS / PRIORIDADES' },
  { number: '03', title: 'DESIGN', description: 'Convertir la estrategia en una solución visual clara, coherente, usable y con personalidad.', note: 'DIRECCIÓN VISUAL / INTERACCIÓN / SISTEMA' },
  { number: '04', title: 'BUILD', description: 'Llevar el diseño a una implementación real, responsive y técnicamente sólida.', note: 'DESARROLLO / RESPONSIVE / CALIDAD' },
] as const;

export type ProcessStage = { number: string; title: string; description: string; note: string };
