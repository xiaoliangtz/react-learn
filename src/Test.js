import React, { Component } from 'react';
import Modal from './component/Modal';

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  onClose = () => {
    this.setState({
      showModal: false,
    });
  }

  onShow = () => {
    this.setState({
      showModal: true,
    });
  }

  render() {
    return (
      <div>
        {this.state.showModal ? 
        (<Modal onClose={this.onClose}>
          <div className="modal_center">
            <h1>这是一个遮罩层</h1>
            <button className="close_btn">关闭遮罩层×</button>
          </div>
        </Modal>)
        :
          null}
        <button onClick={this.onShow}>显示遮罩层</button>
    </div>
    );
  }
}

export default Test;