import React from 'react';
import Card from './card';
import Data from './cardApi.js';

const CardContainer = ({ Data }) => {
  return (
    <div className='cardContainer'>
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default CardContainer;