import React from 'react';

function Student(props) {
  return (
    <li>
      【姓名】{props.name}
      【性别】{props.sex === 1 ? '男' : '女'}
      【出生日期】{props.birth}
      【手机】{props.phone}
    </li>
  );
}

export default Student;