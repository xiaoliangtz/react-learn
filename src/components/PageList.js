import React, { Component } from 'react';
import Modal from './Modal';
import Page from './Page';
import StudentList from './StudentList';

class PageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 1, // 当前页数
      size: 10, // 每页数量
      total: 0, // 总数
      pageTotalNum: 5, // 一共显示几个page
      students: [], // 学生列表
      loading: false, // 遮罩层
    }
    this.getStudents();
  }
  /**
   * 跳转到指定页
   * @param {当前页} current 
   */
  handlePageChange = (current) => {
    this.setState({
      current,
    }, () => {this.getStudents()})
    console.log(this.state.current);
    // this.getStudents();
  }
  /**
   * 获取学生列表
   */
  getStudents = async () => {
    this.setState({
      loading: true,
    })
    const students = await fetch(`https://open.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.size}`)
      .then(res => res.json())
      .then(res => res.data);
    this.setState({
      total: students.cont,
      students: students.findByPage,
      loading: false,
    })
    console.log(this.state.loading);
  }

  render() {
    return (
      <>
        <Modal show={this.state.loading}/>
        <StudentList students={this.state.students}/>
        <Page
          {...this.state}
          onPageChange={this.handlePageChange}
          
          />
      </>
    );
  }
}

export default PageList;