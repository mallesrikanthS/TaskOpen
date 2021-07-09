import React, { Component } from 'react';
import taskdata from '../data/taskdata.json';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Recod from './Recod';
import Drcod from './Drcod';
import Drcod1 from './Drcod1';
import Drcod2 from './Drcod2';

class OpenInv1 extends Component {
    constructor(){
        super()
        this.state= {
            var: [
                {A1:false},{A2:false},{A3:false}
            ],
            A1:false,A2:false,A3:false,
            A1D1:false,A1D2:false,A1D3:false,A1D4:false,A1D5:false,
            A2D1:false,A2D2:false,A2D3:false,

            LA1:'0',LA2:'0',LA3:'0',
            LA1D1:'0',LA1D2:'0',LA1D3:'0',LA1D4:'0',LA1D5:'0',
            LA2D1:'0',LA2D2:'0',LA2D3:'0',
            L1D1:'0',L1D2:'0',L2D1:'0',L2D2:'0',L2D3:'0',
            L2D4:'0',L2D5:'0',L2D6:'0',L2D7:'0',L2D8:'0',
            L2D9:'0',L2D10:'0',L3D1:'0',L4D1:'0',L4D2:'0',
            L4D3:'0',L4D4:'0',L4D5:'0',L4D6:'0',L4D7:'0',
            L4D8:'0',L4D9:'0',L4D10:'0',L4D11:'0',L5D1:'0',
            L5D2:'0',AL1D1:'0',AL2D1:'0',AL2D2:'0',AL2D3:'0',
            AL2D4:'0',AL2D5:'0',AL3D1:'0',AL3D2:'0',LA3D1:'0',

            RA1:'0',RA2:'0',RA3:'0',
            RA1D1:'0',RA1D2:'0',RA1D3:'0',RA1D4:'0',RA1D5:'0',
            RA2D1:'0',RA2D2:'0',RA2D3:'0',
            R1D1:'0',R1D2:'0',R2D1:'0',R2D2:'0',R2D3:'0',
            R2D4:'0',R2D5:'0',R2D6:'0',R2D7:'0',R2D8:'0',
            R2D9:'0',R2D10:'0',R3D1:'0',R4D1:'0',R4D2:'0',
            R4D3:'0',R4D4:'0',R4D5:'0',R4D6:'0',R4D7:'0',
            R4D8:'0',R4D9:'0',R4D10:'0',R4D11:'0',R5D1:'0',
            R5D2:'0',AR1D1:'0',AR2D1:'0',AR2D2:'0',AR2D3:'0',
            AR2D4:'0',AR2D5:'0',AR3D1:'0',AR3D2:'0',RA3D1:'0',
            ladd:'0.00',radd:'0.00'
        }       
        this.hideComponent = this.hideComponent.bind(this);
        this.handleLChange = this.handleChange.bind(this);
        //this.Ladd = this.Ladd.bind(this);
        //this.radd = this.radd.bind(this);
    }

