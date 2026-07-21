import { useEffect, useRef, useState } from 'react';
import stackneuroLogo from '../assets/logos/stackneuro-logo.png';
import { navigationLinks } from '../data/navigation';
import { serviceCategories } from '../data/services';
import '../styles/navbar.css';

const serviceIconPaths = {
  web: (
    <>
      <rect x="5" y="7" width="22" height="17" rx="3" />
      <path d="M5 12h22M12 27h8" />
    </>
  ),
  mobile: (
    <>
      <rect x="10" y="5" width="12" height="22" rx="3" />
      <path d="M15 23h2" />
    </>
  ),
  software: (
    <>
      <path d="M8 10l8-4 8 4-8 4-8-4z" />
      <path d="M8 16l8 4 8-4M8 22l8 4 8-4" />
    </>
  ),
  design: (
    <>
      <path d="M7 24l5-1 12-12a3 3 0 0 0-4-4L8 19l-1 5z" />
      <path d="M18 9l5 5" />
    </>
  ),
  ai: (
    <>
      <circle cx="16" cy="16" r="5" />
      <path d="M16 5v4M16 23v4M5 16h4M23 16h4M8.5 8.5l3 3M20.5 20.5l3 3M23.5 8.5l-3 3M11.5 20.5l-3 3" />
    </>
  ),
  cloud: (
    <>
      <path d="M10 23h13a5 5 0 0 0 0-10 8 8 0 0 0-15.5 2.5A4 4 0 0 0 10 23z" />
    </>
  ),
  api: (
    <>
      <path d="M10 11l-5 5 5 5M22 11l5 5-5 5M18 8l-4 16" />
    </>
  ),
  marketing: (
    <>
      <path d="M6 20l9-9 5 5 6-8" />
      <path d="M6 26h20M24 8h2v2" />
    </>
  ),
};

function ServiceIcon({ icon }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      {serviceIconPaths[icon]}
    </svg>
  );
}

const getServiceIcon = (serviceName, categoryId) => {
  const normalizedName = serviceName.toLowerCase();

  if (normalizedName.includes('mobile')) return 'mobile';
  if (normalizedName.includes('ai') || normalizedName.includes('machine')) return 'ai';
  if (normalizedName.includes('cloud')) return 'cloud';
  if (normalizedName.includes('design') || normalizedName.includes('ux')) return 'design';
  if (normalizedName.includes('api') || normalizedName.includes('integration')) return 'api';
  if (categoryId === 'digital-marketing') return 'marketing';
  if (normalizedName.includes('web')) return 'web';

  return 'software';
};

