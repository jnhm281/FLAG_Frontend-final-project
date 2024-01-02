import "./weather.css";

function Weather({ tripData }) {
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
            <img
              src="/logo/Favicon-64x64px.svg"
              alt="Test"
              className="currentWeather-condition-img"
            />
            <span className="currentWeather-condition-description"></span>
          </div>
        </div>
        <div className="forecastWeather">
          <div className="forecastWeather-day">
            <span className="forecastWeather-day-min">10°C</span>
            <div className="forecastWeather-day-condition">
              <img
                src="/logo/Favicon-64x64px.svg"
                alt="Test"
                className="forecastWeather-day-condition-img"
              />
            </div>
            <span className="forecastWeather-day-max">20°C</span>
          </div>
          <div className="forecastWeather-day">
            <span className="forecastWeather-day-min">10°C</span>
            <div className="forecastWeather-day-condition">
              <img
                src="/logo/Favicon-64x64px.svg"
                alt="Test"
                className="forecastWeather-day-condition-img"
              />
            </div>
            <span className="forecastWeather-day-max">20°C</span>
          </div>
          <div className="forecastWeather-day">
            <span className="forecastWeather-day-min">10°C</span>
            <div className="forecastWeather-day-condition">
              <img
                src="/logo/Favicon-64x64px.svg"
                alt="Test"
                className="forecastWeather-day-condition-img"
              />
            </div>
            <span className="forecastWeather-day-max">20°C</span>
          </div>
          <div className="forecastWeather-day">
            <span className="forecastWeather-day-min">10°C</span>
            <div className="forecastWeather-day-condition">
              <img
                src="/logo/Favicon-64x64px.svg"
                alt="Test"
                className="forecastWeather-day-condition-img"
              />
            </div>
            <span className="forecastWeather-day-max">20°C</span>
          </div>
          <div className="forecastWeather-day">
            <span className="forecastWeather-day-min">10°C</span>
            <div className="forecastWeather-day-condition">
              <img
                src="/logo/Favicon-64x64px.svg"
                alt="Test"
                className="forecastWeather-day-condition-img"
              />
            </div>
            <span className="forecastWeather-day-max">20°C</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
