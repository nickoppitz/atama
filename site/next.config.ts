import type { NextConfig } from "next";

const BASE_PATH = "/atama";

const nextConfig: NextConfig = {
  basePath: BASE_PATH,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      // Trailing slash normalização
      { source: "/contato/", destination: "/contato", permanent: true },
      { source: "/projetos/", destination: "/projetos", permanent: true },
      { source: "/sobre/", destination: "/sobre", permanent: true },
      { source: "/lab/", destination: "/lab", permanent: true },

      // Notícias WordPress → home
      { source: "/noticias/:slug*", destination: "/", permanent: true },

      // WordPress /quem-somos/ → /sobre
      { source: "/quem-somos/", destination: "/sobre", permanent: true },
      { source: "/quem-somos", destination: "/sobre", permanent: true },

      // Projetos/obras WordPress → home (seção será renomeada em V2)
      // Cobre: URLs do portfólio, attachments e backlinks externos (Wikipedia, IMDB etc.)
      {
        source: "/projetos/:slug*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
