import { useEffect, useMemo, useState } from 'react';
import {
  allInsights,
  blogCategories,
  blogNewsletter,
  featuredInsight,
  insightsIntro,
  latestInsights,
  popularTopics,
} from '../data/insights';
import '../styles/blog-page.css';

function setMetaTag(selector, attributes) {
  const existing = document.head.querySelector(selector);
  const element = existing || document.createElement('meta');

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  if (!existing) {
    document.head.appendChild(element);
  }
}

function SeoHead({ article }) {
  useEffect(() => {
    const title = article?.metaTitle || 'Insights & Resources | Stackneuro Solutions';
    const description = article?.metaDescription || insightsIntro.description;
    const canonical = window.location.href;
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': article ? 'Article' : 'Blog',
      headline: article?.title || insightsIntro.heading,
      description,
      author: article?.author ? { '@type': 'Organization', name: article.author } : undefined,
      publisher: { '@type': 'Organization', name: 'Stackneuro Solutions' },
      datePublished: article?.date,
      image: article?.image?.src,
      url: canonical,
    };

    document.title = title;
    setMetaTag('meta[name="description"]', { name: 'description', content: description });
    setMetaTag('meta[property="og:title"]', { property: 'og:title', content: title });
    setMetaTag('meta[property="og:description"]', { property: 'og:description', content: description });
    setMetaTag('meta[property="og:type"]', { property: 'og:type', content: article ? 'article' : 'website' });
    setMetaTag('meta[property="og:url"]', { property: 'og:url', content: canonical });

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');

    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute('href', canonical);

    let schema = document.getElementById('stackneuro-blog-schema');

    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'stackneuro-blog-schema';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify(structuredData);
  }, [article]);

  return null;
}

function ArticleMeta({ article }) {
  return (
    <div className="blog-page-meta">
      <span>{article.category}</span>
      <time dateTime={new Date(article.date).toISOString()}>{article.date}</time>
      <span>{article.readingTime}</span>
    </div>
  );
}

function BlogCard({ article }) {
  return (
    <article className="blog-page-card">
      <a className="blog-page-card__media" href={article.href} aria-label={article.title}>
        <img src={article.image.src} alt={article.image.alt} loading="lazy" decoding="async" />
      </a>
      <div className="blog-page-card__content">
        <ArticleMeta article={article} />
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <a className="blog-page__link" href={article.href}>
          Read More
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </article>
  );
}

