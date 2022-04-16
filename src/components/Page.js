import React from 'react';
import './page.scss'

function Page(props) {

  const totalPages = getTotalPages(props);

  const nums = [];
  const min = getMinNum(props);
  const max = getMaxNum(props);
  for (let i = min; i <= max; i++) {
    nums.push(<span
      className={props.current === i ? 'item active' : 'item'}
      key={i}
      onClick={ () => {pageTo(i, props)}}
    >{i}</span>)
  }
  return (
    <>
      <span
        className={props.current === 1 ? 'item disabled' : 'item'}
        onClick={ () => pageTo(1, props) }
      >首页</span>
      <span
        className={props.current === 1 ? 'item disabled' : 'item'}
        onClick={ () => props.current - 1 <= 0 ? pageTo(1, props) : pageTo(props.current - 1, props)}
      >上一页</span>
      {nums}
      <span
        className={props.current === totalPages ? 'item disabled' : 'item'}
        onClick={ () => props.current + 1 >= totalPages ? pageTo(totalPages, props) : pageTo(props.current + 1, props)}
      >下一页</span>
      <span
        className={props.current === totalPages ? 'item disabled' : 'item'}
        onClick={ () => pageTo(totalPages, props)}
      >尾页</span>
      <span className="current">{props.current}</span>
      /
      <span>{totalPages}</span>
    </>);
}
/**
 * 跳到第几页
 * @param {第几页} current 
 */
function pageTo(current, props) {
  if (current === props.current) {
    return;
  }
  props.onPageChange && props.onPageChange(current);
}
/**
 * 计算最大数字
 * @param {*} props 属性
 */
function getMaxNum(props) {
  const totalPages = getTotalPages(props);
  let min = getMinNum(props);
  let max = min + props.pageTotalNum - 1;
  if (max >= totalPages) {
    max = totalPages;
  }
  return max;
}
/**
 * 计算最小数字
 * @param {属性} props 
 */
function getMinNum(props) {
  let min = props.current - Math.floor(props.pageTotalNum / 2);
  if (min <= 1) {
    min = 1;
  }
  return min;
}
/**
 * 计算总页数
 * @param {属性} props 
 * @returns 
 */
function getTotalPages(props) {
  return Math.ceil(props.total / props.size);
}


export default Page;