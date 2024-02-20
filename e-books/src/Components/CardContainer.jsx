import React, {useState} from 'react';
import Card from './card';
import { data } from './cardApi.js';

const CardContainer = ( ) => {
    const [cardData,setcardData] = useState(data);
  return (
    <div className='cardContainer'>
     {data.map((item) => {return(<Card title={item.title}/>)})}
    </div>
  );
};

export default CardContainer;