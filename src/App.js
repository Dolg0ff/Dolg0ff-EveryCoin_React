import React from 'react';
import Accounting from './components/Accounting';
import Expenses from './components/Expenses';
import Transactions from './components/Transactions';

class App extends React.Component {
  state = {
    incomeList: [],
    outcomeList: [],
  };
  async componentDidMount() {
    fetch('https://localhost:5001/api/accounts')
      .then(response => response.json())
      .then(json => {
        const data = json;
        console.log(data);

        this.setState({
          incomeList: data.filter(item => item.type === 1),
          outcomeList: data.filter(item => item.type === 2),
        });
      });
  }
  render() {
    return (
      <>
        <Accounting incomeList={this.state.incomeList} />
        <Expenses outcomeList={this.state.outcomeList} />
        <Transactions />
      </>
    );
  }
}

export default App;
