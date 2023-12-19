import { Link } from "wouter";

function Hero() {
  return (
    <>
      <section className="hero-container">
        <Link href="">
          <img
            src="/images/new-york/New-York-Times-Square.jpg"
            alt="Hero Img 1"
            className="hero-img"
          />
        </Link>
      </section>
    </>
  );
}

export default Hero;
