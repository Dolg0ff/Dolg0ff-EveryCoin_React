import React from 'react';
import addTr from '../utils/addTr';
                           
class Transaction extends React.Component {
    state = {
        arrayTransaction: [],
        transactionKey: 'transactionKey'
    }
    componentDidMount(){
        this.setState({arrayTransaction: JSON.parse(localStorage.getItem(this.state.transactionKey)) || []});
    }
    addTransaction(event){
        event.preventDefault();
        const arrayTransaction = addTr(event, this.state.transactionKey, this.state.arrayTransaction);
        this.setState({arrayTransaction});
    }
    render() {
        return (
            <div> 
                <form onSubmit={this.addTransaction.bind(this)}>
                    <input name="from" placeholder="from account" type="text"/>
                    <input name="to" placeholder="to account" type="text"/>
                    <input name="count" placeholder="count" type="text"/>
                    <input name="comment" placeholder="comment" type="text"/>
                    <button className="addTransaction">Add</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>To</th>
                            <th>Count</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody id="transactionTable">
                        {this.state.arrayTransaction.map((item, index) =>(
                            <tr key={index}>
                                <td>{item.from}</td>
                                <td>{item.to}</td>
                                <td>{item.count}</td>
                                <td>{item.comment}</td>
                            </tr>
                        ))}                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Transaction;