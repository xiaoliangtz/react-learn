import React, { Component } from 'react';
import './index.scss'

class Modal extends Component {
  constructor(props) {
    super(props);
    // 默认样式
    this.modalSytle = {
      backgroundColor: 'aquamarine',
    }

  }
  render() {
    return (
      <div
        className="modal"
        style={this.modalSytle}
        onClick={() => {
          this.props.onClose();
        }}
      >
        {this.props.children || '默认值'}
      </div>
    );
  }
}

export default Modal;