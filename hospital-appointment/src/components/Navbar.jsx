import { Link, useNavigate } from "react-router-dom";
import logo from "/hospital.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("appointments");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-left">
        <img src={logo} alt="Hospital Logo" className="nav-logo" />
        <span className="nav-title">Hospital</span>
      </div>

      {/* Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>

        {user && (
          <>
            <Link to="/doctors">Doctors</Link>
            <Link to="/appointments">My Appointments</Link>
          </>
        )}

        {!user ? (
          <Link to="/login" className="btn-nav" style={{ color: "white" }}>
            Login
          </Link>
        ) : (
          <button onClick={handleLogout} className="btn-nav logout">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}



