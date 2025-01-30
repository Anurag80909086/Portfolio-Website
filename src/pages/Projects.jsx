import "../styles/Projects.css";
const Projects = () => {
  return (
    <section class="my-projects-container section-page box3">
      <div class="page_header">
        <span>My Projects</span>
      </div>

      <div class="project-row">
        <div class="project-col">
          <div class="project-img">
            <a href="https://jambimony.netlify.app/" target="_blank">
              <img src="./images/jambimony.png" alt="pubg_website" />
            </a>
          </div>
          <div class="project-info">
            <span>Indian Culture Website</span>
          </div>
        </div>
        <div class="project-col">
          <div class="project-img">
            <a href="https://anuragmovies.netlify.app/" target="_blank">
              <img src="./images/moviewebsite.png" alt="pubg_website" />
            </a>
          </div>
          <div class="project-info">
            <span>Movie Website</span>
          </div>
        </div>
        <div class="project-col">
          <div class="project-img">
            <a
              href="https://my-tic-tac-toe-website.netlify.app/"
              target="_blank"
            >
              <img src="./images/Tic-tac-toe.png" alt="pubg_website" />
            </a>
          </div>
          <div class="project-info">
            <span>Tic-Tac-Toe Game</span>
          </div>
        </div>
        <div class="project-col">
          <div class="project-img">
            <a
              href="https://weatherappanurag.netlify.app/"
              alt="weatherapp"
              target="_blank"
            >
              <img src="./images/weatherapp.png" alt="pubg_website" />
            </a>
          </div>
          <div class="project-info">
            <span>Weather Web App</span>
          </div>
        </div>
        <div class="project-col">
          <div class="project-img">
            <a href="" target="_blank">
              <img src="./images/bubblehitgame.png" alt="pubg_website" />
            </a>
          </div>
          <div class="project-info">
            <span>Bubble Hit Game</span>
          </div>
        </div>
        <div class="project-col">
          <div class="project-img">
            <a href="" target="_blank">
              <img src="./images/car_animation.png" alt="pubg_website" />
            </a>
          </div>
          <div class="project-info">
            <span>Car Animation CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
