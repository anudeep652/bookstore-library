import { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ dataPasser }: { dataPasser: any }) {
  const [rating, setRating] = useState(0);
  const [clicked, setClicked] = useState(false);

  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);
  console.log(rating);

  return (
    <span>
      <div className="star-container ">
        <h1 className="mr-5 text-black">Leave a rating</h1>
        <FaStar
          onMouseEnter={() => {
            !clicked && setStar1(true);
          }}
          onMouseLeave={() => {
            !clicked && setStar1(false);
          }}
          color={star1 ? "indigo" : "white"}
          onClick={() => {
            setClicked(true);
            setStar1(true);
            dataPasser(1);
          }}
        />
        <FaStar
          onMouseEnter={() => {
            !clicked && setStar1(true);
            !clicked && setStar2(true);
          }}
          onMouseLeave={() => {
            !clicked && setStar1(false);
            !clicked && setStar2(false);
          }}
          color={star2 ? "indigo" : "white"}
          onClick={() => {
            setClicked(true);

            setStar2(true);
            setStar1(true);
            dataPasser(2);

            console.log(2);
          }}
        />
        <FaStar
          onMouseEnter={() => {
            !clicked && setStar3(true);
            !clicked && setStar2(true);
            !clicked && setStar1(true);
          }}
          onMouseLeave={() => {
            !clicked && setStar3(false);
            !clicked && setStar2(false);
            !clicked && setStar1(false);
          }}
          color={star3 ? "indigo" : "white"}
          onClick={() => {
            setClicked(true);

            setStar3(true);
            setStar2(true);
            setStar1(true);
            dataPasser(3);

            console.log(3);
          }}
        />
        <FaStar
          onMouseEnter={() => {
            !clicked && setStar4(true);
            !clicked && setStar3(true);
            !clicked && setStar2(true);
            !clicked && setStar1(true);
          }}
          onMouseLeave={() => {
            !clicked && setStar4(false);
            !clicked && setStar3(false);
            !clicked && setStar2(false);
            !clicked && setStar1(false);
          }}
          color={star4 ? "indigo" : "white"}
          onClick={() => {
            setClicked(true);

            setStar4(true);
            setStar3(true);
            setStar2(true);
            setStar1(true);
            dataPasser(4);

            console.log(4);
          }}
        />
        <FaStar
          onMouseEnter={() => {
            !clicked && setStar5(true);
            !clicked && setStar4(true);
            !clicked && setStar3(true);
            !clicked && setStar2(true);
            !clicked && setStar1(true);
          }}
          onMouseLeave={() => {
            !clicked && setStar5(false);
            !clicked && setStar4(false);
            !clicked && setStar3(false);
            !clicked && setStar2(false);
            !clicked && setStar1(false);
          }}
          color={star5 ? "indigo" : "white"}
          onClick={() => {
            setClicked(true);

            setStar5(true);
            setStar4(true);
            setStar3(true);
            setStar2(true);
            setStar1(true);
            dataPasser(5);
          }}
        />
      </div>
    </span>
  );
}
export default StarRating;
