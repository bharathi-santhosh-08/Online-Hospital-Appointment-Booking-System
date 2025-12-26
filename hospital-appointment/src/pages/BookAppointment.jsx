import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import doctorsImg from "../assets/doctors.png";

export default function BookAppointment() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBook = () => {
    if (!date || !time) {
      alert("Please select date and time");
      return;
    }

    const appointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    appointments.push({
      doctor: name,
      date,
      time,
    });

    localStorage.setItem("appointments", JSON.stringify(appointments));
    navigate("/appointments");
  };

  return (
    <div className="book-page fade-in">
      <div className="book-card slide-up">
        
        <img
          src={doctorsImg}
          alt="Doctor"
          className="book-img"
        />

        <h2>Book Appointment</h2>
        <p className="doctor-name">{name}</p>

        <label>Select Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Select Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button onClick={handleBook} className="btn-auth">
          Confirm Appointment
        </button>
      </div>
    </div>
  );
}
