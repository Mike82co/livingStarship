import React, { Component } from "react";
import loadIcons from "./imageLoader";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      gameSelected: ""
    };
  }

  printImageInfo() {
    console.log(loadIcons("meepleIcons"));
  }
  selectGame = event => {
    event.preventDefault();
    this.props.callBackFromParent("This is data passed from splash");
  };

  render() {
    return (
      <div class="splashMainContainer">
        <form>
          <input
            class="gameSelectButton"
            id=""
            type="image"
            src="./assets/StarshipImages/MainLogos/AcademyPreludesLogo.png"
            alt="Submit"
            onClick={this.selectGame}
          />
          <input
            class="gameSelectButton"
            id=""
            type="image"
            src="./assets/StarshipImages/MainLogos/LegacyMissionsLogo.png"
            alt="Submit"
            onClick={this.printImageInfo}
          />
          <input
            class="gameSelectButton"
            id=""
            type="image"
            src="./assets/StarshipImages/MainLogos/RankareeLogo.png"
            alt="Submit"
          />
          <input
            class="gameSelectButton"
            id=""
            type="image"
            src="./assets/StarshipImages/MainLogos/RiseToCommandLogo.png"
            alt="Submit"
          />
        </form>
      </div>
    );
  }
}
export default Splash;
