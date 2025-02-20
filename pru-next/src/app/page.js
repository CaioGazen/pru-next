import PigeonList from "@/components/PigeonList";

export default function Home() {
  return (
    <>
      <main className="page">
        <header className="hero">
          <div className="hero-container">
            <div className="hero-text">
              <h1>pru</h1>
              <h4>pru pru</h4>
            </div>
          </div>
        </header>

        <section className="pigeon-container">
          <div className="tags-container">
            <h4>pigeon</h4>
            <div className="tags-list">
              <a href="./tag-template.html">black</a>
              <a href="./tag-template.html">grey</a>
              <a href="./tag-template.html">brown</a>
              <a href="./tag-template.html">white</a>
            </div>
          </div>
          <PigeonList />
        </section>
      </main>
    </>
  );
}
