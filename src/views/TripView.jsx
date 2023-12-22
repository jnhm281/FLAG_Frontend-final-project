import { useState, useEffect } from "react";
import getTripList from "../services/getTripList";
import BodyTrip from "../components/BodyTrip";

function TripView() {
  const [tripDetails, setTripDetails] = useState([]);

  useEffect(function () {
    (async function () {
      const result = await getTripList.getTripList();

      setTripDetails(result);
    })();
  }, []);

  return (
    <>
      <div className="trip-page">
        {tripDetails.map((item) => (
          <BodyTrip key={item.id} tripDetail={item} />
        ))}
      </div>
    </>
  );
}

export default TripView;
