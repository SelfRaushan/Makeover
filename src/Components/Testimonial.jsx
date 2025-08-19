import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Aarti Sharma",
    role: "Bride",
    text: "Makeover by Lena made my wedding day magical with stunning makeup that lasted all day!",
  },
  {
    name: "Neha Singh",
    role: "Party Guest",
    text: "The style was perfect for my party look, I felt confident and beautiful.",
  },
  {
    name: "Priya Kumari",
    role: "Casual Client",
    text: "Comfortable and elegant makeover for everyday wear. Highly recommend!",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const length = testimonials.length;

  const next = () => setIndex((index + 1) % length);
  const prev = () => setIndex((index - 1 + length) % length);

  return (
    <section id="testimonials" className="testimonials-section py-20 bg-pink-50 px-5 text-center max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold text-pink-700 mb-10">What Our Clients Say</h2>
      <div className="relative">
        <AnimatePresence exitBeforeEnter>
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-xl italic text-pink-900 mb-6"
          >
            “{testimonials[index].text}”
          </motion.blockquote>
        </AnimatePresence>
        <p className="font-semibold text-pink-800 mb-6">
          - {testimonials[index].name}, {testimonials[index].role}
        </p>
        <div className="flex justify-center space-x-6">
          <button onClick={prev} aria-label="Previous testimonial" className="bg-[#ec4899] text-white py-2 px-4 rounded-md hover:bg-[#db2777] cursor-pointer">Prev</button>
          <button onClick={next} aria-label="Next testimonial" className="bg-[#ec4899] text-white py-2 px-4 rounded-md hover:bg-[#db2777]">Next</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
