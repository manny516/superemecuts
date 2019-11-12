import React, {Component} from 'react';
import '../css/App.scss';
// import BarberRoute from './BarberRoute';
import ServiceCard from './ServiceCard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from 'react-router-dom';
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

  serviceQueue(bId,bName, services,socialMedia){
    this.setState({appointment:{
        baberId : bId,
        barberName : bName,
        services : services,
        socialMedia : socialMedia
    }})
  }


  render() {    
    return (

      <div className="header-title">
        {/* <BarberRoute barberShop={this.state.barberData} serviceData={this.state.appointment} theDate={this.trackAptDateState} serviceState={this.serviceQueue}/> */}
        <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <h1> Supreme Cuts </h1>
            <ServiceCard barberShop={this.state.barberData} serviceData={this.state.appointment} theDate={this.trackAptDateState} serviceState={this.serviceQueue}/>
          </Route>
          <Route path="/about">
            <p> This is the About page </p>
          </Route>
          <Route path="/dashboard">
            <p> the Dashboard</p>
          </Route>
          <Route path="/appointment">
            <p> the appointment</p>
          </Route>
        </Switch>
      </div>
    </Router>      
      </div>
    );
  }
}
export default App;
