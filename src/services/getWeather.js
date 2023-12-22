import { useState } from "react";

async function getWeather({ tripInfo }) {

    const weatherAPIKey = "260e56361ca6106361e0c6f6ba85a589";

    const [currentWeather, setCurrentWeather] = useState(null);

    const [ForecastWeather, setForecastWeather] = useState(null);

    const currentWeatherFetch = fetch("https://api.openweathermap.org/data/2.5/weather?lat=${"lat"}&lon=${"lon"}&appid=${"weatherAPIKey"}");

    const forecastWeatherFetch = fetch("https://api.openweathermap.org/data/2.5/forecast?lat=${"lat"}&lon=${"lon"}&appid=${"weatherAPIKey"}");

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
        .then(async (response) => {
            const currentWeatherResponse = await response[0].json();
            const forecastWeatherResponse = await response[1].json();
        })

    
}

export default {
  getWeather,
};
