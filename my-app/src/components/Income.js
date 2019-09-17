import React from 'react';
import add from '../utils/add';
                           
class Income extends React.Component {
    state = {
        arrayIncome: [],
        incomeKey: 'incomeKey'
    }
    componentDidMount(){
        this.setState({arrayIncome: JSON.parse(localStorage.getItem(this.state.incomeKey)) || []});
    }
    addIncome(event){
        event.preventDefault();
        const arrayIncome = add(event, this.state.incomeKey, this.state.arrayIncome);
        this.setState({arrayIncome});
    }
    render() {
        return (
            <div> 
                <form onSubmit={this.addIncome.bind(this)}>
                    <input name="name" placeholder="name" required="required" type="text"/>
                    <input name="count" placeholder="count" type="text"/>
                    <button className="addIncome">Add</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody id="incomeTable">
                        {this.state.arrayIncome.map((item, index) =>(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                            </tr>
                        ))}                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Income;