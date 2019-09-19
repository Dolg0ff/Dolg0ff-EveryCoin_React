import React from 'react';
import add from '../utils/add';

class Income extends React.Component {
  state = {
    arrayIncome: [],
    incomeKey: 'incomeKey',
  };
  componentDidMount() {
    this.setState({ arrayIncome: JSON.parse(localStorage.getItem(this.state.incomeKey)) || [] });
  }
  addIncome(event) {
    event.preventDefault();
    const arrayIncome = add(event, this.state.incomeKey, this.state.arrayIncome);
    this.setState({ arrayIncome });
  }
  render() {
    return (
      <>
        <form onSubmit={this.addIncome.bind(this)}>
          <input name="name" type="text" placeholder="name" required="required" />
          <input name="count" type="text" placeholder="count" required="required" />
          <button class="addIncome">Add</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody id="incomeTable">
            {this.state.arrayIncome.map((item, index) => (
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

export default Income;
