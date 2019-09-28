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
const raceImages = new loadIcons("race");
const healthImages = new loadIcons("health");
const damageImages = new loadIcons("damage");
const stressImages = new loadIcons("stress");

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
      showMeepleModal: false,
      selfUpdated: false,
      card: this,
      race: raceImages[0].src,
      health: healthImages[0].src,
      damage: damageImages[0].src,
      stress: stressImages[0].src
    };
    this.passedFromModal = this.passedFromModal.bind(this);
    this.addName = this.addName.bind(this);
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
      case "raceModal":
        return this.setState({
          race: [info]
        });
      case "healthModal":
        return this.setState({
          health: [info]
        });
      case "damageModal":
        return this.setState({
          damage: [info]
        });
      case "stressModal":
        return this.setState({
          stress: [info]
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
                onClick={e => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete this player? \n This can not be undone!"
                    )
                  ) {
                    this.props.passedFunction(
                      e,
                      this.state.id,
                      this.state.card
                    );
                    this.setState({ selfUpdated: true });
                  }
                  e.preventDefault();
                  // this.props.passedFunction(e, this.state.id, this.state.card);
                  // this.setState({ selfUpdated: true });
                }}
              >
                {" "}
                Delete
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
                <div class="raceIcon">
                  <Modal
                    id="raceModal"
                    message={this.state.race}
                    displayImg={this.state.race}
                    imagesArr={raceImages}
                    passedData={this.passedFromModal}
                  />
                </div>
                <div class="diceDeptDevisionContainer">
                  <div class="deptDevisionContainer">
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
                  <div class="diceDotsContainer">
                    <DiceDots />
                  </div>
                </div>
              </div>
              <div class="iconRow2">
                <div class="healthStressMeepleRankContainer">
                  <div class="healthStressContainer">
                    <div class="healthContainer">
                      <Modal
                        id="healthModal"
                        message={this.state.health}
                        displayImg={this.state.health}
                        imagesArr={healthImages}
                        passedData={this.passedFromModal}
                        title="Choose your Member"
                      />
                    </div>
                    <div class="stressContainer">
                      <Modal
                        id="stressModal"
                        message={this.state.stress}
                        displayImg={this.state.stress}
                        imagesArr={stressImages}
                        passedData={this.passedFromModal}
                        title="Choose your Member"
                      />
                    </div>
                  </div>
                  <div class="rankMeepleContainer">
                    <div class="rankIcon">
                      <Modal
                        id="rankModal"
                        message={this.state.meeple}
                        displayImg={this.state.rank}
                        imagesArr={rankImages}
                        passedData={this.passedFromModal}
                      />
                    </div>
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
                  </div>
                </div>
                <div class="functionsMotivationContainer">
                  <div class="functions">
                    <Modal
                      id="functionModal"
                      message={this.state.meeple}
                      displayImg={this.state.shipFunctions}
                      imagesArr={functionImages}
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
              </div>
            </div>
          </div>
          <div class="crewCardBottom"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default CrewMemberCard;
