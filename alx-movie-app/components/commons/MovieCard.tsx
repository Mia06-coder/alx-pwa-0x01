import Image from "next/image";
import React from "react";

type MovieCardProps = {
  title: string;
  posterUrl: string;
  releaseDate?: string;
  overview?: string;
};

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterUrl,
  releaseDate,
  overview,
}) => (
  <div className="border-1 border-gray-300 rounded-lg w-55 overflow-hidden shadow-2xs bg-white">
    <div className="w-full h-82">
      <Image src={posterUrl} alt={title} fill className="object-cover" />
    </div>
    <div className="p-3">
      <h3 className="mb-2 text-lg">{title}</h3>
      {releaseDate && (
        <p className="mb-2 text-gray-400 text-sm">{releaseDate}</p>
      )}
      {overview && (
        <p className="m-0 text-sm text-gray-600">
          {overview.length > 100 ? overview.slice(0, 100) + "..." : overview}
        </p>
      )}
    </div>
  </div>
);

export default MovieCard;
