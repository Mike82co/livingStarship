import React, {Component} from 'react'

var str = "./assets/StarshipImages/SmallIcons/MeepleIcons/AGNDIRofficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNDIRwarrantmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNDIVEXECmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNEnlistedmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNOfficerDeputymeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNOfficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNOfficerSkippermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNWarrantDeputymeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNWarrantmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/AGNWarrantSkippermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/CADETenlistmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/CADETofficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/CAPTAINofficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/CAPTAINwarrantmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGDIRofficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGDIRwarrantmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGDIVEXECmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGEnlistedmeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGOfficerDeputymeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGOfficermeeple.png ./assets/StarshipImages/SmallIcons/MeepleIcons/ENGOfficerSkippermeeple.png"
var res = str.split(" ");


class CrewMemberCard extends Component{

  constructor (props) {
      super(props)
          this.state = {
          imgData: [],
          id:0,
          name:"./assets/StarshipImages/SmallIcons/MeepleIcons/AGNDIRofficermeeple.png",
          meeple: "",
          division:0,
          department: 0,
          skillDisks:0,
          motivation:0,
          officer: false,
          rank:0,
          shipFunctions:"",
          injury:0,
          stress:0,
          agn:0,
          eng:0,
          fli:0,
          hel:0,
          ops:0,
          sci:0,
          tac:0,
          }
  }

  imageReturn(imgName){
    console.log(imgName) 
    return <img src = {imgName}  alt="" ></img>
  }
  meepleList(listData){
    return <li>{listData}</li>

  } 

  render(){
    
    return (
      <div>
      This is the crew card
      {res.map((img, i ) => {
        return this.imageReturn(img); 
      })}
      <ul>
        <React.Fragment>
        
        </React.Fragment>
      </ul>
      </div>
    )
  }
}
export default CrewMemberCard;
