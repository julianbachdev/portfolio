import linkedInImage from "../assets/linkedin.webp";
import emailImage from "../assets/email.webp";
import githubImage from "../assets/github.webp";

function SocialLinks() {
  return (
    <div>
      <a href="https://github.com/julianbachdev" target="_blank">
        <img className="icon" src={githubImage} />
      </a>
      <a
        href="https://www.linkedin.com/in/julian-bach-a921961b9/"
        target="_blank"
      >
        <img className="icon" src={linkedInImage} />
      </a>
      <a href="mailto:julianrbach@gmail.com" target="_blank">
        <img className="icon" src={emailImage} />
      </a>
    </div>
  );
}

export default SocialLinks;
