import React, { Component } from "react";

class diceDots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      agn: 1,
      eng: 1,
      fli: 1,
      hel: 1,
      ops: 1,
      sci: 1,
      tac: 1
    };
  }
  diceDotChange(event, division, number) {
    event.preventDefault();
    this.setState({
      [division]: number
    });
  }

  agnDotDraw() {
    switch (this.state.agn) {
      case 1:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="agn1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotAgnFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "agn", 1);
              }}
            />
            <input
              class="diceDot"
              id="agn2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotAgnUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "agn", 2);
              }}
            />
            <input
              class="diceDot"
              id="agn3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotAgnUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "agn", 3);
              }}
            />
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="agn1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotAgnFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "agn", 1);
              }}
            />
            <input
              class="diceDot"
              id="agn2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotAgnFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "agn", 2);
              }}
            />
            <input
              class="diceDot"
              id="agn3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotAgnUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "agn", 3);
              }}
            />
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="agn1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotAgnFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "agn", 1);
              }}
            />
            <input
              class="diceDot"
              id="agn2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotAgnFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "agn", 2);
              }}
            />
            <input
              class="diceDot"
              id="agn3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotAgnFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "agn", 3);
              }}
            />
          </React.Fragment>
        );
      default:
        return "";
    }
  }
  engDotDraw() {
    switch (this.state.eng) {
      case 1:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="agn1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotEngFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "eng", 1);
              }}
            />
            <input
              class="diceDot"
              id="agn2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotEngUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "eng", 2);
              }}
            />
            <input
              class="diceDot"
              id="agn3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotEngUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "eng", 3);
              }}
            />
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="agn1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotEngFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "eng", 1);
              }}
            />
            <input
              class="diceDot"
              id="agn2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotEngFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "eng", 2);
              }}
            />
            <input
              class="diceDot"
              id="agn3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotEngUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "eng", 3);
              }}
            />
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="agn1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotEngFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "eng", 1);
              }}
            />
            <input
              class="diceDot"
              id="agn2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotEngFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "eng", 2);
              }}
            />
            <input
              class="diceDot"
              id="agn3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotEngFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "eng", 3);
              }}
            />
          </React.Fragment>
        );
      default:
        return "";
    }
  }
  fliDotDraw() {
    switch (this.state.fli) {
      case 1:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="agn1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotFliFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "fli", 1);
              }}
            />
            <input
              class="diceDot"
              id="agn2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotFliUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "fli", 2);
              }}
            />
            <input
              class="diceDot"
              id="agn3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotFliUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "fli", 3);
              }}
            />
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="agn1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotFliFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "fli", 1);
              }}
            />
            <input
              class="diceDot"
              id="agn2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotFliFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "fli", 2);
              }}
            />
            <input
              class="diceDot"
              id="agn3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotFliUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "fli", 3);
              }}
            />
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="agn1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotFliFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "fli", 1);
              }}
            />
            <input
              class="diceDot"
              id="agn2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotFliFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "fli", 2);
              }}
            />
            <input
              class="diceDot"
              id="agn3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotFliFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "fli", 3);
              }}
            />
          </React.Fragment>
        );
      default:
        return "";
    }
  }
  helDotDraw() {
    switch (this.state.hel) {
      case 1:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="agn1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotHelFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "hel", 1);
              }}
            />
            <input
              class="diceDot"
              id="agn2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotHelUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "hel", 2);
              }}
            />
            <input
              class="diceDot"
              id="agn3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotHelUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "hel", 3);
              }}
            />
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="agn1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotHelFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "hel", 1);
              }}
            />
            <input
              class="diceDot"
              id="agn2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotHelFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "hel", 2);
              }}
            />
            <input
              class="diceDot"
              id="agn3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotHelUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "hel", 3);
              }}
            />
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="agn1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotHelFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "hel", 1);
              }}
            />
            <input
              class="diceDot"
              id="agn2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotHelFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "hel", 2);
              }}
            />
            <input
              class="diceDot"
              id="agn3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotHelFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "hel", 3);
              }}
            />
          </React.Fragment>
        );
      default:
        return "";
    }
  }
  opsDotDraw() {
    switch (this.state.ops) {
      case 1:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="ops1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotOpsFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "ops", 1);
              }}
            />
            <input
              class="diceDot"
              id="ops2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotOpsUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "ops", 2);
              }}
            />
            <input
              class="diceDot"
              id="ops3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotOpsUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "ops", 3);
              }}
            />
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="ops1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotOpsFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "ops", 1);
              }}
            />
            <input
              class="diceDot"
              id="ops2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotOpsFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "ops", 2);
              }}
            />
            <input
              class="diceDot"
              id="ops3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotOpsUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "ops", 3);
              }}
            />
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="ops1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotOpsFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "ops", 1);
              }}
            />
            <input
              class="diceDot"
              id="ops2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotOpsFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "ops", 2);
              }}
            />
            <input
              class="diceDot"
              id="ops3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotOpsFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "ops", 3);
              }}
            />
          </React.Fragment>
        );
      default:
        return "";
    }
  }
  sciDotDraw() {
    switch (this.state.sci) {
      case 1:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="sci1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotSciFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "sci", 1);
              }}
            />
            <input
              class="diceDot"
              id="sci2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotSciUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "sci", 2);
              }}
            />
            <input
              class="diceDot"
              id="sci3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotSciUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "sci", 3);
              }}
            />
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="sci1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotSciFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "sci", 1);
              }}
            />
            <input
              class="diceDot"
              id="sci2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotSciFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "sci", 2);
              }}
            />
            <input
              class="diceDot"
              id="sci3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotSciUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "sci", 3);
              }}
            />
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="sci1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotSciFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "sci", 1);
              }}
            />
            <input
              class="diceDot"
              id="sci2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotSciFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "sci", 2);
              }}
            />
            <input
              class="diceDot"
              id="sci3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotSciFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "sci", 3);
              }}
            />
          </React.Fragment>
        );
      default:
        return "";
    }
  }
  tacDotDraw() {
    switch (this.state.tac) {
      case 1:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="tac1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotTacFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "tac", 1);
              }}
            />
            <input
              class="diceDot"
              id="tac2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotTacUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "tac", 2);
              }}
            />
            <input
              class="diceDot"
              id="tac3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotTacUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "tac", 3);
              }}
            />
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="tac1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotTacFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "tac", 1);
              }}
            />
            <input
              class="diceDot"
              id="tac2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotTacFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "tac", 2);
              }}
            />
            <input
              class="diceDot"
              id="tac3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotTacUnfilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "tac", 3);
              }}
            />
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <input
              class="diceDot"
              id="tac1"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotTacFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "tac", 1);
              }}
            />
            <input
              class="diceDot"
              id="tac2"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotTacFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "tac", 2);
              }}
            />
            <input
              class="diceDot"
              id="tac3"
              type="image"
              src="./assets/StarshipImages/SmallIcons/DiceDots/DiceDotTacFilled.png"
              alt="Submit"
              onClick={e => {
                this.diceDotChange(e, "tac", 3);
              }}
            />
          </React.Fragment>
        );
      default:
        return "";
    }
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <form class="diceRowForm" id="AGNRow">
          {this.agnDotDraw()}
            <label>AGN</label>

          </form>
          <form class="diceRowForm" id="ENGRow">
          {this.engDotDraw()}
            <label>ENG</label>
           
          </form>
          <form class="diceRowForm" id="FLIRow">
          {this.fliDotDraw()}
            <label>FLI </label>
            
          </form>
          <form class="diceRowForm" id="HELRow">
          {this.helDotDraw()}
            <label>HEL</label>
            
          </form>
          <form class="diceRowForm" id="OPSRow">
          {this.opsDotDraw()}
            <label>OPS</label>
           
          </form>
          <form class="diceRowForm" id="SCIRow">
          {this.sciDotDraw()}
            <label>SCI</label>
            
          </form>
          <form class="diceRowForm" id="TACRow">
          {this.tacDotDraw()}
            <label>TAC</label>
           
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default diceDots;
