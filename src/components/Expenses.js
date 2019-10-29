import React from 'react';
import add from '../utils/add';

class Outcome extends React.Component {
  state = {
    outcomeList: [],
    outcomeKey: 'outcomeKey',
  };

  addOutcome(event) {
    event.preventDefault();
    const outcomeList = add(event, this.state.outcomeKey, this.state.outcomeList);
    this.setState({ outcomeList });
    let lastObject = outcomeList.pop();
    lastObject.type = 2;
    console.log(lastObject);

    fetch('https://localhost:5001/api/accounts/add', {
      method: 'POST',
      body: JSON.stringify(lastObject),
      headers: {
        'content-type': 'application/json',
      },
    }).then(response => console.log(response.json()));
  }
  render() {
    //const outcome
    return (
      <>
        <form onSubmit={this.addOutcome.bind(this)}>
          <input name="name" type="text" placeholder="name" required="required" />
          <input name="count" type="text" placeholder="count" required="required" />
          <button type="submit">Add</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody id="outcomeTable">
            {this.props.outcomeList.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Outcome;
