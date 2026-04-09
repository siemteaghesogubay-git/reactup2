import { useEffect, useState } from "react";

// IMPORTERA BILDER
import hangmanImg from "../assets/hänggubbe.webp";
import schoolImg from "../assets/SchoolManagement pic.webp";
import portfolioImg from "../assets/hhhh.webp";
import libraryImg from "../assets/jakobsbergs_bibliotek.webp";

function Portfolio() {

  // 🔥 STATE
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH GITHUB API
  useEffect(() => {
    fetch("https://api.github.com/users/siemteaghesogubay-git/repos")
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // 🔥 DINA EGNA PROJEKT
  const projects = [
    {
      title: "HängGubbe",
      desc: "Hangman spel byggt i .NET med C#.",
      img: hangmanImg,
      github: "https://github.com/siemteaghesogubay-git/ConsoleApp-Hangman-7.git"
    },
    {
      title: "School Management",
      desc: "Skolsystem med flera roller och funktioner.",
      img: schoolImg,
      github: "https://github.com/siemteaghesogubay-git/SchoolManagement-My-Pro.git"
    },
    {
      title: "Portfolio",
      desc: "Personlig CV & portfolio-sida.",
      img: portfolioImg,
      github: "https://github.com/siemteaghesogubay-git/My-Profili.git"
    },
    {
      title: "BiblioteksApp",
      desc: "Biblioteksapp för att hantera böcker och användare.",
      img: libraryImg,
      github: "https://github.com/siemteaghesogubay-git/LibrarySystem.git"
    }
  ];

  return (
    <div className="portfolio">

      <h1>Min Portfolio</h1>

      {/* 🔥 DINA PROJEKT */}
      <h2>Mina projekt</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.github} target="_blank" className="btn">
              GitHub
            </a>
          </div>
        ))}
      </div>
</div>
      

      )  
    }
export default Portfolio;