import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { PageHeader, Button, Descriptions } from 'antd';
import { Row, Col, Divider,Input } from 'antd';
import {DownOutlined} from '@ant-design/icons';

class OpenInv extends Component {
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

    //val = parseInt(this.state.ladd) + parseInt(this.state.LA1);

    
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


      handleLChange = (e,name)=> {
        console.log(e,name);
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


    render() {
        const Lval = parseInt(this.state.LA1)+parseInt(this.state.LA1D1)+parseInt(this.state.LA3)+parseInt(this.state.LA1D1)
        +parseInt(this.state.LA1D2)+parseInt(this.state.LA1D3)+parseInt(this.state.LA1D4)+parseInt(this.state.LA1D5)
        +parseInt(this.state.LA2D1)+parseInt(this.state.LA2D2)+parseInt(this.state.LA2D3);

        const Rval = parseInt(this.state.RA1)+parseInt(this.state.RA2)+parseInt(this.state.RA3)+parseInt(this.state.RA1D1)
        +parseInt(this.state.RA1D2)+parseInt(this.state.RA1D3)+parseInt(this.state.RA1D4)+parseInt(this.state.RA1D5)
        +parseInt(this.state.RA2D1)+parseInt(this.state.RA2D2)+parseInt(this.state.RA2D3)
        console.log(Lval,Rval);

        
        return (
            <div className='row'>
                <div className='container'>
                    <PageHeader
                    ghost={false}
                    extra={[
                        
                        <Button key="3">Live</Button>,
                        <Button key="2">Help</Button>,
                        <Button key="1" type="primary">
                        Name
                        </Button>,
                    ]}
                    >
                    
                    </PageHeader>
                </div>
                
                <Row>
                <Col span={4}>
                    <div className='container' >
                        Dashboard Block
                    </div>
                </Col>
                <Col span={20}>
                    <div>
                        <div> Open Inventory</div> 
                        <Divider plain></Divider>
                        <div> 
                            <Row>
                                <Col span={6} justify='start'>
                                    Account Name
                                </Col>
                                <Col span={5}>Debit</Col>
                                <Col span={5}>Credit</Col>
                            </Row>

                            <div>
                            <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} onClick= {()=> this.hideComponent("A1")} ><DownOutlined /></Col>
                                        <Col >Assets</Col>                                        
                                    </Row>
                                </Col>
                                <Col span={5}>
                                <Input type='text' value={this.state.LA1} onChange={(e)=> this.handleLChange(e, "LA1")}/>
                                </Col>
                                <Col span={5}>
                                <Input type='text' value={this.state.RA1} onChange={(e)=> this.handleRChange(e, "RA1")}/>
                                </Col>
                            </Row>

                            {
                            this.state.A1 ?
                                <>
                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={1} onClick= {()=> this.hideComponent("A1D1")}><DownOutlined /></Col>
                                        <Col >Cash and Cash Equivalents</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}>
                                <Input type='text' value={this.state.LA1D1} onChange={(e)=> this.handleLChange(e, "LA1D1")}/>
                                </Col>
                                <Col span={5}>
                                <Input type='text' value={this.state.RA1D1} onChange={(e)=> this.handleRChange(e, "RA1D1")}/>
                                </Col>
                                </Row> 

                                {
                                this.state.A1D1 ?
                                <>
                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >Cash</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row> 

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >Retail Merchant Bank</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>
                                </>
                                :null}                                


                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={1} onClick= {()=> this.hideComponent("A1D2")}><DownOutlined /></Col>
                                        <Col >Other Current Assets</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>

                                {
                                this.state.A1D2 ?
                                <>
                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >Input IGST</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row> 

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >Input CGST</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >Input SGST</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >Input Cess</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row> 

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >Input IGST Deferred(RCM)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >Input CGST Deferred(RCM)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >Input SGST Deferred(RCM)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row> 

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >Input Cess Deferred(RCM)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >GST on Advance Receipt</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>
                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >GST on Advance Payment</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>


                                </>
                                :null} 


                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={1} onClick= {()=> this.hideComponent("A1D3")}><DownOutlined /></Col>
                                        <Col >Inventories</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>
                                {
                                this.state.A1D3 ?
                                <>
                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >Inventory</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row> 

                                
                                </>
                                :null} 


                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={1} onClick= {()=> this.hideComponent("A1D4")}><DownOutlined /></Col>
                                        <Col >Other Current Assets(TDS)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>
                                {
                                this.state.A1D4 ?
                                <>
                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >TDS Receivable on Dividends (Sec.194)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row> 

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >TDS Receivable on Interest (Sec.194A)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >TDS Receivable on Contract (Sec.194C)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row> 

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >TDS Receivable on Rent (Sec.194I)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >TDS Rec on Interest on Securities (Sec.193)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >TDS Payable on Dividends (Sec.194)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row> 

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >TDS Payable on Interest on Securities (Sec.193)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >TDS Payable on Interest (Sec.194A)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >TDS Payable on Contract (Sec.194C)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row> 

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >TDS Payable on Rent (Sec.194I)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >TDS Payable on Professional/TechnicalFees (Sec.194)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>
                                

                                </>
                                :null} 


                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={1} onClick= {()=> this.hideComponent("A1D5")}><DownOutlined /></Col>
                                        <Col >Trade Payables</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>
                                {
                                this.state.A1D5 ?
                                <>
                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >QWERT</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row> 

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >First Supplier</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>
                                </>
                                :null} 


                                </>
                            :null}

                            </div> 

                            <div>
                            <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} onClick= {()=> this.hideComponent("A2")} ><DownOutlined /></Col>
                                        <Col >Expenses</Col>                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                            </Row>

