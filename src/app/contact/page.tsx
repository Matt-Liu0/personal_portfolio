'use client'
import React from 'react';
import Link from 'next/link'
import './Contact.css';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! Since this is a demo form, please reach out directly via email at zliu1@colgate.edu for the fastest response.');
  };

  return (
    <div className="contact-container">
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

      {/* Contact Content */}
      <main className="main-content">
        <div className="header-section">
          <h2 className="main-title">Get In Touch</h2>
          <p className="main-description">
            I&apos;m always interested in discussing new opportunities, collaborations, or just connecting with 
            fellow developers and researchers. Whether you&apos;re a recruiter, fellow student, or someone with 
            an interesting project idea, I&apos;d love to hear from you!
          </p>
          <div className="status-indicators">
            <span>📍 Currently based in Hamilton, NY</span>
            <span>🚀 Open to opportunities</span>
            <span>⚡ Quick response time</span>
          </div>
        </div>

        <div className="main-grid">
          {/* Contact Information */}
          <div className="contact-info-section">
            <h3>Contact Information</h3>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon email">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="contact-details">
                  <p className="label">Email</p>
                  <Link href="mailto:zliu1@colgate.edu" className="value">
                    zliu1@colgate.edu
                  </Link>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon phone">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="contact-details">
                  <p className="label">Phone</p>
                  <Link href="tel:315-273-9667" className="value phone">
                    315-273-9667
                  </Link>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon location">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="contact-details">
                  <p className="label">Location</p>
                  <p className="location">Hamilton, NY</p>
                  <p className="subtitle">Open to remote/hybrid</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h4>Connect Online</h4>
              <div className="social-grid">
                <Link 
                  href="https://github.com/Matt-Liu0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github"
                >
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  <span className="label">GitHub</span>
                </Link>
                <Link 
                  href="https://linkedin.com/in/ziyu-liu-3001572b4" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                >
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  <span className="label">LinkedIn</span>
                </Link>
              </div>
            </div>

            {/* Response Time */}
            <div className="response-time">
              <div className="response-time-header">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="title">Quick Response</span>
              </div>
              <p className="description">
                I typically respond to emails within 24 hours. For urgent matters, feel free to call!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="form-container">
              <h3 className="form-title">Send a Message</h3>
              
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-row two-cols">
                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row two-cols">
                  <div className="form-group">
                    <label htmlFor="company">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-input"
                      placeholder="Your company or university"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiryType">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      className="form-input"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="internship">Internship Opportunity</option>
                      <option value="collaboration">Research Collaboration</option>
                      <option value="project">Project Partnership</option>
                      <option value="networking">Networking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    Subject <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="form-input"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="form-input form-textarea"
                    placeholder="Tell me about your project, opportunity, or just say hello! Please include any relevant details about timing, requirements, or what you're looking for."
                  ></textarea>
                  <p className="character-hint">Minimum 10 characters</p>
                </div>

                {/* Additional Options */}
                <div className="additional-options">
                  <div className="checkbox-group">
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        name="urgent"
                        id="urgent"
                      />
                      <label htmlFor="urgent">This is urgent</label>
                    </div>
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        name="newsletter"
                        id="newsletter"
                      />
                      <label htmlFor="newsletter">Keep me updated with your projects</label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="submit-button">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </button>
              </form>

              <div className="form-note">
                <div className="form-note-content">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="note-title">Note about this form:</p>
                    <p className="note-text">
                      This contact form is for display purposes. For the fastest response, please reach out directly via 
                      email at <a href="mailto:zliu1@colgate.edu">zliu1@colgate.edu</a> 
                      or connect with me on LinkedIn!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h3 className="faq-title">Frequently Asked Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4 className="faq-question">What kind of opportunities am I looking for?</h4>
              <p className="faq-answer">
                I&apos;m particularly interested in software engineering internships, research assistant positions in AI/ML, 
                and collaborative projects involving full-stack development or mathematical modeling.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">What&apos;s my availability like?</h4>
              <p className="faq-answer">
                I&apos;m currently a full-time student at Colgate University. I&apos;m available for internships during summer breaks 
                and part-time opportunities during the academic year that align with my schedule.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">Can I work remotely?</h4>
              <p className="faq-answer">
                Yes! I&apos;m comfortable with remote work and have experience collaborating on distributed teams. 
                I&apos;m also open to hybrid arrangements and willing to relocate for the right opportunity.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">What&apos;s my typical response time?</h4>
              <p className="faq-answer">
                I check my email daily and typically respond within 24 hours. For urgent matters or time-sensitive 
                opportunities, feel free to call me directly or mention the urgency in your message subject line.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Connect?</h3>
            <p className="cta-description">
              Whether you&apos;re looking to hire talent, collaborate on research, or just want to chat about technology 
              and mathematics, I&apos;m excited to hear from you. Let&apos;s build something amazing together!
            </p>
            <div className="cta-features">
              <div className="cta-feature">
                <div className="cta-feature-icon">🚀</div>
                <div className="cta-feature-title">Internship Ready</div>
                <div className="cta-feature-subtitle">Summer 2025 & beyond</div>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">🔬</div>
                <div className="cta-feature-title">Research Focused</div>
                <div className="cta-feature-subtitle">AI/ML & Mathematics</div>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">💻</div>
                <div className="cta-feature-title">Full-Stack Developer</div>
                <div className="cta-feature-subtitle">Modern web technologies</div>
              </div>
            </div>
            <div className="cta-buttons">
              <Link 
                href="mailto:zliu1@colgate.edu" 
                className="cta-button primary"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me Now
              </Link>
              <Link 
                href="/resume" 
                className="cta-button secondary"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}