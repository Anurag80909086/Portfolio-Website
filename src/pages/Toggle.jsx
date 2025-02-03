import "../styles/Toggle.css";
import { useEffect } from "react";
const Toggle = () => {
  const windowBackground = document.getElementById("root");
  windowBackground.addEventListener("click", (e) => {
    e.stopPropagation();
    if (
      e.target.classList.contains("bars-container") ||
      e.target.id == "slider_btn" ||
      e.target.tagName.toLowerCase() === "nav"
    ) {
      // console.log("THis is section page");
    } else {
      closeSlider();
    }
  });

  const closeSlider = () => {
    const slider = document.getElementById("slider");
    const element = document.getElementById("slider_btn");
    element.classList.remove("fa-xmark");
    element.classList.add("fa-bars");
    slider.classList.add("slider");
    slider.classList.remove("slideActive");
  };

  const toggleSlider = (e) => {
    e.stopPropagation();
    const slider = document.getElementById("slider");
    const element = document.getElementById("slider_btn");
    element.classList.toggle("fa-xmark");
    element.classList.toggle("fa-bars");
    slider.classList.toggle("slider");
    slider.classList.toggle("slideActive");
  };
  const handleResize = () => {
    const slider = document.getElementById("slider");
    const element = document.getElementById("slider_btn");
    if (window.innerWidth > 700) {
      slider.classList.remove("slideActive");
      slider.classList.add("slider");
      if (element.classList.contains("fa-xmark")) {
        element.classList.remove("fa-xmark");
        element.classList.add("fa-bars");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bars-container" onClick={toggleSlider}>
      <i className="fa-solid fa-bars" id="slider_btn"></i>
    </div>
  );
};

export default Toggle;
