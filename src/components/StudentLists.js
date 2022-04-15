import React from 'react';
import Student from './Student';

export default class StudentLists extends React.Component {
    render () {
        console.log(this.props, 'this');
        const students = this.props.stus.map( item => <Student key={item.id} {...item}/>)
        return <ul>{students}</ul>
    }
}