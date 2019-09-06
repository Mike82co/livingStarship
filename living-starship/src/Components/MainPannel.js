import React, { Component } from "react";
import CrewMemberCard from "./CrewMemberCard";

class MainPannel extends Component {
  constructor() {
    super();
    this.state = {
      cards: [{}],
      cardsMade: 0
    };
  }
  addCard() {
    var newCard = this.state.cards.concat({
      id: this.state.cardsMade,
      tag: (
        <CrewMemberCard
          cardId={this.state.cardsMade}
          passedFunction={this.removeCard}
        />
      )
    });
    this.setState({ cardsMade: this.state.cardsMade + 1 });
    this.setState({ cards: newCard });
    console.log("Cards Made ------");
    console.log(this.state.cardsMade);
    console.log(Math.random()*100000)
  }

  removeCard = idFromCard => {
    console.log("delete id passed from card------");
    console.log(idFromCard);
    var newArr = this.state.cards.filter(card => {
      return card.id !== idFromCard;
    });
    this.setState({ cards: newArr });
  };

  render() {
    return (
      <div class="mainPannel">
        <button class="button" onClick={e => this.addCard(e)}>
          New Player
        </button>

        {this.state.cards.map(i => i.tag)}
      </div>
    );
  }
}

export default MainPannel;
