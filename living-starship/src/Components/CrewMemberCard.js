import React, { Component } from "react";
import Modal from "./Modal";
import DiceDots from "./DiceDots";

var meepleStr =
  "./assets/StarshipImages/SmallIcons/MeepleIcons/AGNDIRofficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNDIRwarrantmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNDIVEXECmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNEnlistedmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNOfficerDeputymeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNOfficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNOfficerSkippermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNWarrantDeputymeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNWarrantmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNWarrantSkippermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/CADETenlistmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/CADETofficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/CAPTAINofficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/CAPTAINwarrantmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGDIRofficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGDIRwarrantmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGDIVEXECmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGEnlistedmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGOfficerDeputymeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGOfficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGOfficerSkippermeeple.png";
var meepleArr = meepleStr.split(" ");
var deptStr =
  "./assets/StarshipImages/SmallIcons/DepartmentIcons/Astr.png ./assets/StarshipImages/SmallIcons/DepartmentIcons/BiCh.png ./assets/StarshipImages/SmallIcons/DepartmentIcons/Btny.pngChem.png ./assets/StarshipImages/SmallIcons/DepartmentIcons/Cnsl.png ./assets/StarshipImages/SmallIcons/DepartmentIcons/Comp.png ./assets/StarshipImages/SmallIcons/DepartmentIcons/Coms.png ./assets/StarshipImages/SmallIcons/DepartmentIcons/Devc.png ./assets/StarshipImages/SmallIcons/DepartmentIcons/Dipl.png ./assets/StarshipImages/SmallIcons/DepartmentIcons/DySp.png ./assets/StarshipImages/SmallIcons/DepartmentIcons/Envr.png ./assets/StarshipImages/SmallIcons/DepartmentIcons/GeHy.png ./assets/StarshipImages/SmallIcons/DepartmentIcons/Gunr.png ./assets/StarshipImages/SmallIcons/DepartmentIcons/Infl.png ./assets/StarshipImages/SmallIcons/DepartmentIcons/Logi.png ./assets/StarshipImages/SmallIcons/DepartmentIcons/Medi.png ./assets/StarshipImages/SmallIcons/DepartmentIcons/Metr.png ./assets/StarshipImages/SmallIcons/DepartmentIcons/Mrdo.png Navi.png Phys.png PiFt.png PiSh.png Prop.png Regs.png RsRx.png Safe.png Secr.png SoAn.png Strc.png Supl.png Tank.png Thry.png Tran.png Wepn.png Zool.png";
var departmentArr = deptStr.split(" ");
var rankStr =
  "./assets/StarshipImages/SmallIcons/RankIcons/CaptainRankColonel.png ./assets/StarshipImages/SmallIcons/RankIcons/CaptainRankCommander.png ./assets/StarshipImages/SmallIcons/RankIcons/CaptainRankLtColonel.png ./assets/StarshipImages/SmallIcons/RankIcons/CaptainRankLtCommander.png ./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankCadet.png ./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankCorporal.png ./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankJuniorSgt.png ./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankMasterSgt.png ./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankPrivate.png ./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankSeniorSgt.png ./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankSgtMajor.png ./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankStaffSgt.png ./assets/StarshipImages/SmallIcons/RankIcons/OfficerRankCadet.png ./assets/StarshipImages/SmallIcons/RankIcons/OfficerRankColonel.png ./assets/StarshipImages/SmallIcons/RankIcons/OfficerRankCommander.png ./assets/StarshipImages/SmallIcons/RankIcons/OfficerRankEnsign.png ./assets/StarshipImages/SmallIcons/RankIcons/OfficerRankJrLieutenant.png ./assets/StarshipImages/SmallIcons/RankIcons/OfficerRankLieutenant.png ./assets/StarshipImages/SmallIcons/RankIcons/OfficerRankLtColonel.png ./assets/StarshipImages/SmallIcons/RankIcons/OfficerRankLtCommander.png";
var rankArr = rankStr.split(" ");
var functionStr = "";
var functionArr = functionStr.split(" ");
var motivationStr =
  "./assets/StarshipImages/MotivationIcons/AcquisitionIcon.png ./assets/StarshipImages/MotivationIcons/BenevolenceIcon.png ./assets/StarshipImages/MotivationIcons/ConformityIcon.png ./assets/StarshipImages/PowerIcons/AcquisitionIcon.png ./assets/StarshipImages/MotivationIcons/PowerIcon.png ./assets/StarshipImages/MotivationIcons/ProtectionIcon.png ./assets/StarshipImages/MotivationIcons/SelfDirectionIcon.png ./assets/StarshipImages/MotivationIcons/StimulationIcon.png ./assets/StarshipImages/MotivationIcons/UniversalismIcon.png";
