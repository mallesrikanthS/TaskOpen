import React, { Component } from 'react'

class OpenTab extends Component {
    render() {
        return (
            <div>
                <div>
                <h1>Header</h1>
                </div>
                <div>
                    <div className='row'>col1</div>
                    <div>col2
                        <div className='row'>
                        <table>
                            <tr>
                                <th>Company</th>
                                <th>Contact</th>
                                <th>Country</th>
                            </tr>
                            <tr>
                                <td><td>button</td> Alfreds Futterkiste</td>
                                <td><input/></td>
                                <td><input/></td>
                            </tr>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td><input/></td>
                                <td><input/></td>
                            </tr>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td><input/></td>
                                <td><input/></td>
                            </tr>
                            
                            
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OpenTab












