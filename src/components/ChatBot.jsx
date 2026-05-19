import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);

  const openWhatsApp = (number) => {
    const cleanNumber = number.replace(/\D/g, "");
    const url = `https://wa.me/91${cleanNumber}`;
    window.open(url, "_blank");
  };

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Welcome to BPS Renewables Private Limited.\nHow can we help you today?",
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const quickReplies = [
    "Solar Services",
    "Pricing",
    "Installation",
    "Contact Number",
  ];

  const handleBotReply = (userText) => {
    let botReply = "Thank you for contacting BPS Renewables. How else can I assist you?";

    const lowerText = userText.toLowerCase();

    if (lowerText.includes("solar") || lowerText.includes("service")) {
      botReply =
        "☀️ We provide complete Solar EPC solutions:\n• Rooftop Solar\n• Industrial Solar Plants\n• Ground Mounted Systems\n• Net Metering & Maintenance";
    } 
    else if (lowerText.includes("price") || lowerText.includes("cost") || lowerText.includes("pricing")) {
      botReply = 
        "💰 **Current Solar Pricing (2026)**\n\n" +
        "• Residential Rooftop (3-10 kW): ₹42,000 - ₹52,000 per kW (after subsidy)\n" +
        "• Commercial (10-100 kW): ₹38,000 - ₹48,000 per kW\n" +
        "• Industrial / Ground Mount: ₹35,000 - ₹45,000 per kW\n\n" +
        "✅ Prices include:\n• Premium Panels (540W+)\n• High Quality Inverters\n• Structure & Wiring\n• Net Metering\n\n" +
        "Want an accurate quote for your rooftop? Just tell me your monthly electricity bill or required capacity.";
    } 
    else if (lowerText.includes("contact") || lowerText.includes("phone") || lowerText.includes("number")) {
      botReply =
        "📞 You can call us at:\n• +91-9015901566\n• +91-7011800332\n\nWould you like me to open WhatsApp?";
    } 
    else if (lowerText.includes("installation") || lowerText.includes("process")) {
      botReply =
        "⚡ Our Installation Process:\n1. Site Survey\n2. Custom Design\n3. Government Approval\n4. Installation (2-7 days)\n5. Net Metering & Handover";
    } 
    else if (lowerText.includes("address") || lowerText.includes("location")) {
      botReply =
        "📍 RE-8, 2nd Floor, Sec-69, JDM Business Tower, Neemka, Ballabgarh, Faridabad - 121004, Haryana.";
    }

    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botReply },
      ]);
    }, 1000);
  };

  const handleSend = (customMessage = null) => {
    const finalMessage = customMessage || message;
    if (!finalMessage.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: finalMessage }]);

    const lowerMsg = finalMessage.toLowerCase();

    // WhatsApp Trigger
    const phoneMatch = finalMessage.match(/(\d{10})/);
    if (
      lowerMsg.includes("whatsapp") ||
      lowerMsg.includes("call me") ||
      lowerMsg.includes("contact") ||
      phoneMatch
    ) {
      const number = phoneMatch ? phoneMatch[0] : "9015901566";
      setTimeout(() => openWhatsApp(number), 600);
      setMessage("");
      return;
    }

    handleBotReply(finalMessage);
    setMessage("");
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-green-400 blur-xl opacity-70 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-green-500 via-emerald-500 to-yellow-400 text-white p-5 rounded-full shadow-2xl border border-white/20">
            {open ? <X size={28} /> : <MessageCircle size={28} />}
          </div>
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[95%] sm:w-[370px] h-[70vh] sm:h-[520px] max-h-[700px] bg-white/95 backdrop-blur-xl rounded-[32px] shadow-[0_25px_80px_rgba(0,0,0,0.25)] overflow-hidden z-50 border border-white/20 flex flex-col"
          >
            {/* Header */}
            <div className="relative overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-yellow-400"></div>
              <div className="relative p-5 text-white flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                  <Bot size={28} />
                </div>
                <div>
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    BPS AI Assistant <Sparkles size={18} />
                  </h2>
                  <p className="text-sm opacity-90">Online • Instant Support</p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-5 bg-gradient-to-b from-gray-50 to-white">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-5 py-4 rounded-3xl text-[15px] leading-relaxed shadow-lg whitespace-pre-line ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-br-md"
                          : "bg-white text-gray-800 rounded-bl-md border border-gray-100"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {typing && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-100 px-5 py-4 rounded-3xl rounded-bl-md flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce"></span>
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce delay-100"></span>
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce delay-200"></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Quick Replies */}
            <div className="px-4 py-3 flex flex-wrap gap-2 bg-white border-t border-gray-100 flex-shrink-0">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(reply)}
                  className="text-xs bg-green-100 hover:bg-green-600 hover:text-white text-green-700 px-4 py-2 rounded-full transition-all duration-300 active:scale-95"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white flex items-center gap-3 border-t border-gray-100 flex-shrink-0">
              <input
                type="text"
                placeholder="Ask about solar solutions..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 bg-gray-100 border border-transparent focus:border-green-500 focus:bg-white rounded-full px-5 py-4 outline-none transition-all"
              />

              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.08 }}
                onClick={() => handleSend()}
                className="bg-gradient-to-r from-green-500 to-yellow-400 text-white p-4 rounded-full shadow-lg"
              >
                <Send size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;