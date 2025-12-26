import { useEffect, useState } from "react";
import doctorsImg from "../assets/doctors.png";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(data);
  }, []);

  const cancelAppointment = (index) => {
    const updated = appointments.filter((_, i) => i !== index);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  return (
    <div className="appointments-page fade-in">
      <h2 className="page-title">My Appointments</h2>

      {appointments.length === 0 ? (
        <p className="empty-text">No appointments booked yet.</p>
      ) : (
        <div className="grid">
          {appointments.map((appt, index) => (
            <div className="card appointment-card" key={index}>
              <img
                src={doctorsImg}
                alt="Doctor"
                className="doctor-img"
              />

              <h3>{appt.doctor}</h3>
              <p>Date: {appt.date}</p>
              <p>Time: {appt.time}</p>

              <button
                className="btn cancel-btn"
                onClick={() => cancelAppointment(index)}
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
