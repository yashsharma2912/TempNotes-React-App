import React from 'react'
import { motion } from "framer-motion"

const Card = ({data,reference}) => {
    
    
  return (
   <div className="cards">
    <motion.div drag dragConstraints={reference} className="card max-w-[16vw] h-[20vw] bg-slate-300 rounded-[1vw] ">
       <div className="fileclose">
       <i class="ri-close-circle-fill close cursor-pointer"></i>
       </div>
       <div className="topcardicons">
       <i class="ri-article-fill docicon"></i> 
        <h3> {data.Title}</h3>    
       </div>
        <p>
           {data.desc}
        </p>

        <div className={`cardStatus ${data.tagColor === "green" ? "bg-green-700" : data.tagColor==="yellow" ? "bg-yellow-400" : "bg-red-600"}`}>
            <h3>{data.status}</h3>
        </div>
    </motion.div>
   </div>
  )
}

export default Card