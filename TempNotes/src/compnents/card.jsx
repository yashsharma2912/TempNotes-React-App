import React from 'react'

const Card = ({data}) => {
    
    
  return (
   <div className="cards">
    <i class="ri-close-circle-fill close cursor-pointer"></i>
    <div className="card max-w-[16vw] h-[20vw] bg-slate-200 rounded-[1vw] ">
       <div className="topcardicons">
       <i class="ri-article-fill docicon"></i> 
        <h3> {data.Title}</h3>    
       </div>
        <p>
           {data.desc}
        </p>

        <div className={`cardStatus ${data.tagColor === "green" ? "bg-green-700" : "bg-red-600"}`}>
            <h3>{data.status}</h3>
        </div>
    </div>
   </div>
  )
}

export default Card