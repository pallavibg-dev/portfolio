import { useState } from 'react';

// Custom inline SVG icons for technologies to avoid external dependencies
const Icons = {
  java: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 19.5c0 .83.67 1.5 1.5 1.5h17c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-17c-.83 0-1.5.67-1.5 1.5zm18.5-8.5H19v-2h1.5c.83 0 1.5-.67 1.5-1.5V5c0-.83-.67-1.5-1.5-1.5H19v-2h-2v17c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V1.5H1v2h2V5c0 .83.67 1.5 1.5 1.5H6v2H4.5C3.67 8.5 3 9.17 3 10v4c0 .83.67 1.5 1.5 1.5H6v2h11v-2h1.5c.83 0 1.5-.67 1.5-1.5v-3z" />
    </svg>
  ),
  spring: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.59 3.1c-.42 1.74-1.44 3.3-2.77 4.46C16.07 3.25 12.43.5 8.18.5 3.77.5.25 4.02.25 8.43c0 2.94 1.57 5.52 3.93 6.97-.34.68-.56 1.43-.63 2.22-.43 4.26 3.15 7.44 6.93 7.44a7.5 7.5 0 0 0 7.36-6.13c.2-1.05.13-2.13-.2-3.12 1.47-.62 2.73-1.67 3.57-3.02.98-1.57 1.3-3.44.84-5.2a.48.48 0 0 0-.58-.35.49.49 0 0 0-.88.86zM12 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </svg>
  ),
  react: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 4 2 6.5v11C2 20 6.48 22 12 22s10-2 10-3.5v-11C22 4 17.52 2 12 2zm0 2c4.82 0 8 1.61 8 2.5S16.82 9 12 9s-8-1.61-8-2.5S7.18 4 12 4zm8 7.5c0 .89-3.18 2.5-8 2.5s-8-1.61-8-2.5v-3c1.78 1 4.73 1.5 8 1.5s6.22-.5 8-1.5v3zm0 5c0 .89-3.18 2.5-8 2.5s-8-1.61-8-2.5v-3c1.78 1 4.73 1.5 8 1.5s6.22-.5 8-1.5v3z" />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.983 8.871h-1.996V10.87h1.996V8.871zM11.49 8.871H9.492V10.87H11.49V8.871zM8.995 8.871H6.998V10.87h1.997V8.871zM6.5 8.871H4.502V10.87H6.5V8.871zm5.992-2.99h-1.996v1.999h1.996V5.881zm-2.493 0H8.003v1.999h1.997V5.881zm-2.497 0H5.006v1.999h1.997V5.881zm4.99 3h-1.997v1.999h1.997V8.881zm3.985-6h-1.996v1.999h1.996V2.881zm-.008 3h-1.996v1.999h1.996V5.881zM23.99 12.13a11.442 11.442 0 0 1-2.99 1c-.88.19-1.98.09-2.98-.1a9.036 9.036 0 0 1-5.99-5.9c-.1-.2-.1-.5-.1-.7v-.9a1.003 1.003 0 0 0-1-1H2a1.003 1.003 0 0 0-1 1v8.5c0 3.3 2.7 6 6 6h11c3 0 5.6-2.2 5.9-5.2l.09-.6z" />
    </svg>
  ),
  kubernetes: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.002 2L2.148 5.6v12.8L12.002 22l9.854-3.6V5.6L12.002 2zm7.854 14.54l-7.854 2.85v-5.23l4.577-1.66 3.277 4.04zm0-8.81l-3.277 4.04-4.577-1.66V4.87l7.854 2.86zm-15.708 0l7.854-2.86v5.22L7.575 9.55 4.298 7.73zm0 8.81l3.277-4.04 4.577 1.66v5.23l-7.854-2.85z" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </svg>
  )
};

