import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, PhoneCall, MessageSquare, MessageCircle, ChevronDown, ChevronUp, Sun, Moon
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Footer from '../components/Footer';

const ContactUS = () => {
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleDarkMode = () => setIsDark(!isDark);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    const payload = {
      comId: 136,
      empId: 10896,
      customerName: formData.name,
      customerEmail: formData.email,
      customerContact: formData.phone,
      address: formData.service, // ya agar address field add karna ho toh change kar lena
      remarks: formData.message
    };

    try {
      const response = await fetch(
        "https://erpapi.sapeagleerp.com/api/Customer/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "sapeeagle-default-api-key-12345"
          },
          body: JSON.stringify(payload)
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess("Thank you! Your request has been saved successfully.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setError(data?.message || "Something went wrong!");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: 'How much does solar installation cost?',
      answer: 'The cost varies based on system size and location. Contact us for a free quote.'
    },
    {
      question: 'How long does installation take?',
      answer: 'Typically 1-2 weeks for residential systems, depending on complexity.'
    },
    {
      question: 'Do you provide maintenance?',
      answer: 'Yes, we offer comprehensive maintenance and support packages.'
    },
    {
      question: 'What warranties do you offer?',
      answer: 'We provide 10-year warranty on panels and 5-year on inverters.'
    },
    {
      question: 'Do you work with commercial clients?',
      answer: 'Absolutely! We have extensive experience with commercial solar installations.'
    }
  ];

  const quickContacts = [
    { icon: <PhoneCall size={40} />, title: 'Call Us', desc: '+91-9015901566', action: 'tel:+919015901566' },
    { icon: <Mail size={40} />, title: 'Email Us', desc: 'info@bpskiransolar.com', action: 'mailto:info@bpskiransolar.com' },
    { icon: <MessageSquare size={40} />, title: 'Live Chat', desc: 'Chat with experts', action: '#' },
    { icon: <MessageCircle size={40} />, title: 'WhatsApp', desc: '+91-7011800332', action: 'https://wa.me/917011800332' }
  ];

  return (
    <div className={`${isDark ? 'dark' : ''} min-h-screen bg-gray-50 dark:bg-gray-900`}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-green-900/70 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1920&h=1080&fit=crop"
          alt="Solar Panels"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Connect with us today—reach out for support, inquiries, or collaboration, and let's start a meaningful conversation together.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
          >
            Request a Free Quote
          </motion.button>
          <button
            onClick={toggleDarkMode}
            className="absolute top-4 right-4 p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all"
          >
            {isDark ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-300" />}
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white/10 dark:bg-gray-700/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              id="contact-form"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Send Us a Message</h2>
       <form onSubmit={handleSubmit} className="space-y-6">

  {/* Name */}
  <div className="space-y-1">
    <label className="text-sm font-semibold ml-1 text-gray-700 dark:text-gray-300">
      Full Name
    </label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      placeholder="Enter your full name"
      className={`w-full px-4 py-3 bg-transparent border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-800 dark:text-white ${
        errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
      }`}
    />
    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
  </div>

  {/* Email */}
  <div className="space-y-1">
    <label className="text-sm font-semibold ml-1 text-gray-700 dark:text-gray-300">
      Email Address
    </label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      placeholder="Enter your email"
      className={`w-full px-4 py-3 bg-transparent border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-800 dark:text-white ${
        errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
      }`}
    />
    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
  </div>

  {/* Phone */}
  <div className="space-y-1">
    <label className="text-sm font-semibold ml-1 text-gray-700 dark:text-gray-300">
      Phone Number
    </label>
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleInputChange}
      placeholder="Enter your phone number"
      className={`w-full px-4 py-3 bg-transparent border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-800 dark:text-white ${
        errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
      }`}
    />
    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
  </div>

  {/* Service */}
  <div className="space-y-1">
    <label className="text-sm font-semibold ml-1 text-gray-700 dark:text-gray-300">
      Service Type
    </label>
    <select
      name="service"
      value={formData.service}
      onChange={handleInputChange}
      className={`w-full px-4 py-3 bg-transparent border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-800 dark:text-white ${
        errors.service ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
      }`}
    >
      <option value="">Select Service Type</option>
      <option value="installation">On Grid System</option>
      <option value="maintenance">Off Grid System</option>
      <option value="consultation">Hybrid System</option>
      <option value="other">Other</option>
    </select>
    {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
  </div>

  {/* Message */}
  <div className="space-y-1">
    <label className="text-sm font-semibold ml-1 text-gray-700 dark:text-gray-300">
      Message
    </label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleInputChange}
      rows={4}
      placeholder="Write your message..."
      className={`w-full px-4 py-3 bg-transparent border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-800 dark:text-white resize-none ${
        errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
      }`}
    />
    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    disabled={isLoading}
    className="w-full bg-gradient-to-r from-green-500 to-yellow-500 text-white py-3 rounded-xl font-bold hover:from-green-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isLoading ? 'Sending...' : 'Send Message'}
  </button>

</form>
              {success && <p className="text-green-600 mt-4">{success}</p>}
              {error && <p className="text-red-600 mt-4">{error}</p>}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Contact Info</h2>
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <MapPin className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Our Address</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Plot No. RE-8, 1st Floor, JM Business Complex, IMT Industrial Area, Sector-69, Faridabad, Haryana 121004</p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Phone className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Phone Number</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">+91-9015901566, +91-7011800332</p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Phone className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Landline Number</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">0129-4086317</p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Mail className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Email Address</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">info@bpsrenewables.com</p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Clock className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Working Hours</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0!2d77.307!3d28.408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd3c2c0c9c9d%3A0x1c6e6b6c6b6c6b6c!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Office Location"
            ></iframe>
            <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">Visit Our Office</h3>
              <p className="text-gray-600 dark:text-gray-300">Plot No. RE-8, IMT Industrial Area, Sector-69, Faridabad</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get in Touch Instantly
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickContacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.action}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center group"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-green-500 mb-4 group-hover:scale-110 transition-transform">{contact.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{contact.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{contact.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Follow Us on Social Media
          </motion.h2>
          <div className="flex justify-center space-x-8">
            {[
              { icon: <FaFacebook size={32} />, href: '#' },
              { icon: <FaInstagram size={32} />, href: '#' },
              { icon: <FaTwitter size={32} />, href: '#' },
              { icon: <FaLinkedin size={32} />, href: '#' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-orange-500 transition-all duration-300 hover:scale-110 hover:shadow-2xl backdrop-blur-sm"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-800 dark:text-white">{faq.question}</span>
                  {openFAQ === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
                {openFAQ === index && (
                  <motion.div
                    className="px-6 pb-4"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default ContactUS;