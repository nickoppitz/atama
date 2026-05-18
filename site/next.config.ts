import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Trailing slash normalização
      { source: "/contato/", destination: "/contato", permanent: true },
      { source: "/projetos/", destination: "/projetos", permanent: true },
      { source: "/sobre/", destination: "/sobre", permanent: true },
      { source: "/lab/", destination: "/lab", permanent: true },

      // Notícias WordPress → home
      { source: "/noticias/:slug*", destination: "/", permanent: true },

      // Attachments WordPress → listagem de projetos
      {
        source: "/projetos/:slug/attachment/:attachment*",
        destination: "/projetos",
        permanent: true,
      },

      // Projetos individuais WordPress → listagem (V1 — sem páginas individuais)
      { source: "/projetos/:slug/", destination: "/projetos", permanent: true },
      { source: "/projetos/:slug", destination: "/projetos", permanent: true },
    ];
  },
};

export default nextConfig;
