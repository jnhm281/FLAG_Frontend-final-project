import "./weather.css";

function Weather({ tripData, currentWeatherInfo, forecastWeatherInfo }) {
  return (
    <>
      <div className="trip-info-weather">
        <div className="currentWeather">
          <div className="currentWeather-main">
            <span className="currentWeather-main-city">{tripData.city}</span>
            <span className="currentWeather-main-temperature">
              {Math.round(currentWeatherInfo.main?.temp)}&deg;
            </span>
          </div>
          <div className="currentWeather-details">
            <span className="currentWeather-details-tempMax">
              {Math.round(currentWeatherInfo.main?.temp_min)}&deg;
            </span>
            <span className="currentWeather-details-tempMin">
              {Math.round(currentWeatherInfo.main?.temp_max)}&deg;
            </span>
            <span className="currentWeather-details-wind">
              {Math.round(currentWeatherInfo.wind?.speed)}m/s
            </span>
          </div>
          <div className="currentWeather-condition">
            <img
              src={
                "https://openweathermap.org/img/wn/" +
                currentWeatherInfo.weather?.[0].icon +
                ".png"
              }
              alt={"weather-icon-" + currentWeatherInfo.weather?.[0].main}
              className="currentWeather-condition-img"
            />
            <span className="currentWeather-condition-description">
              {currentWeatherInfo.weather?.[0].main}
            </span>
          </div>
        </div>
        <div className="forecastWeather">
          {forecastWeatherInfo?.map((item) => {
            return (
              <div className="forecastWeather-day">
                <span className="forecastWeather-day-min">
                  {Math.round(item?.main.temp_min)}&deg;
                </span>
                <div className="forecastWeather-day-condition">
                  <img
                    src={
                      "https://openweathermap.org/img/wn/" +
                      item?.weather?.[0].icon +
                      ".png"
                    }
                    alt={"weather-icon-" + item?.weather?.[0].main}
                    className="forecastWeather-day-condition-img"
                  />
                </div>
                <span className="forecastWeather-day-max">
                  {Math.round(item?.main.temp_max)}&deg;
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Weather;
