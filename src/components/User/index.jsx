import React from 'react'
import './user.css'

export const User =({data})=>{
    return(
        <div>
            <div className='block'>
                <img src={data.img} alt="" />
                <div>{data.full_name}</div>
                <div>{data.age}</div>
                <div>{data.country}</div>
            </div>
        </div>
    )
}