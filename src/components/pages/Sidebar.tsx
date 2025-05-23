import '@/assets/linkedin.svg';
import '@/assets/github-mark.svg';

interface SidebarProps {
    setPage: (page: string) => void;
    pages: string[];
}

export default function Sidebar({setPage, pages}: SidebarProps) {
    return (
        <div className="sidebar">
            <div className="user-name-holder">
                <div className="user-name">
                    Ed Ali
                </div>
            </div>
            <div className="sidebar-menu-control">
                {pages.map((page, index) => (
                    <div 
                        key={index} 
                        className="sidebar-menu-item" 
                        onClick={() => setPage(page)}
                    >
                        {page}
                    </div>
                ))}

            </div>
            <div className="sidebar-menu">
                <div className="email-button">
                    <a
                        className="email-button-object"
                        href="mailto:edali.personal@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="button"
                        tabIndex={0}
                        style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}
                        aria-label="Email"
                    >
                        Email
                    </a>
                </div>
                <div className="sidebar-menu-buttons">
                    <div className="sidebar-menu-button">
                        <div className="sidebar-menu-button-object github-icon" aria-label="Github"
                        onClick={() => window.open("https://github.com/eda-git", "_blank")}
                        >
                        </div>
                    </div>
                    <div className="sidebar-menu-button">
                        <div className="sidebar-menu-button-object linkedin-icon" aria-label="LinkedIn"
                        onClick={() => window.open("https://www.linkedin.com/in/ed-ali-812a0a14b/", "_blank")}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}