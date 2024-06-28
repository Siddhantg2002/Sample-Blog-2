
const delay = (d) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, d * 1000);
  });
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

const onSubmit = async (signUp, formData, setSuccessMessage, router) => {
  await delay(3);
    const response = await signUp({ 
      variables: { 
        username: formData.username, 
        email: formData.email, 
        password: formData.password 
      } 
    });
    if (response.data && response.data.createUser) {
      setSuccessMessage("Sign up successful!");
      await delay(2)
      router.push("/login")
    }
};

export { validatePassword, onSubmit };
