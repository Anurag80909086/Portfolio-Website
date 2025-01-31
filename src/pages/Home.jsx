import "../styles/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="home-page section-page box1">
      <div className="text-container">
        <h1>
          Hello, my name is <span>Anurag Kumar Singh</span>
        </h1>
        <h2>
          I'm a <span>Web Developer</span>
        </h2>
        <p>
          Front-end developer with hands-on experience in building dynamic and
          responsive web applications using React.js, JavaScript, and modern web
          technologies. Proficient in state management, API integration, and
          delivering optimized, user-centric interfaces. and many more....
        </p>
        <Link to="/about">
          <button type="submit" className="btn">
            Know More
          </button>
        </Link>
      </div>
      <div className="photo-container">
        <div id="temp-container-parent">
          <img src="/images/Image.jpg" alt="Profile photo" id="profile_photo" />
        </div>
      </div>
    </section>
  );
};

export default Home;
