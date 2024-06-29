import Cookies from 'js-cookie';
// import axios from 'axios';


const onSubmit = async (formData, UserLogin, login, router) => {
    try {
      const response = await UserLogin({
        variables: {
          email: formData.email,
          password: formData.password
        }
      });
  
      if (response) {
        login()
        console.log(response)
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      // Handle login errors as needed
    }
  };

const handleGoogleLoginSuccess = async (response, login, navigate, setCredentialError) => {
    const token = response.credential;
    try {
      const res = await axios.post('http://localhost:3000/Oauth/google-login', { token }, {
        withCredentials: true 
      });
      login();
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error('Google login failed:', error);
      setCredentialError('Google login failed. Please try again.');
    }
  };

const handleGoogleLoginError = (setCredentialError) => {
    console.log('Login Failed');
    setCredentialError('Google login failed. Please try again.');
};

export { onSubmit, handleGoogleLoginSuccess, handleGoogleLoginError };