function ServicesMegaMenu({ getHref, isOpen, onSelect, menuId }) {
  const [activeCategoryId, setActiveCategoryId] = useState(serviceCategories[0]?.id ?? '');
  const [searchQuery, setSearchQuery] = useState('');
  const activeCategory = serviceCategories.find((category) => category.id === activeCategoryId) ?? serviceCategories[0];
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredServices = activeCategory.services.filter((service) =>
    service.name.toLowerCase().includes(normalizedQuery),
  );

  return (
    <div
      className={`services-mega${isOpen ? ' services-mega--open' : ''}`}
      id={menuId}
      aria-hidden={!isOpen}
    >
      <div className="services-mega__search">
        <label className="services-mega__search-label" htmlFor={`${menuId}-search`}>
          Search services
        </label>
        <div className="services-mega__search-field">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="11" cy="11" r="7" />
            <path d="M16.5 16.5L21 21" />
          </svg>
          <input
            id={`${menuId}-search`}
            type="search"
            value={searchQuery}
            placeholder="Search by service name"
            onChange={(event) => setSearchQuery(event.target.value)}
            tabIndex={isOpen ? 0 : -1}
          />
        </div>
      </div>

      <div className="services-mega__body">
        <aside className="services-mega__categories" aria-label="Service categories">
          <p>Our Services</p>
          <span>Browse Stackneuro capabilities by category.</span>
          <div className="services-mega__category-list">
            {serviceCategories.map((category) => (
              <button
                className={`services-mega__category${
                  activeCategory.id === category.id ? ' services-mega__category--active' : ''
                }`}
                type="button"
                key={category.id}
                onMouseEnter={() => setActiveCategoryId(category.id)}
                onClick={() => setActiveCategoryId(category.id)}
                tabIndex={isOpen ? 0 : -1}
              >
                <span>{category.number}</span>
                <strong>{category.label}</strong>
                <small>{category.services.length} services</small>
              </button>
            ))}
          </div>
        </aside>

        <section className="services-mega__results" aria-label={`${activeCategory.label} services`}>
          <div className="services-mega__results-header">
            <span>{activeCategory.label}</span>
            <small>{filteredServices.length} available</small>
          </div>

          <div className="services-mega__grid">
            {filteredServices.length ? (
              filteredServices.map((service) => (
                <a
                  className="services-mega__card"
                  href={getHref(`/services?category=${activeCategory.slug}`)}
                  key={service.name}
                  onClick={onSelect}
                  tabIndex={isOpen ? 0 : -1}
                >
                  <span className="services-mega__icon">
                    <ServiceIcon icon={getServiceIcon(service.name, activeCategory.id)} />
                  </span>
                  <span>
                    <strong>{service.name}</strong>
                    <small>{service.description}</small>
                  </span>
                  <span className="services-mega__arrow" aria-hidden="true">
                    -&gt;
                  </span>
                </a>
              ))
            ) : (
              <p className="services-mega__empty">No services found in this category.</p>
            )}
          </div>
        </section>
      </div>

      <div className="services-mega__cta">
        <span>
          <strong>Need a custom solution?</strong>
          <small>Talk with our experts about your business goals.</small>
        </span>
        <a href={getHref('#contact')} onClick={onSelect} tabIndex={isOpen ? 0 : -1}>
          Talk to an Expert
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMegaOpen, setIsServicesMegaOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#hero');
  const isScrolledRef = useRef(false);
  const firstMobileLinkRef = useRef(null);
  const mobileNavRef = useRef(null);
  const servicesNavRef = useRef(null);
  const servicesMegaRef = useRef(null);
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const isHomePage = currentPath === '/';

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 24;

      if (shouldBeScrolled !== isScrolledRef.current) {
        isScrolledRef.current = shouldBeScrolled;
        setIsScrolled(shouldBeScrolled);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.setTimeout(() => firstMobileLinkRef.current?.focus(), 0);
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsServicesMegaOpen(false);
        setIsMobileServicesOpen(false);
      }

      if (!isMenuOpen || event.key !== 'Tab') {
        return;
      }

      const focusableItems = mobileNavRef.current?.querySelectorAll('a[href], button:not([disabled])');

      if (!focusableItems?.length) {
        return;
      }

      const firstItem = focusableItems[0];
      const lastItem = focusableItems[focusableItems.length - 1];

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      }

      if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isServicesMegaOpen) {
      return undefined;
    }

    const isDesktop = window.matchMedia('(min-width: 1121px)').matches;

    if (!isDesktop) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isServicesMegaOpen]);

  useEffect(() => {
    if (!isServicesMegaOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (!servicesNavRef.current?.contains(event.target)) {
        setIsServicesMegaOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);

    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isServicesMegaOpen]);

  useEffect(() => {
    if (currentPath !== '/') {
      setActiveHref(currentPath.startsWith('/blog') ? '/blog' : currentPath);
      return undefined;
    }

    const sectionMap = navigationLinks
      .filter((link) => link.href.startsWith('#'))
      .map((link) => {
        const section = document.querySelector(link.href);
        return section ? { href: link.href, section } : null;
      })
      .filter(Boolean);

    if (!sectionMap.length) {
      return undefined;
    }

    let frameId = 0;

    const updateActiveSection = () => {
      frameId = 0;

      const headerBottom = document.querySelector('.site-header')?.getBoundingClientRect().bottom ?? 88;
      const activationY = window.scrollY + headerBottom + 72;
      const pageBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      let nextHref = sectionMap[0].href;

      sectionMap.forEach(({ href, section }) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        if (sectionTop <= activationY) {
          nextHref = href;
        }
      });

      if (documentHeight - pageBottom < 4) {
        nextHref = sectionMap[sectionMap.length - 1].href;
      }

      setActiveHref((currentHref) => (currentHref === nextHref ? currentHref : nextHref));
    };

    const requestActiveSectionUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', requestActiveSectionUpdate, { passive: true });
    window.addEventListener('resize', requestActiveSectionUpdate);
    window.addEventListener('hashchange', requestActiveSectionUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener('scroll', requestActiveSectionUpdate);
      window.removeEventListener('resize', requestActiveSectionUpdate);
      window.removeEventListener('hashchange', requestActiveSectionUpdate);
    };
  }, [currentPath]);

  const getNavigationHref = (href) => {
    if (!href.startsWith('#')) {
      return href;
    }

    return isHomePage ? href : `/${href}`;
  };

  const closeMenu = () => setIsMenuOpen(false);
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesMegaOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleServicesKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIsServicesMegaOpen(true);
      window.setTimeout(() => servicesMegaRef.current?.querySelector('input, button, a')?.focus(), 0);
    }

    if (event.key === 'Escape') {
      setIsServicesMegaOpen(false);
    }
  };

  return (
    <header
      className={`site-header${isScrolled ? ' site-header--scrolled' : ''}${
        isMenuOpen ? ' site-header--open' : ''
      }`}
    >
      <nav className="navbar" aria-label="Primary navigation">
        <a className="navbar__brand" href={getNavigationHref('#hero')} aria-label="Stackneuro Solutions home">
          <img className="navbar__logo" src={stackneuroLogo} alt="Stackneuro IT Solutions" />
        </a>

        <div className="navbar__links" aria-label="Main navigation links">
          {navigationLinks.map((link) =>
            link.label === 'Services' ? (
              <div
                className={`navbar__services${isServicesMegaOpen ? ' navbar__services--open' : ''}`}
                key={link.href}
                ref={servicesNavRef}
              >
                <a
                  href={getNavigationHref(link.href)}
                  className={`navbar__link${activeHref === link.href || isServicesMegaOpen ? ' navbar__link--active' : ''}`}
                  aria-current={activeHref === link.href ? 'location' : undefined}
                  onClick={() => setIsServicesMegaOpen(false)}
                >
                  {link.label}
                </a>
                <button
                  className="navbar__dropdown-toggle"
                  type="button"
                  aria-label="Toggle services menu"
                  aria-haspopup="true"
                  aria-expanded={isServicesMegaOpen}
                  aria-controls="services-mega-menu"
                  onClick={() => setIsServicesMegaOpen((current) => !current)}
                  onKeyDown={handleServicesKeyDown}
                >
                  <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                    <path d="M5 12l5-5 5 5" />
                  </svg>
                </button>
                <div ref={servicesMegaRef}>
                  <ServicesMegaMenu
                    getHref={getNavigationHref}
                    isOpen={isServicesMegaOpen}
                    menuId="services-mega-menu"
                    onSelect={() => setIsServicesMegaOpen(false)}
                  />
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={getNavigationHref(link.href)}
                className={`navbar__link${activeHref === link.href ? ' navbar__link--active' : ''}`}
                aria-current={activeHref === link.href ? 'location' : undefined}
              >
                {link.label}
              </a>
            ),
          )}
        </div>

        <a className="navbar__cta" href={getNavigationHref('#contact')}>
          Let's Talk
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      <div className="mobile-nav-shell" id="mobile-navigation" aria-hidden={!isMenuOpen}>
        <nav className="mobile-nav" aria-label="Mobile navigation" ref={mobileNavRef}>
          {navigationLinks.map((link, index) => (
            link.label === 'Services' ? (
              <div className="mobile-services" key={link.href}>
                <button
                  className={`mobile-nav__link mobile-nav__link--button${
                    activeHref === link.href ? ' mobile-nav__link--active' : ''
                  }`}
                  type="button"
                  aria-current={activeHref === link.href ? 'location' : undefined}
                  aria-controls="mobile-services-mega-menu"
                  aria-expanded={isMobileServicesOpen}
                  onClick={() => setIsMobileServicesOpen((current) => !current)}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  {link.label}
                  <span aria-hidden="true">+</span>
                </button>
                <ServicesMegaMenu
                  getHref={getNavigationHref}
                  isOpen={isMobileServicesOpen}
                  menuId="mobile-services-mega-menu"
                  onSelect={closeAllMenus}
                />
              </div>
            ) : (
              <a
                key={link.href}
                href={getNavigationHref(link.href)}
                className={`mobile-nav__link${
                  activeHref === link.href ? ' mobile-nav__link--active' : ''
                }`}
                aria-current={activeHref === link.href ? 'location' : undefined}
                onClick={closeMenu}
                ref={index === 0 ? firstMobileLinkRef : undefined}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            )
          ))}
          <a
            className="mobile-nav__cta"
            href={getNavigationHref('#contact')}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
