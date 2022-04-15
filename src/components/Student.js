import ReactDom from 'react-dom';
import React from 'react';

function Student (props) {
    return (
        <li>
            【姓名】{props.name}
            【手机】{props.phone}
            【性别】{props.sex === 1 ? '男' : '女'}
            【出生日期】{props.birth}
        </li>
    );
}

export default Student;