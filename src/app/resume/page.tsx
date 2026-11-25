'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import './Resume.css';

export default function Resume() {
  const pathname = usePathname();

  const handleDownloadPDF = () => {
     const link = document.createElement('a');
     link.href = '/resume.pdf';  // Path to your PDF in public folder
     link.download = 'Ziyu_Liu_Resume.pdf';  // Name for downloaded file
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
   };

  return (
    <div className="resume-container">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-flex">
            <h1 className="nav-title">Ziyu Liu</h1>
            <div className="nav-links">
              <Link href="/" className={pathname === "/" ? "nav-link active" : "nav-link"}>
                Home
              </Link>
              <Link href="/projects" className={pathname === "/projects" ? "nav-link active" : "nav-link"}>
                Projects
              </Link>
              <Link href="/resume" className={pathname === "/resume" ? "nav-link active" : "nav-link"}>
                CV
              </Link>
              <Link href="/blog" className={pathname === "/blog" ? "nav-link active" : "nav-link"}>
                Blog
              </Link>
              <Link href="/contact" className={pathname === "/contact" ? "nav-link active" : "nav-link"}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Resume Content */}
      <main className="main-content">
        <div className="header-section">
          <h2 className="page-title">CV</h2>
          <p className="page-subtitle">Computer Science + Mathematics Double Major | 4.04 GPA | Colgate University</p>
          <div className="header-buttons">
            <button 
              onClick={handleDownloadPDF}
              className="btn btn-primary"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
            <Link href="/contact" className="btn btn-secondary">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </Link>
          </div>
        </div>

        <div className="resume-card">
          {/* Header */}
          <div className="resume-header">
            <div className="profile-photo">
              <Image
                src="/profile-photo.jpg"
                alt="Ziyu Liu"
                fill
                sizes="128px"
                className="profile-image"
              />
            </div>
            <h1 className="resume-name">Ziyu (Matthew) Liu</h1>
            <p className="resume-title">Computer Science + Mathematics Student</p>
            <div className="contact-info">
              <span className="contact-item">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                ziyuliu2026@hotmail.com
              </span>
              <span className="contact-item">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Hamilton, NY
              </span>
              <span className="contact-item">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                315-273-9667
              </span>
            </div>
            <div className="social-links">
              <Link href="https://github.com/Matt-Liu0" className="social-link">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="https://linkedin.com/in/ziyu-liu-3001572b4" className="social-link">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="resume-content">
            {/* Summary */}
            <section className="section">
              <div className="section-header">
                <div className="section-icon summary">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="section-title">Professional Summary</h2>
              </div>
              <div className="summary-content">
                <p className="summary-text">
                  Computer Science and Mathematics double major with a 4.04 GPA and Dean&apos;s Award with Distinction, 
                  combining strong theoretical foundations with industry software engineering experience. Shipped 
                  production features at Zocdoc, built full-stack platforms with 
                  Next.js and NestJS, and conducted LLM research on privacy policy annotation. Seeking software 
                  engineering roles after graduating in May 2027.
                </p>
              </div>
            </section>

            {/* Education */}
            <section className="section">
              <div className="section-header">
                <div className="section-icon education">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="section-title">Education</h2>
              </div>
              <div className="education-card">
                <div className="education-header">
                  <div className="university-info">
                    <h3>Colgate University</h3>
                    <p className="degree">Bachelor of Arts, Double Major: Computer Science + Mathematics</p>
                    <p className="location">Hamilton, New York</p>
                    <p className="location">Dean&apos;s Award with Distinction for Academic Excellence</p>
                    <p className="location">GRE: Verbal 164, Quantitative 170, Writing 3.5</p>
                  </div>
                  <div className="graduation-info">
                    <p className="date">May 2027</p>
                    <p className="note">Expected Graduation</p>
                  </div>
                </div>
                
                <div className="gpa-grid">
                  <div className="gpa-card cs">
                    <p className="gpa-value cs">4.07</p>
                    <p className="gpa-label">Computer Science GPA</p>
                  </div>
                  <div className="gpa-card math">
                    <p className="gpa-value math">4.08</p>
                    <p className="gpa-label">Mathematics GPA</p>
                  </div>
                  <div className="gpa-card cumulative">
                    <p className="gpa-value cumulative">4.04</p>
                    <p className="gpa-label">Cumulative GPA</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="coursework-title">Relevant Coursework:</h4>
                  <div className="coursework-tags">
                    <span className="coursework-tag">Data Structures & Algorithms</span>
                    <span className="coursework-tag">Software Analysis and Testing</span>
                    <span className="coursework-tag">Applied Machine Learning</span>
                    <span className="coursework-tag">Graph Theory</span>
                    <span className="coursework-tag">Linear Algebra</span>
                    <span className="coursework-tag">Discrete Structures</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="section">
              <div className="section-header">
                <div className="section-icon skills">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="section-title">Technical Skills</h2>
              </div>
              <div className="skills-grid">
                <div className="skills-category">
                  <h3 className="skills-category-title programming">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Programming Languages
                  </h3>
                  <div className="skill-items">
                    <div className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">JavaScript/TypeScript</span>
                        <span className="skill-level">Advanced</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress js" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">Python</span>
                        <span className="skill-level">Advanced</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress python" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">Java</span>
                        <span className="skill-level">Proficient</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress java" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">C/C++</span>
                        <span className="skill-level">Proficient</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress cpp" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div className="other-skills">
                      <span className="other-skill">SQL</span>
                      <span className="other-skill">JavaScript</span>
                      <span className="other-skill">HTML/CSS</span>
                      <span className="other-skill">MATLAB</span>
                    </div>
                  </div>
                </div>
                
                <div className="skills-category">
                  <h3 className="skills-category-title frameworks">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    Frameworks & Tools
                  </h3>
                  <div className="framework-grid">
                    <div className="framework-item react">
                      <div className="framework-name react">React</div>
                      <div className="framework-type react">Frontend</div>
                    </div>
                    <div className="framework-item nextjs">
                      <div className="framework-name nextjs">Next.js</div>
                      <div className="framework-type nextjs">Full-stack</div>
                    </div>
                    <div className="framework-item nestjs">
                      <div className="framework-name nestjs">NestJS</div>
                      <div className="framework-type nestjs">Backend</div>
                    </div>
                    <div className="framework-item django">
                      <div className="framework-name django">Django</div>
                      <div className="framework-type django">Backend</div>
                    </div>
                    <div className="framework-item postgresql">
                      <div className="framework-name postgresql">PostgreSQL</div>
                      <div className="framework-type postgresql">Database</div>
                    </div>
                    <div className="framework-item supabase">
                      <div className="framework-name supabase">Supabase</div>
                      <div className="framework-type supabase">BaaS</div>
                    </div>
                    <div className="framework-item pytorch">
                      <div className="framework-name pytorch">PyTorch</div>
                      <div className="framework-type pytorch">AI/ML</div>
                    </div>
                    <div className="framework-item langchain">
                      <div className="framework-name langchain">LangChain</div>
                      <div className="framework-type langchain">LLM</div>
                    </div>
                  </div>
                  <div className="other-skills">
                    <span className="other-skill">Vue</span>
                    <span className="other-skill">Node.js</span>
                    <span className="other-skill">GraphQL</span>
                    <span className="other-skill">Jest</span>
                    <span className="other-skill">Scikit-learn</span>
                    <span className="other-skill">OpenAI GPT API</span>
                    <span className="other-skill">Claude Code</span>
                    <span className="other-skill">Cursor</span>
                    <span className="other-skill">Git/GitHub</span>
                    <span className="other-skill">AWS</span>
                    <span className="other-skill">Azure</span>
                    <span className="other-skill">Datadog</span>
                    <span className="other-skill">TeamCity</span>
                    <span className="other-skill">Tableau</span>
                    <span className="other-skill">Figma</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Research Experience */}
            <section className="section">
              <div className="section-header">
                <div className="section-icon research">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="section-title">Research Experience</h2>
              </div>
              
              <div className="experience-items">
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">Research Assistant – GKC-CI Policy Annotation</h3>
                      <p className="experience-organization">Computer Science | Colgate University · Supervisor: Dr. Noah Apthorpe</p>
                    </div>
                    <span className="status-badge status-completed">Completed</span>
                  </div>
                  <p className="experience-date">Sept 2025 – May 2026</p>
                  <ul className="experience-highlights">
                    <li className="highlight-item">
                      <span className="highlight-bullet research"></span>
                      Developed LLM-based models with fine-tuning and prompt engineering to analyze privacy policy parameters, converting expert annotations into reproducible and scalable pipelines for policy evaluation
                    </li>
                    <li className="highlight-item">
                      <span className="highlight-bullet research"></span>
                      Designed a statistical comparison system in Python to streamline iterative labeling, increasing dataset reliability by 25% across a multi-institution collaboration
                    </li>
                    <li className="highlight-item">
                      <span className="highlight-bullet research"></span>
                      Experimented with LangChain-based prompt chaining to strengthen reproducibility and traceability in annotation workflows
                    </li>
                    <li className="highlight-item">
                      <span className="highlight-bullet research"></span>
                      Integrated ML-driven classification workflows for policy texts, accelerating annotation throughput and creating a reusable foundation for AI-driven privacy research
                    </li>
                  </ul>
                </div>

                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">Research Assistant – Computational Modeling of Wave Equation</h3>
                      <p className="experience-organization">Mathematics | Colgate University · Supervisor: Dr. Silvia Jiménez Bolaños</p>
                    </div>
                    <span className="status-badge status-completed">Completed</span>
                  </div>
                  <p className="experience-date">May 2025 – Aug 2025</p>
                  <ul className="experience-highlights">
                    <li className="highlight-item">
                      <span className="highlight-bullet research"></span>
                      Applied numerical algorithms and two-scale convergence to simulate wave equations under heterogeneous microstructures, improving accuracy of homogenized models in multiscale environments
                    </li>
                    <li className="highlight-item">
                      <span className="highlight-bullet research"></span>
                      Implemented simulations in MATLAB and Python, validating theoretical predictions against benchmark problems and achieving consistent error reduction across cases
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section className="section">
              <div className="section-header">
                <div className="section-icon work">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v5.25A2.25 2.25 0 0113.75 16H10.5A2.25 2.25 0 018.25 13.75V8m8 0V7a2 2 0 00-2-2H10a2 2 0 00-2 2v1m8 0h2a2 2 0 012 2v5.25a2.25 2.25 0 01-2.25 2.25H12" />
                  </svg>
                </div>
                <h2 className="section-title">Work Experience</h2>
              </div>
              
              <div className="experience-items">
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">Software Engineering Intern</h3>
                      <p className="experience-organization">Zocdoc | New York, NY</p>
                    </div>
                    <span className="status-badge status-internship">Internship</span>
                  </div>
                  <p className="experience-date">Jun 2026 – Aug 2026</p>
                  <ul className="experience-highlights">
                    <li className="highlight-item">
                      <span className="highlight-bullet work"></span>
                      Identified UX gaps in provider-branded directory search and proposed a self-owned guided search initiative as the technical foundation for upcoming per-practice scheduling rules
                    </li>
                    <li className="highlight-item">
                      <span className="highlight-bullet work"></span>
                      Designed and delivered an end-to-end guided search workflow (React, TypeScript, Claude Code) for Zocdoc&apos;s provider-branded directory, increasing booking conversion by 10% and laying the groundwork for practice-level scheduling rule integration
                    </li>
                    <li className="highlight-item">
                      <span className="highlight-bullet work"></span>
                      Built GraphQL/C# backend endpoints for search filtering categories, improving search precision and extensibility for future scheduling-rule logic
                    </li>
                    <li className="highlight-item">
                      <span className="highlight-bullet work"></span>
                      Facilitated daily scrum standups for the 12-person engineering team, driving group alignment, surfacing blockers, and coordinating priorities to keep the team&apos;s overall productivity on track
                    </li>
                    <li className="highlight-item">
                      <span className="highlight-bullet work"></span>
                      Led a hackathon team proposing a student-focused Zocdoc extension to expand into the college market; built a partial prototype of the scheduling flow
                    </li>
                  </ul>
                </div>


                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">Writing Center Consultant</h3>
                      <p className="experience-organization">Writing and Speaking Center | Colgate University</p>
                    </div>
                    <span className="status-badge status-current">Current</span>
                  </div>
                  <p className="experience-date">Aug 2024 – Present</p>
                  <ul className="experience-highlights">
                    <li className="highlight-item">
                      <span className="highlight-bullet work"></span>
                      Engage with 60+ students per year from various years, majors, and language backgrounds on their writing pieces, providing support across drafting, revising, and refining stages to build confidence in college-level writing
                    </li>
                    <li className="highlight-item">
                      <span className="highlight-bullet work"></span>
                      Collaborate with writing center directors to promote the goals and culture of the Writing and Speaking Center by managing social media and pitching Writing Center values
                    </li>
                  </ul>
                </div>

                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">Software Development Engineer Intern</h3>
                      <p className="experience-organization">Shanghai Qingning Recycling Design Company | Shanghai, China</p>
                    </div>
                    <span className="status-badge status-internship">Internship</span>
                  </div>
                  <p className="experience-date">Jun 2024 – Aug 2024</p>
                  <ul className="experience-highlights">
                    <li className="highlight-item">
                      <span className="highlight-bullet work"></span>
                      Developed a pollution surveillance system with React (Vite), Spring Boot, and SQL by engineering full-stack features for live recycling data capture, improving collection efficiency by 30% and enabling near real-time reporting
                    </li>
                    <li className="highlight-item">
                      <span className="highlight-bullet work"></span>
                      Redesigned SQL queries and optimized backend data pipelines, reducing reporting lag from days to hours and streamlining environmental compliance checks
                    </li>
                    <li className="highlight-item">
                      <span className="highlight-bullet work"></span>
                      Constructed a dynamic visualization dashboard with interactive charts, providing environmental teams with real-time monitoring tools and enhancing monthly reporting accuracy
                    </li>
                    <li className="highlight-item">
                      <span className="highlight-bullet work"></span>
                      Collaborated with field operators to understand workflow challenges and translated their needs into clearer data structures
                    </li>
                  </ul>
                </div>

                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">Math Center Teaching Assistant</h3>
                      <p className="experience-organization">Department of Mathematics | Colgate University</p>
                    </div>
                    <span className="status-badge status-academic">Academic Year</span>
                  </div>
                  <p className="experience-date">Sep 2024 – May 2025</p>
                  <ul className="experience-highlights">
                    <li className="highlight-item">
                      <span className="highlight-bullet work"></span>
                      Mentored and supported 40+ students in introductory calculus and linear algebra courses by explaining mathematical concepts, guiding problem-solving, and reinforcing analytical reasoning skills to strengthen students&apos; mathematical proficiency and confidence
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Leadership Experience */}
            <section className="section">
              <div className="section-header">
                <div className="section-icon leadership">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="section-title">Leadership Experience</h2>
              </div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">International Student Orientation Group Leader</h3>
                    <p className="experience-organization">Office of International Student | Colgate University</p>
                  </div>
                  <span className="status-badge status-leadership">Leadership</span>
                </div>
                <p className="experience-date">May 2024 – Aug 2024</p>
                <ul className="experience-highlights">
                  <li className="highlight-item">
                    <span className="highlight-bullet leadership"></span>
                    Led a group of 11 newly arriving international students from 6 different countries in transitioning smoothly to Colgate by guiding them through immigration check-in, organizing shopping trips, and providing ongoing support during their adjustment
                  </li>
                </ul>
              </div>
            </section>

            {/* Software Engineering Projects */}
            <section className="section">
              <div className="section-header">
                <div className="section-icon projects">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="section-title">Software Engineering Projects</h2>
              </div>
              
              <div className="experience-items">
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">Colgate Event Calendar</h3>
                      <p className="experience-organization">Software Engineering | Colgate University</p>
                    </div>
                    <span className="status-badge status-live">Live & Maintained</span>
                  </div>
                  <p className="experience-date">Feb 2024 – Present</p>
                  <ul className="experience-highlights">
                    <li className="highlight-item">
                      <span className="highlight-bullet projects"></span>
                      Architected a full-stack campus event discovery platform with Next.js, NestJS, PostgreSQL, and Supabase, integrating Google Calendar APIs to centralize 200+ events per semester and improve visibility for students
                    </li>
                    <li className="highlight-item">
                      <span className="highlight-bullet projects"></span>
                      Engineered backend scheduling modules in Java during early prototypes, reinforcing strong OOP practices, and implemented role-based authentication with Supabase to enable secure real-time event management, reducing posting errors by 40%
                    </li>
                    <li className="highlight-item">
                      <span className="highlight-bullet projects"></span>
                      Integrated an AI chatbot into the platform using OpenAI&apos;s API that enables students to ask natural-language questions about upcoming events, reducing average time-to-event-discovery by 35%
                    </li>
                  </ul>
                  <div className="project-tech-tags">
                    <span className="tech-tag blue">Next.js</span>
                    <span className="tech-tag blue">NestJS</span>
                    <span className="tech-tag blue">PostgreSQL</span>
                    <span className="tech-tag blue">Supabase</span>
                    <span className="tech-tag blue">OpenAI API</span>
                  </div>
                </div>

                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">CryptoEd</h3>
                      <p className="experience-organization">Software Engineering | International Student Initiative</p>
                    </div>
                    <span className="status-badge status-live">Piloting</span>
                  </div>
                  <p className="experience-date">Jul 2025 – Present</p>
                  <ul className="experience-highlights">
                    <li className="highlight-item">
                      <span className="highlight-bullet projects"></span>
                      Launched a DeFi education platform with React and Next.js, featuring discussion forums, authentication, and content modules, piloted with 50+ students across three U.S. universities to foster peer-driven blockchain learning
                    </li>
                    <li className="highlight-item">
                      <span className="highlight-bullet projects"></span>
                      Engineered Firebase authentication and database schema to secure data management and ensure smooth real-time platform performance under concurrent users
                    </li>
                  </ul>
                  <div className="project-tech-tags">
                    <span className="tech-tag green">React</span>
                    <span className="tech-tag green">Next.js</span>
                    <span className="tech-tag green">Firebase</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Additional Information */}
            <section className="section">
              <div className="section-header">
                <div className="section-icon additional">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="section-title">Additional Information</h2>
              </div>
              
              <div className="additional-grid">
                <div className="additional-card">
                  <h3 className="additional-title">Languages</h3>
                  <div className="language-list">
                    <div className="language-item">
                      <span>English</span>
                      <span className="language-level">Fluent</span>
                    </div>
                    <div className="language-item">
                      <span>Mandarin Chinese</span>
                      <span className="language-level">Native</span>
                    </div>
                  </div>
                </div>
                
                <div className="additional-card">
                  <h3 className="additional-title">Interests</h3>
                  <ul className="interest-list">
                    <li className="interest-item">• Machine Learning & AI</li>
                    <li className="interest-item">• Mathematical Modeling</li>
                    <li className="interest-item">• Web Development</li>
                    <li className="interest-item">• Open Source Contribution</li>
                  </ul>
                </div>
                
                <div className="additional-card">
                  <h3 className="additional-title">Availability</h3>
                  <ul className="availability-list">
                    <li className="availability-item">• Full-time roles starting 2027</li>
                    <li className="availability-item">• Graduating May 2027</li>
                    <li className="availability-item">• On-site, Hybrid, or Remote</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Footer Call-to-Action */}
            <section className="footer-cta">
              <h3 className="cta-title">Ready to Work Together?</h3>
              <p className="cta-description">
                I&apos;m actively seeking full-time software engineering opportunities starting in 2027. 
                Let&apos;s connect and explore how I can contribute to your team!
              </p>
              <div className="cta-buttons">
                <Link 
                  href="/contact" 
                  className="cta-button primary"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </Link>
                <Link 
                  href="/projects" 
                  className="cta-button secondary"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  View Projects
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}