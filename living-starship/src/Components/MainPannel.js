import React, { Component } from "react";
import CrewMemberCard from "./CrewMemberCard";

class MainPannel extends Component {
  constructor() {
    super();
    this.state = {
      cards: [<CrewMemberCard />]
    };
  }
  addCard() {
    var newCard = this.state.cards.concat(<CrewMemberCard />);
    this.setState({ cards: newCard });
    console.log(this.state);
  }

  render() {
    return (
      <div class="mainPannel">
        <button class="button" onClick={e => this.addCard(e)}>
          New Player
        </button>
        {this.state.cards.map(i => i)}
      </div>
    );
  }
}

// var test = [<CrewMemberCard />, <CrewMemberCard />];

// const MainPannel = props => {
//   return (
//     <div class="mainPannel">
//       <CrewMemberCard />
//       {test[0]}
//     </div>
//   );
// };

export default MainPannel;
