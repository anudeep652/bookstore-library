import axios from "axios";
const URL = process.env.REACT_APP_REQUEST_URL;
// console.log(process.env.REACT_APP_REQUEST_URL);
export const getAllBooks = async () => {
  const response = await axios.get(`${URL}/book`);
  return response.data;
};

export const review = async (
  bookName: string,
  token: string,
  review: { subject: string; message: string },
  stars: number
) => {
  const response = await axios.post(
    `${URL}/${bookName}/writeReview`,
    { bookName, review, stars },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
