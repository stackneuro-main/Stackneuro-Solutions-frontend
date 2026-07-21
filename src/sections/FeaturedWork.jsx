import FeaturedProject from '../components/FeaturedProject';
import { featuredProjects, featuredWorkIntro } from '../data/featuredWork';
import '../styles/featured-work.css';

function FeaturedWork() {
  return (
    <section className="featured-work" id="our-work" aria-labelledby="featured-work-title">
      <div className="featured-work__transition" aria-hidden="true" />

      <div className="featured-work__inner">
        <div className="featured-work__intro">
          <p className="featured-work__eyebrow">{featuredWorkIntro.eyebrow}</p>
          <h2 className="featured-work__title" id="featured-work-title">
            Ideas transformed into <span className="heading-gradient">digital experiences.</span>
          </h2>
          <p className="featured-work__description">{featuredWorkIntro.description}</p>
        </div>

        <div className="featured-work__projects">
          {featuredProjects.map((project) => (
            <FeaturedProject project={project} key={project.id} />
          ))}
        </div>

        <div className="featured-work__footer">
          <a className="featured-work__all-link" href="/our-work">
            Explore All Projects <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
