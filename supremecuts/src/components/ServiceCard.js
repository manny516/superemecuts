import React, {Component} from 'react';
class ServiceCard extends Component{
 
    render(){

        return(

            <div className="service-container">
                {this.props.barberShop.map( item =>(
                    
                    <div id={"userId" + item.barberIndex} className="service-card" key={item.barberIndex} data-id={item.barberIndex}>
                        <div className="barber-img"> <img src={item.userImage} alt="Place holder" />  </div>
                        <h2 className="barber-name"> {item.name} </h2>

                        <div className="services"> 
                            <ul>
                            {item.services.map( srItem => (
                                <li key={srItem+1}> <input onClick={this.props.clickEvent} type="checkbox" name={srItem} value={srItem}  /> {srItem} </li>
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