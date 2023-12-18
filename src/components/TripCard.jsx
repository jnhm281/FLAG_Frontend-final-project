import { Link } from "wouter";

function TripCard() {
  return (
    <>
      <div className="tripCard">
        <Link href="" className="tripCard-container">
          <img
            src="/images/new-york/New-York-Times-Square.jpg"
            alt="New York - Times Square"
            className="card-img"
          />
          <h3 className="tripCard-location">New York</h3>
          <h4 className="tripCard-date">2016</h4>
        </Link>
      </div>
    </>
  );
}

export default TripCard;
