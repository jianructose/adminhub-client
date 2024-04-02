const BASE_URL = "http://localhost:8080/api";
import axios from "axios";

// get
const getScheduleData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching schedule data: ", error);
  }
};

// add

// update

// delete

export { getScheduleData };
