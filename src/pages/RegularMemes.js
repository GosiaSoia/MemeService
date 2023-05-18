import React, { useState } from "react";
import memesData from "../memesData";
import NumberComponent from "../components/NumberComponent";

const RegularMemes = () => {
  const [regularMemes, setRegularMemes] = useState(
    memesData.filter((meme) => meme.likes <= 5)
  );
  const [hotMemes, setHotMemes] = useState(
    memesData.filter((meme) => meme.likes > 5)
  );

  const handleLikesChange = (memeTitle, newLikes) => {
    const memeToUpdate = memesData.find((meme) => meme.title === memeTitle);
    memeToUpdate.likes = newLikes;

    if (newLikes > 5) {
      // Move meme to the "Hot" route
      setRegularMemes(regularMemes.filter((meme) => meme.title !== memeTitle));
      setHotMemes([...hotMemes, memeToUpdate]);
    } else {
      // Update the likes in the "Regular" route
      setRegularMemes([...regularMemes]);
      setHotMemes(hotMemes.filter((meme) => meme.title !== memeTitle));
    }
  };

  return (
    <div>
      <h2>Regular Memes</h2>
      <ul className="memes-container">
        {regularMemes.map((meme) => (
          <li key={meme.title}>
            <img src={meme.img} alt={meme.title} />
            <h2>{meme.title}</h2>
            <p>
              <NumberComponent
                likes={meme.likes}
                onLikesChange={(newLikes) =>
                  handleLikesChange(meme.title, newLikes)
                }
              />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegularMemes;
