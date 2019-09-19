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



  //Function to be passed in prop to update parent Comps Date state
  //Passes in value to Set Appointment Date to the selected date picked by user.
  trackAptDateState(value){
    this.setState({appointment:{aptDate : value}});
  }

  render() {    
  
    return (
      <div className="header-title">
        <h1> Supreme Cuts </h1>
        <ServiceCard barberShop={this.state.barberApt} theDate={this.state.date} testing={this.trackAptDateState}   />
      </div>
    );
  }
}
export default App;
