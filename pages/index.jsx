import Hero 		from '../components/sections/index/hero'
import Looking 		from '../components/sections/index/looking'
import About 		from '../components/sections/index/about'
import Technical 	from '../components/sections/index/technical'
import Career 		from '../components/sections/index/career'
import FeaturedProjects	from '../components/sections/projects/featured'

import Color 		from '../components/utils/page.colors.util'

import colors 		from '../content/index/_colors.json'
import Head from 'next/head'

//
export default function HomePage() {

	return (
		<>
			<Head>
			<title>Raphael Melo - Desenvolvedor Fullstack</title>
         <meta name="description" content="Profissional digital - dev em constante evolução e apaixonado por UI | Com um conjunto diversificado de habilidades que incluem desenvolvimento full stack, design de UI, SEO e marketing digital, sou um profissional digital conectado e atualizado." />
        <meta property="og:title" content="Profissional digital - dev em constante evolução e apaixonado por UI | Com um conjunto diversificado de habilidades que incluem desenvolvimento full stack, design de UI, SEO e marketing digital, sou um profissional digital conectado e atualizado." />
        <meta
          property="og:description"
          content="Como um programador criativo, crio experiências digitais intuitivas utilizando um conjunto diversificado de ferramentas e linguagens."
        />
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