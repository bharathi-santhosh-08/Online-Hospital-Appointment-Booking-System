import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");

  // If user not logged in, redirect to Login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, allow access
  return children;
}
