import React, { Component } from 'react';
import Select from '.';
import { getAllStudents } from '../../services/student';

class SelectTest extends Component {

  state = {
    value: '',
    selectList: []
  }

  handleChange = (value) => {
    console.log(value);
    this.setState({
      value,
    })
  }


  async componentDidMount() {
    const stus = await getAllStudents();
    // console.log(stus);
    this.setState({
      selectList: stus.map(item=>({text:item.name, value: item.id}))
    })
  }

  render() {
    return (
      <div>
        <Select
          name="select"
          value={this.props.value}
          selectList={this.state.selectList}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SelectTest;