import React from "react";

class NumberComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myNumber: props.likes,
    };
  }

  myClick = () => {
    this.setState((prevState) => ({
      myNumber: prevState.myNumber - 1,
    }));
    this.props.onLikesChange(this.state.myNumber - 1);
  };

  myClick2 = () => {
    this.setState((prevState) => ({
      myNumber: prevState.myNumber + 1,
    }));
    this.props.onLikesChange(this.state.myNumber + 1);
  };

  starClick = () => {
    this.setState((prevState) => ({
      isFavourite: !prevState.isFavourite,
    }));
  };

  render() {
    const starImage = this.state.isFavourite ? "/star.png" : "/emptystar.png";

    return (
      <div>
        <button className="btn" onClick={this.myClick2}>
          Like &#128077;
        </button>
        <button className="btn" onClick={this.myClick}>
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
