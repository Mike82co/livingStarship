import React, { Component } from "react";
import CrewMemberCard from "./CrewMemberCard";

class MainPannel extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      loaded: false
    };
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.displayCards = this.displayCards.bind(this);
  }

  addCard(event) {
    let id = Date.now();
    let newCard = (
      <CrewMemberCard cardId={id} passedFunction={this.removeCard} key={id} />
    );
    this.setState({ cards: [...this.state.cards, newCard] }, () => {
      this.render();
    });
  }

  removeCard(event, id, passedCard) {
    event.preventDefault();

    let newArr = this.state.cards.filter(card => {
      console.log(typeof card.key);
      console.log(typeof id);
      console.log(card.key === id.toString());
      if (card.key !== id.toString()) {
        return card;
      }
    });
    this.setState({ cards: newArr });
  }

  displayCards() {
    return this.state.cards.map(card => {
      return card;
    });
  }

  render() {
    return (
      <div class="mainPannel">
        <button class="button" onClick={e => this.addCard(e)}>
          New Player
        </button>
        {this.displayCards()}
      </div>
    );
  }
}

export default MainPannel;
