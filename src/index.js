import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import jpg1 from './assets/1.jpg';
import jpg2 from './assets/2.jpg';
import jpg3 from './assets/3.jpg';

const container = document.getElementById('root')
const root = ReactDOM.createRoot(document.getElementById('root'));

let srcs = [jpg1, jpg2, jpg3];
let index = 0;
let timer = null;

function start () {
  timer =setInterval(() => {
    index = (index + 1) % 3;
    render();
  }, 1000);
}

function render () {
  root.render(
    <React.StrictMode>
      <div className="container">
        <img src={srcs[index]} alt=""/>
      </div>
    </React.StrictMode>
  );
}

function stop () {
  clearInterval(timer)
}
console.log(container);

render();

container.onmouseenter = () => {
  stop();
}
container.onmouseleave = () => {
  start();
}





