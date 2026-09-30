export const capabilities: readonly Capability[] = [
  { number: '01', name: 'UX/UI DESIGN', description: 'Diseño interfaces claras, intuitivas y coherentes, con especial atención a la jerarquía visual, la usabilidad y la experiencia de usuario.' },
  { number: '02', name: 'PRODUCT DESIGN', description: 'Trabajo el producto desde la lógica, la estructura y los flujos hasta su expresión visual final.' },
  { number: '03', name: 'WEB DESIGN', description: 'Diseño sitios web con una fuerte dirección visual, enfoque responsive y una experiencia cuidada en todos los dispositivos.' },
  { number: '04', name: 'FRONT-END', description: 'Transformo el diseño en interfaces reales, funcionales y mantenibles utilizando tecnologías web actuales.' },
] as const;

export type Capability = { number: string; name: string; description: string };
