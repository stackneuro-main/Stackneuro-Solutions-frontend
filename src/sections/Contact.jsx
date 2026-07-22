import { useState } from 'react';
import { contactCards, contactFields, contactIntro } from '../data/contact';
import { serviceCategories } from '../data/services';
import '../styles/contact.css';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

const contactIconPaths = {
  location: (
    <>
      <path d="M16 28s9-8.1 9-16a9 9 0 0 0-18 0c0 7.9 9 16 9 16z" />
      <circle cx="16" cy="12" r="3" />
    </>
  ),
  phone: (
    <>
      <path d="M10 6l4 5-3 3c1.7 3.4 3.8 5.5 7 7l3-3 5 4-2 4c-.5 1-1.5 1.5-2.6 1.2C13.2 25.1 6.9 18.8 4.8 10.6 4.5 9.5 5 8.5 6 8l4-2z" />
    </>
  ),
  email: (
    <>
      <rect x="5" y="8" width="22" height="16" rx="3" />
      <path d="M7 10l9 7 9-7" />
    </>
  ),
  hours: (
    <>
      <circle cx="16" cy="16" r="10" />
      <path d="M16 10v7l5 3" />
    </>
  ),
};

function ContactIcon({ icon }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      {contactIconPaths[icon]}
    </svg>
  );
}

function Contact() {
  const subjectField = contactFields.find((field) => field.name === 'subject');
  const primaryFields = contactFields.filter((field) => field.name !== 'subject');
  const [submissionState, setSubmissionState] = useState({
    status: 'idle',
    message: "We'll respond within one business day.",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      full_name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      company: String(formData.get('company') || '').trim(),
      service: String(formData.get('service') || '').trim(),
      subject: String(formData.get('subject') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };

    setSubmissionState({
      status: 'loading',
      message: 'Submitting your enquiry...',
    });

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const detail = Array.isArray(data.errors)
          ? data.errors.map((error) => error.msg).join(' ')
          : data.detail || data.message;

        throw new Error(detail || 'Unable to submit your enquiry. Please try again.');
      }

      form.reset();
      setSubmissionState({
        status: 'success',
        message: `${data.message || 'Your enquiry has been submitted successfully.'} Enquiry ID: ${data.enquiry_id}`,
      });
    } catch (error) {
      setSubmissionState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Unable to submit your enquiry. Please try again.',
      });
    }
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-section__inner">
        <div className="contact-section__content">
          <p className="contact-section__eyebrow">Contact Stackneuro</p>
          <h2 className="contact-section__title" id="contact-title">
            Let's Start Your <span className="heading-gradient heading-gradient--dark">Next Project</span>
          </h2>
          <p className="contact-section__description">{contactIntro.description}</p>

          <div className="contact-section__cards" aria-label="Contact information">
            {contactCards.map((card) => (
              <article className="contact-card" key={card.title}>
                <span className="contact-card__icon">
                  <ContactIcon icon={card.icon} />
                </span>
                <div>
                  <h3>{card.title}</h3>
                  {card.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <form className="contact-form" aria-label="Contact form" onSubmit={handleSubmit}>
          <div className="contact-form__grid">
            {primaryFields.map((field) => (
              <div className="contact-form__field" key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  autoComplete={field.autoComplete}
                  id={field.id}
                  name={field.name}
                  placeholder={field.label}
                  required={field.name !== 'company'}
                  type={field.type}
                />
              </div>
            ))}

            <div className="contact-form__field">
              <label htmlFor="contact-service">Service</label>
              <select id="contact-service" name="service" defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>
                {serviceCategories.map((category) => (
                  <optgroup label={category.label} key={category.id}>
                    {category.services.map((service) => (
                      <option value={service.name} key={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {subjectField ? (
              <div className="contact-form__field" key={subjectField.id}>
                <label htmlFor={subjectField.id}>{subjectField.label}</label>
                <input
                  autoComplete={subjectField.autoComplete}
                  id={subjectField.id}
                  name={subjectField.name}
                  placeholder={subjectField.label}
                  required
                  type={subjectField.type}
                />
              </div>
            ) : null}

            <div className="contact-form__field contact-form__field--message">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" placeholder="Tell us about your project" required rows="7" />
            </div>
          </div>

          <button className="contact-form__button" disabled={submissionState.status === 'loading'} type="submit">
            {submissionState.status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          <p
            className={`contact-form__note contact-form__note--${submissionState.status}`}
            role={submissionState.status === 'error' ? 'alert' : 'status'}
          >
            {submissionState.message}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
