import React, { Component } from 'react';
import { Icon } from '@fluentui/react/lib/Icon';
import { IconButton } from '@fluentui/react/lib/Button';


import taskdata from '../data/taskdata.json';
import './App.css';
import Recod from './Recod';
import Drcod from './Drcod';
import Drcod1 from './Drcod1';
import Drcod2 from './Drcod2';

const MyIcon = () => <Icon iconName="DrillDownSolid" />;

class OpenInv1 extends Component {
    constructor(){
        super()
        this.state= {
            A1:false,A2:false,A3:false,
            A1D1:false,A1D2:false,A1D3:false,A1D4:false,A1D5:false,
            A2D1:false,A2D2:false,A2D3:false,

            arwval: {
                A1:false,A2:false,A3:false,
                A1D1:false,A1D2:false,A1D3:false,A1D4:false,A1D5:false,
                A2D1:false,A2D2:false,A2D3:false
            },

            lval: {
                LA1:'0',LA2:'0',LA3:'0',
                LA1D1:'0',LA1D2:'0',LA1D3:'0',LA1D4:'0',LA1D5:'0',
                LA2D1:'0',LA2D2:'0',LA2D3:'0',
                L1D1:'0',L1D2:'0',L2D1:'0',L2D2:'0',L2D3:'0',
                L2D4:'0',L2D5:'0',L2D6:'0',L2D7:'0',L2D8:'0',
                L2D9:'0',L2D10:'0',L3D1:'0',L4D1:'0',L4D2:'0',
                L4D3:'0',L4D4:'0',L4D5:'0',L4D6:'0',L4D7:'0',
                L4D8:'0',L4D9:'0',L4D10:'0',L4D11:'0',L5D1:'0',
                L5D2:'0',AL1D1:'0',AL2D1:'0',AL2D2:'0',AL2D3:'0',
                AL2D4:'0',AL2D5:'0',AL3D1:'0',AL3D2:'0',LA3D1:'0'
            },

            rval: {
                RA1:'0',RA2:'0',RA3:'0',
                RA1D1:'0',RA1D2:'0',RA1D3:'0',RA1D4:'0',RA1D5:'0',
                RA2D1:'0',RA2D2:'0',RA2D3:'0',
                R1D1:'0',R1D2:'0',R2D1:'0',R2D2:'0',R2D3:'0',
                R2D4:'0',R2D5:'0',R2D6:'0',R2D7:'0',R2D8:'0',
                R2D9:'0',R2D10:'0',R3D1:'0',R4D1:'0',R4D2:'0',
                R4D3:'0',R4D4:'0',R4D5:'0',R4D6:'0',R4D7:'0',
                R4D8:'0',R4D9:'0',R4D10:'0',R4D11:'0',R5D1:'0',
                R5D2:'0',AR1D1:'0',AR2D1:'0',AR2D2:'0',AR2D3:'0',
                AR2D4:'0',AR2D5:'0',AR3D1:'0',AR3D2:'0',RA3D1:'0'
            },

            
        }       
        this.hideComponent = this.hideComponent.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRChange = this.handleRChange.bind(this);
        //this.handcredit = this.handcredit.bind(this);
        //this.Ladd = this.Ladd.bind(this);
        //this.radd = this.radd.bind(this);
    }

    hideComponent = (name)=> {
        console.log(name);

        for (var idx in this.state.arwval) {
            if(name === idx ){    
                this.setState(prevState => ({
                    arwval: {
                        ...prevState.arwval,           // copy all other key-value pairs of ls object
                        [name]: !this.state.arwval[name]      
                        // make sure use name in both sides or else it willn't update
                      }
                  })
                )
                console.log('check update of arwval',name, idx,this.state.arwval[idx],this.state.arwval);
            }
        }; 
       
        //console.log('before hidecomp', name, this.state);
    }

   /* handcredit = ()=> {
        let rs = 0;
        for (var id in this.state.rval) {
            if(this.state.rval[id] === ''){    
                rs = parseFloat(rs) + 0;
                //console.log('null_rsum', rsum);
            }
            else {
                rs = parseFloat(rs) + parseFloat(this.state.rval[id]);
                console.log('norm_rs', rs);
            }
            //lsum = parseFloat(lsum) + parseFloat(this.state.lval[key]);
            //console.log('first' ,key,lsum)
        }; 
        return rs;
    } */

    handleChange = (e)=> {
        //console.log(e.target.name);
        let nam= e.target.name;
        let val= e.target.value;
        //this.setState({[nam]: val});
        this.setState(prevState => ({
            lval: {
              ...prevState.lval,           // copy all other key-value pairs of ls object
              [nam]: val
            }
          }))

        //this.setState({ ...this.state.ls, [nam]: val});        //its not working
       // console.log( 'input',nam,val,this.state );
    }

    handleRChange = (e)=> {
        //console.log(e.target.name);
        let nam= e.target.name;
        let val= e.target.value;
        //this.setState({[nam]: val});
        this.setState(prevState => ({
            rval: {
                ...prevState.rval,           // copy all other key-value pairs of ls object
                [nam]: val
              }
          }))

        //this.setState({ ...this.state.ls, [nam]: val});        //its not working
       // console.log( 'input',nam,val,this.state );
    }


