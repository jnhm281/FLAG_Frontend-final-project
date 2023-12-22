import { Link } from "wouter";

function Hero() {
  return (
    <>
      <section className="hero-container">
        <Link href="">
          <img
            src="/images/new-york/new-york1.jpg"
            alt="Hero Img 1"
            className="hero-img"
          />
        </Link>
      </section>
    </>
  );
}

export default Hero;
