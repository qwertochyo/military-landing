import { useState, type SyntheticEvent, type ChangeEvent } from "react";

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, type } = target;

    const value =
      type === "checkbox" ? (target as HTMLInputElement).checked : target.value;

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setFormState((prev) => ({
      ...prev,
      [name]: value,
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

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validation();
    const hasErrors = Object.values(validationErrors).some(Boolean);

    if (hasErrors) {
      setErrors(validationErrors);
      return;
    }

    setErrors(initialErrorsState);
    setFormState(initialFormState);

    console.log(formState);
  };

  return { formState, errorsState, handleChange, handleSubmit };
};
