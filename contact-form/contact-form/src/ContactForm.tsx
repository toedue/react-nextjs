import { useForm } from "./useForm";
import "./ContactForm.css"
export function ContactForm() {
  const { values, errors, submitted, handleChange, handleSubmit } = useForm();
  console.log(errors)

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h2>Contact Us</h2>

      {submitted && (
        <p className="success-message">Thanks! Your message was sent.</p>
      )}

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error-message">{errors.message}</p>}
      </div>

      <button type="submit">Send</button>
    </form>
  );
}
