
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { PageHeader, Button, Descriptions } from 'antd';
import { Row, Col, Divider,Input } from 'antd';
import {DownOutlined} from '@ant-design/icons';
import { assertTSConstructSignatureDeclaration } from '@babel/types';

class Try extends Component {
    constructor() {
        super()
        this.state=
        {
            A1:true,
            A2:true
        }        
        this.hideComponent = this.hideComponent.bind(this);
    }
    hideComponent = (name)=> {
        console.log(name);
        if (name=== 'A1'){
            this.setState({A1: !this.state.A1});
        }        
        else if (name==='A2') {
            this.setState({A2: !this.state.A2});
        } 
      }



render() {
    return (
        <div>
            <>
            <Row>
            <Col span={13}>
                <Row>
                    <Col span={1} onClick= {()=> this.hideComponent("A1")} ><DownOutlined /></Col>
                    <Col >Equity</Col>                                        
                </Row>
            </Col>
            <Col span={5}><Input/></Col>
            <Col span={5}><Input/></Col>
        </Row>

        {
        this.state.A1 ?
            <Row>
            <Col span={13}>
                <Row>
                    <Col span={1} offset={1}></Col>
                    <Col >Reserves & Surplus</Col>
                    
                </Row>
            </Col>
            <Col span={5}><Input/></Col>
            <Col span={5}><Input/></Col>
            </Row> 
        :null}

        <Row>
            <Col span={13}>
                <Row>
                    <Col span={1} onClick= {()=> this.hideComponent("A2")} ><DownOutlined /></Col>
                    <Col >Equity</Col>                                        
                </Row>
            </Col>
            <Col span={5}><Input/></Col>
            <Col span={5}><Input/></Col>
        </Row>

        {
        this.state.A2 ?
            <Row>
            <Col span={13}>
                <Row>
                    <Col span={1} offset={1}></Col>
                    <Col >Reserves & Surplus</Col>
                    
                </Row>
            </Col>
            <Col span={5}><Input/></Col>
            <Col span={5}><Input/></Col>
            </Row> 
        :null}


        </>
            
        </div>
        
    )
}
}

export default Try;
  

// its comment

