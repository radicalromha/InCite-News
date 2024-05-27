import axios from "axios";

const API_KEY = "e3d5a9927b4ad5c9214d9bcbe3b006cb";

const fetchNewsData = async (category = "general") => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=en&topic=${category}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching news data:", error);
    throw error;
  }
};

export default fetchNewsData;
