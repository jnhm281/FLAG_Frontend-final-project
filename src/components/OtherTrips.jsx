import { Link } from "wouter";
import Map, { Marker, NavigationControl } from "react-map-gl";
import { useState, useEffect } from "react";

function OtherTrips() {
  const token =
    "pk.eyJ1Ijoiam5obTI4MSIsImEiOiJjbHF3ajVkNzEwM3MzMmtwemVrOTRmM2pnIn0.MWCkcdQMLjNvOTzw78Kiwg";

  const [centerMap, setCenterMap] = useState({
    latitude: 20,
    longitude: 10,
    zoom: 1.5,
    maxZoom: 1.5,
    minZoom: 1.5,
    // interactive: false,
    // scrollZoom: false,
    // boxZoom: false,
    // doubleClickZoom: false,
    attributionControl: false,
  });

  function handleClickAfrica() {
    window.location.href = "#africa";
  }

  function handleClickAsia() {
    window.location.href = "#asia";
  }

  function handleClickEurope() {
    window.location.href = "#europe";
  }

  function handleClickOceania() {
    window.location.href = "#oceania";
  }

  function handleClickNorthAmerica() {
    window.location.href = "#northAmerica";
  }

  function handleClickSouthAmerica() {
    window.location.href = "#southAmerica";
  }

  return (
    <>
      <section className="other-trips-container">
        <hr className="hor-ruler-body" />
        <div className="section-title">
          <h2>Other trips</h2>
        </div>
        <div className="worldMap-container">
          <Map
            {...centerMap}
            mapboxAccessToken={token}
            onMove={function (state) {
              return setCenterMap(state.centerMap);
            }}
            mapStyle="mapbox://styles/jnhm281/clr2fg5ab01ce01qr7jioc1bu"
          >
            <Marker
              color="#E85A4F"
              className="marker"
              onClick={() => {
                handleClickNorthAmerica();
              }}
              latitude="38.065392"
              longitude="-820.213446"
            />
            <Marker
              color="#E85A4F"
              className="marker"
              onClick={() => {
                handleClickSouthAmerica();
              }}
              latitude="-13.838080"
              longitude="-59.036562"
            />
            <Marker
              color="#E85A4F"
              className="marker"
              onClick={() => {
                handleClickAfrica();
              }}
              latitude="11.609193"
              longitude="19.764855"
            />
            <Marker
              color="#E85A4F"
              className="marker"
              onClick={() => {
                handleClickEurope();
              }}
              latitude="50.120578"
              longitude="15.543351"
            />
            <Marker
              color="#E85A4F"
              className="marker"
              onClick={() => {
                handleClickAsia();
              }}
              latitude="36.668419"
              longitude="92.937600"
            />
            <Marker
              color="#E85A4F"
              className="marker"
              onClick={() => {
                handleClickOceania();
              }}
              latitude="-23.805450"
              longitude="135.504437"
            />
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
      </section>
    </>
  );
}

export default OtherTrips;
