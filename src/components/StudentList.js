import React from 'react';
import Student from './Student';

function StudentList(props) {
  return (
    props.students.map(item => <Student key={item.id} {...item}/> )
  );
}

export default StudentList;