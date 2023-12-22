import Weather from "./Weather";
import RecentTrips from "./RecentTrips";

function BodyTrip({ tripDetail }) {
  return (
    <>
      <div className="body-trip-page">
        <section className="trip-container">
          <div className="trip-title">
            <div className="trip-title-destination">
              <i class="fa-solid fa-location-dot"></i>
              <h2 className="trip-title-destination-text">{tripDetail.city}</h2>
            </div>
            <div className="trip-title-date">
              <i class="fa-solid fa-plane-departure"></i>
              <h3 className="trip-title-date-text">{tripDetail.checkIn}</h3>
              <i class="fa-solid fa-plane-arrival"></i>
              <h3 className="trip-title-date-text">{tripDetail.checkOut}</h3>
            </div>
          </div>
          <div className="trip-wrapper-1">
            {/*  */}
            <div className="trip-slider">
              <img
                src={tripDetail.coverImg}
                alt={tripDetail.city + " cover image"}
                className="trip-slider-img"
              />
            </div>
            {/*  */}
            <div className="trip-info">
              <img
                src="/images/World-Map.svg"
                alt="World Map - Img"
                className="trip-info-map"
              />
              <Weather />
            </div>
          </div>
          <div className="trip-wrapper-2">
            <div className="trip-subtitle">
              <h2>{tripDetail.summaryTitle}</h2>
            </div>
            <div className="trip-summary">
              <div className="trip-summary-highlights">highlights-2</div>
              <div className="trip-summary-description">
                <p className="trip-summary-description-text">
                  {tripDetail.summaryText}
                </p>
              </div>
            </div>
          </div>
        </section>
        <RecentTrips />
      </div>
    </>
  );
}

export default BodyTrip;
