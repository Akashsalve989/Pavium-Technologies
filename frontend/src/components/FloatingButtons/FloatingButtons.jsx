import "./FloatingButtons.css";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

function FloatingButtons() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTop = () => {

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  };

  return (
    <>

      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      {showButton && (

        <button
          className="scroll-btn"
          onClick={scrollTop}
        >
          <FaArrowUp />
        </button>

      )}

    </>
  );

}

export default FloatingButtons;