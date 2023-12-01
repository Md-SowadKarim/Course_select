import React from 'react'
import { FaDollarSign,FaBookOpen } from 'react-icons/fa';

const Course = ({data , handleSelectClick}) => {
  //  console.log(data)
  return (
    <div>
        <div className='my-3 rounded-md shadow-xl p-5'>
            <div className='my-2'>
                <img className='w-full' src={data.cover} alt="" />
                <div className='h-[80px] my-auto'>
                <h1 className='font-semibold text-xl mt-3'>{data.title}</h1>
               
                </div>
                <p>{data.description}</p>
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                <FaDollarSign className='mr-1'/>
                <p>Price : {data.price}</p>
                </div>
                <div className='flex items-center'>
                <FaBookOpen className='mr-1'/>
                <p>Cerdit : {data.credit} Hr</p>
                </div>
              

            </div>
            <button onClick={()=>{handleSelectClick(data)}} className='text-center my-1 h-8 w-full bg-blue-500 rounded-md text-white'>Select</button>
        </div>
       
      
    </div>
  )
}

export default Course
