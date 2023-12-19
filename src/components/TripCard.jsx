import { Link } from "wouter";

function TripCard() {
  return (
    <>
      <div className="tripCard">
        <Link href="/trip" className="tripCard-container">
          <img
            src="/images/new-york/New-York-Times-Square.jpg"
            alt="New York - Times Square"
            className="card-img"
          />
          <div className="tripCard-info">
            <span className="tripCard-location">
              <i class="fa-solid fa-location-dot"></i>
              <h3>New York</h3>
            </span>
            <span className="tripCard-date">
              <i class="fa-solid fa-calendar-days"></i>
              <h4>2016</h4>
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default TripCard;
