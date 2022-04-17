import React, { Component } from 'react';
import Test from './component/CheckBoxGroup/Test';
import RadioTest from './component/Radio/RadioTest';
import SelectTest from './component/Select/SelectTest';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Test /> */}
        {/* <RadioTest /> */}
        <SelectTest />
      </div>
    );
  }
}

export default App;