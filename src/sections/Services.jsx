import ServicesCategory from '../components/ServicesCategory';
import { serviceCategories, servicesIntro } from '../data/services';
import '../styles/services.css';

function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="services__transition" aria-hidden="true" />
      <div className="services__intro">
        <p className="services__eyebrow">{servicesIntro.eyebrow}</p>
        <h2 className="services__title" id="services-title">
          Solutions engineered for <span className="heading-gradient heading-gradient--dark">what's next.</span>
        </h2>
        <p className="services__description">{servicesIntro.description}</p>
      </div>

      <div className="services__categories">
        {serviceCategories.map((category) => {
          const previewCategory = {
            ...category,
            services: category.services.slice(0, 5),
          };

          return <ServicesCategory category={previewCategory} key={category.id} />;
        })}
      </div>
    </section>
  );
}

export default Services;
