import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Contact-form.css"

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>Contact Us</h2>

      {isSubmitSuccessful && (
        <p className="success-message">Thanks! Your message was sent.</p>
      )}

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "Name is required",
          })}
        />
        <p className="error-message">{errors.name?.message}</p>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        <p className="error-message">{errors.email?.message}</p>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          {...register("message", {
            required: "Message is required",
          })}
        />
        <p className="error-message">{errors.message?.message}</p>
      </div>

      <button type="submit">Send</button>
    </form>
  );
}