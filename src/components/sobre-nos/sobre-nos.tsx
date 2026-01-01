import "./sobre-nos.css";
import image from "@/assets/imgs/guitar-classical-guitar-acoustic-guitar-electric-guitar.webp";

export function SobreNos() {
  return (
    <section id="sobre-nos" className="sobre-nos">
      <div className="sobre-nos__wrapper">
        <img src={image} alt="Sobre Nós" className="sobre-nos__image" />

        <div className="sobre-nos__text">
          <h1>Quem Somos</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
}
