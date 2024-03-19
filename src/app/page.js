import Image from "next/image";
import simple_pigeon from "../../public/pru.jpg";
import brown from "../../public/brown.webp";
import black from "../../public/black.webp";
import white from "../../public/white.jpg";
import { GiShoppingCart } from "react-icons/gi";
import { before } from "node:test";
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
          <div className="pigeons-list">
            <a href="./single-pigeon.html" className="pigeon">
              <Image src={black} alt="pigeon" className="img pigeon-img" />
              <h5>black</h5>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                price : R$ 15,00 | name : Clóvis
                <a href="./login" className="btn">
                  <GiShoppingCart />
                </a>
              </p>
            </a>

            <a href="./single-pigeon.html" className="pigeon">
              <Image
                src={simple_pigeon}
                alt="pigeon"
                className="img pigeon-img"
              />
              <h5>grey</h5>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                price : R$ 42,00 | name: Carlitos{" "}
                <a href="./login" className="btn">
                  <GiShoppingCart />
                </a>
              </p>
            </a>

            <a href="./single-pigeon.html" className="pigeon">
              <Image src={brown} alt="pigeon" className="img pigeon-img" />
              <h5>brown</h5>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                price : R$ 38,00 | name : Cleitin{" "}
                <a href="./login" className="btn">
                  <GiShoppingCart />
                </a>
              </p>
            </a>

            <a href="./single-pigeon.html" className="pigeon">
              <Image src={white} alt="pigeon" className="img pigeon-img" />
              <h5>white</h5>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                price : R$ 15,00 | name : Cléber{" "}
                <a href="./login" className="btn">
                  <GiShoppingCart />
                </a>
              </p>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
