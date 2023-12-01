
import './App.css'
import Header from "./components/header/Header"
import Courses from './components/courses/Courses';
import Bookmarks from './components/bookmarks/Bookmarks';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const[selectCourse,setSelectCourse]=useState([])
  const [hour,setHour]=useState(0)
  const [remainHour,setRemainHour]=useState(0)
  const [price,setPrice]=useState(0)
  const [remainPrice,setRemainPrice]=useState(0)

  const handleSelectClick=(data)=>{
   
    let creditHour=data.credit
    let remainCredit=20-data.credit
    let totalPrice=data.price
    let remainPrice=50-data.price
   
    console.log(selectCourse)
    
    const isExist=selectCourse.find((course)=>course.id == data.id )
    if(isExist){
      toast("already selected")
      
    }else{
     
     selectCourse.map((course)=>{
      creditHour += course.credit
        remainCredit=20-creditHour
        totalPrice += course.price
        remainPrice=50-totalPrice

      })
      if(creditHour >= 30 ){
        toast("course credit over. Choose less than ")
      }else{
        if(totalPrice >=100){
          toast("peice existing ")
        }else{
          if(remainCredit <=0 ){
            toast("sorry not enough credit ")
          }else{
            if( remainPrice <= 0){
              toast("sorry not enough price")
            }else{
              const selectedCourse=[...selectCourse,data]
              setSelectCourse(selectedCourse)
              setHour(creditHour)
              setPrice(totalPrice)
              setRemainHour(remainCredit)
              setRemainPrice(remainPrice)
            }
          
          }
          
          // console.log(selectCourse)
          // console.log("credit = ",creditHour)
          // console.log("remain credit=",remainCredit)
          // console.log("total price=",totalPrice)
          // console.log("remain price =",remainPrice)
        }
       
      }
    }
   
   
  }
  

  return (
    <>
     
  <Header/>
  <div className='container mx-auto my-3  flex max-md:felx-col max-sm:flex-col '>
    <div className='w-[75%] max-sm:w-full max-md:w-full md:w-[68%]  '>
    <Courses handleSelectClick={handleSelectClick}/>
    </div>
    <div className='w-[25%] md:w-[32%] p-2'>
    <Bookmarks hour={hour} remainHour={remainHour} price={price} remainPrice={remainPrice} selectCourse={selectCourse} />
    </div>
    <ToastContainer/>
  </div>
  
  
     
    </>
  )
}

export default App
