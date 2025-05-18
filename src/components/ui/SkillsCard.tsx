interface SkillsCardProps {
    skillsTitle: string;
    skillsImage: string;
    name: string;
}

const SkillsCard = ({
    skillsTitle,
    skillsImage,
    name,
}: SkillsCardProps) => {
    return (
        <div className="skills-card">
            <div className='skills-card-flex'>
                <div className={`skills-card-logo ${skillsTitle}`} style={{
                    backgroundImage: `url(${skillsImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: "#FFF",
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%'"
                }}>

                </div>
                <div className='skills-card-desc'>
                    <div className="skills-card-title">{name}</div>
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;