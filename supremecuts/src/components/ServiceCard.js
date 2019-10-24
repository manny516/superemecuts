import React, {Component} from 'react';
import CalendarComp from './CalendarComp'; 
class ServiceCard extends Component{
    
    constructor(){
        super();
        this.targetData = this.targetData.bind(this);
        this.testArray = []; 
    }
    
  //Grab Parent and it's id of Currect Service that will be selected
  targetData(event){
    let currentEvent = event.target; 
    //event.target = ++currentEvent;
    
    let listParent = currentEvent.parentNode.parentNode.parentNode.parentNode;

    let userId = listParent.getAttribute("data-id");
    // let currentBarberState = this.props.barberShop[userId];
    // let serviceAppointment = this.props.serviceData;

    // console.log(userId === serviceAppointment.baberId)

    // console.log("Data-id : " + userId + " Barber ID : " + serviceAppointment.baberId );

    // console.log(listParent.getAttribute("data-id"));
    // console.log(currentEvent.value+" : " + currentBarberState['name']);
    // this.props.serviceState(userId,currentBarberState['name'] ,this.testArray);
    // console.log(this.testArray);


    // switch(userId === serviceAppointment.baberId){
    //     case true :  
    //     console.log("Its true bitch");
    //     this.testArray.push(currentEvent.value);
    //     break;

    //     case false :
    //     console.log("Its false Hoe");
    //     this.testArray = [];
    //     break;

    //     default:
    //         console.log("Yea something broke broke");

    // }


    console.log(userId);
  }

  //Pass target Function to click handle function to manage click event to trigger parent Data request
    render(){

        return(

            <div className="service-container">
                {this.props.barberShop.map( item =>(
                    
                    <div id={"userId" + item.barberIndex} className="service-card" key={item.barberIndex} data-id={item.barberIndex}>
                        <div className="barber-img"> <img src={item.userImage} alt="Place holder" />  </div>
                        <h2 className="barber-name"> {item.name} </h2>
                        <CalendarComp stateChange={this.props.theDate} />
                        <div className="services">
                            <ul>
                            {item.services.map( srItem => (
                                <li key={srItem+1}> <input onClick={this.targetData} type="checkbox" name={srItem} value={srItem}  /> {srItem} </li>
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