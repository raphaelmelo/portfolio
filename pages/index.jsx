import Hero from "../components/sections/index/hero";
import Looking from "../components/sections/index/looking";
import About from "../components/sections/index/about";
import Technical from "../components/sections/index/technical";
import Career from "../components/sections/index/career";
import FeaturedProjects from "../components/sections/projects/featured";

import Color from "../components/utils/page.colors.util";

import colors from "../content/index/_colors.json";
import Head from "next/head";

//
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Raphael Melo - Desenvolvedor Fullstack</title>
        <meta
          name="description"
          content="Profissional digital - Desenvolvedor em constante evolução e Apaixonado por UI | Com um conjunto diversificado de habilidades que incluem desenvolvimento Frontend e Backend, Design de UI e SEO, sou um profissional digital conectado e atualizado."
        />
        <meta
          property="og:title"
          content="Raphael Melo - Desenvolvedor Fullstack"
        />
        <meta
          property="og:description"
          content="Profissional digital - Desenvolvedor em constante evolução e Apaixonado por UI | Com um conjunto diversificado de habilidades que incluem desenvolvimento Frontend e Backend, Design de UI e SEO, sou um profissional digital conectado e atualizado."
        />
        <meta property="og:image" content="/img/raphael-melo.png" />
      </Head>
      <Color colors={colors} />
      <Hero />
      <Looking />
      <FeaturedProjects />
      <About />
      <Technical />
      {/* <Career /> */}
    </>
  );
}