var motivationArr = motivationStr.split(" ");
var divisionStr =
  "./assets/StarshipImages/SmallIcons/DivisionIcons/ANG.png ./assets/StarshipImages/SmallIcons/DivisionIcons/SCI.png ./assets/StarshipImages/SmallIcons/DivisionIcons/OPS.png ./assets/StarshipImages/SmallIcons/DivisionIcons/HEL.png ./assets/StarshipImages/SmallIcons/DivisionIcons/FLI.png ./assets/StarshipImages/SmallIcons/DivisionIcons/ENG.png ./assets/StarshipImages/SmallIcons/DivisionIcons/CMD.png ./assets/StarshipImages/SmallIcons/DivisionIcons/TAC.png";
var divisionArr = divisionStr.split(" ");

class CrewMemberCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgData: [],
      id: 0,
      name: "test before",
      meeple:
        "./assets/StarshipImages/SmallIcons/MeepleIcons/AGNDIRofficermeeple.png",
      division: "./assets/StarshipImages/SmallIcons/DivisionIcons/SCI.png",
      department: "./assets/StarshipImages/SmallIcons/DepartmentIcons/Astr.png",
      skillDisks: 0,
      motivation: "./assets/StarshipImages/MotivationIcons/AcquisitionIcon.png",
      officer: false,
      rank:
        "./assets/StarshipImages/SmallIcons/RankIcons/EnlistedRankCadet.png",
      shipFunctions:
        "./assets/StarshipImages/SmallIcons/FunctionIcons/AUTHORITY.png",
      injury: 0,
      stress: 0,
      showMeepleModal: false
    };
  }

  passedFromModal = (info, type) => {
    console.log(info);
    console.log(type);
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

  render() {
    return (
      <React.Fragment>
        <div class="crewCard">
          <div class="crwCardLeft">
            <div class="meepleContainer">
              <Modal
                id="meepleModal"
                message={this.state.meeple}
                displayImg={this.state.meeple}
                imagesArr={meepleArr}
                passedData={this.passedFromModal}
              />
              <h5>Name of rank goes here</h5>
            </div>
            <div class="rankIcon">
              <Modal
                id="rankModal"
                message={this.state.meeple}
                displayImg={this.state.rank}
                imagesArr={rankArr}
                passedData={this.passedFromModal}
              />
              <Modal
                id="motivationModal"
                message={this.state.meeple}
                displayImg={this.state.motivation}
                imagesArr={motivationArr}
                passedData={this.passedFromModal}
              />
            </div>
            <div class="functions">
              <Modal
                id="functionModal"
                message={this.state.meeple}
                displayImg={this.state.shipFunctions}
                imagesArr={functionArr}
                passedData={this.passedFromModal}
              />
            </div>
          </div>
          <div class="crewCardRight">
            <div class="crewMemberName">
              <h2>Crew Member Name</h2>
            </div>
            <div class="divisionIcon">
              <Modal
                id="divisionModal"
                message={this.state.meeple}
                displayImg={this.state.division}
                imagesArr={divisionArr}
                passedData={this.passedFromModal}
              />
            </div>
            <div class="departmentIcon">
              <Modal
                id="departmentModal"
                message={this.state.meeple}
                displayImg={this.state.department}
                imagesArr={departmentArr}
                passedData={this.passedFromModal}
              />
            </div>

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

// var str =
//   "./assets/StarshipImages/SmallIcons/MeepleIcons/AGNDIRofficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNDIRwarrantmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNDIVEXECmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNEnlistedmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNOfficerDeputymeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNOfficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNOfficerSkippermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNWarrantDeputymeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNWarrantmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNWarrantSkippermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/CADETenlistmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/CADETofficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/CAPTAINofficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/CAPTAINwarrantmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGDIRofficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGDIRwarrantmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGDIVEXECmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGEnlistedmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGOfficerDeputymeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGOfficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGOfficerSkippermeeple.png";
// var res = str.split(" ");
