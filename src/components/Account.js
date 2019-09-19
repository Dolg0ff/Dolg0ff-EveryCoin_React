import React from 'react';
import add from '../utils/add';

class Account extends React.Component {
  state = {
    arrayAccount: [],
    accountKey: 'accountKey',
  };
  componentDidMount() {
    this.setState({ arrayAccount: JSON.parse(localStorage.getItem(this.state.accountKey)) || [] });
  }
  addAccount(event) {
    event.preventDefault();
    const arrayAccount = add(event, this.state.accountKey, this.state.arrayAccount);
    this.setState({ arrayAccount });
  }
  render() {
    return (
      <>
        <form onSubmit={this.addAccount.bind(this)}>
          <input name="name" type="text" placeholder="name" required="required" />
          <input name="count" type="text" placeholder="count" required="required" />
          <button class="addAccount">Add</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody id="accountTable">
            {this.state.arrayAccount.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Account;
