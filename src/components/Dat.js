import React, { Component } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class Dat extends Component {
    render(){
        return (
            <>
            <div>
            <div> <DatePicker  maxDate={new Date()} /> </div>

            </div>
            </>
        )
    }
}


export default Dat;
