import Image from 'next/image';
import Link from 'next/link'
import React from 'react';

export default function Home() {
  const skills = [
    { name: 'JavaScript', type: 'language' },
    { name: 'Python', type: 'language' },
    { name: 'Java', type: 'language' },
    { name: 'C/C++', type: 'language' },
    { name: 'React', type: 'framework' },
    { name: 'Next.js', type: 'framework' },
    { name: 'Vue', type: 'framework' },
    { name: 'Django', type: 'framework' },
    { name: 'PostgreSQL', type: 'database' },
    { name: 'Firebase', type: 'database' },
    { name: 'Supabase', type: 'database' },
    { name: 'MATLAB', type: 'tool' }
  ];

  const getSkillClass = (type: string) => {
    return `skill-tag ${type}`;
  };

  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-flex">
            <h1 className="nav-title">Ziyu Liu</h1>
            <div className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/projects" className="nav-link">Projects</Link>
              <Link href="/resume" className="nav-link">CV</Link>
              <Link href="/blog" className="nav-link active">Blog</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="main-content">
        <div className="hero-section">
          {/* Profile Photo */}
          <div className="profile-photo">
            <Image
              src="/profile-photo.jpg"
              alt="Ziyu Liu"
              fill
              sizes="160px"
              className="profile-image"
            />
          </div>
          
          <h2 className="hero-title">
            Hi, I&apos;m Ziyu (Matthew) Liu
          </h2>
          
          <p className="hero-description">
            Computer Science + Mathematics double major at Colgate University. Passionate about full-stack development, 
            research in AI/ML, and building impactful software solutions.
          </p>

          <div className="hero-buttons">
            <Link href="/projects" className="btn-primary">
              View My Projects
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>

        {/* About Me Section */}
        <section className="about-section">
          <div className="about-block">
            <div className="about-container">
              <h3 className="about-title">About Me</h3>
              <p className="about-text">
                I&apos;m a Computer Science + Mathematics double major at Colgate University with a 4.06 cumulative GPA. 
                I love building full-stack applications and conducting research in AI/ML and homogenization theory.
              </p>
              <p className="about-text">
                Currently working on policy annotation research with LLMs and maintaining the Colgate Event Calendar platform.
                When I&apos;m not coding, I enjoy tutoring students and leading orientation programs for international students.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills-block">
            <div className="skills-container-wrapper">
              <h3 className="skills-title">Skills & Technologies</h3>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <span key={index} className={getSkillClass(skill.type)}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}