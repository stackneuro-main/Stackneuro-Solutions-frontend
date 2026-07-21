import stackneuroLogo from '../assets/logos/stackneuro-logo.png';
import { footerBrand, footerColumns, footerContact, footerSocials } from '../data/footer';
import '../styles/footer.css';

const socialIconPaths = {
  linkedin: (
    <>
      <path d="M8 11v13" />
      <path d="M8 7.5v.1" />
      <path d="M13 24v-8.2c0-2.2 1.4-3.8 3.7-3.8s3.3 1.5 3.3 4.1V24" />
      <path d="M13 12v12" />
    </>
  ),
  github: (
    <>
      <path d="M16 4.5c-6.4 0-11.5 5-11.5 11.3 0 5 3.3 9.3 7.8 10.7.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.3-3.9-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.4 4.5 1.7.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.2-5.2-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3 0 0 .9-.3 3.1 1.1.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.4 3.1-1.1 3.1-1.1.6 1.5.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.3-2.7 5.2-5.2 5.5.4.3.8 1 .8 2v3c0 .4.2.7.8.6 4.5-1.4 7.8-5.7 7.8-10.7C27.5 9.5 22.4 4.5 16 4.5z" />
    </>
  ),
  instagram: (
    <>
      <rect x="7" y="7" width="18" height="18" rx="5" />
      <circle cx="16" cy="16" r="4.2" />
      <path d="M21.4 10.6h.1" />
    </>
  ),
  facebook: (
    <>
      <path d="M18 9.5h3V5h-3.4C13.7 5 12 7.4 12 10.9V14H9v4.6h3V27h5v-8.4h3.5L21 14h-4v-2.6c0-1.2.4-1.9 1-1.9z" />
    </>
  ),
  x: (
    <>
      <path d="M7 7l18 18" />
      <path d="M25 7L7 25" />
    </>
  ),
};

function SocialIcon({ icon }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      {socialIconPaths[icon]}
    </svg>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="footer" aria-labelledby="footer-title">
      <div className="site-footer__inner">
        <div className="site-footer__brand-row">
          <a className="site-footer__logo" href="#hero" aria-label="Stackneuro Solutions home">
            <img src={stackneuroLogo} alt="Stackneuro IT Solutions" />
          </a>

          <p className="site-footer__brand-copy" id="footer-title">
            {footerBrand.description}
          </p>

          <span className="site-footer__badge">{footerBrand.badge}</span>
        </div>

        <div className="site-footer__grid">
          {footerColumns.map((column) => (
            <nav className="site-footer__column" aria-label={column.title} key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <address className="site-footer__column site-footer__contact">
            <h3>Contact</h3>
            {footerContact.map((item) => (
              <div key={item.label}>
                <p>{item.label}</p>
                {item.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
            ))}
          </address>

          <div className="site-footer__column site-footer__newsletter">
            <h3>Stay Updated</h3>
            <p>Receive technology insights, product updates and innovation news directly in your inbox.</p>
            <form className="site-footer__form" aria-label="Newsletter subscription">
              <label htmlFor="footer-email">Email address</label>
              <div>
                <input id="footer-email" name="email" type="email" placeholder="you@company.com" autoComplete="email" />
                <button type="submit">Subscribe</button>
              </div>
            </form>
            <span>We respect your privacy. No spam, ever.</span>
          </div>
        </div>

        <div className="site-footer__social" aria-label="Social media links">
          {footerSocials.map((social) => (
            <a href={social.href} aria-label={social.label} key={social.label}>
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>

        <a className="site-footer__back-top" href="#hero" aria-label="Back to top">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 19V5M6 11l6-6 6 6" />
          </svg>
        </a>

        <div className="site-footer__bottom">
          <p>&copy; 2026 Stackneuro Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
