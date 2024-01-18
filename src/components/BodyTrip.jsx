import { useState, useEffect } from "react";
import TripMap from "./TripMap";
import Weather from "./Weather";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "./slider.css";

function BodyTrip({ tripDetail }) {
  function checkCoordinatesForMap() {
    if ((tripDetail.latitude && tripDetail.longitude) != undefined) {
      return <TripMap key={tripDetail.id} tripData={tripDetail} />;
    }
  }

  function checkWeather() {
    if ((tripDetail.latitude && tripDetail.longitude) != undefined) {
      return (
        <Weather
          key={tripDetail.id}
          tripData={tripDetail}
          currentWeatherInfo={currentWeather}
          forecastWeatherInfo={forecastWeather}
        />
      );
    }
  }

  const weatherAPIKey = import.meta.env.VITE_OPENWEATHER_KEY;

  const [currentWeather, setCurrentWeather] = useState({});

  const [forecastWeather, setForecastWeather] = useState([]);

  const currentWeatherFetch = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${tripDetail.latitude}&lon=${tripDetail.longitude}&units=metric&appid=${weatherAPIKey}`
  );

  const forecastWeatherFetch = fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${tripDetail.latitude}&lon=${tripDetail.longitude}&units=metric&appid=${weatherAPIKey}`
  );

  useEffect(function () {
    (async function () {
      const responseCurrentWeather = await currentWeatherFetch;
      const resultCurrentWeather = await responseCurrentWeather.json();

      setCurrentWeather(resultCurrentWeather);

      const responseForecastWeather = await forecastWeatherFetch;
      const resultForecastWeather = await responseForecastWeather.json();

      const newResultForecastWeather = [
        resultForecastWeather.list[7],
        resultForecastWeather.list[15],
        resultForecastWeather.list[23],
        resultForecastWeather.list[31],
        resultForecastWeather.list[39],
      ];

      setForecastWeather(newResultForecastWeather);
    })();
  }, []);

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
            <Swiper
              modules={[EffectFade]}
              effect="fade"
              className="trip-slider"
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              autoplay={true}
            >
              <SwiperSlide className="trip-slide">
                <img
                  className="trip-slide-img"
                  src={tripDetail.slideImg1}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="trip-slide">
                <img
                  className="trip-slide-img"
                  src={tripDetail.slideImg2}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="trip-slide">
                <img
                  className="trip-slide-img"
                  src={tripDetail.slideImg3}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
            {/*  */}
            <div className="trip-info">
              {checkCoordinatesForMap()}
              {checkWeather()}
            </div>
          </div>
          <div className="trip-wrapper-2">
            <div className="trip-subtitle">
              <h2>{tripDetail.summaryTitle}</h2>
            </div>
            <div className="trip-summary">
              <div className="trip-summary-highlights">
                <div className="trip-summary-highlights-details">
                  <i class="fa-solid fa-city trip-summary-highlights-details-icon"></i>
                  <span className="trip-summary-highlights-details-text">
                    {tripDetail.city}
                  </span>
                </div>
                <hr className="hor-ruler-details" />
                <div className="trip-summary-highlights-details">
                  <i class="fa-regular fa-flag trip-summary-highlights-details-icon"></i>
                  <span className="trip-summary-highlights-details-text">
                    {tripDetail.country}
                  </span>
                </div>
                <hr className="hor-ruler-details" />
                <div className="trip-summary-highlights-details">
                  <i class="fa-solid fa-coins trip-summary-highlights-details-icon"></i>
                  <span className="trip-summary-highlights-details-text">
                    {tripDetail.currency}
                  </span>
                </div>
                <hr className="hor-ruler-details" />
                <div className="trip-summary-highlights-details">
                  <i class="fa-solid fa-suitcase-rolling trip-summary-highlights-details-icon"></i>
                  <span className="trip-summary-highlights-details-text">
                    {tripDetail.type}
                  </span>
                </div>
                <hr className="hor-ruler-details" />
                <div className="trip-summary-highlights-details">
                  <i class="fa-solid fa-wallet trip-summary-highlights-details-icon"></i>
                  <span className="trip-summary-highlights-details-text">
                    {tripDetail.price}/5
                  </span>
                </div>
              </div>
              <div className="trip-summary-description">
                <p className="trip-summary-description-text">
                  {tripDetail.summaryText}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BodyTrip;
