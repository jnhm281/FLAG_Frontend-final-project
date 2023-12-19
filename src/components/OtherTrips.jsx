import { Link } from "wouter";

function OtherTrips() {
  return (
    <>
      <section className="other-trips-container">
        <div className="section-title">
          <h2>Other trips</h2>
        </div>
        <div className="worldMap-container">
          <img
            src="/images/World-Map.svg"
            alt="World Map - Img"
            className="worldMap-img"
          />
        </div>
        {/* <div className="continent-title-container-mobile">
          <Link href="" className="continent-title-mobile">
            <span></span>
            <img
              src="/images/Europe.jpg"
              alt=""
              className="continent-title-img-mobile"
            />
            <h2 className="continent-title-text-mobile">Europe</h2>
          </Link>
          <Link href="" className="continent-title-mobile">
            <span></span>
            <img
              src="/images/Africa.jpg"
              alt=""
              className="continent-title-img-mobile"
            />
            <h2 className="continent-title-text-mobile">Africa</h2>
          </Link>
          <Link href="" className="continent-title-mobile">
            <span></span>
            <img
              src="/images/South-America.jpg"
              alt=""
              className="continent-title-img-mobile"
            />
            <h2 className="continent-title-text-mobile">South America</h2>
          </Link>
          <Link href="" className="continent-title-mobile">
            <span></span>
            <img
              src="/images/North-America.jpg"
              alt=""
              className="continent-title-img-mobile"
            />
            <h2 className="continent-title-text-mobile">North America</h2>
          </Link>
          <Link href="" className="continent-title-mobile">
            <span></span>
            <img
              src="/images/Asia.jpg"
              alt=""
              className="continent-title-img-mobile"
            />
            <h2 className="continent-title-text-mobile">Asia</h2>
          </Link>
          <Link href="" className="continent-title-mobile">
            <span></span>
            <img
              src="/images/Oceania.jpg"
              alt=""
              className="continent-title-img-mobile"
            />
            <h2 className="continent-title-text-mobile">Oceania</h2>
          </Link>
        </div> */}
      </section>
    </>
  );
}

export default OtherTrips;
