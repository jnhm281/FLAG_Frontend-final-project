import { Link } from "wouter";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <Link href="">
            <img
              src="src\assets\images\new-york\New-York-Times-Square.jpg"
              alt="Hero Img 1"
              className="hero-img"
            />
          </Link>
        </div>
        {/* <div></div> */}
      </section>
    </>
  );
}

export default Hero;
