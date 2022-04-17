import React, { Component } from 'react';

class Radio extends Component {


  handleChange = (e) => {
    this.props.onChange && this.props.onChange(e.target.value)
  }

  render() {
    const radioList = this.props.allStudentList.map(item => (
      <label key={item.value}>
        <input
          type="radio"
          name={this.props.name}
          value={item.value}
          checked={this.props.checkValue === item.value.toString()}
          onChange={this.handleChange}
        />
        {item.text}
      </label>
    ))
    return (
      <div>
        {radioList}
      </div>
    );
  }
}

export default Radio;