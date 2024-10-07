import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const ProtectedRoute = ({ element }) => {
  const location = useLocation();
  const { auth } = useAuth();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
};

export default ProtectedRoute;
