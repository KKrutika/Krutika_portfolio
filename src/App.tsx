import {
  Accessibility,
  Activity,
  AppWindow,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Blocks,
  Box,
  Bug,
  CheckCheck,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Download,
  Gauge,
  Globe,
  HardDrive,
  Layers3,
  LockKeyhole,
  Mail,
  Menu,
  MonitorSmartphone,
  Palette,
  Phone,
  PlayCircle,
  Rocket,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Linkedin,
  Instagram,
  Twitter,
  Wand2,
  Workflow,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const skillTrack = [
  { label: 'Responsive Design', icon: MonitorSmartphone },
  { label: 'SPA Development', icon: AppWindow },
  { label: 'Component UI', icon: Layers3 },
  { label: 'Cross-Browser', icon: Globe },
  { label: 'Accessibility', icon: Accessibility },
  { label: 'Performance Tuning', icon: Gauge },
  { label: 'Tailwind CSS', icon: Palette },
  { label: 'UI Animations', icon: Wand2 },
  { label: 'REST APIs', icon: Code2 },
  { label: 'Auth Systems', icon: ShieldCheck },
  { label: 'File Uploads', icon: Box },
  { label: 'Background Jobs', icon: Rocket },
  { label: 'Email Alerts', icon: Mail },
  { label: 'PostgreSQL', icon: Database },
  { label: 'MongoDB', icon: Database },
  { label: 'Optimization', icon: Gauge },
  { label: 'Server Setup', icon: HardDrive },
  { label: 'Cloud Deploy', icon: Cloud },
  { label: 'CI/CD Setup', icon: Workflow },
  { label: 'Dockerization', icon: Box },
  { label: 'SSL Setup', icon: ShieldCheck },
  { label: 'Secret Config', icon: LockKeyhole },
  { label: 'Input Clean', icon: Sparkles },
  { label: 'Rate Limiting', icon: Gauge },
  { label: 'Sec Headers', icon: ShieldCheck },
  { label: 'Token Handling', icon: BadgeCheck },
  { label: 'E-Commerce', icon: ShoppingCart },
  { label: 'Stripe Pay', icon: CreditCard },
  { label: 'React Native', icon: Smartphone },
  { label: 'PWA Support', icon: MonitorSmartphone },
  { label: 'API Connect', icon: Globe },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Bug Tracking', icon: Bug },
  { label: 'Perf Audit', icon: Activity },
  { label: 'Unit Testing', icon: CheckCheck },
  { label: 'E2E Testing', icon: PlayCircle },
  { label: 'Code Linting', icon: Sparkles },
]

const heroFloatingTiles = [
  { name: 'React', className: 'tile-react', position: 'top-left' },
  { name: 'UI', className: 'tile-ui', position: 'top-right' },
  { name: 'API', className: 'tile-api', position: 'mid-left' },
  { name: 'Secure', className: 'tile-secure', position: 'mid-right' },
  { name: 'Data', className: 'tile-data', position: 'bottom-left' },
  { name: 'Launch', className: 'tile-launch', position: 'bottom-right' },
]

const projects = [
  {
    slug: 'medium',
    title: 'The Medium Blog',
    description:
      'A content-driven blogging platform designed for reading, publishing, and discovering long-form stories. The interface focuses on clean typography, intuitive navigation, and a distraction-free reading experience, making it easy for users to explore articles, follow topics, and engage with content.',
    stack: ['Blogging', 'Content Platform', 'UX'],
    contentType: 'Long-form Publishing',
    platform: 'Web Application',
    cta: 'Visit Website',
    link: 'https://medium.com/',
  },
  {
    slug: 'rewards',
    title: 'Chase Ultimate Rewards',
    description:
      'A rewards and travel-focused digital experience designed to help cardmembers explore, manage, and redeem their Ultimate Rewards points. The interface presents rewards information, travel options, and redemption choices in a clear and intuitive way while keeping the experience focused on usability and accessibility.',
    stack: ['FinTech', 'Rewards', 'UX'],
    domain: 'Financial Services',
    focus: 'Rewards & Travel',
    cta: 'Visit Website',
    link: 'https://www.chase.com/personal/credit-cards/ultimate-rewards',
  },
  {
    slug: 'eros',
    title: 'Eros Now',
    description:
      'A streaming entertainment platform focused on discovering and consuming movies, shows, and other digital content. The experience emphasizes content discovery, intuitive navigation, rich media presentation, and a smooth viewing journey across different devices.',
    stack: ['Streaming', 'Entertainment', 'UX'],
    contentType: 'Streaming',
    platform: 'Web Application',
    cta: 'Visit Website',
    link: 'https://erosnow.com/',
  },
  {
    slug: 'airbnb',
    title: 'Airbnb',
    description:
      'A modern accommodation and travel booking platform that enables users to discover unique stays, explore property details, compare options, and manage their bookings. The experience focuses on intuitive search and filtering, responsive property listings, seamless navigation, and a user-friendly booking journey.',
    stack: ['Travel', 'Booking', 'Marketplace'],
    platform: 'Web Application',
    domain: 'Travel & Hospitality',
    cta: 'Visit Website',
    link: 'https://www.airbnb.co.in/?source=ads&locale=en&currency=INR&source=ads&c=.pi0.pk22323507540_179008573169&gad_source=1&gad_campaignid=22323507540&gbraid=0AAAAADz55Ln4ETPLeFgPdP_9TQXX1k-OM&gclid=CjwKCAjwn67VBhBnEiwAXUIN1RomRaDlKwO9Y8pHDVx4CnuNKbkBaTlE1C5DlBG3QbW2nV6v1YugCRoC_I0QAvD_BwE',
  },
]

const techStack = [
  {
    category: 'Frontend',
    icon: MonitorSmartphone,
    items: [
      { name: 'React', description: 'Build dynamic user interfaces with component-based architecture', icon: Code2 },
      { name: 'TypeScript', description: 'Adds static typing for clearer, safer application code', icon: CheckCheck },
      { name: 'Angular', description: 'Robust front-end framework with built-in tools and routing', icon: Layers3 },
    ],
  },
  {
    category: 'Backend',
    icon: ServerCog,
    items: [
      { name: 'Node.js', description: 'JavaScript runtime for scalable server-side applications', icon: ServerCog },
      { name: 'Express', description: 'Lightweight backend framework for APIs and routing', icon: Workflow },
      { name: 'Next.js', description: 'React framework with server rendering and API routes', icon: Rocket },
    ],
  },
  {
    category: 'Database',
    icon: Database,
    items: [
      { name: 'MongoDB', description: 'Flexible NoSQL database for unstructured application data', icon: Database },
      { name: 'MySQL', description: 'Reliable relational database for structured queries', icon: HardDrive },
    ],
  },
  {
    category: 'UI',
    icon: Palette,
    items: [
      { name: 'HTML', description: 'Core markup language for web page structure', icon: Globe },
      { name: 'Tailwind', description: 'Utility-first CSS framework for rapid interface development', icon: Palette },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: Cloud,
    items: [
      { name: 'Git & GitHub', description: 'Version control and collaboration for reliable delivery', icon: Workflow },
      { name: 'Docker', description: 'Consistent, portable environments for deployment', icon: Box },
      { name: 'CI/CD', description: 'Automated testing and delivery pipelines for every release', icon: Rocket },
    ],
  },
]

const services = [
  {
    title: 'Custom Web Development',
    description: 'Design and develop tailored websites that meet your business needs, with a focus on performance and user experience.',
    icon: Code2,
  },
  {
    title: 'Frontend Engineering',
    description: 'Build responsive, accessible interfaces that feel polished across every screen and interaction.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Server Logic & API Development',
    description: 'Create dependable APIs and backend systems that keep your product secure, maintainable, and fast.',
    icon: ServerCog,
  },
  {
    title: 'Full Stack Application Development',
    description: 'Bring complete digital products to life from architecture and data modeling through deployment.',
    icon: Layers3,
  },
]

const learningJourney = [
  { title: 'Cloud Computing Foundations', provider: 'Amazon Web Services (AWS)', year: '2022' },
  { title: 'Complete Full Stack Development', provider: 'Udemy', year: '2016' },
  { title: 'UI and PHP Developer', provider: 'Coaching Classes', year: '2013(for 3 months from June - August)' },
  { title: "Bachelor's in Information Technology", provider: 'Gujarat Technological University', year: '2009 - 2013' },
]

function App() {
  const projectsSectionRef = useRef<HTMLElement | null>(null)
  const [projectCollapse, setProjectCollapse] = useState<number[]>([])

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('.reveal-on-scroll')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleProjectScroll = () => {
      const section = projectsSectionRef.current
      if (!section) return

      const cards = [...section.querySelectorAll<HTMLElement>('.project-card')]
      const stickyTop = Math.min(window.innerHeight * 0.1, 112)
      const collapseValues = cards.map((card, index) => {
        const nextCard = cards[index + 1]
        if (!nextCard) return 0

        const nextTop = nextCard.getBoundingClientRect().top
        return Math.min(Math.max((stickyTop + 100 - nextTop) / 100, 0), 1)
      })

      setProjectCollapse(collapseValues)
    }

    handleProjectScroll()
    window.addEventListener('scroll', handleProjectScroll, { passive: true })
    window.addEventListener('resize', handleProjectScroll)

    return () => {
      window.removeEventListener('scroll', handleProjectScroll)
      window.removeEventListener('resize', handleProjectScroll)
    }
  }, [])

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-mark" aria-label="Krutika Koshti home">
          <span className="brand-icon">K</span>
          <span className="brand-text">Krutika Koshti</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="topbar-actions">
          <button className="primary-button" type="button">
            <Mail size={16} />
            Get In Touch
          </button>
          <button className="mobile-menu" type="button" aria-label="Open menu">
            <Menu size={18} />
          </button>
        </div>
      </header>

      <main className="page-main">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow hero-tag">
                <span className="tag-dot" />
                Full Stack Developer
              </p>
              <h1>
                Krutika <span>Koshti</span>
              </h1>
              <p className="lead">
                Turning ideas into scalable digital experiences.
                I design and build reliable web applications with clean architecture, 
                intuitive interfaces, and performance at the core.
              </p>

              <div className="cta-row">
                <button className="primary-button" type="button">
                  Explore My Work
                  <ArrowRight size={17} />
                </button>
                <button className="secondary-button" type="button">
                  <Mail size={16} />
                  Start a Project
                </button>
              </div>
            </div>

            <div className="hero-visual" aria-label="Technology stack">
  <div className="hero-tech-orbit">

    <div className="tech-logo-card tech-html">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
        alt="HTML5"
      />
      {/* <span>HTML</span> */}
    </div>

    <div className="tech-logo-card tech-css">
      <img
        src="https://www.google.com/search?sca_esv=82d9c2a6357c8c74&rlz=1C1GCEA_enIN1229IN1229&sxsrf=APpeQnsnkZLUO7ofglWh1EtfGj7w1IDW6A:1790101814594&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832VstEKsVDqPorK0Gahnm2nrruedQ0d32Et2kDhW_DVrEiVEEKhGMS6J6qOai58Kp-xhksXV28NogeTUukXLA6cErqGvRbRiH7suRTN0y_34V3a_l9_d5vx2BXsNvp3CNaFbjOcCna9jBf_n8HFTuWydDmY1eASGf8xNKp4j1zWBVjs_98w&q=css3+svg+image&sa=X&ved=2ahUKEwj63JT26IKXAxUTqVYBHThcKiQQtKgLegQIGRAB&biw=1366&bih=633&dpr=1#sv=CAMSURoyKhBlLWd5bEtxWWZ2OV91NGxNMg5neWxLcVlmdjlfdTRsTToOMW9QT1dsc1ZvZWpqSk0gBCoXCgFzEhBlLWd5bEtxWWZ2OV91NGxNGAEwARgHIPDzsL0MSggQARgBIAEoAQ"
        alt="CSS"
      />
      {/* <span>CSS</span> */}
    </div>

    <div className="tech-logo-card tech-js">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        alt="JavaScript"
      />
      {/* <span>JavaScript</span> */}
    </div>

    <div className="tech-logo-card tech-react">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React"
      />
      {/* <span>React</span> */}
    </div>

    <div className="tech-logo-card tech-angular">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
        alt="Angular"
      />
      {/* <span>Angular</span> */}
    </div>

    <div className="tech-logo-card tech-node">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
        alt="Node.js"
      />
      {/* <span>Node.js</span> */}
    </div>

    <div className="tech-logo-card tech-typescript">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
        alt="TypeScript"
      />
      {/* <span>TypeScript</span> */}
    </div>
  </div>
</div>
          </div>

          <div className="ticker-strip" aria-label="Technology skills marquee">
            <div className="ticker-track">
              {[...skillTrack, ...skillTrack].map((item, index) => {
                const Icon = item.icon

                return (
                  <span key={`${item.label}-${index}`}>
                    <Icon size={10} className="ticker-icon" strokeWidth={2.2} />
                    {item.label}
                  </span>
                )
              })}
            </div>
          </div>
        </section>

        <section id="projects" ref={projectsSectionRef} className="projects-section reveal-on-scroll">
          <div className="section-heading">
            <p className="section-tag">
              <span className="tag-dot" />
              Projects
            </p>
            <h2>Where Creativity Meets Meaningful Results</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card project-card--${project.slug}`}
                key={project.title}
                style={{
                  ['--project-collapse' as string]: projectCollapse[index] ?? 0,
                  ['--project-index' as string]: index,
                }}
              >
                <div className="project-copy">
                  <div className="project-title-block">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>

                  <div className="stack-row">
                    {project.stack.map((chip) => (
                      <span key={chip}>{chip}</span>
                    ))}
                  </div>

                  <button className="project-cta" type="button"
                  onClick={() => {
                    if (project.link) {
                      window.open(project.link, "_blank", "noopener,noreferrer");
                    }
                  }}>
                    {project.cta}
                  </button>
                </div>

                <div className="project-visual">
                  {project.slug === 'airbnb' ? (
                    <div className="project-screen project-screen--airbnb project-airbnb-preview" aria-label={`${project.title} home page preview`}>
                      <div className="airbnb-preview-shell">
                        <header className="airbnb-header">
                          <div className="airbnb-logo">airbnb</div>
                          <nav className="airbnb-nav">
                            <span>Stays</span>
                            <span>Experiences</span>
                            <span>Online</span>
                          </nav>
                          <div className="airbnb-user">K</div>
                        </header>

                        <div className="airbnb-searchbar">
                          <div className="search-column">
                            <small>Where</small>
                            <strong>Anywhere</strong>
                          </div>
                          <div className="search-column">
                            <small>Check in</small>
                            <strong>Add dates</strong>
                          </div>
                          <div className="search-column">
                            <small>Guests</small>
                            <strong>Add guests</strong>
                          </div>
                          <button type="button" aria-label="Search stays">Search</button>
                        </div>

                        <div className="airbnb-hero">
                          <div className="airbnb-copy">
                            <span className="airbnb-pill">Live anywhere</span>
                            <h4>Stay in a home that feels like yours</h4>
                            <p>Find unique stays, beach views, cabins, and city escapes.</p>
                            <button type="button">Explore homes</button>
                          </div>

                          <div className="airbnb-feature-card">
                            <div className="airbnb-photo" />
                            <div className="airbnb-card-meta">
                              <strong>Beachfront villa</strong>
                              <span>4 guests · 2 beds · 2 baths</span>
                            </div>
                          </div>
                        </div>

                        <div className="airbnb-lower-grid">
                          <div className="mini-card mini-card-one">
                            <span>Cabins</span>
                          </div>
                          <div className="mini-card mini-card-two">
                            <span>Beachfront</span>
                          </div>
                          <div className="mini-card mini-card-three">
                            <span>City breaks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : project.slug === 'rewards' ? (
                    <div className="project-screen project-screen--rewards project-screenshot-shell" aria-label={`${project.title} home page preview`}>
                      <img src="/chase-ultimate-rewards.png" alt="Chase Ultimate Rewards homepage preview" className="project-screenshot" />
                    </div>
                  ) : project.slug === 'eros' ? (
                    <div className="project-screen project-screen--eros project-screenshot-shell" aria-label={`${project.title} home page preview`}>
                      <img src="/eros-now-homepage.png" alt="Eros Now homepage preview" className="project-screenshot" />
                    </div>
                  ) : project.slug === 'medium' ? (
                    <div className="project-screen project-screen--medium project-screenshot-shell" aria-label={`${project.title} home page preview`}>
                      <img src="/medium-homepage.png" alt="Medium homepage preview" className="project-screenshot" />
                    </div>
                  ) : (
                    <div className={`project-screen project-screen--${project.slug}`} aria-label={`${project.title} home page preview`}>
                      <div className="window-topbar">
                        <span />
                        <span />
                        <span />
                      </div>

                      <div className="screen-content">
                        <header className="mock-header">
                          <div className="brand-pill">{project.slug === 'medium' ? 'Medium' : project.slug === 'rewards' ? 'Rewards' : 'Eros'}</div>
                          <nav className="mock-nav">
                            <span />
                            <span />
                            <span />
                            <span />
                          </nav>
                          <div className="mock-action">Get Started</div>
                        </header>

                        <div className="mock-hero">
                          <div className="mock-hero-copy">
                            <span className="mock-overline">{project.slug === 'medium' ? 'Featured Story' : project.slug === 'rewards' ? 'Travel Rewards' : 'Trending Now'}</span>
                            <h4>{project.slug === 'medium' ? 'A deeper look at ideas worth sharing' : project.slug === 'rewards' ? 'Unlock your next getaway' : 'Watch your next obsession'}</h4>
                            <p>{project.slug === 'medium' ? 'Discover stories, lessons, and perspectives.' : project.slug === 'rewards' ? 'Redeem points and plan your adventure.' : 'Stream blockbuster hits and original shows.'}</p>
                            <div className="mock-cta-row">
                              <span>{project.slug === 'medium' ? 'Read article' : project.slug === 'rewards' ? 'Redeem now' : 'Play now'}</span>
                              <span>{project.slug === 'rewards' ? 'Explore offers' : 'Browse more'}</span>
                            </div>
                          </div>

                          <div className="mock-hero-visual">
                            <div className="mock-visual-card">
                              <span className="visual-badge">{project.slug === 'medium' ? 'Editor\'s pick' : project.slug === 'rewards' ? 'Earn 2x' : 'Popular'}</span>
                              <div className="visual-figure" />
                            </div>
                          </div>
                        </div>

                        <div className="mock-grid">
                          {project.slug === 'medium' && (
                            <>
                              <span className="mock-item tall" />
                              <span className="mock-item" />
                              <span className="mock-item" />
                            </>
                          )}
                          {project.slug === 'rewards' && (
                            <>
                              <span className="mock-item stat-card" />
                              <span className="mock-item" />
                              <span className="mock-item" />
                            </>
                          )}
                          {project.slug === 'eros' && (
                            <>
                              <span className="mock-item poster" />
                              <span className="mock-item" />
                              <span className="mock-item" />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section reveal-on-scroll">
          <div className="section-heading">
            <p className="section-tag">
              <span className="tag-dot" />
              About Me
            </p>
            <h2>Bringing together design thinking and technical expertise</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy-block">
              <p className="role-line">Full Stack Developer</p>
              <p className="about-text">
                Bringing together design thinking and technical expertise, I develop seamless digital
                experiences — from concept and architecture to deployment and refinement.
              </p>

              <p className="availability-pill">Open to new opportunities</p>

              <div className="resume-row">
                <a
                  className="resume-button"
                  href="/Krutika_Koshti_Updated_Resume.pdf"
                  download="Krutika_Koshti_Updated_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                  <Download size={16} />
                </a>
              </div>
            </div>

            <div className="about-visual">
              <div className="profile-figure">
                <div className="profile-glow" />
                <div className="profile-silhouette">
                  <div className="profile-head" />
                  <div className="profile-body" />
                </div>
              </div>
              <div className="experience-pill">
                <strong>12+</strong>
                <span>Years of Industry<br />Experience</span>
              </div>
            </div>
          </div>

          <div className="experience-list">
            <div className="experience-item">
              <div>
                <strong>Senior Software Developer</strong>
                <span>JP Morgan Chase <i>·</i> Remote</span>
              </div>
              <time>May 2020 - Oct 2025</time>
            </div>
            <div className="experience-item">
              <div>
                <strong>Associate Software Developer</strong>
                <span>Infosys / Accenture <i>·</i> Full-time</span>
              </div>
              <time>Aug 2018 - April 2020</time>
            </div>
            <div className="experience-item">
              <div>
                <strong>Junior Software Developer</strong>
                <span>Eros Now <i>·</i> Full-time</span>
              </div>
              <time>Jun 2015 - Jul 2018</time>
            </div>
            <div className="experience-item">
              <div>
                <strong>UI and PHP Developer</strong>
              </div>
              <time>Sept 2013 - May 2015</time>
            </div>
          </div>
        </section>

        <section id="tech-stack" className="tech-section reveal-on-scroll">
          <div className="section-heading">
            <p className="section-tag">
              <span className="tag-dot" />
              Tech Stack
            </p>
            <h2>Tools &amp; Technologies</h2>
            <p className="section-description">
              Building reliable and scalable digital experiences with modern development tools.
            </p>
          </div>

          <div className="tech-grid">
            {techStack.map((group) => {
              const GroupIcon = group.icon

              return (
                <article className="tech-card" key={group.category}>
                  <div className="tech-card-heading">
                    <h3>{group.category}</h3>
                    <GroupIcon size={20} strokeWidth={1.7} />
                  </div>
                  <div className="tech-items">
                    {group.items.map(({ name, description, icon: ItemIcon }) => {
                      const Icon = ItemIcon

                      return (
                        <div className="tech-item" key={name}>
                          <Icon size={18} strokeWidth={1.8} />
                          <div>
                            <h4>{name}</h4>
                            <p>{description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="services" className="services-section reveal-on-scroll">
          <div className="section-heading">
            <p className="section-tag">
              <span className="tag-dot" />
              My Services
            </p>
            <h2>What I Provide</h2>
            <p className="section-description">
              Tailored development and design support for modern businesses.
            </p>
          </div>

          <div className="services-layout">
            <div className="service-visual" aria-hidden="true">
              <div className="service-orbit orbit-one" />
              <div className="service-orbit orbit-two" />
              <div className="service-core"><Code2 size={42} strokeWidth={1.2} /></div>
            </div>

            <div className="services-list">
              {services.map((service, index) => {
                const ServiceIcon = service.icon

                return (
                  <article className="service-item" key={service.title}>
                    <div className="service-title-row">
                      <ServiceIcon size={21} strokeWidth={1.7} />
                      <h3>{service.title}</h3>
                      <span>({String(index + 1).padStart(2, '0')})</span>
                    </div>
                    <p>{service.description}</p>
                    <button className="service-link" type="button">
                      Hire Me
                      <ArrowUpRight size={15} />
                    </button>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="learning" className="learning-section reveal-on-scroll">
          <div className="section-heading">
            <p className="section-tag">
              <span className="tag-dot" />
              Learning Journey
            </p>
            <h2>Certifications &amp; Degrees</h2>
          </div>

          <div className="learning-list">
            {learningJourney.map((item) => (
              <article className="learning-item" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.provider}</p>
                </div>
                <time>{item.year}</time>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section reveal-on-scroll">
          <div className="section-heading contact-heading">
            <p className="section-tag">
              <span className="tag-dot" />
              Let&apos;s Connect
            </p>
            <h2>Get in touch</h2>
            <p className="section-description">We&apos;d love to hear from you!</p>
          </div>

          <div className="contact-layout">
            {/* <form className="contact-form">
              <div className="form-row">
                <label>
                  First name
                  <input type="text" name="firstName" placeholder="First name" />
                </label>
                <label>
                  Last name
                  <input type="text" name="lastName" placeholder="Last name" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Email
                  <input type="email" name="email" placeholder="Email" />
                </label>
                <label>
                  Company Name
                  <input type="text" name="company" placeholder="Company Name" />
                </label>
              </div>
              <label>
                Message
                <textarea name="message" rows={6} placeholder="Message" />
              </label>
              <button className="primary-button submit-button" type="submit">
                Submit
                <ArrowRight size={16} />
              </button>
            </form> */}

            <aside className="contact-details">
              <h3>Hello, I'm always here to help you.</h3>
              <a href="tel:+919148420444" className="contact-detail">
                <Phone size={18} />
                <span><small>PHONE</small>+91-9148420444</span>
              </a>
              <a href="mailto:krutikaweb04@gmail.com" className="contact-detail">
                <Mail size={18} />
                <span><small>EMAIL</small>krutikaweb04@gmail.com</span>
              </a>
              <div className="social-block">
                <small>CONTACT WITH US</small>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/krutika-koshti-4ba0425b/" aria-label="LinkedIn"><Linkedin size={17} /></a>
                  {/* <a href="#" aria-label="Twitter"><Twitter size={17} /></a>
                  <a href="#" aria-label="Instagram"><Instagram size={17} /></a> */}
                </div>
              </div>
            </aside>
          </div>

          <footer className="site-footer">
            <div className="footer-intro">
              <div className="brand-mark">
                <span className="brand-icon">K</span>
                <span className="brand-text">Krutika Koshti</span>
              </div>
              <p>Crafting modern digital solutions with passion and precision. Focused on performance, accessibility, and clean design.</p>
              <div className="footer-socials">
                <a href="https://www.linkedin.com/in/krutika-koshti-4ba0425b/" aria-label="LinkedIn"><Linkedin size={17} /></a>
                {/* <a href="#" aria-label="Twitter"><Twitter size={17} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={17} /></a> */}
              </div>
              <a className="primary-button footer-contact-button" href="#contact">
                <Mail size={16} />
                Get In Touch
              </a>
            </div>

            <div className="footer-explore">
              <h3>Explore</h3>
              <a href="#projects">Projects</a>
              <a href="#about">About</a>
              <a href="#tech-stack">Tech</a>
              <a href="#services">Services</a>
              <a href="#learning">Education</a>
              <a href="#contact">Get In Touch</a>
            </div>

            <div className="footer-newsletter">
              <h3>Stay in the Loop</h3>
              {/* <p>Join my community to get insights on frontend tools, creative builds, and exclusive resources.</p> */}
              <form className="newsletter-form">
                <input type="email" placeholder="Your email here" aria-label="Your email here" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </footer>

          <div className="footer-bottom">
            © 2026 Krutika Koshti. Designed &amp; built with React &amp; TypeScript.
          </div>
        </section>
      </main>

      <div className="floating-actions" aria-label="Scroll controls">
        <button className="up-button" type="button" aria-label="Scroll up">
          <ArrowUpRight size={20} />
        </button>
        <button className="down-button" type="button" aria-label="Scroll down">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default App
