import "./FAQ.css";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQ() {

  const [active, setActive] = useState(null);

  const faqData = [
    {
      question: "What services does Pavium Technologies provide?",
      answer:
        "We provide Website Development, Web Applications, Mobile Apps, ERP, CRM, Cloud Solutions, AI Automation and Custom Software Development."
    },
    {
      question: "Which technologies do you use?",
      answer:
        "We work with React, Java, Spring Boot, MySQL, Docker, AWS, GitHub and other modern technologies."
    },
    {
      question: "Do you provide software maintenance?",
      answer:
        "Yes. We provide maintenance, security updates, bug fixes and feature enhancements."
    },
    {
      question: "Can you develop custom software?",
      answer:
        "Yes. We build fully customized software according to your business requirements."
    },
    {
      question: "How can I contact your team?",
      answer:
        "You can contact us through the Contact page, email or phone for a free consultation."
    }
  ];

  return (
    <section className="faq" id="faq">

      <div className="faq-title">
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to the most common questions about our services.
        </p>
      </div>

      <div className="faq-container">

        {faqData.map((item, index) => (

          <div className="faq-item" key={index}>

            <div
              className="faq-question"
              onClick={() =>
                setActive(active === index ? null : index)
              }
            >

              <h3>{item.question}</h3>

              {active === index ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}

            </div>

            {active === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;