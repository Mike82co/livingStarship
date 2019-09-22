import React, { Component } from "react";
import CrewMemberCard from "./CrewMemberCard";

class MainPannel extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      test: [],
      updated: false,
    };
    this.addCard = this.addCard.bind(this)
    this.removeCard = this.removeCard.bind(this)
    this.displayCards = this.displayCards.bind(this)
  }

  addCard(event) {
    let id = Math.floor(Math.random() * 2000);
    var newCard = {
      id: id,
      tag: (
        <CrewMemberCard
          cardId={id}
          passedFunction={this.removeCard}
        />
      )
    };
    this.setState({ cards: [...this.state.cards, newCard] })
  }

  removeCard (event, id , passedCard) {
    event.preventDefault()
    console.log(this.state.cards)
    let newArr = this.state.cards.filter(card => {
      if(card.id !== id){
        return card 
      }
    });
      this.setState({ cards: newArr })
      this.setState({updates: true})
  };

  displayCards(){
    return this.state.cards.map((i) =>{
      return i.tag})
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