function BlogSidebar({ articles }) {
  return (
    <aside className="blog-page-sidebar" aria-label="Blog sidebar">
      <div className="blog-page-sidebar__block">
        <h2>Recent Posts</h2>
        {articles.slice(0, 4).map((article) => (
          <a href={article.href} key={`recent-${article.slug}`}>
            <span>{article.category}</span>
            {article.title}
          </a>
        ))}
      </div>

      <div className="blog-page-sidebar__block">
        <h2>Popular Posts</h2>
        {[featuredInsight, ...articles.slice(1, 3)].map((article) => (
          <a href={article.href} key={`popular-${article.slug}`}>
            <span>{article.readingTime}</span>
            {article.title}
          </a>
        ))}
      </div>

      <div className="blog-page-sidebar__block">
        <h2>Categories</h2>
        <div className="blog-page-sidebar__chips">
          {blogCategories.slice(1).map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </div>

      <div className="blog-page-sidebar__block">
        <h2>Tags</h2>
        <div className="blog-page-sidebar__chips">
          {popularTopics.map((topic) => (
            <span key={topic}>{topic}</span>
          ))}
        </div>
      </div>
    </aside>
  );
}

function BlogTransition({ tone = 'soft' }) {
  return <div className={`blog-page-transition blog-page-transition--${tone}`} aria-hidden="true" />;
}

function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return latestInsights.filter((article) => {
      const matchesCategory =
        activeCategory === 'All' ||
        article.category === activeCategory ||
        article.topics?.includes(activeCategory) ||
        (activeCategory === 'Software Development' && article.category === 'Software Engineering') ||
        (activeCategory === 'UI/UX' && article.category === 'UI/UX Design');

      const searchableText = `${article.title} ${article.excerpt} ${article.category} ${article.topics?.join(' ')}`.toLowerCase();
      const matchesSearch = !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  return (
    <>
      <section className="blog-page-hero" id="hero" aria-labelledby="blog-page-title">
        <div className="blog-page-hero__content">
          <p className="blog-page__eyebrow">Insights & Resources</p>
          <h1 className="blog-page-hero__title" id="blog-page-title">
            Ideas That Drive <span className="heading-gradient">Digital Innovation</span>
          </h1>
          <p className="blog-page-hero__description">
            Stackneuro shares insights about technology, AI, software engineering, cloud computing, digital transformation and business innovation.
          </p>
        </div>

        <figure className="blog-page-hero__visual">
          <img src={featuredInsight.image.src} alt={featuredInsight.image.alt} loading="eager" decoding="async" />
        </figure>
      </section>

      <BlogTransition tone="dark-to-light" />

      <section className="blog-page-section" aria-labelledby="featured-blog-title">
        <article className="blog-page-featured">
          <a className="blog-page-featured__media" href={featuredInsight.href} aria-label={featuredInsight.title}>
            <img src={featuredInsight.image.src} alt={featuredInsight.image.alt} loading="lazy" decoding="async" />
          </a>
          <div className="blog-page-featured__content">
            <ArticleMeta article={featuredInsight} />
            <h2 id="featured-blog-title">{featuredInsight.title}</h2>
            <p>{featuredInsight.excerpt}</p>
            <a className="blog-page__primary" href={featuredInsight.href}>
              Read Article
            </a>
          </div>
        </article>
      </section>

      <BlogTransition tone="light-to-dark" />

      <section className="blog-page-section blog-page-section--with-sidebar" aria-labelledby="latest-blog-title">
        <div className="blog-page-main">
          <div className="blog-page-section__intro">
            <p className="blog-page__eyebrow">Latest Articles</p>
            <h2 id="latest-blog-title">Explore perspectives by <span className="heading-gradient heading-gradient--dark">topic and outcome.</span></h2>
          </div>

          <form className="blog-page-search" role="search" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="blog-search">Search insights</label>
            <input
              id="blog-search"
              type="search"
              placeholder="Search AI, cloud, design, transformation..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </form>

          <div className="blog-page-filters" aria-label="Blog category filters">
            {blogCategories.map((category) => (
              <button
                className={`blog-page-filter${activeCategory === category ? ' blog-page-filter--active' : ''}`}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="blog-page-grid" aria-live="polite">
            {filteredArticles.map((article) => (
              <BlogCard article={article} key={article.slug} />
            ))}
          </div>
        </div>

        <BlogSidebar articles={latestInsights} />
      </section>

      <BlogTransition tone="dark-to-light" />

      <section className="blog-page-section blog-page-topics" aria-labelledby="popular-topics-title">
        <div className="blog-page-section__intro">
          <p className="blog-page__eyebrow">Popular Topics</p>
          <h2 id="popular-topics-title">A practical knowledge hub for <span className="heading-gradient heading-gradient--dark">modern teams.</span></h2>
        </div>
        <div className="blog-page-topics__grid">
          {popularTopics.map((topic) => (
            <article key={topic}>
              <span>{topic}</span>
            </article>
          ))}
        </div>
      </section>

      <BlogTransition tone="light-to-dark" />

      <section className="blog-page-newsletter" aria-labelledby="blog-newsletter-title">
        <div>
          <p className="blog-page__eyebrow">Newsletter</p>
          <h2 id="blog-newsletter-title">{blogNewsletter.heading}</h2>
          <p>{blogNewsletter.description}</p>
        </div>
        <form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="blog-newsletter-email">Email address</label>
          <input id="blog-newsletter-email" type="email" placeholder="you@company.com" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </>
  );
}

function BlogArticle({ article }) {
  const currentIndex = allInsights.findIndex((item) => item.slug === article.slug);
  const previousArticle = allInsights[currentIndex - 1];
  const nextArticle = allInsights[currentIndex + 1];
  const relatedArticles = allInsights
    .filter((item) => item.slug !== article.slug && (item.category === article.category || item.topics?.some((topic) => article.topics?.includes(topic))))
    .slice(0, 3);

  return (
    <>
      <section className="blog-article-hero" id="hero" aria-labelledby="blog-article-title">
        <nav className="blog-page-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/blog">Blog</a>
          <span>/</span>
          <span>{article.category}</span>
        </nav>
        <ArticleMeta article={article} />
        <h1 id="blog-article-title">{article.title}</h1>
        <p>{article.excerpt}</p>
      </section>

      <BlogTransition tone="dark-to-light" />

      <article className="blog-article">
        <figure className="blog-article__media">
          <img src={article.image.src} alt={article.image.alt} loading="eager" decoding="async" />
        </figure>

        <div className="blog-article__layout">
          <aside className="blog-article__toc" aria-label="Table of contents">
            <h2>Contents</h2>
            {article.content.map((section) => (
              <a href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} key={section.heading}>
                {section.heading}
              </a>
            ))}
          </aside>

          <div className="blog-article__content">
            <p className="blog-article__author">By {article.author}</p>
            {article.content.map((section) => (
              <section id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')} key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}

            <div className="blog-article__share" aria-label="Share article">
              <span>Share</span>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noreferrer">X</a>
            </div>
          </div>
        </div>
      </article>

      <BlogTransition />

      <section className="blog-page-section blog-article-related" aria-labelledby="related-articles-title">
        <div className="blog-page-section__intro">
          <p className="blog-page__eyebrow">Related Articles</p>
          <h2 id="related-articles-title">Continue exploring <span className="heading-gradient heading-gradient--dark">Stackneuro insights.</span></h2>
        </div>
        <div className="blog-page-grid">
          {relatedArticles.map((related) => (
            <BlogCard article={related} key={related.slug} />
          ))}
        </div>
      </section>

      <BlogTransition />

      <nav className="blog-article-nav" aria-label="Article navigation">
        {previousArticle ? <a href={previousArticle.href}>Previous: {previousArticle.title}</a> : <span />}
        {nextArticle ? <a href={nextArticle.href}>Next: {nextArticle.title}</a> : <span />}
      </nav>
    </>
  );
}

function BlogPage({ slug }) {
  const article = slug ? allInsights.find((item) => item.slug === slug) : null;

  return (
    <main className="blog-page">
      <SeoHead article={article} />
      {slug && article ? <BlogArticle article={article} /> : <BlogIndex />}
    </main>
  );
}

export default BlogPage;
