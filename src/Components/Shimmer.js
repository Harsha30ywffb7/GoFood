import React from 'react'


const Shimmer = () => {
  return (
    <div className='Restaraunt-List'>
      {Array(10).fill("").map((e)=>(<div className='Shimmmer-card'></div>))}
    </div>
  )
}

export default Shimmer;