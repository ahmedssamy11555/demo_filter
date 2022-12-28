import React, { useEffect, useState } from "react";
import { fetchApi, baseUrl } from "../utils/fetchApi";
import { Right, Left } from "./styles/Weather.styled";

const Weather = ({ citykey }) => {
  const [WeatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await fetchApi(
          `${baseUrl}/currentconditions/v1/${citykey}?&apikey=8cxniMTslqObGSlu29zq8knKiSyV8rS8`
        );
        setWeatherData(data);
      } catch (error) {
        throw new Error("Error Happend");
      }
    };

    fetchWeather();
  }, [citykey]);

  return (
    <>
      <Right>Weather: </Right>
      {WeatherData?.map((item) => (
        <Left key={item.EpochTime}>
          <span>
            {item?.Temperature.Imperial.Value}
            {item?.Temperature.Imperial.Unit}|
          </span>
          <span>
            {item?.Temperature.Metric.Value} {item?.Temperature.Metric.Unit}|
          </span>
          <span>{item?.WeatherText}</span>
        </Left>
      ))}
    </>
  );
};

export default Weather;
