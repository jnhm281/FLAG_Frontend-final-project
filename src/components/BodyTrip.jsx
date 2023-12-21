import Weather from "./Weather";
import RecentTrips from "./RecentTrips";

function BodyTrip() {
  return (
    <>
      <div className="body-trip-page">
        <section className="trip-container">
          <div className="trip-title">
            <div className="trip-title-destination">
              <i class="fa-solid fa-location-dot"></i>
              <h2 className="trip-title-destination-text">New York</h2>
            </div>
            <div className="trip-title-date">
              <i class="fa-solid fa-calendar-days"></i>
              <h3 className="trip-title-date-text">2016</h3>
            </div>
          </div>
          <div className="trip-wrapper-1">
            {/*  */}
            <div className="trip-slider">
              <img
                src="/images/new-york/New-York-Times-Square.jpg"
                alt="New York - Times Square"
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
              <h2>New York: A Dynamic Tapestry of Culture and Excitement</h2>
            </div>
            <div className="trip-summary">
              <div className="trip-summary-highlights">highlights-2</div>
              <div className="trip-summary-description">
                <p className="trip-summary-description-text">
                  Visiting New York is an exhilarating experience that immerses
                  you in the vibrant energy and cultural diversity of the city
                  that never sleeps. As you stroll through the bustling streets,
                  towering skyscrapers create a breathtaking skyline, and iconic
                  landmarks like the Statue of Liberty and Times Square dazzle
                  with their grandeur. The city's melting pot of cultures is
                  reflected in its eclectic neighborhoods, each offering a
                  unique flavor and atmosphere. From the historic charm of
                  Greenwich Village to the trendy boutiques of SoHo, every
                  corner unveils a new facet of this metropolis. The
                  world-renowned museums, such as the Metropolitan Museum of Art
                  and the Museum of Modern Art, showcase an unparalleled
                  collection of art and history. Culinary delights abound, with
                  street vendors offering diverse bites and Michelin-starred
                  restaurants serving exquisite meals. The fast-paced rhythm of
                  life in New York is complemented by serene escapes like
                  Central Park, where you can find respite amid the urban
                  hustle. The city's dynamism and the sense of endless
                  possibilities make a visit to New York an unforgettable
                  adventure.
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
