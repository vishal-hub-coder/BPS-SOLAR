import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "BPS Renewables delivered our 1 MW solar project with outstanding professionalism and on-time execution. Their team is highly skilled and support is excellent.",
    author: "Rajesh Kumar",
    designation: "Plant Head, ABC Industries Pvt Ltd.",
  },
  {
    text: "Switching to solar with BPS has reduced our energy costs by 60% and improved our sustainability goals. Highly recommended!",
    author: "Priya Sharma",
    designation: "CEO, GreenTech Solutions",
  },
  {
    text: "The installation was seamless, and the maintenance service is top-notch. BPS Renewables is our go-to partner for renewable energy.",
    author: "Amit Patel",
    designation: "Operations Manager, SolarCorp Ltd.",
  },
];

const WhyUs = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* Testimonial Section */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="mb-4">
                <span className="text-green-500 font-semibold tracking-wide text-sm uppercase">
                  What Our Clients Say
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                Trusted by Leading Businesses
              </h2>

              <div className="bg-white rounded-2xl shadow-xl p-8 relative">
                <Quote className="text-yellow-400 text-4xl mb-4" />
                <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="border-l-4 border-green-500 pl-4">
                  <cite className="font-semibold text-gray-800 not-italic">
                    {testimonials[currentTestimonial].author}
                  </cite>
                  <p className="text-gray-600 text-sm mt-1">
                    {testimonials[currentTestimonial].designation}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-0 right-0 flex gap-2 mt-4">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-green-500 hover:bg-green-50 transition-colors flex items-center justify-center"
                >
                  <ChevronLeft size={20} className="text-gray-600 hover:text-green-600" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-green-500 hover:bg-green-50 transition-colors flex items-center justify-center"
                >
                  <ChevronRight size={20} className="text-gray-600 hover:text-green-600" />
                </button>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200"
                  alt="Solar panels installation"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Solar Journey?
              </h2>
              <p className="text-gray-200 text-lg">
                Let's build a sustainable and profitable energy future together.
              </p>
            </motion.div>

            {/* Right Side - Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-right"
            >
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                GET FREE CONSULTATION →
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