                            {
                            this.state.A2 ?
                                <>
                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={1} onClick= {()=> this.hideComponent("A2D1")}><DownOutlined /></Col>
                                        <Col >Purchases of Stock in Trade</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row> 
                                {
                                this.state.A2D1 ?
                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >Purchases</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row> 
                                :null}
                                
                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={1} onClick= {()=> this.hideComponent("A2D2")}><DownOutlined /></Col>
                                        <Col >Other Expense(Direct)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>

                                {
                                this.state.A2D2 ?
                                <>
                                
                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >Additional Charges on Import</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>
                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >Discount Allowed</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>
                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >GST Expense</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>
                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >Freight</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>
                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={2}></Col>
                                        <Col >Discount Allowed</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>
                                </> 
                                :null}

                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={1} onClick= {()=> this.hideComponent("A2D3")}><DownOutlined /></Col>
                                        <Col >Other Expense(InDirect)</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row>
                                {
                                this.state.A2D3 ?
                                    <>
                                    <Row>
                                    <Col span={6}>
                                        <Row>
                                            <Col span={1} offset={1}></Col>
                                            <Col >RoundOff</Col>
                                            
                                        </Row>
                                    </Col>
                                    <Col span={5}><Input/></Col>
                                    <Col span={5}><Input/></Col>
                                    </Row>
                                    <Row>
                                    <Col span={6}>
                                        <Row>
                                            <Col span={1} offset={1}></Col>
                                            <Col >RoundOff</Col>
                                            
                                        </Row>
                                    </Col>
                                    <Col span={5}><Input/></Col>
                                    <Col span={5}><Input/></Col>
                                    </Row>
                                    </> 
                                :null}


                                </> 
                            :null}
                            </div>

                            <div>
                            <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} onClick= {()=> this.hideComponent("A3")} ><DownOutlined /></Col>
                                        <Col >Equity</Col>                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                            </Row>

                            {
                            this.state.A3 ?
                                <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={1} offset={1}></Col>
                                        <Col >Reserves & Surplus</Col>
                                        
                                    </Row>
                                </Col>
                                <Col span={5}><Input/></Col>
                                <Col span={5}><Input/></Col>
                                </Row> 
                            :null}
                            </div>                           

                        </div>
                        <Divider plain></Divider>
                        <div >
                        <Row>
                            <Col span={5} offset={6}>
                            
                            <Input type='text' value={Lval}/>
                            </Col>
                            <Col span={5}>
                            <Input type='text' value={Rval}/>
                            </Col>
                        </Row>
                        </div>
                    
                        <Divider plain></Divider>
                        <div> Save block
                        <button>on</button>
                        </div>
                    </div>
                    </Col>
                
                </Row>
                
                   
            </div>
        )
    }
}

export default OpenInv;
