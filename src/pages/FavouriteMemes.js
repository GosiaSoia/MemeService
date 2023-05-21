import React from "react";
import memesData from "../memesData";

const FavouriteMemes = () => {
  const favouriteMemes = memesData.filter((meme) => meme.isFavourite);

  return (
    <div>
      <ul className="memes-container">
        {favouriteMemes.map((meme) => (
          <li key={meme.title}>
            <div className="meme-box">
              <h2>{meme.title}</h2>
              <img src={meme.img} alt={meme.title} />
              <p>Number of likes: {meme.likes}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouriteMemes;
