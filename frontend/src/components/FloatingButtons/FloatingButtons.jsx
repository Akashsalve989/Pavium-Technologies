import "./FloatingButtons.css";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

function FloatingButtons() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =========================
          WHATSAPP
      ========================= */}

      <a
        href="https://wa.me/919175145098?text=Hello%20PaviumTech%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Chat with PaviumTech on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>


      {/* =========================
          SCROLL TO TOP
      ========================= */}

      {showButton && (
        <button
          type="button"
          className="scroll-btn"
          onClick={scrollTop}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default FloatingButtons;