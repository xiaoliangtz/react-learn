import React from 'react';
import ReactDOM from 'react-dom/client';
import StudentLists from './components/StudentLists';


const root = ReactDOM.createRoot(document.getElementById('root'));


async function render () {
  root.render(
    <React.StrictMode>
      正在加载中....
    </React.StrictMode>
  )
  const stus = await getStudentsInfo();
  root.render(
    <React.StrictMode>
      <div className="container">
        <StudentLists stus={stus}/>
      </div>
    </React.StrictMode>
  );
}

async function getStudentsInfo () {
  return await fetch('https://open.duyiedu.com/api/student/findAll?appkey=demo13_1545210570249')
    .then(res => res.json())
    .then(res => res.data)
}


render();







