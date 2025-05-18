interface ProjectCardProps {
    title: string;
    links: string;
    image: string;
}

const ProjectCard = ({
    title,
    links,
    image,
}: ProjectCardProps) => {
    return (
        <div className="project-card">
            <div className='project-card-flex'>
                <div className={`project-card-logo ${title}`} style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: "#FFF",
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%'"
                }}>

                </div>
                <div className='project-card-desc'>
                    <div 
                        className="project-card-title" 
                        onClick={() => window.open(links, '_blank')}
                        style={{ cursor: 'pointer' }}
                    >
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;