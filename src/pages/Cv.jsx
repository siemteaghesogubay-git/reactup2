import cv from "../data/cv.json";

import profileImg from "../assets/SIEM.webp";






function CV() {
  return (
    <main className="cv-container">
      <h1>Mitt CV</h1>
      <img src={profileImg} alt="Bild på Siem" className="cv-image" />

    



        
        
      <div className="cv-grid">

        {/* MAIN COLUMN */}
        <div className="main-column">

          <section>
            <h2>Profil</h2>
            {cv.profile.text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          <section>
            <h2>Utbildning</h2>
            {cv.education.map((edu, i) => (
              <div key={i}>
                <h3>{edu.title}</h3>
                <p><strong>{edu.period}</strong></p>
                <ul>
                  {edu.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h2>Arbetslivserfarenhet</h2>
            {cv.experience.map((job, i) => (
              <div key={i}>
                <h3>{job.role}</h3>
                <p><strong>{job.company}</strong> | {job.period}</p>
                <ul>
                  {job.tasks.map((task, j) => (
                    <li key={j}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

        </div>

        {/* SIDE COLUMN */}
        <div className="side-column">

          <section>
            <h2>Tekniska Kunskaper</h2>
            <ul>
              {cv.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Språk</h2>
            <ul>
              {cv.languages.map((lang, i) => (
                <li key={i}>{lang}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Personliga Egenskaper</h2>
            <ul>
              {cv.traits.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Intressen</h2>
            <ul>
              {cv.interests.map((int, i) => (
                <li key={i}>{int}</li>
              ))}
            </ul>
          </section>

        </div>

      </div>
    </main>
  );
}

export default CV;