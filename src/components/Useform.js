import { useState, useEffect } from "react";

export const Useform = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      callback(values);
    }
  }, [errors, values, callback , submit]);

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
  };
};

export default Useform;
