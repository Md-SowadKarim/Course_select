import React, { useEffect, useState } from 'react'
import Course from './../Course/Course';


const Courses = ({handleSelectClick}) => {
  const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setCourses(data))
    })
  return (
    <div className='grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1'>
      {courses.map((course,index)=><Course handleSelectClick={handleSelectClick} key={index} data={course}/>)}
    </div>
  )
}

export default Courses
