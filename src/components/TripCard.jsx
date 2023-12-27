import { Link } from "wouter";

function TripCard({ tripInfo }) {
  return (
    <>
      <Link href={"/trip/" + tripInfo.city} className="tripCard-container">
        <img
          src={tripInfo.coverImg}
          alt={tripInfo.city + " cover image"}
          className="tripcard-img"
        />
        <div className="tripCard-info">
          <span className="tripCard-location">
            <i class="fa-solid fa-location-dot"></i>
            <h3 className="tripCard-location-text">{tripInfo.city}</h3>
          </span>
          <div className="tripCard-date">
            <i class="fa-solid fa-plane-departure"></i>
            <h4 className="tripCard-date-text">{tripInfo.checkIn}</h4>
          </div>
          <div className="tripCard-date">
            <i class="fa-solid fa-plane-arrival"></i>
            <h4 className="tripCard-date-text">{tripInfo.checkOut}</h4>
          </div>
        </div>
      </Link>
    </>
  );
}

export default TripCard;
