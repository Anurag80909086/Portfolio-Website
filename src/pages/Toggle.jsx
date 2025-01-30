import "../styles/Toggle.css";
const Toggle = () => {
  const toggleSlider = () => {
    const slider = document.getElementById("slider");
    slider.classList.toggle("slideActive");
  };
  return (
    <div class="bars-container" onClick={toggleSlider}>
      <i class="fa-solid fa-bars" id="slider_btn"></i>
    </div>
  );
};

export default Toggle;
