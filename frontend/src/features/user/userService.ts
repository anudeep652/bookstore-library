import axios from "axios";

const URL =
  process.env.REACT_APP_REQUEST_URL ||
  "https://bookstore-library-backend.onrender.com";

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

export const contact = async (data: {
  email: string;
  subject: string;
  message: string;
}) => {
  const response = await axios.post(`${URL}/contact`, data);
  return response.data;
};
