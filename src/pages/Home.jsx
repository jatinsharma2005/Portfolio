import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

const technologyGroups = [
  {
    label: "Interface",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Material UI"],
  },
  {
    label: "Server + data",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "C#", ".NET / ASP.NET Core", "SQL Server"],
  },
  {
    label: "Systems",
    items: ["Python", "FastAPI", "Redis", "BullMQ", "AI service integrations", "Git / GitHub", "Postman", "Cloudinary", "Vercel", "Render"],
  },
];

const OutboundLink = ({ href, children, ...props }) => (
  <a href={href} target="_blank" rel="noreferrer noopener" {...props}>
    {children}
  </a>
);

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Jatin Kumar — Full-Stack Developer";
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = "Selected web projects, engineering notes, internship experience and technologies by Jatin Kumar, Full-Stack Developer.";
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href="#top" aria-label="Jatin Kumar, back to top" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">J</span>
            <span className="brand-name">Jatin Kumar <span>— portfolio</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <span className="header-index mono">Portfolio / Index 01</span>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
          {menuOpen && (
            <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
              {navigation.map(([label, href]) => (
                <a key={href} href={href} onClick={closeMenu}>{label}</a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-main">
              <div className="hero-kicker">
                <span className="mono">Full-stack developer</span>
                <span aria-hidden="true">·</span>
                <span className="mono">Interface / Systems</span>
              </div>
              <h1 id="hero-title">Jatin<br /><span className="serif">Kumar.</span></h1>
              <div className="hero-subtitle">
                <span className="index mono">01 /</span>
                <p>Web experiences built with care, and engineering you can follow back to the source.</p>
              </div>
              <div className="hero-actions">
                <a className="hero-action hero-action-primary" href="#projects">View selected work <ArrowUpRight size={14} aria-hidden="true" /></a>
                <a className="hero-action" href="#contact">Contact me <ArrowUpRight size={14} aria-hidden="true" /></a>
                <a className="hero-action" href="/Jatin-Kumar-Resume.pdf" download="Jatin-Kumar-Resume.pdf">
                  Download Resume <Download size={14} aria-hidden="true" />
                </a>
              </div>
              <div className="hero-social">
                <span className="mono">Find me</span>
                <OutboundLink href="https://github.com/jatinsharma2005"><Github size={13} aria-hidden="true" /> GitHub</OutboundLink>
                <OutboundLink href="https://www.linkedin.com/in/jatin-kumar-39b5b6242/"><Linkedin size={13} aria-hidden="true" /> LinkedIn</OutboundLink>
              </div>
            </div>
            <aside className="hero-aside" aria-label="Portfolio note">
              <span className="mono">A working record</span>
              <p>Selected shipped interfaces, implementation notes, and the technologies behind them.</p>
              <a className="text-link" href="#projects">Go to selected work <ArrowUpRight size={14} aria-hidden="true" /></a>
            </aside>
          </div>
          <div className="wrap hero-bottom mono">
            <span>Scroll to explore</span>
            <span>01 — 04 <ArrowDown size={13} aria-hidden="true" /></span>
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="wrap">
            <div className="section-heading" data-reveal>
              <div>
                <div className="section-number mono">01 / Selected projects</div>
                <h2 id="projects-title">Built, then <em>shipped.</em></h2>
              </div>
              <p>Three different problems, from a public-facing school site to full-stack commerce and an asynchronous meeting workflow.</p>
            </div>

            <div className="project-list">
              <article className="project-row" data-reveal>
                <div className="project-number mono">01</div>
                <div className="project-copy">
                  <div className="project-type mono">Public website / Live</div>
                  <div className="project-title-line">
                    <h3 className="project-title">Active Kids</h3>
                    <span className="project-location mono">01</span>
                  </div>
                  <p className="project-description">Built the public website frontend for a play school, helping families understand the school and move from exploring programs to admissions and contact.</p>
                  <div className="project-tags" aria-label="Technologies">
                    <span>React</span><span>TypeScript</span><span>Vite</span><span>Tailwind CSS</span>
                  </div>
                  <p className="project-note"><span className="mono">Implementation</span> Separate routes support Home, About, Admissions, Gallery and Contact; the gallery loads entries from its backend service.</p>
                  <div className="project-links">
                    <OutboundLink href="https://www.activekidsplayschool.com/">Visit live site <ArrowUpRight size={13} aria-hidden="true" /></OutboundLink>
                    <OutboundLink href="https://github.com/jatinsharma2005/ActivekidsplaySchool-frontend"><Github size={13} aria-hidden="true" /> Frontend source</OutboundLink>
                  </div>
                </div>
                <div className="project-visual">
                  <div className="project-image-frame">
                    <img src="/projects/active-kids-live.png" alt="Capture of the Active Kids Play School homepage, showing its navigation and learning-focused hero." loading="lazy" />
                  </div>
                  <div className="image-caption mono"><span>Live homepage capture</span><span>activekidsplayschool.com</span></div>
                </div>
              </article>

              <article className="project-row" data-reveal>
                <div className="project-number mono">02</div>
                <div className="project-copy">
                  <div className="project-type mono">Full-stack commerce / Live</div>
                  <div className="project-title-line">
                    <h3 className="project-title">E-Shop</h3>
                    <span className="project-location mono">02</span>
                  </div>
                  <p className="project-description">A storefront for browsing products and moving through account, cart and order workflows, with a separate Express API behind the React client.</p>
                  <div className="project-tags" aria-label="Technologies">
                    <span>React</span><span>Redux Toolkit</span><span>MUI</span><span>Node / Express</span><span>MongoDB</span>
                  </div>
                  <p className="project-note"><span className="mono">Implementation</span> The frontend and API are separate repositories. The source includes a Razorpay checkout path; live payment completion was not verified.</p>
                  <div className="project-links">
                    <OutboundLink href="https://e-shop-gray-seven.vercel.app/">Visit live site <ArrowUpRight size={13} aria-hidden="true" /></OutboundLink>
                    <OutboundLink href="https://github.com/jatinsharma2005/E-shop"><Github size={13} aria-hidden="true" /> Frontend source</OutboundLink>
                    <OutboundLink href="https://github.com/jatinsharma2005/E-shop-backend"><Github size={13} aria-hidden="true" /> Backend source</OutboundLink>
                  </div>
                </div>
                <div className="project-visual">
                  <div className="project-image-frame">
                    <img src="/projects/eshop-live.png" alt="Current E-Shop homepage capture, with fashion campaign hero and category section." loading="lazy" />
                  </div>
                  <div className="image-caption mono"><span>Current homepage capture</span><span>e-shop-gray-seven.vercel.app</span></div>
                  <p className="project-note">The current live homepage has an empty top-products state. The source contains a payment integration; production checkout has not been verified end to end.</p>
                </div>
              </article>

              <article className="project-row" data-reveal>
                <div className="project-number mono">03</div>
                <div className="project-copy">
                  <div className="project-type mono">Meeting intelligence / Source implementation</div>
                  <div className="project-title-line">
                    <h3 className="project-title">MeetMind AI</h3>
                    <span className="project-location mono">03</span>
                  </div>
                  <p className="project-description">A meeting workflow for turning uploaded audio into saved notes, implemented across a typed React client and Express server.</p>
                  <div className="project-tags" aria-label="Technologies">
                    <span>React + TypeScript</span><span>Express + TypeScript</span><span>BullMQ</span><span>Redis</span><span>Gemini</span>
                  </div>
                  <p className="project-note"><span className="mono">Implementation</span> A BullMQ/Redis worker handles the Gemini processing path and persists transcripts, summaries, key points and action items.</p>
                  <div className="project-links">
                    <OutboundLink href="https://github.com/jatinsharma2005/Meetmind-AI"><Github size={13} aria-hidden="true" /> Repository</OutboundLink>
                  </div>
                  <p className="project-note">No deployed demo. Running the processing path requires external services.</p>
                </div>
                <div className="project-visual">
                  <div className="architecture-visual" role="img" aria-label="Feature map, not a product screenshot: audio upload is processed through a worker into saved transcript, summary, key points and action items.">
                    <div className="arch-head mono"><span>Source feature map</span><span>Not a screenshot</span></div>
                    <div className="arch-grid">
                      <div className="arch-node"><small>Input</small><strong>Audio uploads</strong></div>
                      <div className="arch-node"><small>Queue</small><strong>BullMQ / Redis</strong></div>
                      <div className="arch-node"><small>Processing</small><strong>Gemini path</strong></div>
                      <div className="arch-node output"><small>Persisted output</small><strong>Transcript · summary · key points · action items</strong></div>
                    </div>
                  </div>
                  <div className="image-caption mono"><span>Workflow nouns from source</span><span>Server + worker</span></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="experience" id="experience" aria-labelledby="experience-title">
          <div className="wrap">
            <div className="section-heading" data-reveal>
              <div>
                <div className="section-number mono">02 / Experience</div>
                <h2 id="experience-title">Work beyond <em>my own.</em></h2>
              </div>
              <p>A completed software development internship, with a careful line between what is documented and what is not.</p>
            </div>
            <div className="experience-layout" data-reveal>
              <div className="experience-index mono">Internship / Completed</div>
              <div className="experience-main">
                <h3>Software Development <span>Internship</span></h3>
                <div className="experience-meta"><span>PrakritiSanskriti Tech Solutions</span><span className="dot" aria-hidden="true" /><span className="mono">Completed</span></div>
                <p>Work included Chitrio and NISST e-Seeds. These links offer product context; I’m not assigning specific features or ownership beyond that verified scope.</p>
                <div className="work-links">
                  <OutboundLink href="https://chitrio.com/">Chitrio <ArrowUpRight size={12} aria-hidden="true" /></OutboundLink>
                  <OutboundLink href="https://nisst-fe.rscyou.in/">NISST e-Seeds <ArrowUpRight size={12} aria-hidden="true" /></OutboundLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="wrap">
            <div className="section-heading" data-reveal>
              <div>
                <div className="section-number mono">03 / About + toolkit</div>
                <h2 id="about-title">Curious by <em>default.</em></h2>
              </div>
              <p>I like understanding the full shape of a product: what people need to do, what the interface makes possible, and how the system supports it.</p>
            </div>
            <div className="details-grid">
              <section className="detail-block" aria-labelledby="education-heading" data-reveal>
                <div className="detail-heading">
                  <h3 id="education-heading">Education</h3>
                  <span className="mono">01 / Study</span>
                </div>
                <div className="education-card">
                  <div className="education-year mono">2027</div>
                  <div>
                    <h4>B.Tech, Information Technology</h4>
                    <p>Building a grounding in computing alongside hands-on web development.</p>
                    <p className="study-status mono">Expected graduation · 2027</p>
                  </div>
                </div>
              </section>
              <section className="detail-block" aria-labelledby="skills-heading" data-reveal>
                <div className="detail-heading">
                  <h3 id="skills-heading">Technologies</h3>
                  <span className="mono">02 / Toolkit</span>
                </div>
                <p className="skills-intro">A broad working toolkit, grouped by where it fits.</p>
                {technologyGroups.map((group) => (
                  <div className="skill-group" key={group.label}>
                    <div className="skill-group-label mono">{group.label}</div>
                    <div className="skill-list">
                      {group.items.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <div className="contact-top" data-reveal>
              <div>
                <div className="section-number mono">04 / Contact</div>
                <h2 id="contact-title">Let’s talk<br /><em>about work.</em></h2>
              </div>
              <p className="contact-aside">For a conversation about a project, a role, or the engineering behind something here, email is the best place to start.</p>
            </div>
            <div className="contact-actions" data-reveal>
              <a className="email-link" href="mailto:jatinkumar20056@gmail.com">jatinkumar20056@gmail.com</a>
              <div className="social-links">
                <OutboundLink href="https://github.com/jatinsharma2005"><Github size={14} aria-hidden="true" /> GitHub <ArrowUpRight size={12} aria-hidden="true" /></OutboundLink>
                <OutboundLink href="https://www.linkedin.com/in/jatin-kumar-39b5b6242/"><Linkedin size={14} aria-hidden="true" /> LinkedIn <ArrowUpRight size={12} aria-hidden="true" /></OutboundLink>
                <a href="mailto:jatinkumar20056@gmail.com"><Mail size={14} aria-hidden="true" /> Email</a>
              </div>
            </div>
            <footer className="footer mono">
              <span>© {new Date().getFullYear()} Jatin Kumar</span>
              <a href="#top">Back to top ↑</a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};
