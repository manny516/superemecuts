import React, {Component} from 'react';
import CalendarComp from './CalendarComp'; 
class ServiceCard extends Component{
    
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.targetData = this.targetData.bind(this);
    }
    

  //Grab Parent and it's id of Currect Service that will be selected
  targetData(event){
    let currentEvent = event.currentTarget; 
    let listParent = currentEvent.parentElement.parentElement.parentElement.parentElement;

    let userId = listParent.getAttribute("data-id");
    let currentBarberState = this.props.barberShop[userId];
    
    console.log(listParent.getAttribute("data-id"));
    console.log(currentEvent.value+" : " + currentBarberState['name']);
    return currentBarberState;
  }

  //Pass target Function to click handle function to manage click event to trigger parent Data request
  handleClick(pass){
    this.targetData(pass);
  }
    render(){

        return(

            <div className="service-container">
                {this.props.barberShop.map( item =>(
                    
                    <div id={"userId" + item.barberIndex} className="service-card" key={item.barberIndex} data-id={item.barberIndex}>
                        <div className="barber-img"> <img src={item.userImage} alt="Place holder" />  </div>
                        <h2 className="barber-name"> {item.name} </h2>
                        <CalendarComp stateChange={this.props.testing} />
                        <div className="services">
                            <ul>
                            {item.services.map( srItem => (
                                <li key={srItem+1}> <input onClick={this.handleClick} type="checkbox" name={srItem} value={srItem}  /> {srItem} </li>
                            ))}
                            </ul>
                            <button className="submit-form"> Submit Service</button>
                        </div>
                    </div>


                ))}

            </div>
                
   
        );
    }
}

export default ServiceCard;