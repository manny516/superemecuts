import React, {Component} from 'react';
import '../css/App.scss';

import BarberRoute from './BarberRoute';
class App extends Component{
 
  //Create and set State Objects to track action on Application
  constructor(){
    super();
    this.state = {
      barberData : [],
      theIndex : 0,
      appointment : {
        baberId : '',
        barberName : '',
        aptDate : '',
        services : [],
        userName : ''

      }
    }
   
    this.trackAptDateState = this.trackAptDateState.bind(this);
    this.serviceQueue = this.serviceQueue.bind(this);
  }

  trackAptDateState(value){
    this.setState({appointment:{aptDate : value}});
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
        barberData : apts, 
      });
      
    });
        
  }


  //Function to be passed in prop to update parent Comps Date state
  //Passes in value to Set Appointment Date to the selected date picked by user.

  serviceQueue(bId,bName, services){
    this.setState({appointment:{
        baberId : bId,
        barberName : bName,
        services : [...services]
    }})
  }


  render() {    
    return (
      <div className="header-title">
        <BarberRoute barberShop={this.state.barberData} serviceData={this.state.appointment} theDate={this.trackAptDateState} serviceState={this.serviceQueue}/>
      </div>
    );
  }
}
export default App;
