import NumberComponent from "../components/NumberComponent";

const RegularMemes = ({ memes, setMemes }) => {
  const handleLikesChange = (memeId, newLikes) => {
    const memeIndexToUpdate = memes.findIndex((meme) => meme.id === memeId);
    const updatedMemes = [...memes];
    updatedMemes[memeIndexToUpdate].likes = newLikes;

    setMemes(updatedMemes);
  };

  return (
    <div>
      <ul className="memes-container">
        {memes
          .filter((meme) => meme.likes <= 5)
          .map((meme) => (
            <li key={meme.id}>
              <div className="meme-box">
                <h2>{meme.title}</h2>
                <img src={meme.img} alt={meme.title} />

                <p>
                  <NumberComponent
                    likes={meme.likes}
                    onLikesChange={(newLikes) =>
                      handleLikesChange(meme.id, newLikes)
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

export default RegularMemes;
