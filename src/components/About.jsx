import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

function About() {
  const { showAboutModal, setShowAboutModal, setCurrentItemId } =
    useContext(ModalContext);

  function handleModal(e) {
    setCurrentItemId(e.target.innerText);
    setShowAboutModal(!showAboutModal);
  }

  return (
    <>
      <article className="about">
        <h2>About</h2>
        <p>
          In 2021, I entered the world of programming in search of a more
          efficient way to engage with stock trading. What started as a desire
          to build a script that suited my needs as a trader expanded into a
          full immersion in software engineering.
          <br />
          <br />
          Since then, I have completed multiple courses in HTML & CSS,
          JavaScript, and React and continue to diversify my knowledge and
          experience as a professional software engineer. With more than 20
          projects under my belt, including websites, apps, stock trading
          indicators and algorithms, I am eager to further establish myself in
          the tech industry.
          <br />
          <br />
          Creativity, problem-solving, and continuous learning have always been
          central to each of my projects and my career to date. Before
          transitioning to the programming sphere, I spent over a decade as a
          full-time musician with a sound engineering background, performing
          everywhere from the Americas to the Middle East. The dedication I have
          shown to my music career, as well as my additional projects in
          videography and video editing, is something I bring to every
          endeavour. This drive for continuous learning and a desire for
          excellence in every project now defines my work ethic as a programmer.
        </p>
      </article>
      <nav className="about-nav">
        <ul className="about-nav-list">
          <li>
            <button onClick={(e) => handleModal(e)}>Skills</button>
          </li>
          <li>
            <button onClick={(e) => handleModal(e)}>Experience</button>
          </li>
          <li>
            <button onClick={(e) => handleModal(e)}>Education</button>
          </li>
          <li>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1DDlHOZDYkvOclI1nmg88QSpVegw7PduB/view?usp=share_link"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default About;
