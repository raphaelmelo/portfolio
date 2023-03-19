// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Tecnicalidades"
					preTitle="Hardskills"
					subTitle="Como um programador criativo, crio experiências digitais intuitivas utilizando um conjunto diversificado de ferramentas e linguagens."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Fundamentos"
							icon={[ 'fat', 'chart-network' ]}
							copy="Com uma base sólida em desenvolvimento web, trago uma perspectiva única para cada projeto e estou sempre aprendendo e evoluindo para me manter atualizado com as últimas tendências da indústria."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Softwares com os quais adoro trabalhar" 
							copy="Com mais de 2 anos de experiência na criação de ativos digitais, tenho um entendimento profundo de como as interfaces dos melhores produtos de software são projetadas. Abaixo estão algumas das ferramentas que utilizo."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Mais ferramentas" 
							copy="Como um criador de soluções de software apaixonado, meu objetivo é sempre encontrar a melhor maneira de resolver problemas por meio da programação e ux/ui."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'mailbox', 		name: 'Postman', 			type: 'fas' },
	{ key: 'git',			name: 'GIT', 				type: 'devicon' },
	{ key: 'chrome', 		name: 'Chrome', 			type: 'devicon' },
	{ key: 'bash', 		name: 'Terminal', 			type: 'devicon' },
	
]

const tech	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'typescript', 	name: 'Typescript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'csharp', 		name: 'Csharp', 			type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: "google",		name: "GA4/GTM", 			type: "devicon" },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'tailwindcss',		name: 'Tailwind',			type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'microsoftsqlserver', 		name: 'sql', 			type: 'devicon' },
]