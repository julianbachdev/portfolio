import SocialLinks from "./SocialLinks";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} Julian Bach. All rights reserved.</p>
      <SocialLinks />
    </footer>
  );
}

export default Footer;
