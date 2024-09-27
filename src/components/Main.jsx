import About from "./About";
import PortfolioList from "./PortfolioList";

function Main() {
  return (
    <main className="main">
      <About />
      <section className="portfolio">
        <h2>Portfolio</h2>
        <PortfolioList />
      </section>
    </main>
  );
}

export default Main;
