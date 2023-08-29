import style from "../style.css";
import { useState } from "react";

export default function StarRatingComponent() {

  const [isHover, setIsHover] = useState(false);
  const [isHoverSecond, setIsHoverSecond] = useState(false);
  const [isHoverThird, setIsHoverThird] = useState(false);
  const [isHoverFourth, setIsHoverFourth] = useState(false);
  const [isHoverFifth, setIsHoverFifth] = useState(false);
  const [rating, setRating] = useState("");

  const clickStar = (starNumber) => {
    let ratingValue = ratingMessages[starNumber];
    setRating(ratingValue);
    hoverInputEnter(starNumber);
  };

  function hoverInputEnter(starNumber) {
    switch (starNumber) {
      case "firstStar":
        setIsHover(true);
        setIsHoverSecond(false);
        setIsHoverThird(false);
        setIsHoverFourth(false);
        setIsHoverFifth(false);
        break;
      case "secondStar":
        setIsHover(true);
        setIsHoverSecond(true);
        setIsHoverThird(false);
        setIsHoverFourth(false);
        setIsHoverFifth(false);
        break;
      case "thirdStar":
        setIsHover(true);
        setIsHoverSecond(true);
        setIsHoverThird(true);
        setIsHoverFourth(false);
        setIsHoverFifth(false);
        break;
      case "fourthStar":
        setIsHover(true);
        setIsHoverSecond(true);
        setIsHoverThird(true);
        setIsHoverFourth(true);
        setIsHoverFifth(false);
        break;
      case "fifthStar":
        setIsHover(true);
        setIsHoverSecond(true);
        setIsHoverThird(true);
        setIsHoverFourth(true);
        setIsHoverFifth(true);
        break;
    }
  }

  let ratingMessages = {
    fifthStar:
      "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform",
    fourthStar:
      "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
    thirdStar:
      "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
    secondStar:
      "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
    firstStar:
      "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
  };
  return (
    <div className="starComponentWrapper">
      <p className="starComponentTitle">
        How many stars would you give to our Online Code Editor?
      </p>

      <div className="starComponentRatingButtons">
        <svg
          width="77"
          height="74"
          viewBox="0 0 77 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={() => hoverInputEnter("firstStar")}
          onClick={() => clickStar("firstStar")}
          onFocus={() => hoverInputEnter("firstStar")}
        >
          <path
            id="firstStar"
            d="M25.3505 22.69L3.02054 25.9275L2.62504 26.008C2.02632 26.1669 1.48052 26.4819 1.04336 26.9208C0.606199 27.3597 0.293347 27.9067 0.136753 28.506C-0.019842 29.1054 -0.0145694 29.7355 0.152032 30.3322C0.318633 30.9288 0.640593 31.4705 1.08503 31.902L17.262 47.6485L13.447 69.891L13.4015 70.276C13.3649 70.8952 13.4935 71.5131 13.7741 72.0663C14.0548 72.6195 14.4774 73.0881 14.9987 73.4243C15.52 73.7605 16.1213 73.952 16.7411 73.9794C17.3608 74.0067 17.9766 73.8689 18.5255 73.58L38.4965 63.08L58.422 73.58L58.772 73.741C59.3497 73.9686 59.9776 74.0383 60.5912 73.9432C61.2048 73.848 61.782 73.5913 62.2636 73.1994C62.7452 72.8076 63.114 72.2946 63.332 71.7132C63.5499 71.1318 63.6093 70.5029 63.504 69.891L59.6855 47.6485L75.8695 31.8985L76.1425 31.601C76.5325 31.1207 76.7882 30.5456 76.8836 29.9343C76.9789 29.323 76.9105 28.6973 76.6853 28.1211C76.4602 27.5448 76.0863 27.0385 75.6017 26.6538C75.1172 26.2691 74.5393 26.0197 73.927 25.931L51.597 22.69L41.615 2.46C41.3262 1.87387 40.879 1.3803 40.3242 1.03517C39.7694 0.690029 39.129 0.507107 38.4755 0.507107C37.8221 0.507107 37.1817 0.690029 36.6269 1.03517C36.072 1.3803 35.6249 1.87387 35.336 2.46L25.3505 22.69Z"
            fill={isHover ? "#FACC15" : "#E2E8F0"}
          />
        </svg>

        <svg
          width="77"
          height="74"
          viewBox="0 0 77 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={() => hoverInputEnter("secondStar")}
          onFocus={() => hoverInputEnter("secondStar")}
          onClick={() => clickStar("secondStar")}
        >
          <path
            id="secondStar"
            className="starPath"
            d="M25.3505 22.69L3.02054 25.9275L2.62504 26.008C2.02632 26.1669 1.48052 26.4819 1.04336 26.9208C0.606199 27.3597 0.293347 27.9067 0.136753 28.506C-0.019842 29.1054 -0.0145694 29.7355 0.152032 30.3322C0.318633 30.9288 0.640593 31.4705 1.08503 31.902L17.262 47.6485L13.447 69.891L13.4015 70.276C13.3649 70.8952 13.4935 71.5131 13.7741 72.0663C14.0548 72.6195 14.4774 73.0881 14.9987 73.4243C15.52 73.7605 16.1213 73.952 16.7411 73.9794C17.3608 74.0067 17.9766 73.8689 18.5255 73.58L38.4965 63.08L58.422 73.58L58.772 73.741C59.3497 73.9686 59.9776 74.0383 60.5912 73.9432C61.2048 73.848 61.782 73.5913 62.2636 73.1994C62.7452 72.8076 63.114 72.2946 63.332 71.7132C63.5499 71.1318 63.6093 70.5029 63.504 69.891L59.6855 47.6485L75.8695 31.8985L76.1425 31.601C76.5325 31.1207 76.7882 30.5456 76.8836 29.9343C76.9789 29.323 76.9105 28.6973 76.6853 28.1211C76.4602 27.5448 76.0863 27.0385 75.6017 26.6538C75.1172 26.2691 74.5393 26.0197 73.927 25.931L51.597 22.69L41.615 2.46C41.3262 1.87387 40.879 1.3803 40.3242 1.03517C39.7694 0.690029 39.129 0.507107 38.4755 0.507107C37.8221 0.507107 37.1817 0.690029 36.6269 1.03517C36.072 1.3803 35.6249 1.87387 35.336 2.46L25.3505 22.69Z"
            fill={isHoverSecond ? "#FACC15" : "#E2E8F0"}
          />
        </svg>

        <svg
          width="77"
          height="74"
          viewBox="0 0 77 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={() => hoverInputEnter("thirdStar")}
          onFocus={() => hoverInputEnter("thirdStar")}
          onClick={() => clickStar("thirdStar")}
        >
          <path
            id="thirdStar"
            className="starPath"
            d="M25.3505 22.69L3.02054 25.9275L2.62504 26.008C2.02632 26.1669 1.48052 26.4819 1.04336 26.9208C0.606199 27.3597 0.293347 27.9067 0.136753 28.506C-0.019842 29.1054 -0.0145694 29.7355 0.152032 30.3322C0.318633 30.9288 0.640593 31.4705 1.08503 31.902L17.262 47.6485L13.447 69.891L13.4015 70.276C13.3649 70.8952 13.4935 71.5131 13.7741 72.0663C14.0548 72.6195 14.4774 73.0881 14.9987 73.4243C15.52 73.7605 16.1213 73.952 16.7411 73.9794C17.3608 74.0067 17.9766 73.8689 18.5255 73.58L38.4965 63.08L58.422 73.58L58.772 73.741C59.3497 73.9686 59.9776 74.0383 60.5912 73.9432C61.2048 73.848 61.782 73.5913 62.2636 73.1994C62.7452 72.8076 63.114 72.2946 63.332 71.7132C63.5499 71.1318 63.6093 70.5029 63.504 69.891L59.6855 47.6485L75.8695 31.8985L76.1425 31.601C76.5325 31.1207 76.7882 30.5456 76.8836 29.9343C76.9789 29.323 76.9105 28.6973 76.6853 28.1211C76.4602 27.5448 76.0863 27.0385 75.6017 26.6538C75.1172 26.2691 74.5393 26.0197 73.927 25.931L51.597 22.69L41.615 2.46C41.3262 1.87387 40.879 1.3803 40.3242 1.03517C39.7694 0.690029 39.129 0.507107 38.4755 0.507107C37.8221 0.507107 37.1817 0.690029 36.6269 1.03517C36.072 1.3803 35.6249 1.87387 35.336 2.46L25.3505 22.69Z"
            fill={isHoverThird ? "#FACC15" : "#E2E8F0"}
          />
        </svg>

        <svg
          width="77"
          height="74"
          viewBox="0 0 77 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={() => hoverInputEnter("fourthStar")}
          onFocus={() => hoverInputEnter("fourthStar")}
          onClick={() => clickStar("fourthStar")}
        >
          <path
            id="fourthStar"
            className="starPath"
            d="M25.3505 22.69L3.02054 25.9275L2.62504 26.008C2.02632 26.1669 1.48052 26.4819 1.04336 26.9208C0.606199 27.3597 0.293347 27.9067 0.136753 28.506C-0.019842 29.1054 -0.0145694 29.7355 0.152032 30.3322C0.318633 30.9288 0.640593 31.4705 1.08503 31.902L17.262 47.6485L13.447 69.891L13.4015 70.276C13.3649 70.8952 13.4935 71.5131 13.7741 72.0663C14.0548 72.6195 14.4774 73.0881 14.9987 73.4243C15.52 73.7605 16.1213 73.952 16.7411 73.9794C17.3608 74.0067 17.9766 73.8689 18.5255 73.58L38.4965 63.08L58.422 73.58L58.772 73.741C59.3497 73.9686 59.9776 74.0383 60.5912 73.9432C61.2048 73.848 61.782 73.5913 62.2636 73.1994C62.7452 72.8076 63.114 72.2946 63.332 71.7132C63.5499 71.1318 63.6093 70.5029 63.504 69.891L59.6855 47.6485L75.8695 31.8985L76.1425 31.601C76.5325 31.1207 76.7882 30.5456 76.8836 29.9343C76.9789 29.323 76.9105 28.6973 76.6853 28.1211C76.4602 27.5448 76.0863 27.0385 75.6017 26.6538C75.1172 26.2691 74.5393 26.0197 73.927 25.931L51.597 22.69L41.615 2.46C41.3262 1.87387 40.879 1.3803 40.3242 1.03517C39.7694 0.690029 39.129 0.507107 38.4755 0.507107C37.8221 0.507107 37.1817 0.690029 36.6269 1.03517C36.072 1.3803 35.6249 1.87387 35.336 2.46L25.3505 22.69Z"
            fill={isHoverFourth ? "#FACC15" : "#E2E8F0"}
          />
        </svg>

        <svg
          width="77"
          height="74"
          viewBox="0 0 77 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={() => hoverInputEnter("fifthStar")}
          onFocus={() => hoverInputEnter("fifthStar")}
          onClick={() => clickStar("fifthStar")}
        >
          <path
            id="fifthStar"
            className="starPath"
            d="M25.3505 22.69L3.02054 25.9275L2.62504 26.008C2.02632 26.1669 1.48052 26.4819 1.04336 26.9208C0.606199 27.3597 0.293347 27.9067 0.136753 28.506C-0.019842 29.1054 -0.0145694 29.7355 0.152032 30.3322C0.318633 30.9288 0.640593 31.4705 1.08503 31.902L17.262 47.6485L13.447 69.891L13.4015 70.276C13.3649 70.8952 13.4935 71.5131 13.7741 72.0663C14.0548 72.6195 14.4774 73.0881 14.9987 73.4243C15.52 73.7605 16.1213 73.952 16.7411 73.9794C17.3608 74.0067 17.9766 73.8689 18.5255 73.58L38.4965 63.08L58.422 73.58L58.772 73.741C59.3497 73.9686 59.9776 74.0383 60.5912 73.9432C61.2048 73.848 61.782 73.5913 62.2636 73.1994C62.7452 72.8076 63.114 72.2946 63.332 71.7132C63.5499 71.1318 63.6093 70.5029 63.504 69.891L59.6855 47.6485L75.8695 31.8985L76.1425 31.601C76.5325 31.1207 76.7882 30.5456 76.8836 29.9343C76.9789 29.323 76.9105 28.6973 76.6853 28.1211C76.4602 27.5448 76.0863 27.0385 75.6017 26.6538C75.1172 26.2691 74.5393 26.0197 73.927 25.931L51.597 22.69L41.615 2.46C41.3262 1.87387 40.879 1.3803 40.3242 1.03517C39.7694 0.690029 39.129 0.507107 38.4755 0.507107C37.8221 0.507107 37.1817 0.690029 36.6269 1.03517C36.072 1.3803 35.6249 1.87387 35.336 2.46L25.3505 22.69Z"
            fill={isHoverFifth ? "#FACC15" : "#E2E8F0"}
          />
        </svg>
      </div>
      <p className="starComponentRatingMessage">{rating}</p>
    </div>
  );
}
