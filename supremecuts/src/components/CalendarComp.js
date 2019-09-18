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
        this.setState({
            date
        });
        this.props.stateChange(date);
        console.log(this.state.date);
    }
    

    render(){

        return(
            <div>
                <DatePicker onChange={this.onChange} value={this.state.date} />
            </div>
        )
        
    }

}

export default CalendarComp ; 