    render(){
        //console.log(taskdata.Arrow1);
        //console.log('after hidecomp', this.state);

        //let sample = { a: 1 , b: 2 , c:3 };
        let lsum = 0;
        let rsum = 0;

        for (var key in this.state.lval) {
            if(this.state.lval[key] === ''){    
                lsum = parseFloat(lsum) + 0;
                //console.log('null_sum', lsum);
            }
            else {
                lsum = parseFloat(lsum) + parseFloat(this.state.lval[key]);
                //console.log('norm_sum', lsum);
            }
            //lsum = parseFloat(lsum) + parseFloat(this.state.lval[key]);
            //console.log('first-key' ,key,lsum)
        };

        // Credit - total
        for (var id in this.state.rval) {
            if(this.state.rval[id] === ''){    
                rsum = parseFloat(rsum) + 0;
                //console.log('null_rsum', rsum);
            }
            else {
                rsum = parseFloat(rsum) + parseFloat(this.state.rval[id]);
               // console.log('norm_rsum', rsum);
            }
            //lsum = parseFloat(lsum) + parseFloat(this.state.lval[key]);
            //console.log('first' ,key,lsum)
        }; 

        //console.log(vl());


        let left_total = lsum.toFixed(2);
        let right_total = rsum.toFixed(2);
        //console.log(left_total,right_total);
        return(
            <>
            <div >
                <div id='nva'>
                    <div className='row' id='nbar1'>                        
                        
                        <div className='col-2' id='hq1'>UBooks</div>
 
                        <div id='hq2'>
                        M/S R S CONSTRACTIONS
                        </div>
                        
                    </div>
                </div>

                <div className='container-fluid'>
                <div className='row '>
                    <div className='col-2' id='da1'>
                        <h6>Dashboard</h6>
                    </div>

                    <div className='col-8'>
                        <div className='col-3'>
                        <h4>Opening Balance</h4>
                        </div>
                        <div className='row'>
                            <div className='col-3' id='op'>
                            <span>Opening Balance Date</span>
                            </div>
                            <div className='col-4' id='dat'>
                            <input id='idt' type='date' />
                            </div>

                        </div>

                        <div className='row' id='topp'>
                        
                        <div className='col-12'>
                        <table >
                        <tr >
                            <th id='ht1' >Account Name</th>                           
                            <th id='ht2' >Debit</th>
                            <th id='ht2' >Credit</th>                            
                        </tr>

                        {taskdata.Arrow1.map((dt)=>{
                        return(
                            <>
                            {(
                                ()=> {
                                    let posts = [];
                                    let daq = [];
                                    let laq = [];

                                    for (var id in this.state.arwval) {
                    
                                        if (dt.key=== id) {
                                            posts.push(
                                                <tr >
                                            <td id='ht1'>
                                                <button id='but' name={dt.key} onClick= {()=> this.hideComponent(dt.key)} >
                                                <Icon iconName="DrillDownSolid" />
                                                </button>{dt.Arval}</td>
                                            <td id='ht2'>
                                            <input type='text'  name={dt.Lkey} onChange={(e)=> this.handleChange(e)}/>
                                            </td>
                                            <td id='ht2'>
                                            <input type='text'  name={dt.Rkey} onChange={(e)=> this.handleRChange(e)}/>
                                            </td>
                                        </tr>
                                    )                                        
                                    

                                        //console.log('posts data', posts);
                                        //console.log('id check',this.state.arwval[id],id);

                                        {(
                                            ()=> {
                    
                                            if(this.state.arwval[id] === true ) {
                                            //console.log('id check',this.state.arwval[id]);
                                            
                                            //daq.push(<>

                                                {dt.step1.map((st,idval)=> {
                                                    daq.push(
                                                    <>
                                                        
                                                        <tr key={idval}>
                                                        <td><button id='but1' onClick= {()=> this.hideComponent(st.key)} >
                                                            <Icon iconName="DrillDownSolid" />
                                                            </button> {st.arr1}</td>
                                                        <td><input type='text'  name={st.LAD} onChange={(e)=> this.handleChange(e)} /></td>
                                                        <td><input type='text'  name={st.RAD} onChange={(e)=> this.handleRChange(e)} /></td>
                                                        </tr>
                                                        //)                                                                                              
                                                        {(
                                                            ()=> {
                                                                
                                                                console.log('keyid', id, st.key);
                                                
                                                                if (st.key=== id) {
                                                                    console.log('keyid', id);
                                                                    
                                                                    if(this.state.arwval[id] === true ) {
                                                                        console.log('id check',this.state.arwval[id]);
                                        
                                                                        laq.push(
                                                                            <Recod st={st} data={this.state} 
                                                                            handleChange={this.handleChange}
                                                                            handleRChange={this.handleRChange}/>
                                                                        )                                                                              
                                                                    }
                                                                }
                                                                return laq;                                                                       
                                                            })
                                                            
                                                            ()}
                                                    </>)
                                                            daq.push(laq);
                                        
                                                    
                                                    }
                                                    )}
                                                //</>)
                                                                                                                       
                                            } 

                                        return daq;

                                        })

                                        ()}
                                        posts.push(daq);
                                        
                                        //: null}

                                     //)

                                    }
                                    
                                };
                                return posts;
                              }
                            )
                            
                            ()}

                         
                            </>

                        )
                        })}
                        
                        
                        </table>
                        </div>
                        
                    </div>

                    <div >
                        <div className='row'>
                        <div className='col-4'></div>
                        <div className='' id='tb'>
                            <span> Total Debit Amount : {left_total}</span>
                        </div>
                        <div className='' id='tc'>
                            <span> Total Credit Amount : {right_total}</span>
                        </div>
                        </div>
                        
                    </div>

                    <div>
                        <div>
                            <button id='iss'><Icon class='iss' iconName="Lifesaver" />Save</button>
                                                        
                        </div>
                        <div>
                        {(
                                ()=> {
                                    let rum = 0;
                                    for (var id in this.state.arwval) {
                                                                            
                                        if ('A1' === id) {
                                            //console.log('norm_arwval', id);
                                        }
                                        
                                
                                        //lsum = parseFloat(lsum) + parseFloat(this.state.lval[key]);
                                        //console.log('first' ,key,lsum)
                                    };
                                    return rum;
                                }
                            )()} 
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
