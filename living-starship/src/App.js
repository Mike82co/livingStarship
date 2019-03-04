import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header.js";
import CrewMemberCard from "./Components/CrewMemberCard.js";
import Footer from "./Components/Footer";
import sideMenu from "./Components/SideMenu";
import SideMenu from "./Components/SideMenu";
import MainPannel from "./Components/MainPannel";
import Splash from "./Components/Splash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showCrewMemForm: false,
      showCrewCards: false,
      showHeader: false,
      showFooter: false,
      displaySplash: true,
    };
  }

  displaySplash(){
    if(this.state.displaySplash){
      return <Splash callBackFromParent = {this.gameSelected}></Splash>
    }
    else{
      
      return (
        <React.Fragment>
          <Header></Header>
          <SideMenu></SideMenu>
          <MainPannel>
            
          </MainPannel>
          <Footer></Footer>
        </React.Fragment>
      )
    }
    
  }
  gameSelected = (dataFromChild) =>{
    console.log("game was selected")
    this.setState({displaySplash : false})
    console.log(this.state.buttonSelected)
  }
  render() {
    return (
      <React.Fragment>
        {this.displaySplash()}
        {/* <Splash callBackFromParent = {this.gameSelected}/> */}
      </React.Fragment>
    );
  }
}

export default App;
