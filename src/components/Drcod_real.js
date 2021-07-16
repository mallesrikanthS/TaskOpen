import React, { Component } from 'react';
import { Icon } from '@fluentui/react/lib/Icon';

import taskdata from '../data/taskdata.json';
import './App.css';
import Recod from './Recod';


class Drcod extends Component {

    render(){
        //console.log(this.props.func);
        return(
        <>
            {this.props.dt.step1.map((st,id)=> {
            return(
            <>
            <tr key={id}>
                <td><button id='but1' onClick= {()=> this.props.func(st.key)} >
                    <Icon iconName="DrillDownSolid" />
                    </button> {st.arr1}</td>
                <td><input type='text'  name={st.LAD} onChange={(e)=> this.props.handleChange(e)} /></td>
                <td><input type='text'  name={st.RAD} onChange={(e)=> this.props.handleRChange(e)} /></td>
            </tr>

            {st.key==='A1D1'? 
            <>
                {this.props.data.A1D1 ?
                <>
                <Recod st={st} data={this.props.data} 
                handleChange={this.props.handleChange}
                handleRChange={this.props.handleRChange}/>
                </>
                :null}
            </>
            
            :st.key==='A1D2'?
            <>
                {this.props.data.A1D2 ?
                <>
                <Recod st={st} data={this.props.data} handleChange={this.props.handleChange}/>
                </>
                :null}
            </>
            :st.key==='A1D3'?
            <>
                {this.props.data.A1D3 ?
                <>
                <Recod st={st} data={this.props.data} handleChange={this.props.handleChange}/>
                </>
                :null}
            </>
            :st.key==='A1D4'?
            <>
                {this.props.data.A1D4 ?
                <>
                <Recod st={st} data={this.props.data} handleChange={this.props.handleChange}/>
                </>
                :null}
            </>
            :st.key==='A1D5'?
            <>
                {this.props.data.A1D5 ?
                <>
                <Recod st={st} data={this.props.data} handleChange={this.props.handleChange}/>
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


export default Drcod;














