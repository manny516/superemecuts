import React, {Component} from 'react';
import '../css/App.scss';
import ServiceCard from './ServiceCard';
class App extends Component{
 
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
    this.stateChanging = this.stateChanging.bind(this);
  }

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

  stateChanging(value){
      this.setState({appointment : {barberName: 'Test'}});
      console.log("This is a state test: " + this.state.tryState);
  }

  targetData(event){
    let currentEvent = event.currentTarget; 
    let listParent = currentEvent.parentElement.parentElement.parentElement.parentElement;

    let userId = listParent.getAttribute("data-id");
    let currentBarberState = this.state.barberApt[userId];
    
    console.log(listParent.getAttribute("data-id"));
    console.log(currentEvent.value+" : " + currentBarberState['name']);
    return currentBarberState;
  }



  handleClick(pass){
    this.targetData(pass);
    console.log(this.state.date);
 }

 

  render() {    
  
    return (
      <div className="header-title">
        <h1> Supreme Cuts </h1>
        <ServiceCard barberShop={this.state.barberApt} clickEvent={this.handleClick} theDate={this.state.date} testing={this.stateChanging}   />
      </div>
    );
  }
}
export default App;
