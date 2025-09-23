'use client'
import React from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import './Projects.css';

export default function Projects() {
  const pathname = usePathname();

  const projects = [
    {
      title: "Colgate Event Calendar",
      period: "Feb 2024 – Present",
      description: "A full-stack event discovery platform enhancing campus event visibility and student engagement.",
      technologies: ["Next.js", "NestJS", "PostgreSQL", "Supabase"],
      highlights: [
        "Built and deployed complete event management system",
        "Integrated user authentication with role-based access",
        "Live event management with real-time updates"
      ],
      status: "Live & Maintained",
      github: "#",
      demo: "#"
    },
    {
      title: "CryptoEd",
      period: "Aug 2025 – Present",
      description: "An online platform promoting cryptocurrency and DeFi education for undergraduates across multiple U.S. universities.",
      technologies: ["React", "Next.js", "Firebase"],
      highlights: [
        "Self-initiated project with peers from multiple universities",
        "Course-style learning modules with structured content",
        "Interactive discussion forums (Reddit-style)",
        "User authentication and community features"
      ],
      status: "In Development",
      github: "#",
      demo: "#"
    },
    {
      title: "Intelligent Pollution Statistics System",
      period: "Jun 2024 – Aug 2024",
      description: "Digital surveillance system for pollution statistics with improved data collection efficiency.",
      technologies: ["Frontend Framework", "Spring Boot", "SQL", "Blockchain Research"],
      highlights: [
        "Improved data collection efficiency by 30%",
        "Dynamic graphs and real-time visualization",
        "Monthly report synchronization",
        "Researched blockchain integration for data security"
      ],
      status: "Completed (Internship)",
      github: "#",
      company: "Shanghai Qingning Recycling Design Company"
    }
  ];

  const getStatusClass = (status: string) => {
    if (status === 'Live & Maintained') return 'status-badge status-live';
    if (status === 'In Development') return 'status-badge status-development';
    return 'status-badge status-completed';
  };

  return (
    <div className="projects-container">
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

      {/* Projects Content */}
      <main className="main-content">
        <div className="header-section">
          <h2 className="main-title">My Projects</h2>
          <p className="main-description">
            Here are some of the software engineering projects I&apos;ve worked on, from full-stack web applications 
            to research-focused development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Project Header */}
              <div className="project-header">
                <div className="project-header-top">
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-meta">
                      <span className="project-meta-item">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {project.period}
                      </span>
                      {project.company && (
                        <>
                          <span className="project-meta-separator">•</span>
                          <span className="project-company">{project.company}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="project-status">
                    <span className={getStatusClass(project.status)}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div className="project-details">
                  {/* Highlights */}
                  <div className="highlights-section">
                    <h4>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Achievements
                    </h4>
                    <ul className="highlights-list">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="highlight-item">
                          <span className="highlight-bullet"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="tech-section">
                    <h4>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Tech Stack
                    </h4>
                    <div className="tech-grid">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="project-links">
                  <div className="links-container">
                    {project.github && (
                      <Link href={project.github} target="_blank" rel="noopener noreferrer"
                         className="link-button link-github">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        View Source Code
                      </Link>
                    )}
                    {project.demo && (
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer"
                         className="link-button link-demo">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <h3 className="cta-title">Interested in Collaborating?</h3>
          <p className="cta-description">
            I&apos;m always looking for new opportunities to work on exciting projects, contribute to research, 
            or collaborate with fellow developers. Let&apos;s build something amazing together!
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-button primary">
              Get In Touch
            </Link>
            <Link href="https://github.com/Matt-Liu0" target="_blank" rel="noopener noreferrer"
               className="cta-button secondary">
              View GitHub
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}