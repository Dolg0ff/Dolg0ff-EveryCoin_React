import React from 'react';
import add from '../utils/add';

class Outcome extends React.Component {
  state = {
    arrayOutcome: [],
    outcomeKey: 'outcomeKey',
  };
  componentDidMount() {
    this.setState({ arrayOutcome: JSON.parse(localStorage.getItem(this.state.outcomeKey)) || [] });
  }
  addOutcome(event) {
    event.preventDefault();
    const arrayOutcome = add(event, this.state.outcomeKey, this.state.arrayOutcome);
    this.setState({ arrayOutcome });
  }
  render() {
    return (
      <>
        <form onSubmit={this.addOutcome.bind(this)}>
          <input name="name" type="text" placeholder="name" required="required" />
          <input name="count" type="text" placeholder="count" required="required" />
          <button class="addOutcome">Add</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody id="outcomeTable">
            {this.state.arrayOutcome.map((item, index) => (
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

export default Outcome;
