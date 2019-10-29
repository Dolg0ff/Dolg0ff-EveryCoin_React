import React from 'react';
import updateLocalStorage from '../utils/updateLocalStorage';
import getFormData from '../utils/getFormData';

class Outcome extends React.Component {
  state = {
    outcomeList: [],
    outcomeKey: 'outcomeKey',
  };

  addOutcome(event) {
    event.preventDefault();
    const formEssence = event.target;
    const formData = getFormData(formEssence);
    const outcomeList = [...this.state.outcomeList, formData];
    updateLocalStorage(this.state.outcomeKey, outcomeList); 
    formEssence.reset();
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
