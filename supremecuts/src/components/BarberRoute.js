import React from "react";
import ServiceCard from './ServiceCard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link 
} from 'react-router-dom';

// function Home() {
//     return (
//       <div>
//         <h2>Home</h2>
//       </div>
//     );
//   }
  
//   function About() {
//     return (
//       <div>
//         <h2>About</h2>
//       </div>
//     );
//   }
  
//   function Dashboard() {
//     return (
//       <div>
//         <h2>Dashboard</h2>
//       </div>
//     );
//   }

function  BarberRoute(props) {

    return (

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
            <ServiceCard barberShop={props.barberShop} serviceData={props.serviceData} theDate={props.theDate} serviceState={props.serviceState}/>

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

    );

}






export default BarberRoute;
