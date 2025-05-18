interface ExperienceCardProps {
    companyTitle: string;
    companyDescription: string;
    years: string;
    companyid: string;
}

const ExperienceCard = ({
    companyTitle,
    companyDescription,
    years,
    companyid
}: ExperienceCardProps) => {
    return (
        <div className="experience-card">
            <div className='experience-card-flex'>
                <div className={`experience-card-logo ${companyid}`}>

                </div>
                <div className='experience-card-desc'>
                    <div className="experience-card-title">{companyTitle}</div>
                    <div className="experience-card-description">{companyDescription}</div>
                    <div className="experience-card-years">{years}</div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;