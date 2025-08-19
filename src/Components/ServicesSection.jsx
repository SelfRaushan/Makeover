import React from 'react';
import { FaHeart, FaPalette, FaStar } from 'react-icons/fa';

const serviceData = [
  {
    title: "Wedding Makeup",
    description: "Flawless bridal looks for your big day",
    icon: <FaHeart className="text-pink-500" size={32} />
  },
  {
    title: "Custom Party Wear",
    description: "Glamorous styles for any celebration",
    icon: <FaPalette className="text-pink-500" size={32} />
  },
  {
    title: "Everyday Glam",
    description: "Comfortable and elegant makeover looks",
    icon: <FaStar className="text-pink-500" size={32} />
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
