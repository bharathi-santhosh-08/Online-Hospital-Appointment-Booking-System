import { Link } from "react-router-dom";
import doctorsImg from "../assets/doctor.png";

function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="home-container">
        <div className="home-content">
          <h1>Online Hospital Appointment Booking</h1>
          <p>Book your doctor appointment anytime, anywhere</p>
          <Link to="/doctors" className="btn-primary">Book Appointment</Link>
        </div>

        <div className="home-image">
          <img src={doctorsImg} alt="Doctors" />
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="features">
        <h2>Why Choose Us?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <span>📅</span>
            <h3>Easy Booking</h3>
            <p>Book doctor appointments in just a few clicks.</p>
          </div>

          <div className="feature-card">
            <span>👨‍⚕️</span>
            <h3>Verified Doctors</h3>
            <p>Consult with experienced and certified doctors.</p>
          </div>

          <div className="feature-card">
            <span>🔒</span>
            <h3>Secure Login</h3>
            <p>Your data is protected with secure authentication.</p>
          </div>

          <div className="feature-card">
            <span>📄</span>
            <h3>Appointment History</h3>
            <p>View and manage all your past appointments.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

