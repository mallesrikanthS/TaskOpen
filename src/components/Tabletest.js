import React, { Component } from 'react';

import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table, Badge, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import taskdata from '../data/taskdata.json';



class Tabletest extends Component {
    constructor(props) {
        super(props)
        this.state= {}
    }
    
    render() {
        
        const columns = [
            { title: "Account Name", dataIndex: "name", key: "accname" },
            { title: "Debit", render: () => <input></input>, key: "debit" },
            { title: "Credit", render: () => <input></input>, key: "credit" }
          ];
        
          const data = [];
          //for (let i = 0; i < 3; ++i)
          taskdata.Arrow1.map((dt,id)=> {
              console.log(dt.Arval);
            data.push({
              key: id,
              accname: dt.Arval
                            
            });
          })

          const newrow = () => { 
            <><label>tt</label><input></input><input></input>  </>
        };
        //()=> <label>knnkl</label>
        return (
            <div>
                <Table
                className="components-table-demo-nested"
                columns={columns}
                expandable={{expandedRowRender: ()=> <><label>Cash and Merchants</label><input></input><input></input> </>}}
                dataSource={data}
                />
            </div>
        )
    }
}

export default Tabletest

//ReactDOM.render(<Table columns={columns} dataSource={data} />, document.getElementById('container'));