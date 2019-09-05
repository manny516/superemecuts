import React, {Component} from 'react';
import '../css/App.css';

class App extends Component{
  
  constructor(){
    super();
    
    this.state = {
      barberApt : []
    }
  }

  componentDidMount(){
    
    fetch('./barber_data.json')
    .then(response => response.json())
    .then(results =>{
      const apts = results.map((items)=>{
        return items;
      });

      this.setState({
        baberApt : apts
      });
      
    });

  }
  
  render() {    
    return (
      <div className="header-title">
        <h1> Supreme Cuts </h1>
        <div>
        
        </div>
      </div>
    );
  }
}
export default App;
