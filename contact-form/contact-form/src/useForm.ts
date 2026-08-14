import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

function validate(values: FormValues): FormErrors {
  const newErrors: FormErrors = { name: "", email: "", message: "" };

  if (!values.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!values.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    newErrors.email = "Please enter a valid email address";
  }

  if (!values.message.trim()) {
    newErrors.message = "Message is required";
  }

  return newErrors;
}

export function useForm() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validate(values);
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some((msg) => msg !== "");
    if (!hasErrors) {
      setSubmitted(true);
    }
  };

  return { values, errors, submitted, handleChange, handleSubmit };
}
