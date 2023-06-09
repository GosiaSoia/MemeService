import React from "react";
import NumberComponent from "../components/NumberComponent";

const Memes = ({ memes, setMemes, isHot, isFavourite }) => {
  const handleLikesChange = (memeId, newLikes) => {
    const memeIndexToUpdate = memes.findIndex((meme) => meme.id === memeId);
    const updatedMemes = [...memes];
    updatedMemes[memeIndexToUpdate].likes = newLikes;

    setMemes(updatedMemes);
  };

  const handleFavoriteToggle = (memeId) => {
    const memeIndexToUpdate = memes.findIndex((meme) => meme.id === memeId);
    const updatedMemes = [...memes];
    updatedMemes[memeIndexToUpdate].favourite =
      !updatedMemes[memeIndexToUpdate].favourite;

    setMemes(updatedMemes);
  };

  let filteredMemes = [...memes];

  if (isFavourite) {
    filteredMemes = filteredMemes.filter((meme) => meme.favourite);
  } else if (isHot) {
    filteredMemes = filteredMemes.filter((meme) => meme.likes > 5);
  } else {
    filteredMemes = filteredMemes.filter((meme) => meme.likes <= 5);
  }

  return (
    <div>
      <ul className="memes-container">
        {filteredMemes.map((meme) => (
          <li key={meme.id}>
            <div className="meme-box">
              <h2>{meme.title}</h2>
              <img src={meme.img} alt={meme.title} />

              <NumberComponent
                likes={meme.likes}
                isFavourite={meme.favourite}
                onLikesChange={(newLikes) =>
                  handleLikesChange(meme.id, newLikes)
                }
                onFavoriteToggle={() => handleFavoriteToggle(meme.id)}
                memeId={meme.id}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Memes;
