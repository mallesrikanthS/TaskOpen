import React, { Component } from 'react';
import taskdata from '../data/taskdata.json';
import './App.css';
import Recod from './Recod';


class Drcod2 extends Component {

    render(){
        //console.log(this.props.func);
        return(
        <>
            {this.props.dt.step1.map((st,id)=> {
            return(
            <>
            <tr key={id}>
                <td id='nbut'> {st.arr1}</td>
                <td><input type='text'  name={st.LAD} onChange={(e)=> this.props.handleChange(e)} /></td>
                <td><input type='text'  name={st.RAD} onChange={(e)=> this.props.handleChange(e)} /></td>
            </tr>

            {st.key==='A3D1'? 
            <>
                {this.props.data.A3D1 ?
                <>
                <Recod st={st} data={this.props.data} handleChange={this.props.handleChange} />
                </>
                :null}
            </>
                        
            :null
            }

            </>

            )
            })}
            
        </>
        )
    }
}


export default Drcod2;














