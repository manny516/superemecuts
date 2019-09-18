import React, {Component} from 'react';
import '../css/App.scss';
import ServiceCard from './ServiceCard';
class App extends Component{
 
  //Create and set State Objects to track action on Application
  constructor(){
    super();
    this.state = {
      barberApt : [],
      theIndex : 0,
      appointment : {
        barberName : '',
        aptDate : '',
        services : [],
        userName : ''

      }
    }

    this.handleClick = this.handleClick.bind(this);
    this.targetData = this.targetData.bind(this);
    this.trackAptDateState = this.trackAptDateState.bind(this);
  }

  // Mounts component then fetches the Json data
  // Set State using the json data created 
  componentDidMount(){
    fetch('./barber_data.json')
    .then(response => response.json())
    .then(results =>{
      const apts = results.map((items)=>{
        items.barberIndex = this.state.theIndex;
        this.setState({ theIndex : items.barberIndex+1});
        return items;
      });

      this.setState({
        barberApt : apts, 
      });
      
    });
    
    
  }

  //Grab Parent and it's id of Currect Service that will be selected
  targetData(event){
    let currentEvent = event.currentTarget; 
    let listParent = currentEvent.parentElement.parentElement.parentElement.parentElement;

    let userId = listParent.getAttribute("data-id");
    let currentBarberState = this.state.barberApt[userId];
    
    console.log(listParent.getAttribute("data-id"));
    console.log(currentEvent.value+" : " + currentBarberState['name']);
    return currentBarberState;
  }

  //Function to be passed in prop  to trigger tragetData when clicked event is invoked
  //Pass target Function to click handle function to manage click event to trigger parent Data request
  handleClick(pass){
    this.targetData(pass);
 }

 //Function to be passed in prop to update parent Comps Date state
//Passes in value to Set Appointment Date to the selected date picked by user.
 trackAptDateState(value){
  this.setState({appointment:{aptDate : value}});
}

 

  render() {    
  
    return (
      <div className="header-title">
        <h1> Supreme Cuts </h1>
        <ServiceCard barberShop={this.state.barberApt} clickEvent={this.handleClick} theDate={this.state.date} testing={this.trackAptDateState}   />
      </div>
    );
  }
}
export default App;
