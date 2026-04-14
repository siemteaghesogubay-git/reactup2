import React from 'react';
import Img from "../assets/ars.webp";




function About() {
  return (
    <main>

      <h1 id="secret-trigger">Om mig</h1>

      <img src={Img} alt="Bild på Siem" className="cv-image" />

      {/* TEXT */}
      <section className="p-om">
      
   

        <p className="description">
          Jag heter Siem Teaghes Ogubay och är 28 år. Jag studerar Fullstack .NET (termin 2) 
          och har ett stort intresse för webbutveckling och programmering.
        </p>

        <p className="description">
          Under min utbildning har jag fått kunskaper inom HTML, CSS, JavaScript
          samt backend-utveckling med .NET. Jag tycker om att bygga
          användarvänliga och strukturerade webbplatser.
        </p>

        <p className="description">
          Jag har tidigare arbetat som IT-assistent och lärarassistent, vilket har
          gett mig erfarenhet av service, samarbete och att förklara tekniska
          lösningar på ett tydligt sätt.
        </p>

        <p className="description">
          Jag är en målmedveten och engagerad individ som strävar efter att utvecklas
          inom system- och webbutveckling.
        </p>

      </section>

    </main>
  );
}

export default About;