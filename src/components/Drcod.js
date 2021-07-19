import React, { Component } from 'react';
import { Icon } from '@fluentui/react/lib/Icon';

//import taskdata from '../data/taskdata.json';
import './App.css';
import Recod from './Recod';


class Drcod extends Component {

    render(){
        //console.log(this.props.func);
        return(
        <>
            {this.props.dt.step1.map((st,idval)=> {
            return(
                <>
                {(
                ()=> {
                    let posts = [];
                    let daq = [];
                    for (var id in this.props.data.arwval) {
    
                        if (st.key=== id ) {
                            if(st.Rdata){
                            posts.push(
                                <tbody key={idval}>
                                <tr key={idval}>
                                <td><button id='but1' onClick= {()=> this.props.func(st.key)} >
                                    <Icon iconName="DrillDownSolid" />
                                    </button> {st.arr1}</td>
                                <td><input type='number'  name={st.LAD} onChange={(e)=> this.props.handleChange(e)} /></td>
                                <td><input type='number'  name={st.RAD} onChange={(e)=> this.props.handleRChange(e)} /></td>
                                </tr>
                                </tbody>                            
                            )
                        //console.log('posts data', posts);
                        //console.log('id check',this.props.data.arwval[id],id);
                        {(
                            ()=> {
                            if(this.props.data.arwval[id] === true ) {
                            //console.log('id check',this.props.data.arwval[id]);
                            daq.push(
                                <Recod st={st} data={this.props.data} 
                                handleChange={this.props.handleChange}
                                handleRChange={this.props.handleRChange}/>
                            )  }                                                                             
                                
                            //return daq;
                        })
                        ()}
                        
                    }
                    else {
                        posts.push(
                            <tbody key={idval}>
                            <tr key={idval}>
                            <td id='but1'> {st.arr1}</td>
                            <td><input type='number'  name={st.LAD} onChange={(e)=> this.props.handleChange(e)} /></td>
                            <td><input type='number'  name={st.RAD} onChange={(e)=> this.props.handleRChange(e)} /></td>
                            </tr>
                            </tbody>                            
                        )
                    }
                    posts.push(daq);
                    }
                    //posts.push(daq);   
                    };
                    return posts;
                }
            )
                
            ()}       

        </>

        )
        })}
            


        </>
        )
    }
}


export default Drcod;

