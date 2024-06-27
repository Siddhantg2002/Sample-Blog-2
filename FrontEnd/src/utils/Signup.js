import { showToast } from "@cred/neopop-web/lib/components";

const delay = (d) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, d * 1000);
  });
};

const redirect = async (router, isSubmitSuccessful, errorMessage) => {
  if (isSubmitSuccessful && !errorMessage) {
    await delay(2);
    router.push("/login");
  }
};

const validatePassword = (value) => {
  const hasNumber = /\d/.test(value);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  const hasMinLength = value.length >= 8;

  if (!hasMinLength) {
    return "* Password must be at least 8 characters long";
  }
  if (!hasNumber) {
    return "* Password must include at least one number";
  }
  if (!hasSpecialChar) {
    return "* Password must include at least one special character";
  }

  return true; // Strong password
};

const onSubmit = async (signUp, formData, setSuccessMessage, setErrorMessage) => {
  await delay(3);
  try {
    const response = await signUp({ variables: {username: formData.username, email: formData.email, password: formData.password } });
    if (response.data) {
      setSuccessMessage("Sign up successful!");
    }
  } catch (error) {
    setErrorMessage(error.message);
  }
};

const handleToastMessages = (errorMessage, setErrorMessage, isSubmitting, isValid, successMessage, setSuccessMessage) => {
  if (errorMessage) {
    showToast(errorMessage, { type: "error", autoCloseTime: "2000" });
    setErrorMessage("");
  }
  if (isSubmitting && isValid) {
    showToast("Submitting...", { type: "warning", autoCloseTime: "3000" });
  }
  if (successMessage) {
    showToast(successMessage, { type: "success", autoCloseTime: "2000" });
    setSuccessMessage("");
  }
};

export { redirect, validatePassword, onSubmit, handleToastMessages };
