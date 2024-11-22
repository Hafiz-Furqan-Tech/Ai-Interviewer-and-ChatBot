import { useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleBtn from "../Components/googleBtn";
import Inputs from "../Components/Inputs";
import AuthButton from "../Components/AuthButton";

const Login = () => {
  const {
    error,
    toastObj,
    LoginEmailRef,
    LoginPasswordRef,
    handleLoginSubmit,
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error, toastObj);
    }
  }, [error]);

  const loginFields = [
    {
      type: "email",
      id: "Email",
      ref: LoginEmailRef,
      placeholder: "your@gmail.com",
      label: "Email",
      autocomplete: "off",
    },
    {
      type: "password",
      id: "Password",
      ref: LoginPasswordRef,
      placeholder: "******",
      label: "Password",
      autocomplete: "off",
    },
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col bg-[#040E1A] w-full sm:w-[400px] items-center gap-6 py-6 rounded-lg shadow-lg shadow-blue-300">
        <h1 className="text-4xl font-bold">Sign in</h1>
        <Inputs fields={loginFields} />
        <AuthButton text={"Sign in"} handleSubmit={handleLoginSubmit} />
        <p>
          Don't have an account?
          <Link to="/signup" className="text-blue-500 pl-1">
            Sign up
          </Link>
        </p>
        <div className="flex items-center sm:w-[85%] w-[95%]">
          <div className="flex-grow border-t border-gray-500"></div>
          <span className="px-3 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-500"></div>
        </div>
        <GoogleBtn navigate={navigate} />
      </div>
    </div>
  );
};

export default Login;