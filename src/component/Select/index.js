import React, { Component } from 'react';

class Select extends Component {


  handleChange = (e) => {
    this.props.onChange && this.props.onChange(e.target.value);
  }
  
  getOption = () => {
    return (
      this.props.selectList.map(item=>(
      <option
        key={item.value}
        value={item.value}
      >{item.text}</option>
      ))
    )
  }

  render() {

    const options = this.getOption();

    return (
      <div>
        <select
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange}
        >
          {options} 
        </select>
      </div>
    );
  }
}

export default Select;