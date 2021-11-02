import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <p>
        I am Valeria(aka Squid), a 19 year old student web developer originally
        from Tamarac, Florida. Currently attending the University of Arizona's
        coding bootcamp to be certified as a full stack web delveloper. In my
        spare time I work play video games and make music.
      </p>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
    </section>
  );
}

export default About;
