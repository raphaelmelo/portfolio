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
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Sobre mim"
					preTitle="Sinopse"
					subTitle="Com um conjunto diversificado de habilidades que incluem desenvolvimento full stack, design de UI, SEO e marketing digital, sou um profissional digital conectado e atualizado."
					url="#sobre"
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/raphael-melo.png" alt="Raphael Melo photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Além da minha expertise técnica, também possuo habilidades comportamentais, destacando-se proatividade, empatia, gerenciamento de tempo e comunicação. Fora do trabalho, gosto de jogar videogames e assistir a vídeos de viagens"
						/>
						<BadgesBlock 
							title="Planejamento" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="Desde a prototipagem até a codificação responsiva e semântica, passando pela documentação, sempre mantenho o foco na experiência do usuário e entregas dentro do prazo. Meu objetivo é criar soluções que atendam às necessidades do cliente e dos usuários finais, fornecendo a melhor experiência possível."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'cubes', 			name: 'Pesquisa', 		type: 'far' },
	{ key: 'planet-moon', 		name: 'Arquitetura', 		type: 'fad' },
	{ key: 'layer-plus', 		name: 'Prototipação', 			type: 'fad' },
	{ key: 'qrcode', 			name: 'Boas práticas', 		type: 'fad' },
	{ key: 'window', 			name: 'Regras de negócio', 			type: 'fad' },
	{ key: 'cubes', 			name: 'Clean Code', 		type: 'far' },
]

     
