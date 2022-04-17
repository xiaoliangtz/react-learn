import React, { Component } from 'react';
import Radio from './index';
import { getAllStudents } from '../../services/student';

class RadioTest extends Component {

  state = {
    allStudentList: [],
    checkValue: '',
  }

  async componentDidMount() {
    const allList = await getAllStudents();
    this.setState({
      allStudentList: allList.map(item => ({ text: item.name, value: item.id }))
    });
  }

  handleChange = (value) => {
    console.log(value);
    this.setState({
      checkValue: value
    })
  }

  render() {
    return (
      <div>
        <Radio
          name="radioLoves"
          allStudentList={this.state.allStudentList}
          checkValue={this.state.checkValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default RadioTest;