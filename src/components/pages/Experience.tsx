import React from 'react';
import { useState } from 'react';
import ExperienceCard from '@/components/ui/ExperienceCard';

export default function Experience() {
    const experiences = [
        {
            companyTitle: "Skill-Up Technologies",
            companyDescription: "Full Stack Developer",
            years: "2021-present",
            companyID: "skillup"
        },
        {
            companyTitle: "Skill-Up Technologies",
            companyDescription: "Junior Python Developer",
            years: "2020 - 2021",
            companyID: "skillup"
        },
        {
            companyTitle: "Cascade Public Media",
            companyDescription: "Web Production Intern",
            years: "2018",
            companyID: "cascade"
        }
    ]
    return (
        <div className="experience">
            <div className='experience-title-holder'>
                <div className="experience-header">
                    <h1>Experience</h1>
                </div>
            </div>
            <div className="experience-content">
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        companyTitle={experience.companyTitle}
                        companyDescription={experience.companyDescription}
                        years={experience.years}
                        companyid={experience.companyID}
                    />
                ))}
            </div>
        </div>
    )

}