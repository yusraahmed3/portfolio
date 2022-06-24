export default function ValidateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email";
  }

  if (!values.subject) {
    errors.subject = "Subject required";
  }

  if (!values.message) {
    errors.message = "Message required";
  }

  return errors;
}
