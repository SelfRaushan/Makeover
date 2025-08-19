import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Wedding Makeup",
    date: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}, your booking request is received!`);
    // Hook up API call or backend form handling here
  };

  return (
    <section id="booking" className="booking-section py-20 px-5 bg-white max-w-lg mx-auto rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-pink-700 mb-8 text-center">Book Your Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-6 ">
        <input 
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full py-3 px-4 border-2 border-pink-300 rounded-md text-base transition-colors duration-300"
        />
        <input 
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full py-3 px-4 border-2 border-pink-300 rounded-md text-base transition-colors duration-300"
        />
        <input 
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full py-3 px-4 border-2 border-pink-300 rounded-md text-base transition-colors duration-300"
        />
        <select className="py-3 px-4 border-2 border-pink-300 rounded-md text-base transition-colors duration-300"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option>Wedding Makeup</option>
          <option>Custom Party Wear</option>
          <option>Everyday Glam</option>
        </select>
        <input className="ml-26 py-3 px-4 border-2 border-pink-300 rounded-md text-base transition-colors duration-300"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          
        />
        <button type="submit" className="btn-submit w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition">
          Submit Request
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
