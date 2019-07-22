import React, { Component } from "react";
import CrewMemberCard from "./CrewMemberCard";

class MainPannel extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      cardsMade: 0
    };
  }
  addCard() {
    this.setState({ cardsMade: this.state.cardsMade + 1 });
    var newCard = this.state.cards.concat({
      id: this.state.cardsMade,
      tag: <CrewMemberCard cardId={this.state.cardsMade} />
    });
    this.setState({ cards: newCard });
    console.log(this.state.cardsMade);
  }

  removeCard() {
    var newArr = this.state.cards.filter(card => {
      return card.id !== 2;
    });
    this.setState({ cards: newArr });
  }

  render() {
    return (
      <div class="mainPannel">
        <button class="button" onClick={e => this.addCard(e)}>
          New Player
        </button>
        <button class="button" onClick={e => this.removeCard(2)}>
          Delete
        </button>
        {this.state.cards.map(i => i.tag)}
      </div>
    );
  }
}

export default MainPannel;
