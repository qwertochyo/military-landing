import { useState } from "react";

const initialFormState = {
  name: "",
  lastname: "",
  phone: "",
  email: "",
  message: "",
  confirm: false,
};

const initialErrorsState = {
  name: "",
  lastname: "",
  phone: "",
  email: "",
  message: "",
  confirm: "",
};

export const useForm = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [errorsState, setErrors] = useState(initialErrorsState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validation = () => {
    const errors = { ...initialErrorsState };
    const phoneDigits = formState.phone.replace(/\D/g, "");

    if (!formState.name.trim()) {
      errors.name = "Введите имя";
    }

    if (!formState.lastname.trim()) {
      errors.lastname = "Введите фамилию";
    }

    if (!phoneDigits) {
      errors.phone = "Введите телефон";
    } else if (!/^7\d{10}$/.test(phoneDigits)) {
      errors.phone = "Введите корректный номер РФ";
    }

    if (!formState.email.includes("@")) {
      errors.email = "Некорректная почта";
    }

    if (!formState.confirm) {
      errors.confirm = "Необходимо согласие";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validation();
    const hasErrors = Object.values(validationErrors).some(Boolean);

    if (hasErrors) {
      setErrors(validationErrors);
      return;
    }

    setErrors(initialErrorsState);

    console.log(formState);
  };

  return { formState, errorsState, handleChange, handleSubmit };
};
