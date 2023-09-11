import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";
import './styles.css';

function App() {
  return (
    <div className="App">
      <ProfileCard name="Jack Hammer" tagline="I design awesome web apps" />
        <Work>
          <WorkRow  company="Microsoft" from="Jan 2020" until="May 2021" />
          <WorkRow  company="Netflix" from="Jun 2021" until="Dec 2021" />
          <WorkRow  company="Google" from="Jan 2022" until="Now" />
        </Work>
        <PortFolio>
          <Project projectImage="https://picsum.photos/id/0/600" />
          <Project projectImage="https://picsum.photos/id/20/600"/>
          <Project projectImage="https://picsum.photos/id/60/600"/>
        </PortFolio>
    </div>
  );
}

const ProfileCard = (props) => {
  return (
    <div className="profile-container">
      <div className="profile_img">
        <img src="https://randomuser.me/api/portraits/men/34.jpg" />
      </div>
      <div className="profile">
        <p>Hi, I am {props.name}</p>
        <p className="profile-tagline">{props.tagline}</p>
      </div>
    </div>
  );
};

const WorkRow = (props) => {
  return (
    <li>
      <h2 className="work-title">
      <span className="company">{props.company}</span>
      <span className="from">From: {props.from}</span>
      <span className="until">To: {props.until}</span>
      </h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nemo voluptates vero! Magni asperiores facilis nam odio molestiae saepe aliquid eos inventore adipisci modi at voluptatum commodi in, unde voluptatibus.</p>
    </li>
  );
};

const Work = (props) => {
  return (
    <div>
    <h2>Work history</h2>
    <ul className="work">
      {props.children}
    </ul>
    </div>
  );
};

const PortFolio = (props) => {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio">
        {props.children}
      </div>
    </div>
  );
};

const Project = (props) => {
  return (
    <div className="project">
      <ProjectImage url={props.projectImage} />
      <div className="project-description">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quisquam porro minima modi omnis voluptate voluptas quam molestiae nesciunt vel. Odio alias unde ipsa, aut autem quo nulla voluptatibus nemo.</p>
      </div>
    </div>
  )
}

const ProjectImage = (props) => {
  const imageUrl = 'https://placehold.co/800?text=Hello+World&font=roboto';

  return (
    <div className="project-image">
      <img src={props.url || imageUrl} />
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
