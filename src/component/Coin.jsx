import React from "react";

const Coin = ({ id, img, position, onAnimationEnd }) => {
  return (
    <img
      src={img}
      alt=""
      className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none"
      style={{
        top: `${position.y - 60}px`,
        left: `${position.x - 30}px`,
        animation: `float .7s ease-out`,
      }}
      onAnimationEnd={() => onAnimationEnd(id)}
    />
  );
};

export default Coin;
