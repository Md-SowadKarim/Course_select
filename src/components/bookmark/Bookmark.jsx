import React from 'react'

const Bookmark = ({course,number}) => {
  //  console.log(course)
  return (
    <div className='rounded-md shadow-xl p-1'>
      <h1>{number+1}. {course.title}</h1>

    </div>
  )
}

export default Bookmark
