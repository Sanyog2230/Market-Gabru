import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What makes Luminex different from other digital marketing agencies?",
    answer:
      "Luminex proudly partners with a wide range of industries, including tech, e-commerce, healthcare, SaaS, and B2B services. Our adaptable approach ensures we craft marketing solutions.",
  },
  {
    question: "Which industries do you specialize in?",
    answer:
      "We specialize in multiple industries like tech, e-commerce, healthcare, SaaS, and B2B services, ensuring strategies tailored to your needs.",
  },
  {
    question: "How soon can I expect to see results?",
    answer:
      "Results vary by campaign type, but most clients start seeing significant improvements within the first few months of consistent marketing efforts.",
  },
  {
    question: "Do you offer customized marketing plans?",
    answer:
      "Yes, we create customized marketing plans based on your business goals, target audience, and budget.",
  },
  {
    question: "What services does Luminex offer?",
    answer:
      "We offer SEO, paid advertising, social media management, branding, content marketing, and analytics solutions.",
  },
];

// Container animation - smooth bottom-to-top
const containerVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center text-center px-4 select-none">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-[5vw] md:text-6xl font-semibold tracking-tighter leading-tight text-gray-900 mb-10"
      >
        Frequently asked <br /> questions
      </motion.h1>

      {/* FAQ container */}
      <motion.div
        className="w-full max-w-2xl space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => toggleFaq(index)}
              className={`rounded-xl p-5 text-left transition-all duration-500 cursor-pointer select-none ${
                isOpen ? "bg-blue-100" : "bg-blue-50"
              }`}
            >
              <div className="flex justify-between items-center">
                <h2 className="font-[500] tracking-tight text-[1.2vw] text-gray-900">
                  {faq.question}
                </h2>
                <span
                  className={`text-3xl font-medium transform transition-transform duration-500 ${
                    isOpen ? "rotate-0" : "rotate-180"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <p className="text-gray-700 text-sm font-medium leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FaqPage;
