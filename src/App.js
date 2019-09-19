import React from 'react';
import Header from './Header';
import Income from './components/Income';
import Account from './components/Account';
import Outcome from './components/Outcome';
import Transaction from './components/Transaction';

class App extends React.Component {
  render() {
    return (
      <>
        <Income />
        <Account />
        <Outcome />
        <Transaction />
      </>
    );
  }
}

export default App;
