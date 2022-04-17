import React, { Component } from 'react';
import TreeLayout from './component/TreeLayout';

class App extends Component {
  render() {
    return (
      <div>
        <TreeLayout
          left={<div className="left_layout">left</div>}
          right={<div className="right_layout">right</div>}
        >
          <div className="main_layout">main</div>
        </TreeLayout>
      </div>
    );
  }
}

export default App;