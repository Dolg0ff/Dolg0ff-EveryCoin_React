import React from 'react';
import Header from './Header';
import Income from './components/Income';
import Account from './components/Account';
import Outcome from './components/Outcome';
import Transaction from './components/Transaction';

class App extends React.Component {
  render() {
    return (
      <div>
        {[1, 2, 3, 4].map((item, index)=><Header item={item} key={index}/>)}
        <Income />
        <Account />
        <Outcome />
        <Transaction />
      </div>
    );
  }
}

export default App;
