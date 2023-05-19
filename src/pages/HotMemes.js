import React, { useState } from "react";
import memesData from "../memesData";
import NumberComponent from "../components/NumberComponent";

const HotMemes = () => {
  const [regularMemes, setRegularMemes] = useState(
    memesData.filter((meme) => meme.likes <= 5)
  );
  const [hotMemes, setHotMemes] = useState(
    memesData.filter((meme) => meme.likes > 5)
  );

  const handleLikesChange = (memeTitle, newLikes) => {
    const memeToUpdate = memesData.find((meme) => meme.title === memeTitle);
    memeToUpdate.likes = newLikes;

    if (newLikes <= 5) {
      // Move meme to the "Regular" route
      setHotMemes(hotMemes.filter((meme) => meme.title !== memeTitle));
      setRegularMemes([...regularMemes, memeToUpdate]);
    } else {
      // Update the likes in the "Hot" route
      setRegularMemes(regularMemes.filter((meme) => meme.title !== memeTitle));
      setHotMemes([...hotMemes]);
    }
  };

  return (
    <div>
      <ul className="memes-container">
        {hotMemes.map((meme) => (
          <li key={meme.title}>
            <div className="meme-box">
              <h2>{meme.title}</h2>
              <img src={meme.img} alt={meme.title} />

              <p>
                <NumberComponent
                  likes={meme.likes}
                  onLikesChange={(newLikes) =>
                    handleLikesChange(meme.title, newLikes)
                  }
                />
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotMemes;
