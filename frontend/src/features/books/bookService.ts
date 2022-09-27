import axios from "axios";

export const getAllBooks = async () => {
  const response = await axios.get("http://localhost:5000/book");
  return response.data;
};
