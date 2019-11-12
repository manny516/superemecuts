import React, {Component} from 'react';
//import CalendarComp from './CalendarComp'; 
import {
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom';
//import { tsObjectKeyword } from '@babel/types';

class ServiceCard extends Component{
    
    constructor(){
        super();
        this.targetData = this.targetData.bind(this);
        this.testArray = []; 
        this.catchId = this.catchId.bind(this);
    }
  
    componentDidMount(){
        //let tester = this.props.theDate("Manny");
    }

    catchId(event){
        let currentEvent = event.target; 
        let EventData = currentEvent.parentNode.parentNode;
        let getId = EventData.getAttribute('data-id');
        let idInt = parseInt(getId); 

        let eventDriven = (indexId,domEle)=>{

            if(typeof indexId === 'number'){
                const filterById = this.props.barberShop.filter( user => user.barberIndex === indexId) ;
                const filterArray = filterById.map(socialMedia =>(
                    socialMedia.socialMedia.map( media =>(
                        media
                    ))
                ));
                const filterOutput = filterById.map( content =>(
                    content.services.map(newItem =>(
                            newItem
                    ))
                ));
                //this.props.serviceSate(idInt,"Danny",filterOutput,filterArray);
                domEle.setAttribute("data-serv",filterOutput);
                domEle.setAttribute("data-social-media",filterArray);
            }
        }


        return eventDriven(idInt,EventData);
    }

    //Grab Parent and it's id of Currect Service that will be selected
    targetData(event){
        let currentEvent = event.target; 
        //event.target = ++currentEvent;
        
        let listParent = currentEvent.parentNode.parentNode;

        let userId = listParent.getAttribute("data-id");
        //  let currentBarberState = this.props.barberShop[userId];
        console.log(listParent);

        // // console.log(userId === serviceAppointment.baberId)

        // // console.log("Data-id : " + userId + " Barber ID : " + serviceAppointment.baberId );

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
        // console.log(currentBarberState);
    
    }
    
  //Pass target Function to click handle function to manage click event to trigger parent Data request
    render(){        
        const outputCardData = this.props.barberShop.map( item => (
            <div id={"user-id-"+item.barberIndex} className="service-card" key={item.barberIndex} data-id={item.barberIndex}>
                <div className="barber-img"> <img src={item.userImage} alt="Place holder" /></div>
                <h2 className="barber-name"> {item.name} </h2>
                <button > <Link onMouseOver={this.catchId} to="/appointment"> Set appointment</Link></button>
            </div>
        ));
        return(
            
            <div className="service-container">
                {outputCardData}
            </div>
                
   
        );
    }
}

export default ServiceCard;