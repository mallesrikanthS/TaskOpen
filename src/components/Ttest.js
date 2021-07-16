import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table, Badge, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";


class Ttest extends Component {
    constructor(){
        super()
        this.state= {
            ls:{c:0,a:0},
            va : [
                {
                id: {  ca:3 }
                },
                {
                id: {  ac:3 }
                }
            ]
        }
    }

    handleChange = (e)=> {
        //console.log(e.target.name);
        let nam= e.target.name;
        let val= e.target.value;
        this.setState(prevState => ({
            ls: {
              ...prevState.ls,           // copy all other key-value pairs of ls object
              [nam]: val
            }
          }))

        //this.setState({ ...this.state.ls, [nam]: val});        //its not working
        console.log( 'input',nam,val,this.state.ls );
        
    }

    render() {
        let sample = { a: 1 , b: 2 , c:3 };
        let summed = 0;
    
        
            for (var key in this.state.ls) {
                summed += this.state.ls[key];
                console.log('first' ,key,summed)
            }; 
            
        return (
            <>
            <div>
                <div className='row'>
               <label >input1</label> <input name='c' onChange={(e)=> {this.handleChange(e)}}></input>
               <label >input2</label> <input name='a' onChange={(e)=> {this.handleChange(e)}}></input>
               </div>
                <h1>
                {
                    
                    Object.values(sample).reduce((a, b) => a + b, 0)
                }
                </h1>
                <h>nnkdfnkn</h>
            </div>
            </>
        )
    }
}

export default Ttest

