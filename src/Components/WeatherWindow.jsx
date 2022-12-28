import React from "react";
import {
  StyledWeatherWindow,
  TempItem,
  WetherItem,
} from "./styles/WetherWindow.styled";
import Weather from "./Weather";

const WeatherWindow = ({ cityData }) => {
  return (
    <StyledWeatherWindow>
      <WetherItem>
        <span>Country: </span>
        <span>{cityData.Country.EnglishName}</span>
      </WetherItem>
      <WetherItem>
        <span>State: </span>
        <span>{cityData.AdministrativeArea.EnglishName}</span>
      </WetherItem>
      <WetherItem>
        <span>Latitude: </span>
        <span>{cityData.GeoPosition.Latitude}</span>
      </WetherItem>
      <WetherItem>
        <span>Longitude: </span>
        <span>{cityData.GeoPosition.Longitude}</span>
      </WetherItem>
      <TempItem>
        <Weather citykey={cityData.Key} />
      </TempItem>
    </StyledWeatherWindow>
  );
};

export default WeatherWindow;
