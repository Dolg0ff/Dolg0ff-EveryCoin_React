import React from 'react';
import Header from './Header';
import Income from './components/Income';

class App extends React.Component {
  render() {
    return (
      <div>
        {[1, 'world', 3, 4].map((item, index)=><Header item={item} key={index}/>)}
        <Income />
      </div>
    );
  }
}

export default App;
