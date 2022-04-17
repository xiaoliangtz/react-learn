import React, { Component } from 'react';

class CheckBoxGroup extends Component {

  handleChange = (e) => {
    console.log(e.target.value);
    // console.log(this.props);
    let newArr;
    if (e.target.checked) {
      newArr = [...this.props.loveList, e.target.value]
    } else {
      newArr = this.props.loveList.filter( item => item !== e.target.value )
    }
    this.props.onChange && this.props.onChange(newArr);
  }

  render() {
    const checks = this.props.allLovesList.map(item => (<label key={item.value}>
      <input
        type={this.props.name}
        name={this.props.name}
        value={item.value}
        checked={this.props.loveList.includes(item.value)}
        onChange={this.handleChange}
        />
      {item.text}
    </label>) )
    return (
      <div>{checks}</div>
    );
  }
}

export default CheckBoxGroup;