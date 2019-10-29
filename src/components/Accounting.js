import React from 'react';
import updateLocalStorage from '../utils/updateLocalStorage';
import getFormData from '../utils/getFormData';

class Account extends React.Component {
  state = {
    incomeList: [],
    accountKey: 'accountKey',
  };

  componentDidUpdate() {
    console.log(this.state.incomeList);
    if (this.state.incomeList.length === 0) {
      console.log(this.props.incomeList);
      this.setState({ incomeList: this.props.incomeList });
    }
  }

  addAccount(event) {
    event.preventDefault();
    const formEssence = event.target;
    const formData = getFormData(formEssence);
    const incomeList = [...this.state.incomeList, formData];
    updateLocalStorage(this.state.accountKey, incomeList); 
    formEssence.reset();
    console.log(incomeList);
    let lastObject = incomeList.pop();
    this.setState(state => ({
      incomeList: [...state.incomeList, lastObject],
    }));
    lastObject.type = 1;
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
    return (
      <>
        <form onSubmit={this.addAccount.bind(this)}>
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
          <tbody id="accountTable">
            {this.state.incomeList.map((item, index) => (
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

export default Account;
