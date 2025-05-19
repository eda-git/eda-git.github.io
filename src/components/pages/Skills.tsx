import SkillsCard from '@/components/ui/SkillsCard';
import React from 'react';

export default function Skills() {
    const skills = [
        {
            skillsTitle: "JavaScript",
            skillsImage: "/skills/javascript.png",
            name: "JavaScript",
            
        },
        {
            skillsTitle: "Python",
            skillsImage: "/skills/python.svg",
            name: "Python",
            
        },
        {
            skillsTitle: "React",
            skillsImage: "/skills/react.svg",
            name: "React",
            
        },
        {
            skillsTitle: "Tauri",
            skillsImage: "/skills/tauri.svg",
            name: "Tauri",
            
        },
        {
            skillsTitle: "Django",
            skillsImage: "/skills/django.svg",
            name: "Django",
            
        },
        {
            skillsTitle: "HTML",
            skillsImage: "/skills/html.svg",
            name: "HTML",
            
        },
        {
            skillsTitle: "CSS",
            skillsImage: "/skills/css.svg",
            name: "CSS",
            
        },
        {
            skillsTitle: "C#",
            skillsImage: "/skills/c-sharp.svg",
            name: "C#",
            
        },
    ]
    return (
        <div className="skills">
            <div className='experience-title-holder'>
                <div className="experience-header">
                    <h1>Skills</h1>
                </div>
            </div>
            <div className="skills-content">
                {skills.map((skill, index) => (
                    <SkillsCard
                        key={index}
                        skillsTitle={skill.skillsTitle}
                        skillsImage={skill.skillsImage}
                        name={skill.name}
                    />
                ))}
            </div>
        </div>
    )

}