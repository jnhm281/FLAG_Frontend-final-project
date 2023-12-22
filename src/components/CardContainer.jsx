import { useState, useEffect } from "react";
import TripCard from "./TripCard";
import getTripList from "../services/getTripList";
import OtherTrips from "./OtherTrips";

function CardContainer() {
  const [tripCard, setTripCard] = useState([]);

  useEffect(function () {
    (async function () {
      const result = await getTripList.getTripList();

      setTripCard(result);
    })();
  }, []);

  return (
    <>
      <div className="recent-trips-container">
        <div className="section-title">
          <h2>Recent trips</h2>
        </div>
        <div className="card-container">
          {tripCard
            .filter((item) => item.continent === "Recent")
            .map((item) => (
              <TripCard key={item.id} tripInfo={item} />
            ))}
        </div>
      </div>

      {/* ------ */}

      <OtherTrips />

      {/* ------ */}

      <div className="continent-container">
        <div className="continent-title">
          <img
            src="/images/Africa.jpg"
            alt="Continent img"
            className="continent-title-img"
          />
          <h2 className="continent-title-text">Africa</h2>
        </div>
        <div className="card-container">
          {tripCard
            .filter((item) => item.continent === "Africa")
            .map((item) => (
              <TripCard key={item.id} tripInfo={item} />
            ))}
        </div>
      </div>

      {/* ------ */}

      <div className="continent-container">
        <div className="continent-title">
          <img
            src="/images/Asia.jpg"
            alt="Continent img"
            className="continent-title-img"
          />
          <h2 className="continent-title-text">Asia</h2>
        </div>
        <div className="card-container">
          {tripCard
            .filter((item) => item.continent === "Asia")
            .map((item) => (
              <TripCard key={item.id} tripInfo={item} />
            ))}
        </div>
      </div>

      {/* ------ */}

      <div className="continent-container">
        <div className="continent-title">
          <img
            src="/images/Europe.jpg"
            alt="Continent img"
            className="continent-title-img"
          />
          <h2 className="continent-title-text">Europe</h2>
        </div>
        <div className="card-container">
          {tripCard
            .filter((item) => item.continent === "Europe")
            .map((item) => (
              <TripCard key={item.id} tripInfo={item} />
            ))}
        </div>
      </div>

      {/* ------ */}

      <div className="continent-container">
        <div className="continent-title">
          <img
            src="/images/Oceania.jpg"
            alt="Continent img"
            className="continent-title-img"
          />
          <h2 className="continent-title-text">Oceania</h2>
        </div>
        <div className="card-container">
          {tripCard
            .filter((item) => item.continent === "Oceania")
            .map((item) => (
              <TripCard key={item.id} tripInfo={item} />
            ))}
        </div>
      </div>

      {/* ------ */}

      <div className="continent-container">
        <div className="continent-title">
          <img
            src="/images/North-America.jpg"
            alt="Continent img"
            className="continent-title-img"
          />
          <h2 className="continent-title-text">North America</h2>
        </div>
        <div className="card-container">
          {tripCard
            .filter((item) => item.continent === "North America")
            .map((item) => (
              <TripCard key={item.id} tripInfo={item} />
            ))}
        </div>
      </div>

      {/* ------ */}

      <div className="continent-container">
        <div className="continent-title">
          <img
            src="/images/South-America.jpg"
            alt="Continent img"
            className="continent-title-img"
          />
          <h2 className="continent-title-text">South America</h2>
        </div>
        <div className="card-container">
          {tripCard
            .filter((item) => item.continent === "South America")
            .map((item) => (
              <TripCard key={item.id} tripInfo={item} />
            ))}
        </div>
      </div>
    </>
  );
}

export default CardContainer;
