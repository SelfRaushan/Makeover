import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/image/bg2.jpg"; // Replace with your actual image


const skills = [
  { name: "Makeup Artistry", percent: 95 },
  { name: "Customer Care", percent: 90 },
  { name: "Styling", percent: 85 },
  { name: "Bridal Consultation", percent: 80 },
];

const team = [
  {
    name: "Neha Sharma",
    role: "Lead Makeup Artist",
    img: team1,
  },
  {
    name: "Priya Patel",
    role: "Senior Stylist",
    img: team2,
  },
  {
    name: "Amit Kapoor",
    role: "Bridal Specialist",
    img: team3,
  },
];

const info = [
  { label: "Email", value: "info@makeupartistry.com" },
  { label: "Freelance", value: "Available" },
  { label: "Languages", value: "English, Hindi, Bengali, Telugu" },
];

const AboutPage = () => (
  <div className="bg-gradient-to-br from-pink-50 to-pink-200 min-h-screen">
    {/* Hero Section */}
    <section className="py-20 text-center">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-pink-700 mb-4"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        About Us
      </motion.h1>
      <motion.p
        className="max-w-2xl mx-auto text-lg text-gray-700"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Bringing the best of beauty and style to your special moments.
        Meet our passionate team and see our dedication in every brushstroke!
      </motion.p>
    </section>

    {/* About Box */}
    <section className="flex justify-center my-12 px-3">
      <motion.div
        className="w-full max-w-5xl bg-white/90 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
      >
        {/* Image on Left */}
        <motion.div
          className="md:w-1/2 w-full h-64 md:h-auto"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImg}
            alt="About Us"
            className="object-cover w-full h-full"
          />
        </motion.div>
        {/* Text on Right */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col justify-center p-10"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-3">
            We Love Making You Shine
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our team of seasoned makeup artists, stylists, and beauty professionals is dedicated to making your day unforgettable.
            With over a decade of collective experience and an emphasis on personalized service, we turn your vision into reality—whether for a wedding, party, or special shoot.
          </p>
          <ul className="mb-2">
            {info.map((item, idx) => (
              <li key={idx} className="flex flex-row mb-1">
                <span className="font-semibold w-28">{item.label}:</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>

    {/* Skills Section */}
    <section className="max-w-5xl mx-auto px-3 mb-10">
      <motion.h3
        className="text-2xl font-bold text-pink-700 mb-6"
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Expertise
      </motion.h3>
      <div className="grid md:grid-cols-2 gap-5">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>
            <div className="w-full bg-pink-200 rounded-full h-3">
              <div
                className="bg-pink-500 h-3 rounded-full transition-all duration-700"
                style={{ width: `${skill.percent}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Team Section */}
    <section className="max-w-5xl mx-auto px-4 py-10">
      <motion.h3
        className="text-2xl font-bold text-pink-700 mb-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Meet Our Team
      </motion.h3>
      <div className="flex flex-wrap justify-center gap-8">
        {team.map(({ name, role, img }, idx) => (
          <motion.div
            key={name}
            className="w-64 bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col items-center"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={img}
              alt={name}
              className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-pink-300"
            />
            <h4 className="text-lg font-bold text-pink-700">{name}</h4>
            <p className="text-gray-600">{role}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Call to Action */}
    <section className="text-center py-12">
      <motion.h4
        className="text-2xl font-semibold mb-2"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Ready to look your best?
      </motion.h4>
      <motion.p
        className="mb-6 text-gray-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Contact us today to book your consultation or session with our expert team.
      </motion.p>
      <motion.a
        href="mailto:info@makeupartistry.com"
        className="inline-block bg-pink-500 hover:bg-pink-700 text-white font-semibold px-7 py-3 rounded-full shadow-lg transition-all"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.a>
    </section>
  </div>
);

export default AboutPage;
