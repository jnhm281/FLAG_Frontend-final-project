import { useState, useEffect } from "react";
import getTripList from "../services/getTripList";
import BodyTrip from "../components/BodyTrip";

function TripView({ city }) {
  const [tripDetails, setTripDetails] = useState({});

  useEffect(function () {
    (async function () {
      const url = "/mockAPI/mockAPI.json";

      const response = await fetch(url);
      const result = await response.json();

      const foundElement = result.trips.find((item) => {
        return item.city == city;
      });

      // console.log(foundElement);

      setTripDetails(foundElement);
    })();
  }, []);

  // console.log(tripDetails);

  return (
    <>
      <div className="trip-page">
        <BodyTrip key={tripDetails.id} tripDetail={tripDetails} />
      </div>
    </>
  );
}

export default TripView;
