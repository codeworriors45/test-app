import { default as likedeactive } from "../../assets/img/likeDeActive.svg";
import { default as likeactive } from "../../assets/img/likeActive.svg";

const Rating = (props) => {
  const { value, propertyName, handleRating, } = props;
  const ratingArray = [1, 2, 3, 4, 5];

  return ratingArray.map((item) => {
    return (
      <img
        src={value >= item ? likeactive : likedeactive}
        onClick={() =>
          handleRating(
            propertyName,
            value >= item ? item - 1 : item
          )
        }
        className="rating-icon"
        alt="likeicon"
        key={item}
        width="37.52"
        height="37.52"
      />
    );
  });
};
export default Rating;