    hideComponent = (name)=> {
        //console.log(name);
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

    handleChange = (e)=> {
        //console.log(e.target.name);
        let nam= e.target.name;
        let val= e.target.value;
        this.setState({[nam]: val});
    }

    hided = (name)=> {
        console.log('before', name);
        this.setState({[name]: !name});
    }

    render(){
        //console.log(taskdata.Arrow1);
        let left_total = parseFloat(this.state.LA1)+parseFloat(this.state.LA2)+parseFloat(this.state.LA3)+
        parseFloat(this.state.LA1D1)+parseFloat(this.state.LA1D2)+parseFloat(this.state.LA1D3)+
        parseFloat(this.state.LA1D4)+parseFloat(this.state.LA1D5)+parseFloat(this.state.LA2D1)+
        parseFloat(this.state.LA2D2)+parseFloat(this.state.LA2D3)+parseFloat(this.state.L1D1)+
        parseFloat(this.state.L1D2)+parseFloat(this.state.L2D1)+parseFloat(this.state.L2D2)+
        parseFloat(this.state.L2D3)+parseFloat(this.state.L2D4)+parseFloat(this.state.L2D5)+
        parseFloat(this.state.L2D6)+parseFloat(this.state.L2D7)+parseFloat(this.state.L2D8)+
        parseFloat(this.state.L2D9)+parseFloat(this.state.L2D10)+parseFloat(this.state.L3D1)+
        parseFloat(this.state.L4D1)+parseFloat(this.state.L4D2)+parseFloat(this.state.L4D3)+
        parseFloat(this.state.L4D4)+parseFloat(this.state.L4D5)+parseFloat(this.state.L4D6)+
        parseFloat(this.state.L4D7)+parseFloat(this.state.L4D8)+parseFloat(this.state.L4D9)+
        parseFloat(this.state.L4D10)+parseFloat(this.state.L4D11)+parseFloat(this.state.L5D1)+
        parseFloat(this.state.L5D2)+parseFloat(this.state.AL1D1)+parseFloat(this.state.AL2D1)+
        parseFloat(this.state.AL2D2)+parseFloat(this.state.AL2D3)+parseFloat(this.state.AL2D4)+
        parseFloat(this.state.AL2D5)+parseFloat(this.state.AL3D1)+parseFloat(this.state.AL3D2)+
        parseFloat(this.state.LA3D1);


        let right_total = parseFloat(this.state.RA1)+parseFloat(this.state.RA2)+parseFloat(this.state.RA3)+
        parseFloat(this.state.RA1D1)+parseFloat(this.state.RA1D2)+parseFloat(this.state.RA1D3)+
        parseFloat(this.state.RA1D4)+parseFloat(this.state.RA1D5)+parseFloat(this.state.RA2D1)+
        parseFloat(this.state.RA2D2)+parseFloat(this.state.RA2D3)+parseFloat(this.state.R1D1)+
        parseFloat(this.state.R1D2)+parseFloat(this.state.R2D1)+parseFloat(this.state.R2D2)+
        parseFloat(this.state.R2D3)+parseFloat(this.state.R2D4)+parseFloat(this.state.R2D5)+
        parseFloat(this.state.R2D6)+parseFloat(this.state.R2D7)+parseFloat(this.state.R2D8)+
        parseFloat(this.state.R2D9)+parseFloat(this.state.R2D10)+parseFloat(this.state.R3D1)+
        parseFloat(this.state.R4D1)+parseFloat(this.state.R4D2)+parseFloat(this.state.R4D3)+
        parseFloat(this.state.R4D4)+parseFloat(this.state.R4D5)+parseFloat(this.state.R4D6)+
        parseFloat(this.state.R4D7)+parseFloat(this.state.R4D8)+parseFloat(this.state.R4D9)+
        parseFloat(this.state.R4D10)+parseFloat(this.state.R4D11)+parseFloat(this.state.R5D1)+
        parseFloat(this.state.R5D2)+parseFloat(this.state.AR1D1)+parseFloat(this.state.AR2D1)+
        parseFloat(this.state.AR2D2)+parseFloat(this.state.AR2D3)+parseFloat(this.state.AR2D4)+
        parseFloat(this.state.AR2D5)+parseFloat(this.state.AR3D1)+parseFloat(this.state.AR3D2)+
        parseFloat(this.state.RA3D1);


        left_total = left_total.toFixed(2);
        right_total = right_total.toFixed(2);
        console.log(left_total,right_total);
        return(
            <>
            <div>
                <div id='nva'>
                    <div className='row'>                        
                        <div className='col-2'>
                            <div className='col-2' id='hq1'>UBooks</div>
                        </div>
                        <div className='col-6'>
                        <div className='col-6' id='hq2'>
                        M/S R S CONSTRACTIONS
                        </div>
                        </div>
                    </div>
                </div>

                <div >
                <div className='row '>
                    <div className='col-2' id='da1'>
                        <h6>Dashboard</h6>
                    </div>

                    <div className='col-8'>
                        <div className='col-3'>
                        <h4>Opening Balance</h4>
                        </div>
                        <div className='row'>
                        <div className='col-2' id='op'>
                        <span>Opening Balance Date</span>
                        </div>
                        <div className='col-4' id='dat'>
                        <input id='idt' type='date' />
                        </div>

                        </div>

                        <div className='row' id='topp'>
                        <table  >
                        <tr >
                            <th id='ht1' >Account Name</th>                           
                            <th id='ht2' >Debit</th>
                            <th id='ht2' >Credit</th>                            
                        </tr>

                        {taskdata.Arrow1.map((dt)=>{
                        return(
                            <>

                            {dt.key==='A1'?
                            <>                            
                                <tr >
                                    <td id='ht1'>
                                        <button id='but' name={dt.key} onClick= {()=> this.hideComponent(dt.key)} >
                                        <i class="bi bi-arrow-down-square-fill"></i>
                                        </button>{dt.Arval}</td>
                                    <td id='ht2'>
                                    <input type='text'  name={dt.Lkey} onChange={(e)=> this.handleChange(e)}/>
                                    </td>
                                    <td id='ht2'>
                                    <input type='text'  name={dt.Rkey} onChange={(e)=> this.handleChange(e)}/>
                                    </td>
                                </tr>
                                
                                {this.state.A1 ? 
                                <>
                                <Drcod dt={dt} data={this.state} func={this.hideComponent} handleChange={this.handleChange}/>
                                </>
                                
                                : null}

                            </>

                            :dt.key==='A2'?
                            <>                            
                                <tr>
                                    <td>
                                        <button id='but' onClick= {()=> this.hideComponent(dt.key)} >
                                        <i class="bi bi-arrow-down-square-fill"></i>
                                        </button>{dt.Arval}</td>
                                    <td>
                                    <input type='text'  name={dt.Lkey} onChange={(e)=> this.handleChange(e)}/>
                                    </td>
                                    <td>
                                    <input type='text'  name={dt.Rkey} onChange={(e)=> this.handleChange(e)}/>
                                    </td>
                                </tr>
                                
                                {this.state.A2 ? 
                                <>
                                <Drcod1 dt={dt} data={this.state} func={this.hideComponent} handleChange={this.handleChange}/>
                                </>
                                
                                : null}

                            </>

                            :dt.key==='A3'?
                            <>                            
                            <tr>
                                <td>
                                    <button id='but' onClick= {()=> this.hideComponent(dt.key)} >
                                    <i class="bi bi-arrow-down-square-fill"></i>
                                    </button>{dt.Arval}</td>
                                <td>
                                <input type='text'  name={dt.Lkey} onChange={(e)=> this.handleChange(e)}/>
                                </td>
                                <td>
                                <input type='text'  name={dt.Rkey} onChange={(e)=> this.handleChange(e)}/>
                                </td>
                            </tr>
                            
                            {this.state.A3 ? 
                            <>
                            <Drcod2 dt={dt} data={this.state} func={this.hideComponent} handleChange={this.handleChange}/>
                            </>
                            
                            : null}

                            </>


                            :null}

                            
                            </>

                        )
                        })}
                        
                        
                        </table>
                    </div>

                    <div >
                        <div className='row'>
                        <div className='col-4'></div>
                        <div className='col-4 offset-4' id='tb'>
                            <span> Total Debit Amount : {left_total}</span>
                        </div>
                        <div className='col-4' id='tc'>
                            <span> Total Credit Amount : {right_total}</span>
                        </div>
                        </div>
                        
                    </div>

                    <div>
                        <div>
                            <button id='iss'><i id='icn' class="bi bi-life-preserver"></i>Save</button>
                        </div>
                    </div>
                </div>


                </div>

                    

                </div>


            </div>
            </>
        );
    }
}
export default OpenInv1;
