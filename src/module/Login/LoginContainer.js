import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import validate from "./Validate";

const LoginContainer = () => {
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@admin.com";

  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "admin";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (formValues.email === userName && formValues.password === userPassword) {
      navigate("/home");
    }
  };

  return {
    handleMouseDownPassword,
    handleClickShowPassword,
    handleSubmit,
    showPassword,
    formValues,
    handleChange,
    formErrors,
    setFormErrors,
  };
};
export default LoginContainer;
