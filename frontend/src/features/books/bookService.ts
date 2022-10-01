import axios from "axios";
const URL = process.env.REACT_APP_REQUEST_URL || "http://localhost:5000";
console.log(process.env.REACT_APP_REQUEST_URL);
export const getAllBooks = async () => {
  const response = await axios.get(`${URL}/book`);
  return response.data;
};

export const review = async (
  bookName: string,
  token: string,
  review: { subject: string; message: string }
) => {
  const response = await axios.post(
    `${URL}/${bookName}/writeReview`,
    { bookName, review },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
