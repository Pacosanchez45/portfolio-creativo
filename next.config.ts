import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/casos/uxsignal.html', destination: '/casos/uxsignal', permanent: true },
      { source: '/en/casos/uxsignal.html', destination: '/casos/uxsignal', permanent: true },
      { source: '/casos/clinica-dental-lb.html', destination: '/casos/clinica-dental-lb', permanent: true },
      { source: '/proyectos.html', destination: '/proyectos', permanent: true },
      { source: '/contacto.html', destination: '/contacto', permanent: true },
    ];
  },
};

export default nextConfig;
