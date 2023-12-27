import "./weather.css";

function Weather() {
  return (
    <>
      <div className="trip-info-weather">
        <div className="currentWeather">
          <span className="currentWeather-temperature">36°C</span>
          <div className="currentWeather-details">
            <span className="currentWeather-details-precipitation">0%</span>
            <span className="currentWeather-details-humidity">70%</span>
            <span className="currentWeather-details-wind">5km/h</span>
          </div>
          <div className="currentWeather-condition">
            <img src="" alt="" className="currentWeather-condition-img" />
            <span className="currentWeather-condition-description"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
