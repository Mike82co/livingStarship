import React, { Component } from "react";
import CrewMemberCard from "./CrewMemberCard";

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
  addCard(event) {
    let id = Math.floor(Math.random() * 2000);
    var newCard = this.state.cards.concat({
      id: id,
      tag: (
        <CrewMemberCard
          key={""}
          cardId={id}
          passedFunction={this.removeCard}
        />
      )
    });
    this.setState({ cards: newCard })
  }

  removeCard (event, id) {
    event.preventDefault()

    let newArr = this.state.cards.filter(card => {

      console.log("conditions === ")
      console.log(card.id !== id)
      if(card.id !== id){
        return card 
      }

      
    });

      this.setState({ cards: newArr })
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
        {/* {this.displayCards()} */}
        {this.state.cards.map(i => i.tag)}
      </div>
    );
  }
}

export default MainPannel;
