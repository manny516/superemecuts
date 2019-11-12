import React, {Component} from 'react';
import DatePicker from 'react-date-picker';

class CalendarComp extends Component{

    constructor(){
        super();
        this.state = {
            date : new Date()
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(date){ 
        this.props.theDate(date);
        //this.props.stateChange(this.state.date);
        //console.log(this.state.date);
    }
    

    
    // componentDidMount(){
    //     this.props.stateChange(this.state.date);
    // }

   
    render(){

        return(
            <div>
                <DatePicker onChange={this.onChange} value={this.props.serviceData.aptDate} />
            </div>
        )
        
    }

}

export default CalendarComp ; 
