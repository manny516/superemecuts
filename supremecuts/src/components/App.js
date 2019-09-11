import React, {Component} from 'react';
import '../css/App.scss';
import ServiceCard from './ServiceCard';

class App extends Component{
  
  constructor(){
    super();
    
    this.state = {
      barberApt : [],
      theIndex : 0
    }

    this.handleClick = this.handleClick.bind(this);
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

  handleClick(event){
    //console.log(document.querySelector('.service-container'));
    //let paren(tNodeName = ".parentNode"
    
   let currentEvent =event.currentTarget 
    let listParent = currentEvent.parentElement.parentElement.parentElement.parentElement;

    let userId = listParent.getAttribute("data-id");
    console.log(listParent.getAttribute("data-id"));
    let currentBarberState = this.state.barberApt[userId];
    
  
    console.log(currentEvent.value+" : " + currentBarberState['name']);

  
 }



  render() {    
  
    return (
      <div className="header-title">
        <h1> Supreme Cuts </h1>
        <ServiceCard barberShop={this.state.barberApt} clickEvent={this.handleClick}   />
      </div>
    );
  }
}
export default App;
