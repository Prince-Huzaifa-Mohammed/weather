import { DateTime } from "luxon";

import { CountryData, OneCall } from "../Interfaces/weather";

const apiKey = "439d4b804bc8187953eb36d2a8c26a02";

export const getGeoLocation = async (location: string) => {
  const url = `https://openweathermap.org/data/2.5/find?q=${location.trim()}&appid=${apiKey}`;

  const response = await fetch(url);

  const data = await response.json();
  return data;
};

export const getWeatherData = async (longitude: number, latitude: number) => {
  const url = `https://openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const toLocalTime = (
  secs: number,
  zone: string,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export const getFormattedData = (
  geoData: CountryData,
  weatherInfo: OneCall
) => {
  const hourly = weatherInfo.hourly.slice(1, 7);
  const daily = weatherInfo.daily.slice(1, 7);

  const finalData = {
    name: geoData.name,
    country: geoData.sys.country,
    timezone: weatherInfo.timezone,
    currentTime: toLocalTime(weatherInfo.current.dt, weatherInfo.timezone),
    currentCondition: weatherInfo.current.weather[0].main,
    currentTemperature: weatherInfo.current.temp,
    sunrise: toLocalTime(
      weatherInfo.current.sunrise,
      weatherInfo.timezone,
      "hh:mm a"
    ),
    sunset: toLocalTime(
      weatherInfo.current.sunset,
      weatherInfo.timezone,
      "hh:mm a"
    ),
    currentPressure: weatherInfo.current.pressure,
    uvi: weatherInfo.current.uvi,
    visibility: weatherInfo.current.visibility,
    windSpeed: weatherInfo.current.wind_speed,
    hourlyData: hourly.map((data) => {
      return {
        time: toLocalTime(data.dt, weatherInfo.timezone, "hh:mm a"),
        temp: data.temp,
        icon: data.weather[0].icon,
      };
    }),
    dailyData: daily.map((data) => {
      return {
        day: toLocalTime(data.dt, weatherInfo.timezone, "ccc"),
        temp: data.temp.day,
        icon: data.weather[0].icon,
      };
    }),
  };

  return finalData;
};

export const isValidCountry = (data: CountryData) => {
  // console.log(data);
  if (
    data.sys.country === "GH" ||
    data.sys.country === "RW" ||
    data.sys.country === "DE"
  ) {
    return true;
  }

  return false;
};

export const fahrenheit = (celcius: number) => {
  // (°C * 1.8) + 32 = °F --- Formular
  const fahrenheit = celcius * 1.8 + 32;
  return fahrenheit.toFixed(2);
};
