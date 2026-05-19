import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Plus, Minus, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const faqData = [
  {
    id: 1,
    category: "General",
    question: "Why should I go solar?",
    answer:
      "Solar energy provides excellent ROI through minimal maintenance and utilizes unused rooftop space. It reduces electricity bills, provides energy independence, and contributes to a greener environment.",
  },
  {
    id: 2,
    category: "Technical",
    question: "What is Solar PV (Photovoltaic)?",
    answer:
      "Solar PV (Photovoltaic) systems convert sunlight directly into electricity using solar panels made of semiconductor materials. When sunlight hits the panels, it knocks electrons loose, creating a flow of electric current.",
  },
  {
    id: 3,
    category: "Technical",
    question: "What size of solar power installation should I buy?",
    answer:
      "The ideal size depends on your average electricity consumption, available roof space, and budget. Our team conducts a site assessment and recommends the optimal system size to maximize your savings and ROI.",
  },
  {
    id: 4,
    category: "Technical",
    question: "Will my system work at night?",
    answer:
      "Solar systems don't generate power at night since there's no sunlight. However, with a grid-tied system, you'll still have power from the utility grid. Off-grid or hybrid systems with batteries can provide nighttime power from stored energy.",
  },
  {
    id: 5,
    category: "Technical",
    question: "How long will my solar system last?",
    answer:
      "Most solar panels come with a 30-year power output guarantee and typically last 30-40 years. The guarantee ensures panels will produce at least 80% of their original output after 30 years.",
  },
  {
    id: 6,
    category: "Financial",
    question: "When is the best time to install solar?",
    answer:
      "The best time to install solar is as early as possible. Solar electricity costs increase as rebates decrease and electricity rates rise. Installing now locks in lower costs and earlier payback.",
  },
  {
    id: 7,
    category: "Financial",
    question: "What is the payback period?",
    answer:
      "Payback is typically 3-5 years for cash purchases at current rates. As electricity rates increase, payback could be less than 5 years. Financing options can also provide immediate positive cash flow.",
  },
  {
    id: 8,
    category: "Technical",
    question: "How much electricity can I generate per year from my 1kW solar power installation?",
    answer:
      "As a general rule, 1kW of photovoltaic generates approximately 1,400 kWh per year in India, depending on location, orientation, and weather conditions.",
  },
  {
    id: 9,
    category: "Financial",
    question: "What does a solar PV system cost?",
    answer:
      "The installed cost depends on roof type, system size, module type, and mounting method. Grid-tie solar power plants now start from 25 to 70 per kw. We provide detailed quotes based on your specific requirements.",
  },
  {
    id: 10,
    category: "Technical",
    question: "How do I know if my site will work for a PV system?",
    answer:
      "Our solar designers survey your site for optimal southern orientation, sun exposure, structural support, and available space. South-facing roofs are ideal, but east/west and flat roofs also work well.",
  },
  {
    id: 11,
    category: "Technical",
    question: "What is a 'net-metering grid-tie' PV system?",
    answer:
      "Net-metering connects your solar system to the utility grid, allowing you to sell excess power back to the electricity provider. Your meter runs backward when you generate more than you consume.",
  },
  {
    id: 12,
    category: "Technical",
    question: "Can PV systems produce power on cloudy days?",
    answer:
      "Yes, PV systems produce power on cloudy days but at reduced efficiency—typically 10-20% of normal output on heavily overcast days.",
  },
  {
    id: 13,
    category: "Technical",
    question: "Will my system work at night?",
    answer:
      "Without sunlight, solar systems become inactive. Grid power supplies your needs at night. With battery storage (off-grid/hybrid), you can use stored solar energy during nighttime hours.",
  },
  {
    id: 14,
    category: "Technical",
    question: "Are PV systems safe?",
    answer:
      "Solar panels are quiet, non-polluting, and safe when properly installed and maintained by certified professionals. All electrical systems require careful handling.",
  },
  {
    id: 15,
    category: "Technical",
    question: "Will my system have batteries?",
    answer:
      "Batteries are essential for off-grid systems. Grid-tied systems don't require batteries but can include them for backup power during outages. This decision should be made before installation.",
  },
  {
    id: 16,
    category: "Maintenance",
    question: "Will my system require maintenance?",
    answer:
      "Solar systems need minimal maintenance. Occasional panel cleaning (2-4 times per year) with a garden hose is recommended. Avoid cold water on hot panels—early morning washing is ideal.",
  },
];

const categories = ["All", "General", "Technical", "Financial", "Maintenance"];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFAQs =
    activeCategory === "All"
      ? faqData
      : faqData.filter((faq) => faq.category === activeCategory);

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <Helmet>
        <title>FAQ - Frequently Asked Questions About Solar Energy | BPS Solar</title>
        <meta
          name="description"
          content="Find answers to common questions about solar panels, installation, costs, maintenance, warranties and more at BPS Solar Faridabad."
        />
        <meta
          name="keywords"
          content="solar FAQ, solar panel questions, solar installation FAQ, solar cost, solar payback, solar maintenance"
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-green-600 font-semibold tracking-wider text-sm uppercase">
            GOT QUESTIONS?
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Everything you need to know about solar energy, installation, costs,
            and maintenance. Can't find what you're looking for?{" "}
            <Link to="/contact" className="text-green-600 hover:underline font-semibold">
              Contact us
            </Link>{" "}
            for personalized assistance.
          </p>

          {/* Contact CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="tel:+919015901566"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Phone size={20} />
              <span>Call Us Now</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-600 font-semibold rounded-xl transition-all duration-300"
            >
              <MessageCircle size={20} />
              <span>Send Enquiry</span>
            </Link>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-green-500 hover:text-green-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion - Tile Design */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              {/* Tile Header */}
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-green-50 hover:to-transparent transition-all duration-300"
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <div className="flex items-center gap-4">
                  {/* Number Badge */}
                  <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-100 to-blue-100 text-green-700 rounded-full flex items-center justify-center font-bold text-sm">
                    {String(faq.id).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                    {faq.question}
                  </span>
                </div>

                {/* Expand/Collapse Icon */}
                <div className="flex-shrink-0 ml-4">
                  <div
                    className={`w-10 h-10 rounded-full bg-green-100 flex items-center justify-center transition-all duration-300 ${
                      openId === faq.id
                        ? "bg-green-600 text-white"
                        : "text-green-600 group-hover:bg-green-600 group-hover:text-white"
                    }`}
                  >
                    {openId === faq.id ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </div>
                </div>
              </button>

              {/* Expandable Content */}
              <div
                id={`faq-answer-${faq.id}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openId === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
                aria-hidden={openId !== faq.id}
              >
                <div className="px-6 md:px-8 pb-6 pt-2">
                  <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-yellow-500 mb-4 rounded"></div>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No FAQs found in this category.</p>
          </div>
        )}

        {/* Contact CTA Bottom */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our solar experts are here to help. Get in touch for a free
              consultation and personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={20} />
                <span>Contact Us</span>
              </a>
              <a
                href="tel:+919015901566"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold text-lg rounded-xl transition-all duration-300"
              >
                <Phone size={20} />
                <span>Call: +91-9015901566</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default FAQ;
