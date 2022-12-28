import React, { useState } from "react";
import { StyledSidePanel, Top, Backdrop } from "./styles/Sidepanel.styled";
import { MdClose } from "react-icons/md";

import { baseUrl, fetchApi } from "../utils/fetchApi";
import SearchForm from "./SearchForm";
import WeatherWindow from "./WeatherWindow";
import { Starter } from "./styles/Weather.styled";

const SidePanel = ({ close, show }) => {
  const [cityData, setCityData] = useState("");
  const [loading, setLoading] = useState(false);
  const [Error, setIsError] = useState(false);

  const handleSearchQuary = async (serachQuary) => {
    setLoading(true);
    try {
      const data = await fetchApi(
        `${baseUrl}/locations/v1/cities/search?apikey=8cxniMTslqObGSlu29zq8knKiSyV8rS8&q=${serachQuary}&language=en-us&details=false`
      );
      setCityData(data[0]);
    } catch (error) {
      setIsError(true);
    }
    setLoading(false);
  };

  const hideStyles = {
    transform: "translateX(100%)",
  };
  const showStyles = {
    transform: "translateX(0)",
  };

  return (
    <>
      <Backdrop onClick={close} style={!show ? hideStyles : showStyles} />

      <StyledSidePanel style={!show ? hideStyles : showStyles}>
        <Top>
          <span>filters</span>
          <MdClose onClick={close} />
        </Top>
        {loading ? (
          "Loading"
        ) : Error ? (
          "error"
        ) : cityData ? (
          <WeatherWindow cityData={cityData} />
        ) : (
          <Starter>Type A City Name</Starter>
        )}
        <SearchForm searchQuary={handleSearchQuary} />
      </StyledSidePanel>
    </>
  );
};

export default SidePanel;
