import axios from "axios";

const URL = process.env.REACT_APP_REQUEST_URL || "http://localhost:5000";

export const BuyABook = async (bookName: string, token: string) => {
  const response = await axios.post(`${URL}/${bookName}/buy`, bookName, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const rentABook = async (bookName: string, token: string) => {
  const response = await axios.post(`${URL}/${bookName}/rent`, bookName, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
