import About from "./About";
import PortfolioList from "./PortfolioList";

function Main() {
  return (
    <main className="main">
      <About />
      <section className="portfolio">
        <h2>Portfolio</h2>
        <p>Click to view full projects and github code:</p>
        <PortfolioList />
      </section>
    </main>
  );
}

export default Main;
