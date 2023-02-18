export interface Main {
  main: string;
}

export interface CountryData {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  dt: number;
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
  weather: Weather[];
}

export interface CurrentWeather {
  message: string;
  cod: string;
  count: number;
  list: CountryData[];
}

//////////////////////////////////////////////////////////////
export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface HourlyData {
  dt: number;
  temp: number;
  weather: Weather[];
}

export interface DailyData {
  dt: number;
  temp: {
    day: number;
  };
  weather: Weather[];
}

export interface OneCall {
  timezone: string;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    pressure: number;
    humidity: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    weather: Weather[];
  };
  daily: DailyData[];
  hourly: HourlyData[];
}
