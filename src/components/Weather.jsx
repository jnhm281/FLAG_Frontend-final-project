import "./weather.css";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function Weather({ tripData, currentWeatherInfo, forecastWeatherInfo }) {
  const dayOfTheWeek = new Date().getDay();
  const forecastWeekDays = weekdays
    .slice(dayOfTheWeek, weekdays.length)
    .concat(weekdays.slice(0, dayOfTheWeek));

  console.log(forecastWeekDays);

  return (
    <>
      <div className="trip-info-weather">
        <div className="currentWeather">
          <div className="currentWeather-main">
            <span className="currentWeather-main-city">{tripData.city}</span>
            <div className="currentWeather-main-temperature">
              <i class="fa-solid fa-temperature-half currentWeather-main-temperature-icon"></i>
              <span className="currentWeather-main-temperature-text">
                {Math.round(currentWeatherInfo.main?.temp)}&deg;
              </span>
            </div>
          </div>
          <div className="currentWeather-details">
            <div className="currentWeather-details-feelsLike">
              <i class="fa-solid fa-gauge-simple-high currentWeather-details-feelsLike-icon"></i>
              <span className="currentWeather-details-feelsLike-text">
                {Math.round(currentWeatherInfo.main?.feels_like)}&deg;
              </span>
            </div>
            <div className="currentWeather-details-humidity">
              <i class="fa-solid fa-droplet currentWeather-details-humidity-icon"></i>
              <span className="currentWeather-details-humidity-text">
                {Math.round(currentWeatherInfo.main?.humidity)}%
              </span>
            </div>
            <div className="currentWeather-details-wind">
              <i class="fa-solid fa-wind currentWeather-details-wind-icon"></i>
              <span className="currentWeather-details-wind-text">
                {Math.round(currentWeatherInfo.wind?.speed)}m/s
              </span>
            </div>
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
        <hr className="hor-ruler-weather" />
        {/* ------ */}

        <div className="forecastWeather">
          {forecastWeatherInfo?.map((item, index) => {
            return (
              <div className="forecastWeather-day">
                {/* <span className="forecastWeather-day-min">
                  {Math.round(item?.main.temp_min)}&deg;
                </span> */}
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
                <span className="forecastWeather-day-weekday">
                  {forecastWeekDays[index]}
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
