import React from 'react';
import addTr from '../utils/addTr';

class Transaction extends React.Component {
  state = {
    arrayTransaction: [],
    transactionKey: 'transactionKey',
  };
  componentDidMount() {
    this.setState({
      arrayTransaction: JSON.parse(localStorage.getItem(this.state.transactionKey)) || [],
    });
  }
  addTransaction(event) {
    event.preventDefault();
    const arrayTransaction = addTr(event, this.state.transactionKey, this.state.arrayTransaction);
    this.setState({ arrayTransaction });
  }
  render() {
    return (
      <>
        <form onSubmit={this.addTransaction.bind(this)}>
          <input name="from" type="text" placeholder="from account" required="required" />
          <input name="to" type="text" placeholder="to account" required="required" />
          <input name="count" type="text" placeholder="count" required="required" />
          <input name="comment" type="text" placeholder="comment" />
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
            {this.state.arrayTransaction.map((item, index) => (
              <tr key={index}>
                <td>{item.from}</td>
                <td>{item.to}</td>
                <td>{item.count}</td>
                <td>{item.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Transaction;
