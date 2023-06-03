import React from "react";

//class component used here is used as part of learning and is intentional
class NumberComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myNumber: props.likes,
      isFavourite: props.isFavourite,
    };
  }

  downVote = () => {
    this.setState((prevState) => ({
      myNumber: prevState.myNumber - 1,
    }));
    this.props.onLikesChange(this.state.myNumber - 1);
  };

  upVote = () => {
    this.setState((prevState) => ({
      myNumber: prevState.myNumber + 1,
    }));
    this.props.onLikesChange(this.state.myNumber + 1);
  };

  starClick = () => {
    this.setState(
      (prevState) => ({
        isFavourite: !prevState.isFavourite,
      }),
      () => {
        this.props.onFavoriteToggle(this.props.memeId);
      }
    );
  };

  render() {
    const starImage = this.state.isFavourite ? "/star.png" : "/emptystar.png";

    return (
      <div>
        <button className="btn" onClick={this.upVote}>
          Like &#128077;
        </button>
        <button className="btn" onClick={this.downVote}>
          Dislike &#128078;
        </button>
        <button className="btn-star" onClick={this.starClick}>
          <img src={starImage} alt="Star" />
        </button>
        <p>Number of likes: {this.state.myNumber}</p>
      </div>
    );
  }
}

export default NumberComponent;
