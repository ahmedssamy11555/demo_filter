import axios from "axios";

export const baseUrl = "https://dataservice.accuweather.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
