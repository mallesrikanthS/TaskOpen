import React, { Component } from 'react';
import taskdata from '../data/taskdata.json';
import './App.css';

class OpenInv1 extends Component {
    constructor(){
        super()
        this.state= {
            A1:false,A2:false,A3:false,
            A1D1:false,A1D2:false,A1D3:false,A1D4:false,A1D5:false,
            A2D1:false,A2D2:false,A2D3:false,

            LA1:'',LA2:'',LA3:'',
            LA1D1:'',LA1D2:'',LA1D3:'',LA1D4:'',LA1D5:'',
            LA2D1:'',LA2D2:'',LA2D3:'',
            RA1:'',RA2:'',RA3:'',
            RA1D1:'',RA1D2:'',RA1D3:'',RA1D4:'',RA1D5:'',
            RA2D1:'',RA2D2:'',RA2D3:'',
            ladd:'0',radd:'0'
        }       
        this.hideComponent = this.hideComponent.bind(this);
        this.handleLChange = this.handleLChange.bind(this);
        this.handleRChange = this.handleRChange.bind(this);
        //this.rADD = this.rADD.bind(this);
        //this.lADD = this.lADD.bind(this);
    }

    hideComponent = (name)=> {
        console.log(name);
        if (name=== 'A1'){
            this.setState({A1: !this.state.A1});
        }        
        else if (name==='A2') {
            this.setState({A2: !this.state.A2});
        } 
        else if (name==='A3') {
            this.setState({A3: !this.state.A3});
        }
        else if (name==='A1D1') {
            this.setState({A1D1: !this.state.A1D1});
        }
        else if (name==='A1D2') {
            this.setState({A1D2: !this.state.A1D2});
        }
        else if (name==='A1D3') {
            this.setState({A1D3: !this.state.A1D3});
        }
        else if (name==='A1D4') {
            this.setState({A1D4: !this.state.A1D4});
        }
        else if (name==='A1D5') {
            this.setState({A1D5: !this.state.A1D5});
        }
        else if (name==='A2D1') {
            this.setState({A2D1: !this.state.A2D1});
        }
        else if (name==='A2D2') {
            this.setState({A2D2: !this.state.A2D2});
        }
        else if (name==='A2D3') {
            this.setState({A2D3: !this.state.A2D3});
        }
    }

    handleLChange = (e,name)=> {
        //console.log(e,name);
        if (name=== 'LA1'){
            this.setState({LA1: e.target.value});
        }        
        else if (name==='LA2') {
            this.setState({LA2: e.target.value});
        } 
        else if (name==='LA3') {
            this.setState({LA3: e.target.value});
        }
        else if (name==='LA1D1') {
            this.setState({LA1D1: e.target.value});
        }
        else if (name==='LA1D2') {
            this.setState({LA1D2: e.target.value});
        }
        else if (name==='LA1D3') {
            this.setState({LA1D3: e.target.value});
        }
        else if (name==='LA1D4') {
            this.setState({LA1D4: e.target.value});
        }
        else if (name==='LA1D5') {
            this.setState({LA1D5: e.target.value});
        }
        else if (name==='LA2D1') {
            this.setState({LA2D1: e.target.value});
        }
        else if (name==='LA2D2') {
            this.setState({LA2D2: e.target.value});
        }
        else if (name==='LA2D3') {
            this.setState({LA2D3: e.target.value});
        }
    }

    handleRChange = (e,name)=> {
    //console.log(e,name);
        if (name=== 'RA1'){
            this.setState({RA1: e.target.value});
        }        
        else if (name==='RA2') {
            this.setState({RA2: e.target.value});
        } 
        else if (name==='RA3') {
            this.setState({RA3: e.target.value});
        }
        else if (name==='RA1D1') {
            this.setState({RA1D1: e.target.value});
        }
        else if (name==='RA1D2') {
            this.setState({RA1D2: e.target.value});
        }
        else if (name==='RA1D3') {
            this.setState({RA1D3: e.target.value});
        }
        else if (name==='RA1D4') {
            this.setState({RA1D4: e.target.value});
        }
        else if (name==='RA1D5') {
            this.setState({RA1D5: e.target.value});
        }
        else if (name==='RA2D1') {
            this.setState({RA2D1: e.target.value});
        }
        else if (name==='RA2D2') {
            this.setState({RA2D2: e.target.value});
        }
        else if (name==='RA2D3') {
            this.setState({RA2D3: e.target.value});
        }
    }


    render(){
        //console.log(taskdata.Arrow1);
        return(
            <>
            <div>
                <div>
                    <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <span class="navbar-text">
                        Navbar text with an inline element
                        </span>
                    </div>
                    </nav>
                </div>

                <div >
                <div className='row '>
                    <div className='col-2'>
                        <h6>Dashboard</h6>
                    </div>

                    <div className='col-8'>
                        <div>
                            Datepicker
                        </div>

                        <div className='row'>
                        <table >
                        <tr >
                            <th >Account Name</th>                           
                            <th >Debit</th>
                            <th >Credit</th>                            
                        </tr>

                        {taskdata.Arrow1.map((dt)=>{
                        return(
                            <>
                            
                            <tr>
                                <td><button id='but' onClick= {()=> this.hideComponent(dt.key)} ><i class="bi bi-arrow-down-square-fill"></i></button>{dt.Arval}</td>
                                <td>
                                <input type='text' value={this.state.LA1} onChange={(e)=> this.handleLChange(e, "LA1")}/>
                                </td>
                                <td>
                                <input type='text' value={this.state.RA1} onChange={(e)=> this.handleRChange(e, "RA1")}/>
                                </td>
                            </tr>
                            {this.state.A1 ? 
                            <>
                            {dt.step1.map((st)=> {
                                return(
                                    <><tr>
                                        <td><button id='but1' onClick= {()=> this.hideComponent(st.key)} ><i class="bi bi-arrow-down-square-fill"></i></button> {st.arr1}</td>
                                        <td><input type='text' value={this.state.LA1D1} onChange={(e)=> this.handleLChange(e, "LA1D1")} /></td>
                                        <td><input type='text' value={this.state.RA1D1} onChange={(e)=> this.handleRChange(e, "RA1D1")} /></td>
                                    </tr>

                                    {st.key==='A1D1'? :null

                                    }

                                    {this.state.A1D1 ?
                                    <>
                                    {st.Rdata.map((rt)=> {
                                        return(
                                            <tr>
                                                <td id='nbut'>{rt.rd}</td>
                                                <td><input /></td>
                                                <td><input /></td>
                                            </tr>
                                            )
                                    })}

                                    </>
                                    :null}

                                    </>

                                )
                            })}
                            </>
                            
                            : null}

                            </>

                        )
                        })}
                        
                        
                        </table>
                    </div>

                    <div>Save block</div>
                </div>

                    


                </div>

                    

                </div>


            </div>
            </>
        );
    }
}
export default OpenInv1;
