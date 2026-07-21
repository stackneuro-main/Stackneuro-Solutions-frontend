import { featuredInsight, insightsIntro, latestInsights } from '../data/insights';
import '../styles/insights.css';

function ArticleMeta({ category, date, readingTime }) {
  return (
    <div className="insights-card__meta">
      <span>{category}</span>
      <time dateTime={new Date(date).toISOString()}>{date}</time>
      <span>{readingTime}</span>
    </div>
  );
}

function InsightsResources() {
  return (
    <section className="insights" id="insights" aria-labelledby="insights-title">
      <div className="insights__transition" aria-hidden="true" />

      <div className="insights__inner">
        <header className="insights__intro">
          <p className="insights__eyebrow">{insightsIntro.eyebrow}</p>
          <h2 className="insights__title" id="insights-title">
            Ideas, trends and <span className="heading-gradient heading-gradient--dark">engineering insights</span> from Stackneuro.
          </h2>
          <p className="insights__description">{insightsIntro.description}</p>
        </header>

        <article className="insights-featured" aria-labelledby="featured-insight-title">
          <a className="insights-featured__media" href={featuredInsight.href} aria-label={featuredInsight.title}>
            <img src={featuredInsight.image.src} alt={featuredInsight.image.alt} loading="lazy" decoding="async" />
          </a>

          <div className="insights-featured__content">
            <ArticleMeta
              category={featuredInsight.category}
              date={featuredInsight.date}
              readingTime={featuredInsight.readingTime}
            />
            <h3 id="featured-insight-title">{featuredInsight.title}</h3>
            <p>{featuredInsight.excerpt}</p>
            <a className="insights__read-link" href={featuredInsight.href}>
              Read Article
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </article>

        <div className="insights__latest-header">
          <p>Latest Articles</p>
          <span>Engineering notes, technology perspectives and product thinking.</span>
        </div>

        <div className="insights__grid">
          {latestInsights.map((article) => (
            <article className="insights-card" key={article.title}>
              <a className="insights-card__media" href={article.href} aria-label={article.title}>
                <img src={article.image.src} alt={article.image.alt} loading="lazy" decoding="async" />
              </a>
              <div className="insights-card__content">
                <ArticleMeta category={article.category} date={article.date} readingTime={article.readingTime} />
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <a className="insights__read-link" href={article.href}>
                  Read More
                  <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InsightsResources;
