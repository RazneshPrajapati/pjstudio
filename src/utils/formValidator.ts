/**
 *
 * @param form Validate the form elements
 * @returns Error message
 */
export default function FormValidator(form: any): string {
  // Empty field validation
  if (
    form.firstName === "" ||
    form.lastname === "" ||
    form.dob === "" ||
    form.email === "" ||
    form.contact === "" ||
    form.password === "" ||
    form.cPassword === ""
  ) {
    return "Please fill up all the fields.";
  }

  // Name validation
  const regxName = /[^a-zA-Z]/g;
  if (
    form.firstName.match(regxName) ||
    form.middleName.match(regxName) ||
    form.lastName.match(regxName)
  ) {
    return "Only alphabets are allowed in names.";
  }

  // Date of Birth validation
  const today = new Date();
  const date = new Date(form.dob);
  if(date.getTime() >= today.getTime()) {
    return "Invalid date.";
  }


  // Checkbox validation
  if (form.interest.length === 0) {
    return "Atleast one interest should be selected.";
  }

  // Email validation
  const regxEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!form.email.match(regxEmail)) {
    return "Email is invalid";
  }

  // Contact validation
  const regxContact = /[^0-9]/g;
  if (form.contact.match(regxContact)) {
    return "Only numbers are allowed in contact.";
  } else {
    if (form.contact.length != 10) {
      return "Invalid number in contact.";
    }
  }

  // Password validation
  if (form.password.length < 8) {
    return "Password must contain atleast 8 characters.";
  }

  // Confirm password validation
  if (form.password !== form.cPassword) {
    return "Password does not match.";
  }

  return "";
}
