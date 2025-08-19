import React from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import PortfolioSlider from "../Components/Portfolio";
import TestimonialCarousel from "../Components/Testimonial";
import BookingForm from "../Components/Booking";
import ServicesSection from "../Components/ServicesSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      {/* <PortfolioSlider images={images} /> */}
      <TestimonialCarousel />
      <BookingForm />
      <Footer />
    </>
  );
};

export default Home;
