import React from 'react';
import addTr from '../utils/addTr';

class Transaction extends React.Component {
  state = {
    arrayTransaction: [],
    transactionKey: 'transactionKey',
  };
  async componentDidMount() {
    fetch('https://localhost:5001/api/transactions')
      .then(response => response.json())
      .then(json => {
        const data = json;
        console.log(data);
        this.setState({ arrayTransaction: data });
      });
  }
  addTransaction(event) {
    event.preventDefault();
    const arrayTransaction = addTr(event, this.state.transactionKey, this.state.arrayTransaction);
    this.setState({ arrayTransaction });
    let lastObject = arrayTransaction.pop();
    lastObject.type = 2;
    console.log(lastObject);

    fetch('https://localhost:5001/api/transactions/add', {
      method: 'POST',
      body: JSON.stringify(lastObject),
      headers: {
        'content-type': 'application/json',
      },
    }).then(response => console.log(response.json()));
  }
  render() {
    console.log(this.state.arrayTransaction);
    return (
      <>
        <form onSubmit={this.addTransaction.bind(this)}>
          <input name="from" type="text" placeholder="from account" required="required" />
          <input name="to" type="text" placeholder="to account" required="required" />
          <input name="count" type="text" placeholder="count" required="required" />
          <input name="comment" type="text" placeholder="comment" />
          <button type="submit">Add</button>
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
                <td>{item.fromAccountName}</td>
                <td>{item.toAccountName}</td>
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
