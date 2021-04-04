import React from 'react';
import '../css/BubbleSort.css';

const RenderBubbleSort = ({values}) => {
  return (
    values.values.map((el, index) => (
      <div className="numbers" key={index} id={el} >{el}</div>
    ))
  )
};
export default RenderBubbleSort;