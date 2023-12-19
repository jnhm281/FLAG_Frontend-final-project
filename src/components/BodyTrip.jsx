import WeatherContainer from "./WeatherContainer";
import RecentTrips from "./RecentTrips";

function BodyTrip() {
  return (
    <>
      <div className="body-trip-page">
        <section className="trip-hero">
          <div className="section-title, trip-title">
            <i class="fa-solid fa-location-dot"></i>
            <h2 className="trip-destination">New York</h2>
            <i class="fa-solid fa-calendar-days"></i>
            <h3 className="trip-date">2016</h3>
          </div>
          <div className="trip-container-1">
            <div className="trip-wrap-1">
              <img
                src="/images/new-york/New-York-Times-Square.jpg"
                alt="New York - Times Square"
                className="trip-img"
              />
              <div className="trip-auto">
                <img
                  src="/images/World-Map.svg"
                  alt="World Map - Img"
                  className="trip-worldMap"
                />
                <WeatherContainer />
              </div>
            </div>
          </div>
        </section>
        <section className="trip-details">
          <div className="trip-subtitle">
            <h3>New York: A Dynamic Tapestry of Culture and Excitement</h3>
          </div>
          <div className="trip-container-2">
            <div className="trip-wrap-2">
              <div className="trip-sumary">test</div>
              <div className="trip-description">
                <p>
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
