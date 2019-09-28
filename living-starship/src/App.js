import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer";
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
      displaySplash: true
    };
  }

  displaySplash() {
    if (this.state.displaySplash) {
      return <Splash callBackFromParent={this.gameSelected} />;
    } else {
      return (
        <React.Fragment>
          <Header />
          <SideMenu />
          <MainPannel />
          <Footer />
        </React.Fragment>
      );
    }
  }
  gameSelected = dataFromChild => {
    this.setState({ displaySplash: false });
  };
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
