import React from 'react';
import ReactDOM from 'react-dom/client';
import BallList from './components/BallList';



const root = ReactDOM.createRoot(document.getElementById('root'));
const balls = [];
// 随机生成10个小球
for(let i = 0; i < 10; i++) {
  balls.push({
    left: Math.floor(Math.random() * 900),
    top: Math.floor(Math.random() * 900),
    radius: Math.floor(50 + Math.random() * 100),
    ballColor: '#'+Math.floor(1 +Math.random() * 9)+''+Math.floor(1 +Math.random() * 9)+''+Math.floor(1 +Math.random() * 9),
    xSpeed: Math.floor(Math.random() * 10),
    ySpeed: Math.floor(Math.random() * 10),
  })
}
root.render(
  <React.StrictMode>
    <BallList balls={balls}/>
  </React.StrictMode>
);

