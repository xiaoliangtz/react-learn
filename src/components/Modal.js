import React from 'react';
import './modal.scss'

function Modal(props) {
  if (!props.show) return;
  return (
    <div className="modal">
      正在加载中....
    </div>
  );
}

export default Modal;