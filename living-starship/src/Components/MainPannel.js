import React, { Component } from "react";
import CrewMemberCard from "./CrewMemberC ard";

class MainPannel extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
    this.addCard = this.addCard.bind(this)
    this.removeCard = this.removeCard.bind(this)
    this.displayCards = this.displayCards.bind(this)
  }
  componentDidMount(){}
  addCard(event) {
    let id = Math.random() * 1000
    var newCard = this.state.cards.concat({
      id: id,
      tag: (
        <CrewMemberCard
          cardId={id}
          passedFunction={this.removeCard}
        />
      )
    });
    this.setState({ cards: newCard })
  }

  removeCard (idFromCard) {
    let newArr = this.state.cards.filter(card => {
      return card.id !== idFromCard;
    });
    setTimeout(()=>{
      this.setState({ cards: newArr });
    },3000)
    
  };

  displayCards(){
    return this.state.cards.map(i => i.tag)
  }

  render() {
    return (
      <div class="mainPannel">
        <button class="button" onClick={e => this.addCard(e)}>
          New Player
        </button>
        {this.displayCards()}
        {/* {this.state.cards.map(i => i.tag)} */}
      </div>
    );
  }
}

export default MainPannel;
