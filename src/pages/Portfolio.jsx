import { useEffect, useState } from "react";

// BILDER
import hangmanImg from "../assets/hänggubbe.webp";
import schoolImg from "../assets/SchoolManagement pic.webp";
import portfolioImg from "../assets/hhhh.webp";
import libraryImg from "../assets/jakobsbergs_bibliotek.webp";
import socialHealthImg from "../assets/h -app.webp";

function Portfolio() {

  // STATE
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("ALL");

  // FETCH GITHUB
  useEffect(() => {
    fetch("https://api.github.com/users/siemteaghesogubay-git/repos")
      .then(res => res.json())
      .then(data => {
        const sorted = data
          .filter(repo => !repo.fork)
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        setRepos(sorted);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // FILTER
  const filteredRepos = repos.filter(repo => {
    if (filter === "ALL") return true;

    if (filter === "React") {
      return (
        (repo.language === "JavaScript" || repo.language === "TypeScript") &&
        (
          repo.name.toLowerCase().includes("react") ||
          (repo.description && repo.description.toLowerCase().includes("react"))
        )
      );
    }

    return repo.language === filter;
  });

  // EGNA PROJEKT
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
    },

    {
      title: "Social Health Challenge",
      desc: "App för att främja social och mental hälsa.",
      img: socialHealthImg,
      github: "https://github.com/siemteaghesogubay-git/SocialHealthChallenge.git"
    }
  ];

  return (
    <div className="portfolio">



      <section>
        <h2>Mina projekt</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FILTER */}
      <section>
        <h2>GitHub Projekt</h2>

        <div className="filter-buttons">
          <button onClick={() => setFilter("ALL")} className={filter === "ALL" ? "active" : ""}>
            Alla
          </button>
          <button onClick={() => setFilter("C#")} className={filter === "C#" ? "active" : ""}>
            C#
          </button>
          <button onClick={() => setFilter("React")} className={filter === "React" ? "active" : ""}>
            React
          </button>
        </div>

        {loading ? (
          <p>Laddar...</p>
        ) : (
          <div className="portfolio-grid">
            {filteredRepos.map(repo => (
              <div className="project-card" key={repo.id}>
                <h3>{repo.name}</h3>
                <p>{repo.description || "Ingen beskrivning"}</p>
                <p><strong>Språk:</strong> {repo.language}</p>
                <p>⭐ {repo.stargazers_count}</p>

                <a href={repo.html_url} target="_blank" rel="noreferrer" className="btn">
                  Visa Repo
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}

export default Portfolio;