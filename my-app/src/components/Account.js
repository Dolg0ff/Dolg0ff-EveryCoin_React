import React from 'react';
import add from '../utils/add';
                           
class Account extends React.Component {
    state = {
        arrayAccount: [],
        accountKey: 'accountKey'
    }
    componentDidMount(){
        this.setState({arrayAccount: JSON.parse(localStorage.getItem(this.state.accountKey)) || []});
    }
    addAccount(event){
        event.preventDefault();
        const arrayAccount = add(event, this.state.accountKey, this.state.arrayAccount);
        this.setState({arrayAccount});
    }
    render() {
        return (
            <div> 
                <form onSubmit={this.addAccount.bind(this)}>
                    <input name="name" placeholder="name" required="required" type="text"/>
                    <input name="count" placeholder="count" type="text"/>
                    <button className="addAccount">Add</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody id="accountTable">
                        {this.state.arrayAccount.map((item, index) =>(
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

export default Account;