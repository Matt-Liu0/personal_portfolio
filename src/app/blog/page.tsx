'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Blog.css';

export default function Blog() {
  const pathname = usePathname();
  
  // Placeholder blog posts - you can replace these with real posts later
  const blogPosts = [
    {
      title: "Setting Up My Personal Website with Next.js",
      date: "September 2025",
      excerpt: "How I built this website using Next.js, Tailwind CSS, and deployed it for my CS portfolio.",
      readTime: "5 min read",
      status: "draft" // You can change this to "published" when ready
    },
    {
      title: "My Experience with LLM-Based Policy Analysis Research",
      date: "Coming Soon",
      excerpt: "Insights from working on privacy policy annotation using large language models in a cross-institutional research project.",
      readTime: "8 min read",
      status: "planned"
    },
    {
      title: "Building Full-Stack Applications as a CS Student",
      date: "Coming Soon",
      excerpt: "Lessons learned from developing the Colgate Event Calendar and CryptoEd platforms.",
      readTime: "10 min read",
      status: "planned"
    }
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'published':
        return 'status-badge status-published';
      case 'draft':
        return 'status-badge status-draft';
      default:
        return 'status-badge status-planned';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published':
        return 'Published';
      case 'draft':
        return 'Draft';
      default:
        return 'Planned';
    }
  };

  return (
    <div className="blog-container">
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

      {/* Blog Content */}
      <main className="main-content">
        <div className="header-section">
          <h2 className="main-title">Blog</h2>
          <p className="main-description">
            Thoughts on computer science, mathematics research, software development, 
            and my journey as a CS student at Colgate University.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="posts-container">
          {blogPosts.map((post, index) => (
            <article key={index} className="post-card">
              <div className="post-header">
                <div className="post-content">
                  <h3 className="post-title">{post.title}</h3>
                  <div className="post-meta">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <span className={getStatusClass(post.status)}>
                  {getStatusText(post.status)}
                </span>
              </div>
              
              <p className="post-excerpt">{post.excerpt}</p>
              
              {post.status === 'published' ? (
                <Link href="#" className="read-more-button">
                  Read More →
                </Link>
              ) : (
                <span className="coming-soon-text">
                  {post.status === 'draft' ? 'Coming Soon' : 'Planned'}
                </span>
              )}
            </article>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="coming-soon-section">
          <h3 className="coming-soon-title">Blog Coming Soon!</h3>
          <p className="coming-soon-description">
            I'm planning to write about my experiences in computer science research, 
            software development projects, and learning journey. Topics will include:
          </p>
          <div className="topics-grid">
            <div className="topic-category">
              <strong>Technical Posts</strong>
              <ul className="topic-list">
                <li>• Full-stack development</li>
                <li>• React/Next.js tutorials</li>
                <li>• Database design</li>
              </ul>
            </div>
            <div className="topic-category">
              <strong>Research Insights</strong>
              <ul className="topic-list">
                <li>• LLM applications</li>
                <li>• Policy analysis</li>
                <li>• Mathematical modeling</li>
              </ul>
            </div>
            <div className="topic-category">
              <strong>Student Life</strong>
              <ul className="topic-list">
                <li>• CS study tips</li>
                <li>• Internship experiences</li>
                <li>• Academic journey</li>
              </ul>
            </div>
          </div>
          <div>
            <Link href="/contact" className="cta-button">
              Get Notified When I Publish
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Stay Updated</h3>
            <p className="newsletter-description">
              Want to be notified when I publish new posts? Let me know!
            </p>
            <div className="newsletter-form">
              <div className="email-input-container">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="email-input"
                />
                <button className="submit-button">
                  Notify Me
                </button>
              </div>
              <p className="form-disclaimer">
                This is just a placeholder form. Contact me directly for updates!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}