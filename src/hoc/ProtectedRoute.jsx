import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const location = useLocation();
  const auth = true;

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
};

export default ProtectedRoute;
