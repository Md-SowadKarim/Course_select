import React from 'react'
import Bookmark from '../bookmark/Bookmark'

const Bookmarks = ({hour,remainHour,price,remainPrice,selectCourse}) => {
    console.log(hour,remainHour,price,remainPrice,selectCourse)
  return (
    <div className='bg-slate-50 mt-4 rounded-md shadow-xl p-3'>
        <div className='rounded-md shadow-xl mb-2'>
        <p className='text-sky-500'>Credit Remainning : {parseInt(remainHour) }</p>
        <p className='text-sky-500'>Price Remaining : {remainPrice}</p>
        <hr className='w-full h-1 bg-black my-5' />
        </div>
       
      <h1 className='text-center font-extrabold text-md '>Course Name</h1>
      {selectCourse.map((course,index)=><Bookmark key={index} number={index} course={course} />)}
      <hr className='w-full h-1 bg-black my-5' />
      <p className='font-bold my-2 mt-3'>Total Credit : {hour}</p>
      <hr className='w-full h-1 bg-black my-5' />
        <p className='font-bold'>Total Price: {price} USD</p>
    </div>
  )
}

export default Bookmarks
