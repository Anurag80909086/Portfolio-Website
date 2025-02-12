import "../styles/Theme.css";
const Theme = () => {
  const handleTheme = () => {
    const root = document.documentElement;
    root.style.setProperty(
      "--orange",
      root.style.getPropertyValue("--orange") === "#ac07ee"
        ? "#EE6807"
        : "#ac07ee"
    );
    root.style.setProperty(
      "--background-dark",
      root.style.getPropertyValue("--background-dark") === "#dfdede"
        ? "#151515"
        : "#dfdede"
    );
    root.style.setProperty(
      "--background-slider",
      root.style.getPropertyValue("--background-slider") === "#ecebeb"
        ? "#222222"
        : "#ecebeb"
    );
    root.style.setProperty(
      "--text-color",
      root.style.getPropertyValue("--text-color") === "rgb(0, 0, 0)"
        ? "white"
        : "rgb(0, 0, 0)"
    );
    root.style.setProperty(
      "--darker-text",
      root.style.getPropertyValue("--darker-text") === "rgb(0, 0, 0)"
        ? "rgb(172, 172, 172)"
        : "rgb(0, 0, 0)"
    );
    root.style.setProperty(
      "--shadow",
      root.style.getPropertyValue("--shadow") ===
        "14px 1px 40px -4px rgb(31, 28, 28)"
        ? "14px 1px 40px -4px rgba(0,0,0,1)"
        : "14px 1px 40px -4px rgb(31, 28, 28)"
    );
    root.style.setProperty(
      "--shadow-dark",
      root.style.getPropertyValue("--shadow-dark") ===
        "11px -1px 20px 0px rgba(0,0,0,1)"
        ? "11px -1px 20px 0px rgba(0,0,0,1)"
        : "11px -1px 20px 0px rgba(0,0,0,1)"
    );
    root.style.setProperty(
      "--shadow-light",
      root.style.getPropertyValue("--shadow-light") ===
        "12px -8px 20px 2px rgb(37 37 37)"
        ? "12px -8px 20px 2px rgb(37 37 37)"
        : "12px -8px 20px 2px rgb(37 37 37)"
    );
    const currentIcon = themeToggle.querySelector("i");
    currentIcon.classList.toggle("fa-moon");
    currentIcon.classList.toggle("fa-sun");
  };
  return (
    <div class="theme-container" id="themeToggle" onClick={handleTheme}>
      <i class="fa-solid fa-sun"></i>
    </div>
  );
};

export default Theme;
