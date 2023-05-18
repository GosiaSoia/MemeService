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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.myNumber >= 5 && this.state.myNumber < 5) {
      // Call a callback function passed as a prop to handle filtering
      this.props.onLikesChange();
    }
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.myClick}>
          Dislike
        </button>
        <button className="btn" onClick={this.myClick2}>
          Like
        </button>
        <p>Number of likes: {this.state.myNumber}</p>
      </div>
    );
  }
}

export default NumberComponent;
