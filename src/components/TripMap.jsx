import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, NavigationControl } from "react-map-gl";
import { useEffect, useState } from "react";
// import getTripList from "../services/getTripList";

function TripMap({ tripData }) {
  //   console.log(tripData);

  //   const [mapInfo, setMapInfo] = useState([]);

  //   useEffect(function () {
  //     (async function () {
  //       const result = await getTripList.getTripList();

  //       setMapInfo(result);
  //       console.log(setMapInfo);
  //     })();
  //   }, []);

  const token =
    "pk.eyJ1Ijoiam5obTI4MSIsImEiOiJjbHF3ajVkNzEwM3MzMmtwemVrOTRmM2pnIn0.MWCkcdQMLjNvOTzw78Kiwg";

  const [centerMap, setCenterMap] = useState({
    latitude: tripData.latitude,
    longitude: tripData.longitude,
    zoom: 12,
  });

  return (
    <>
      <div className="trip-info-map">
        <Map
          {...centerMap}
          mapboxAccessToken={token}
          onMove={function (state) {
            return setCenterMap(state.centerMap);
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {/* <Marker latitude={tripData.latitude} longitude={tripData.longitude} /> */}
          {/* {tripData.map(function (info) {
            return (
              <>
                <div>
                  <Marker latitude={info.latitude} longitude={info.longitude} />
                </div>
              </>
            );
          })} */}
          {/* <NavigationControl position="bottom-right" showCompass showZoom /> */}
        </Map>
      </div>
    </>
  );
}

export default TripMap;