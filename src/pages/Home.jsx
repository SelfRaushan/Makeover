import React from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import PortfolioSlider from "../Components/Portfolio";
import TestimonialCarousel from "../Components/Testimonial";
import BookingForm from "../Components/Booking";
import ServicesSection from "../Components/ServicesSection";
import About from "../Components/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ServicesSection />
      <PortfolioSlider />
      <TestimonialCarousel />
      <BookingForm />
      <Footer />
    </>
  );
};

export default Home;
