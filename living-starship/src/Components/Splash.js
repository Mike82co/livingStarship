import React, {Component} from 'react'


class Splash extends Component{
    constructor (props) {
        super(props)
            this.state = {
            data:[],
            gameSelected:"",
            }
    }

    selectGame = event =>{
        event.preventDefault()
        console.log("button was pressed ")
        console.log(event.target)
        this.props.callBackFromParent("This is data passed from splash")
    }
    
    render(){
    
  return (
    <div class="splashMainContainer" >
        <form >
            <input class ="gameSelectButton" id ="" type="image" src="./assets/StarshipImages/MainLogos/AcademyPreludesLogo.png" alt="Submit" onClick={this.selectGame}></input>
            <input class ="gameSelectButton" id= "" type="image" src="./assets/StarshipImages/MainLogos/LegacyMissionsLogo.png" alt="Submit" ></input>
            <input class ="gameSelectButton" id ="" type="image" src="./assets/StarshipImages/MainLogos/RankareeLogo.png" alt="Submit" ></input>
            <input class ="gameSelectButton" id ="" type="image" src="./assets/StarshipImages/MainLogos/RiseToCommandLogo.png" alt="Submit" ></input>
        </form>
        

    </div>
  )}
  }
export default Splash;
