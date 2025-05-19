import { useState } from 'react';
import Sidebar from '@/components/pages/Sidebar';
import '@/styles/index.css';
import '@/styles/skills.css';
import '@/styles/projects.css';
import '@/styles/background.css';
import '@/styles/media.css';
import '@/styles/gdpr.css';
import Experience from '@/components/pages/Experience';
import Skills from '@/components/pages/Skills';
import Projects from '@/components/pages/Projects';
import Background from '@/components/pages/Background';
import GDPRNotice from '@/components/ui/GDPRNotice';

function App() {
  const [page, setPage] = useState('experience');
  const pages = [ "experience", "background", "skills", "projects"];
  return (
    <>
      <div className="app">
        <Sidebar setPage={setPage} pages={pages} />
        <div className="content">
          {page === 'experience' && <Experience />}
          {page === 'skills' && <Skills />}
          {page === 'projects' && <Projects />}
          {page === 'background' && <Background />}
        </div>
      </div>
      <GDPRNotice />
    </>
  )
}

export default App