const projectData = [
  {
    id: 1,
    title: "E-Commerce Web Application",
    type: "fullstack",
    tags: ["React", "Java", "Spring Boot", "Hibernate", "MySQL", "REST APIs"],
    description: "An end-to-end e-commerce platform built as a scalable CRUD application. Implements a responsive React storefront, secure JWT-based authentication, administrative product management dashboard, and transactional order workflow powered by Spring Boot and Hibernate JPA.",
    codeUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Tapzy Food Delivery",
    type: "fullstack",
    tags: ["React", "Java", "Spring Boot", "MongoDB", "Docker", "REST APIs"],
    description: "A comprehensive food delivery catalog and checkout platform. Powered by a high-performance backend catalog service and a modular React frontend. Includes live shopping cart calculations, status state routing, and Docker container support for deployment automation.",
    codeUrl: "#",
    demoUrl: "/tapzy/index.html", // Path inside public folder served by Vite
    isTapzy: true
  }
];

function App() {
  const [filter, setFilter] = useState('all');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'Please fill out all fields.' });
      return;
    }
    // Simulate successful form submit
    setFormStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus({ type: '', message: '' }), 5000);
  };

  const filteredProjects = projectData.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'fullstack') return project.type === 'fullstack';
    if (filter === 'backend') return project.tags.includes('Java') && !project.tags.includes('React');
    return true;
  });

  return (
    <>
      {/* Navigation Header */}
      <header className="header-nav" id="top-navigation">
        <div className="container nav-container">
          <a href="#top" className="brand-logo" id="nav-brand">
            PALLAVI<span>.dev</span>
          </a>
          <nav className="nav-links" id="nav-menu">
            <a href="#projects">Work</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-cta-group">
            <a href="#" className="btn-nav-resume" id="nav-resume-btn">
              Download Resume
            </a>
            <a href="#contact" className="btn-nav-contact" id="nav-contact-btn">
              Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="full-bleed-photo" 
        id="top" 
        style={{ backgroundImage: 'url(/hero-bengaluru-sketch.png)' }}
      >
        {/* Dot-connector sketch animation overlay */}
        <svg className="sketch-overlay" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line className="sketch-line" x1="620" y1="80"  x2="720" y2="160" />
          <line className="sketch-line" x1="720" y1="160" x2="760" y2="260" />
          <line className="sketch-line" x1="760" y1="260" x2="700" y2="380" />
          <line className="sketch-line" x1="700" y1="380" x2="740" y2="480" />
          <line className="sketch-line" x1="620" y1="80"  x2="680" y2="200" />
          <line className="sketch-line" x1="680" y1="200" x2="760" y2="260" />
          <line className="sketch-line" x1="680" y1="200" x2="700" y2="380" />
          <line className="sketch-line" x1="740" y1="480" x2="800" y2="520" />
          <line className="sketch-line" x1="620" y1="80"  x2="560" y2="140" />
          <line className="sketch-line" x1="560" y1="140" x2="600" y2="260" />
          <line className="sketch-line" x1="600" y1="260" x2="700" y2="380" />
          <circle className="sketch-node sketch-node-1" cx="620" cy="80"  r="3" />
          <circle className="sketch-node sketch-node-2" cx="720" cy="160" r="3" />
          <circle className="sketch-node sketch-node-3" cx="760" cy="260" r="3" />
          <circle className="sketch-node sketch-node-4" cx="700" cy="380" r="3" />
          <circle className="sketch-node sketch-node-5" cx="740" cy="480" r="3" />
          <circle className="sketch-node sketch-node-1" cx="680" cy="200" r="3" />
          <circle className="sketch-node sketch-node-3" cx="560" cy="140" r="3" />
          <circle className="sketch-node sketch-node-5" cx="600" cy="260" r="3" />
        </svg>

        <div className="container hero-content">
          {/* Eyebrow badge */}
          <div className="hero-badge" id="hero-badge">
            <span className="hero-badge-dot"></span>
            Java Fullstack Developer · Bengaluru, IN
          </div>

          {/* Apple-style gradient headline */}
          <h1 className="hero-apple-headline" id="hero-title">
            Building things<br />
            <span className="hero-gradient-word">the world</span> uses.
          </h1>

          {/* Sub description */}
          <p className="hero-sub" id="hero-sub">
            Spring Boot microservices. React interfaces. Cloud-ready systems.<br />
            Crafted with precision from Bengaluru.
          </p>

          {/* CTA buttons */}
          <div className="hero-cta-row">
            <a href="#projects" className="hero-btn-primary" id="hero-btn-work">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="hero-btn-ghost" id="hero-btn-talk">
              Let's Talk
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="hero-scroll-hint">
            <span className="scroll-dot"></span>
          </div>
        </div>
      </section>

      {/* Tech Stack Logo Bar */}
      <section className="logo-bar-section" id="tech-bar">
        <div className="container">
          <div className="logo-bar-row">
            <div className="logo-item" title="Java Enterprise">
              {Icons.java}
              <span className="logo-text">JAVA</span>
            </div>
            <div className="logo-item" title="Spring Boot Microservices">
              {Icons.spring}
              <span className="logo-text">SPRING BOOT</span>
            </div>
            <div className="logo-item" title="React.js Libraries">
              {Icons.react}
              <span className="logo-text">REACT</span>
            </div>
            <div className="logo-item" title="Relational Databases">
              {Icons.database}
              <span className="logo-text">MYSQL</span>
            </div>
            <div className="logo-item" title="NoSQL Databases">
              {Icons.database}
              <span className="logo-text">MONGODB</span>
            </div>
            <div className="logo-item" title="Docker Containers">
              {Icons.docker}
              <span className="logo-text">DOCKER</span>
            </div>
            <div className="logo-item" title="Kubernetes Orchestration">
              {Icons.kubernetes}
              <span className="logo-text">KUBERNETES</span>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Gradient Headline */}
      <section className="display-headline-wrapper" id="scale-poster">
        <p className="scale-eyebrow">Built to perform. Designed to last.</p>
        <h2 className="display-headline gradient-headline">MAKE. IT. SCALE.</h2>
        <p className="scale-sub">From backend APIs to cloud deployments — engineered for growth.</p>
      </section>

      {/* Projects Section */}
      <section className="container section-gap" id="projects">
        <div className="section-header">
          <p className="sub">Selected Work</p>
          <h2 className="title">Proven <span className="cursive">CRUD</span> Web Applications</h2>
        </div>

        {/* Filter Pill Controls */}
        <div className="pill-toggle-container" id="project-filters">
          <button 
            id="filter-btn-all"
            className={`pill-toggle ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Work
          </button>
          <button 
            id="filter-btn-fullstack"
            className={`pill-toggle ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
          <button 
            id="filter-btn-backend"
            className={`pill-toggle ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => setFilter('backend')}
          >
            Backend & APIs
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="haze-card project-card" key={project.id}>
              <div>
                <div className="project-meta">
                  {project.tags.map(tag => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
              <div className="project-actions">
                {project.isTapzy ? (
                  <a 
                    href={project.demoUrl} 
                    className="underline-link ink" 
                    id={`project-link-${project.id}`}
                  >
                    Open Tapzy Food App
                  </a>
                ) : (
                  <>
                    <a 
                      href={project.codeUrl} 
                      className="underline-link ink" 
                      id={`project-code-link-${project.id}`}
                    >
                      Source Code
                    </a>
                    <a 
                      href={project.demoUrl} 
                      className="underline-link signal" 
                      id={`project-demo-link-${project.id}`}
                    >
                      Live Demo
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <div style={{ gridColumn: 'span 2', textAlign: 'center', padding: '40px', color: 'rgba(255,255,255,0.6)' }}>
              No projects match the selected filter.
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container section-gap" id="skills">
        <div className="section-header">
          <p className="sub">Expertise</p>
          <h2 className="title">Core Tech Stack & <span className="cursive">Methodologies</span></h2>
        </div>

        <div className="skills-columns">
          {/* Column 1 */}
          <div className="skills-col">
            <h3 className="skills-col-title">
              {Icons.java} Backend Engineering
            </h3>
            <ul className="skills-list">
              <li>Java SE / EE <span className="skill-tag">Advanced</span></li>
              <li>Spring Boot & MVC <span className="skill-tag">Microservices</span></li>
              <li>Spring Data JPA / Hibernate <span className="skill-tag">ORM</span></li>
              <li>JDBC Database Connectivity <span className="skill-tag">Core SQL</span></li>
              <li>RESTful API Architecture <span className="skill-tag">Swagger/OpenAPI</span></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="skills-col">
            <h3 className="skills-col-title">
              {Icons.react} Frontend Development
            </h3>
            <ul className="skills-list">
              <li>React.js Framework <span className="skill-tag">Expertise</span></li>
              <li>Modern Javascript (ES6+) <span className="skill-tag">Logical Core</span></li>
              <li>HTML5 & CSS3 <span className="skill-tag">Structure</span></li>
              <li>Vanilla CSS Design Systems <span className="skill-tag">Layouts</span></li>
              <li>Tailwind CSS <span className="skill-tag">Integration</span></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="skills-col">
            <h3 className="skills-col-title">
              {Icons.database} Database & DevOps
            </h3>
            <ul className="skills-list">
              <li>MySQL Server <span className="skill-tag">Relational SQL</span></li>
              <li>MongoDB Database <span className="skill-tag">NoSQL Document</span></li>
              <li>Docker Containerization <span className="skill-tag">Deployment</span></li>
              <li>Kubernetes Clusters <span className="skill-tag">Orchestration</span></li>
              <li>Git Version Control <span className="skill-tag">Workflow</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* About & Location Section (Atmospheric Bengaluru Blend) */}
      <section className="container section-gap" id="about">
        <div className="about-bengaluru-container">
          <div>
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '24px' }}>
              <p className="sub" style={{ textAlign: 'left' }}>The Architect</p>
              <h2 className="title" style={{ textAlign: 'left' }}>Developing from <span className="cursive">Bengaluru</span></h2>
            </div>
            <div className="about-text">
              <p>
                Hi, I'm <strong>Pallavi</strong>. I am a Java Fullstack Developer based in Bengaluru, India. I specialize in designing and engineering high-impact, reliable web applications.
              </p>
              <p>
                My expertise spans the entire development lifecycle, from setting up robust data structures using MySQL and MongoDB, implementing secure API layers with Spring Boot and Hibernate, to organizing fluid front-end interfaces using React.js.
              </p>
              <p>
                I thrive in containerized cloud ecosystems using Docker and Kubernetes, ensuring that every codebase is modular, performant, and scales efficiently.
              </p>
            </div>
          </div>
          <div>
            <div className="about-image-card">
              <img src="/lalbagh_glasshouse.png" alt="Vintage Lalbagh Glass House, Bengaluru" />
              <div className="about-location-badge" id="bengaluru-badge">
                <span className="dot"></span>
                Bengaluru, IN
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container section-gap" id="contact" style={{ paddingBottom: '120px' }}>
        <div className="section-header">
          <p className="sub">Get In Touch</p>
          <h2 className="title">Start a <span className="cursive">Conversation</span></h2>
        </div>

        <div className="contact-container">
          <div className="haze-card">
            <form onSubmit={handleFormSubmit} id="portfolio-contact-form">
              <div className="form-group">
                <label htmlFor="form-name">Name</label>
                <input 
                  type="text" 
                  id="form-name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="form-input" 
                  placeholder="Your Name"
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-email">Email</label>
                <input 
                  type="email" 
                  id="form-email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="form-input" 
                  placeholder="you@example.com"
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-message">Message</label>
                <textarea 
                  id="form-message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  className="form-input" 
                  placeholder="How can we help you?"
                  required 
                />
              </div>
              <div style={{ textAlign: 'right', marginTop: '24px' }}>
                <button type="submit" className="btn-solid-light" id="submit-contact-btn">
                  Send Message
                </button>
              </div>
            </form>

            {formStatus.message && (
              <div className={`form-status ${formStatus.type}`} id="form-submit-status">
                {formStatus.message}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="main-footer">
        <div className="container">
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:pallavi@example.com">Email</a>
            <a href="#top">Resume (PDF)</a>
          </div>
          <p>© {new Date().getFullYear()} Pallavi. All rights reserved. Crafted in the spirit of Air.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
