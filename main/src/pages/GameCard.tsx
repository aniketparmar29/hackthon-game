import React from "react";
import { Link } from "react-router-dom";

type GameCardProps = {
  img: string;
  name: string;
  link: string;
  pointsToEarn: number | string;
};
const GameCard: React.FC<GameCardProps> = ({ img, name, link, pointsToEarn }) => {
  return (
    <div className="border-2 p-5 w-[90%] shadow-blue-600 shadow-lg">
        <Link
          to={link}
          className="block bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 sm:flex sm:flex-col"
          >
      <div className="relative pb-2/3 sm:flex-shrink-0 sm:w-full">
        <img
          className="w-[100%]"
          src={img}
          alt={name}
        />
      </div>
      <div className="p-4 sm:px-6 sm:py-4">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-sm mb-4">Points: {pointsToEarn}</p>
      </div>
      </Link>
    </div>
  );
};

export default GameCard;
