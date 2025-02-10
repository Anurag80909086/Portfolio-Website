import "../styles/About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section class="about-section-container section-page box2">
      <div class="page_header">
        <span>About Me</span>
      </div>

      <div class="about-me-details-container">
        <h2>
          I'm Anurag Kumar Singh, <span>Web Developer</span>
        </h2>

        <p>
          I am a dedicated and innovative Frontend Web Developer with expertise
          in building seamless, responsive, and dynamic web applications using
          React.js, JavaScript, HTML, and CSS. I have extensive experience
          working with APIs like OMDB and TMDB, utilizing modern frameworks and
          tools such as Redux, Tailwind CSS, and Material UI to create
          intuitive, user-friendly interfaces. With a focus on writing clean,
          efficient code and optimizing performance, I aim to deliver
          high-quality digital solutions that solve real-world problems. I am
          passionate about staying updated with the latest industry trends and
          thrive in collaborative environments where I can contribute both
          technically and creatively to the success of projects.
        </p>
      </div>

      <div class="more-details-container">
        <div class="details-left">
          <div class="details-left-top">
            <div class="details-left-top-left">
              <h3>
                <span class="header-detail">Birthday :</span>
                <span>19 Jan 2002</span>
              </h3>
              <hr />
              <h3>
                <span class="header-detail">Gender :</span>
                <span>Male</span>
              </h3>
              <hr />
              <h3>
                <span class="header-detail">Degree :</span>
                <span>MCA (Present)</span>
              </h3>
              <hr />
              <h3>
                <span class="header-detail">City :</span>
                <span>Lucknow</span>
              </h3>
              <hr />
            </div>
            <div class="details-left-top-right">
              <h3>
                <span class="header-detail">Age :</span>
                <span>23</span>
              </h3>
              <hr />
              <h3>
                <span class="header-detail">Email :</span>
                <span>anuragkumarsingh154@gmail.com</span>
              </h3>
              <hr />
              <h3>
                <span class="header-detail">Contact :</span>
                <span>+91 8090674352</span>
              </h3>
              <hr />
              <h3>
                <span class="header-detail">Open to Work :</span>
                <span>Available</span>
              </h3>
              <hr />
            </div>
          </div>
          <div class="details-left-buttons">
            <a href="./documents/My Resume - Updated.pdf" download>
              <button type="submit" class="download_resume btn">
                Download Resume
              </button>
            </a>
            <Link to="/contact">
              <button type="submit" class="hire_me btn">
                Hire Me
              </button>
            </Link>
          </div>
        </div>
        <div class="details-right">
          <div class="skills_progress" id="html">
            HTML <span>92%</span>
          </div>
          <div class="skills_progress" id="css">
            CSS <span>85%</span>
          </div>
          <div class="skills_progress" id="java_script">
            JAVA SCRIPT <span>80%</span>
          </div>
          <div class="skills_progress" id="react_js">
            React Js <span>80%</span>
          </div>
          <div class="skills_progress" id="java">
            Java <span>40%</span>
          </div>
          <div class="skills_progress" id="C_language">
            C Language <span>30%</span>
          </div>
        </div>
      </div>
      <div class="education-container">
        <div class="education-left">
          <h1>Education</h1>
          <div class="edu-container">
            <div class="edu-section">
              <div class="edu_date">
                <i class="fa-solid fa-calendar-days"></i>
                <span>2023 - Present</span>
              </div>
              <div class="edu_content">
                <h3>MCA - Amity University</h3>
                <p>
                  During my MCA at Amity University (2023-2025), I gained
                  expertise in software development, working on projects like a
                  React.js-based movie website and an Indian Culture platform
                  with AI and AR/VR features. I also participated in hackathons
                  and contributed to the E-Cell club.
                </p>
              </div>
            </div>

            <div class="edu-section">
              <div class="edu_date">
                <i class="fa-solid fa-calendar-days"></i>
                <span>2019 - 2022</span>
              </div>
              <div class="edu_content">
                <h3>BCOM - Lucknow University</h3>
                <p>
                  Completed my BCom at Lucknow University, where I built a
                  strong understanding of business concepts and accounting
                  principles. I actively participated in various university
                  events, which helped develop my teamwork and leadership skills
                </p>
              </div>
            </div>

            <div class="edu-section">
              <div class="edu_date">
                <i class="fa-solid fa-calendar-days"></i>
                <span>2018 - 2019</span>
              </div>
              <div class="edu_content">
                <h3>
                  12<sup>th</sup> - Kendriya Vidyalaya AMC, Lucknow
                </h3>
                <p>
                  Completed my 10th and 12th grades, gaining valuable knowledge
                  across different subjects. I actively participated in various
                  school events and activities, which enhanced my overall skills
                  and learning experience.
                </p>
              </div>
            </div>

            <div class="edu-section">
              <div class="edu_date">
                <i class="fa-solid fa-calendar-days"></i>
                <span>2016 - 2017</span>
              </div>
              <div class="edu_content">
                <h3>
                  10<sup>th</sup> - Kendriya Vidyalaya AMC, Lucknow
                </h3>
                <p>
                  Completed my 10th and 12th grades, gaining valuable knowledge
                  across different subjects. I actively participated in various
                  school events and activities, which enhanced my overall skills
                  and learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="education-right">
          <h1>Experience</h1>
          <div class="edu-container">
            <div class="edu-section">
              <div class="edu_date">
                <i class="fa-solid fa-calendar-days"></i>
                <span>0000 - 0000</span>
              </div>
              <div class="edu_content">
                <h3>Fresher</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae velit nobis aspernatur officia? Reprehenderit possimus
                  doloribus tempora dolorum unde itaque iure nostrum qui
                  temporibus, sint at corrupti, quis velit. Nemo?
                </p>
              </div>
            </div>

            <div class="edu-section">
              <div class="edu_date">
                <i class="fa-solid fa-calendar-days"></i>
                <span>0000 - 0000</span>
              </div>
              <div class="edu_content">
                <h3>Fresher</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae velit nobis aspernatur officia? Reprehenderit possimus
                  doloribus tempora dolorum unde itaque iure nostrum qui
                  temporibus, sint at corrupti, quis velit. Nemo?
                </p>
              </div>
            </div>

            <div class="edu-section">
              <div class="edu_date">
                <i class="fa-solid fa-calendar-days"></i>
                <span>0000 - 0000</span>
              </div>
              <div class="edu_content">
                <h3>Fresher</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae velit nobis aspernatur officia? Reprehenderit possimus
                  doloribus tempora dolorum unde itaque iure nostrum qui
                  temporibus, sint at corrupti, quis velit. Nemo?
                </p>
              </div>
            </div>

            <div class="edu-section">
              <div class="edu_date">
                <i class="fa-solid fa-calendar-days"></i>
                <span>0000 - 0000</span>
              </div>
              <div class="edu_content">
                <h3>Fresher</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae velit nobis aspernatur officia? Reprehenderit possimus
                  doloribus tempora dolorum unde itaque iure nostrum qui
                  temporibus, sint at corrupti, quis velit. Nemo?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
