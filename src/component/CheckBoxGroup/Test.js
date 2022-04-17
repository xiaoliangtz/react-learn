import React, { Component } from 'react';
import CheckBoxGroup from './index';
import { getAllStudents } from '../../services/student';

class Test extends Component {
  state = {
    name: 'checkbox',
    allLovesList: [],
    loveList: ['basketball', 'swimming'],
  }

  handleChange = (newArr) => {
    console.log(newArr);
    this.setState({
      loveList: newArr,
    })
  }

  async componentDidMount() {
    const allList = await getAllStudents();
    this.setState({
      allLovesList: allList.map(item => ({ text: item.name, value: item.id.toString(), }))
    })
  }

  render() {
    return (
      <CheckBoxGroup
        name={this.state.name}
        allLovesList={this.state.allLovesList}
        loveList={this.state.loveList}
        onChange={this.handleChange}
      />
    );
  }
}

export default Test;