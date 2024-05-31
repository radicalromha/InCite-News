import axios from "axios";

const API_KEY = "3fb4afe9f246428f8264e9f32f429620";

const fetchNewsData = async (category) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching news data:", error);
    throw error;
  }
};

export default fetchNewsData;
