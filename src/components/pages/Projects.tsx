import ProjectCard from '@/components/ui/ProjectCard';



export default function Projects() {
    const projects =  {
        "fighttrax": {
                "title": "FightTrax",
                "release": "2024-12-09",
                "description": "This application is designed to serve as a comprehensive digital tool for scoring combat sports using the universally recognized 10-Point Must System. It caters to sports like boxing, MMA, and other combat sports where the system is applied. Available on web and coming soon to mobile",
                "links": [{
                    "link": "https://fighttrax.com",
                    "platform": "Web"
                }],
                "pubimage": "./scorecard.png",
                "image": "/core/scorecard.svg"
            },
            "generator": {
                "title": "Password Generator",
                "release": "2024-12-12",
                "description": "A simple password generator application that generates memorable passowrds but have a high security value. Available for Web.",
                "links": [{
                    "link": "https://passwordgenerator.coresoftworks.net",
                    "platform": "Web"
                }],
                "image": "/core/generator.svg",
                "pubimage": "/core/generator.png"
            },

            "wikirun": {
                "title": "Wikirun",
                "release": "2025-04-18",
                "description": "Race from page to page as quickly as possible to win!",
                "links": [{
                    "link": "https://wikirun.coresoftworks.net",
                    "platform": "Web"
                }],
                "pubimage": "./wikirun.png",
                "image": "/core/wikirun.svg"
            },
            "coretools": {
                "title": "core tools",
                "release": "2025-04-19",
                "description": "Use various developer and web tools to solve common problems",
                "links": [{
                    "link": "https://tools.coresoftworks.net",
                    "platform": "Web"
                }],
                "pubimage": "./coretools.png",
                "image": "/core/coretools.svg"
            }
        }
    return (
        <div className="skills">
            <div className='experience-title-holder'>
                <div className="experience-header">
                    <h1>Skills</h1>
                </div>
            </div>
            <div className='core-softworks'></div>
            <div className="skills-content">
                {Object.values(projects).reverse().map((skill, index) => (
                    <ProjectCard
                        key={index}
                        title={skill.title}
                        links={skill.links[0].link}
                        image={skill.image}
                    />
                ))}
            </div>
        </div>
    )

}