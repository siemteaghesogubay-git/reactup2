import { useEffect, useState } from "react";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/siemteaghesogubay-git/repos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Något gick fel vid hämtning");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 🔄 LOADING 
  if (loading) {
    return (
      <main>
        <h1>Portfolio</h1>
        <p>Laddar projekt...</p>
      </main>
    );
  }

  
  if (error) {
    return (
      <main>
        <h1>Portfolio</h1>
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main>

      <h1 id="secret-trigger">Portfolio</h1>

      <div className="portfolio-grid">

        {projects
          .filter((repo) => !repo.fork) // tar bort forks
          .slice(0, 8) // max 8 projekt
          .map((repo) => (
            <div key={repo.id} className="project-card">

              <h3>{repo.name}</h3>

              <p>
                {repo.description
                  ? repo.description
                  : "Ingen beskrivning tillgänglig"}
              </p>

              <div className="project-links">

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  GitHub
                </a>

                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Live Demo
                  </a>
                )}

              </div>

            </div>
          ))}

      </div>

    </main>
  );
}

export default Portfolio;