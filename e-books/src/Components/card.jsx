import React from 'react'


const Card = (data) => {
  return (
    <div className='card'>
        <img src="https://placehold.co/300x250" alt="Thumbnail" />
        <h3>{data.title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe similique aspernatur nostrum numquam. Sit tempora cupiditate dignissimos quo totam, dolores error ipsam est corporis minima hic dolorum voluptatem enim minus alias assumenda architecto nisi, ea ab reprehenderit ut qui! Praesentium.</p>
    </div>
  )
}

export default Card