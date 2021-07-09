import React, { Component } from 'react';
import taskdata from '../data/taskdata.json';
import './App.css';


class Recod extends Component {

    render(){
        //console.log(this.props.handleChange);
        return(
            <>
            
            {this.props.st.Rdata.map((rt,id)=> {
                //console.log(rt.DL);
                return(
                    <tr key={id}>
                        <td id='nbut'>{rt.rd}</td>
                        <td><input type='text'  name={rt.DL} onChange={(e)=> this.props.handleChange(e)} /></td>
                        <td><input type='text'  name={rt.DR} onChange={(e)=> this.props.handleChange(e)} /></td>
                        
                    </tr>
                    ) 
            })}

            </>
        )

    }
}

export default Recod;
