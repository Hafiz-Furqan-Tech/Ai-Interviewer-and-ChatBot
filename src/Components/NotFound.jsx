import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../Context/AuthContext";

const NotFound = () => {
  const { User } = useAuth();
  return (
    <div className="h-[100svh] w-full flex items-center justify-center">
      <div className="text-center p-12 text-white flex  flex-col gap-8">
        <h1 className="text-6xl font-semibold text-red-600">
          Oops! Page Not Found
        </h1>
        <p className="text-xl">The page you're looking for doesn't exist.</p>
        <p className="text-lg">
          It might have been moved, deleted, or perhaps you mistyped the URL.
        </p>
        <div>
          <NavLink to={User ? "/app" : "/"}>
            <Button text={"Back to Home"}></Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;