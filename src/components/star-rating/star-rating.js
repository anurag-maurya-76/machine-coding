import { useState } from "react";
import "./star-rating.css";
export function StarRating() {
  const stars = 5;
  const [rating, setRating] = useState(0);
  const handleRating = (e, index) => {
    const { left, width } = e.target.getBoundingClientRect();
    const relative = e.clientX - left;
    const value = relative > width / 2 ? index + 1 : index + 0.5;
    setRating(value);
  };

  const getStarClass = (index) => {
    const current = rating;
    if (current >= index + 1) return "star-full";
    if (current >= index + 0.5) return "star-half";
    return "star-empty";
  };

  return (
    <div className="star-rating">
      {Array.from({ length: stars }, (_, index) => {
        return (
          <div
            key={index}
            className={`star ${getStarClass(index)}`}
            onMouseMove={(e) => handleRating(e, index)}
          ></div>
        );
      })}
    </div>
  );
}
