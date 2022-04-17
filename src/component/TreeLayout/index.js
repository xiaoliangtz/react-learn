import React from 'react';
import './index.scss'

function TreeLayout(props) {

  const layoutStyle = {
    height: props.height || 500,
    minWidth: 800,
  }

  return (
    <div
      className="layout"
      style={layoutStyle}
    >
      {props.children}
      {props.left}
      {props.right}
    </div>
  );
}
export default TreeLayout;