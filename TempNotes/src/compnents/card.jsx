import React from 'react'

const Card = () => {
  return (
   <div className="cards">
    <i class="ri-close-circle-fill close cursor-pointer"></i>
    <div className="whitefill"></div>
    <div className="card max-w-[16vw] h-[20vw] bg-slate-200 rounded-[1vw] ">
       <div className="topcardicons">
       <i class="ri-article-fill docicon"></i> 
        <h3> Task 1</h3>    
       </div>
        <p>
            this is my first note here i am
            uploading my tasks his is my first note here i am
            uploading my tasksh is is my first note here i am
            uploading my taskshis is my first note here i am
            uploading my taskshis is my first note here i am
            uploading my taskshis is my 
        </p>

        <div className="cardStatus">
            <h3>Pending</h3>
        </div>
    </div>
   </div>
  )
}

export default Card