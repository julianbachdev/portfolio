import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <header className="header">
      <h1>Julian Bach</h1>
      <h3>Software Engineer</h3>
      <p>
        Building pixel-perfect, engaging,
        <br />
        and accessible digital experiences.
      </p>
      <SocialLinks />
      <img className="profile" src="src/assets/profile.png" alt="Julian Bach" />
    </header>
  );
}

export default Header;
