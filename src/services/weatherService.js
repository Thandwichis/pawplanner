// services/weatherService.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_TOMORROW_API_KEY;
const BASE_URL = 'https://api.tomorrow.io/v4/weather/realtime';

export const fetchWeather = async (lat, lon) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        location: `${lat},${lon}`,
        apikey: API_KEY,
      },
    });

    console.log('Full Weather API response:', response.data);
    return response.data;

  } catch (error) {
    console.error("Error fetching weather data:", error.response?.data || error.message);
    return null;
  }
};
