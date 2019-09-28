import React, { Component } from "react";
import Modal from "./Modal";
import DiceDots from "./DiceDots";
import loadIcons from "./imageLoader";

const meepleImages = new loadIcons("meeple");
const departmentImages = new loadIcons("department");
const rankImages = new loadIcons("rank");
const functionImages = new loadIcons("function");
const motivationImages = new loadIcons("motivation");
const divisionImages = new loadIcons("division");

class CrewMemberCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgData: [],
      id: this.props.cardId,
      name: "",
      meeple: meepleImages[0].src,
      division: divisionImages[0].src,
      department: departmentImages[0].src,
      skillDisks: 0,
      motivation: motivationImages[0].src,
      officer: false,
      rank: rankImages[0].src,
      shipFunctions: functionImages[0].src,
      injury: 0,
      stress: 0,
      showMeepleModal: false,
      selfUpdated: false,
      card: this
    };
    this.passedFromModal = this.passedFromModal.bind(this)
    this.addName = this.addName.bind(this)
  }
  passedFromModal = (info, type) => {
    switch (type) {
      case "meepleModal":
        return this.setState({
          meeple: [info]
        });
      case "rankModal":
        return this.setState({
          rank: [info]
        });
      case "divisionModal":
        return this.setState({
          division: [info]
        });
      case "functionModal":
        return this.setState({
          shipFunctions: [info]
        });
      case "departmentModal":
        return this.setState({
          department: [info]
        });
      case "motivationModal":
        return this.setState({
          motivation: [info]
        });

      default:
        return "";
    }
  };

  addName(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <div class="crewCard">
          <div class="crewMemberName">
            <form>
              <button
                class="button"
                onClick={(e) => {
                  this.props.passedFunction(e, this.state.id, this.state.card)
                  this.setState({ selfUpdated: true })
                  }}
              > Delete {this.state.id}
              </button>
              <label>
                Name:
                <input
                  type="text"
                  class="inputField"
                  value={this.state.name}
                  onChange={e => this.addName(e)}
                />
              </label>
            </form>
          </div>
          <div class="crewCardTop">
            <div class="middle">
              <div class="iconRow1">
                <div class="meepleContainer">
                  <Modal
                    id="meepleModal"
                    message={this.state.meeple}
                    displayImg={this.state.meeple}
                    imagesArr={meepleImages}
                    passedData={this.passedFromModal}
                    title="Choose your Member"
                  />
                </div>
                <div class="rankIcon">
                  <Modal
                    id="rankModal"
                    message={this.state.meeple}
                    displayImg={this.state.rank}
                    imagesArr={rankImages}
                    passedData={this.passedFromModal}
                  />
                </div>
                <div class="motivationIcon">
                  <Modal
                    id="motivationModal"
                    message={this.state.meeple}
                    displayImg={this.state.motivation}
                    imagesArr={motivationImages}
                    passedData={this.passedFromModal}
                  />
                </div>
              </div>
              <div class="iconRow2">
                <div class="functions">
                  <Modal
                    id="functionModal"
                    message={this.state.meeple}
                    displayImg={this.state.shipFunctions}
                    imagesArr={functionImages}
                    passedData={this.passedFromModal}
                  />
                </div>

                <div class="divisionIcon">
                  <Modal
                    id="divisionModal"
                    message={this.state.meeple}
                    displayImg={this.state.division}
                    imagesArr={divisionImages}
                    passedData={this.passedFromModal}
                  />
                </div>
                <div class="departmentIcon">
                  <Modal
                    id="departmentModal"
                    message={this.state.meeple}
                    displayImg={this.state.department}
                    imagesArr={departmentImages}
                    passedData={this.passedFromModal}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="crewCardBottom">
            <div class="diceDotsContainer">
              <DiceDots />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CrewMemberCard;
