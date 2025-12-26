import { Link } from "react-router-dom";
import doctors from "../data";
import "../styles/main.css"; // optional if you have styles

export default function Doctors() {
  return (
    <div className="doctors-container">
      <h1>Our Doctors</h1>

      <div className="doctors-grid">
        {doctors.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <img
              src={doctor.img}
              alt={doctor.name}
              className="doctor-img"
            />

            <h3>{doctor.name}</h3>
            <p>{doctor.specialization}</p>

            <Link to={`/book/${doctor.name}`} className="btn">
              Book Appointment
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
