import React from 'react';
import { FaHeart, FaPalette, FaStar, FaBirthdayCake, FaGift } from "react-icons/fa";

const serviceData = [
  {
    title: "Bridal Makeup",
    description: "Flawless, high-definition bridal looks, including HD and airbrush makeup styles.",
    icon: <FaHeart className="text-pink-600" size={40} />
  },
  {
    title: "Party & Event Makeup",
    description: "Glamorous, long-lasting makeup for parties, engagements, and special occasions.",
    icon: <FaBirthdayCake className="text-pink-600" size={40} />
  },
  {
    title: "HD Airbrush Makeup",
    description: "Professional airbrush makeup providing a natural and flawless finish.",
    icon: <FaPalette className="text-pink-600" size={40} />
  },
  {
    title: "Engagement Makeup",
    description: "Elegant and timeless makeup to celebrate your engagement moments.",
    icon: <FaGift className="text-pink-600" size={40} />
  },
  {
    title: "Family & Bridesmaid Makeup",
    description: "Personalized makeup services for the bride’s family, bridesmaids, and guests.",
    icon: <FaStar className="text-pink-600" size={40} />
  }
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-pink-700 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection = () => (
  <section id="services" className="services-section py-20 bg-pink-50 px-5">
    <div className="container mx-auto max-w-5xl text-center mb-12">
      <h2 className="text-3xl font-extrabold text-pink-700 mb-3">Our Services</h2>
      <p className="text-pink-900 max-w-lg mx-auto">
        Expert makeup and styling services to make you shine on every occasion.
      </p>
    </div>

    <div className="container mx-auto max-w-5xl grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {serviceData.map(({ icon, title, description }) => (
        <ServiceCard key={title} icon={icon} title={title} description={description} />
      ))}
    </div>
  </section>
);

export default ServicesSection;
