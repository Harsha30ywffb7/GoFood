import React from 'react';
import { IMG_CDN_URL } from '../Constants';
const RestarauntCard = (
  {name,cloudinaryImageId,areaName,cuisines,costForTwo,avgRating}) => {
  return (
    <div className='w-[200] p-1 m-2 shadow-lg bg-slate-100 rounded-sm'>
        <div class="h-32 mb-2">
          <img className="object-cover h-full w-full rounded-md" src={IMG_CDN_URL + cloudinaryImageId} alt="Logo" />
        </div>
        <p className="font-bold text-sm line-clamp-1">{name}</p>
        <p className='line-clamp-1 text-sm p-0'>{avgRating} <span></span>{costForTwo}</p>
        <p className='line-clamp-1 text-sm p-0'>{cuisines?.join(", ")}</p>
        <p className='p-0 text-sm'>{areaName}</p>
    </div>
  )
}

export const withPromotedLabel =(RestarauntCard)=>{
  return (props)=>{
    return(
      <div>
        <label>Promoted</label>
        <RestarauntCard {...props}/>
      </div>
    )
  }
}

export default RestarauntCard;