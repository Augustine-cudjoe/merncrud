import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function CreateApp() {
  const [firstName,setFirstName]=useState('')
  const [secondName,setSecondName]=useState('')
  const [title,setTitle]=useState('')
  const [comment,setComment]=useState()
 const navigate =useNavigate()
 function addItems(e){
    e.preventDefault();
  axios({
    method:'post',
    url:'http://localhost:5000/add',
    data:{
      firstName,
      secondName,
      title,
      comment,
    }
      
     }).then(res=>{
      navigate('/')
     })
        .catch(err=>console.log(err))
     
   }
   
  return (
    <div className=' pt-10 flex flex-col items-center'>
         <form className='flex flex-col justify-center space-y-3'>
         <input 
           className='mx-2 w-[100%] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
           type="text"  
        placeholder='enter firstname'
         
        onChange={(e)=>setFirstName(e.target.value)}/>
         <input 
           className='mx-2 w-[100%] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
           type="text"  
        placeholder='enter surname'
         
        onChange={(e)=>setSecondName(e.target.value)}/>
         <input 
           className='mx-2 w-[100%] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
           type="email"  
        placeholder='enter email'
        
        onChange={(e)=>setTitle(e.target.value)}/>

         <input className='mx-2 w-[100%] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
         type='text'
             placeholder='enter role'
            
             onChange={(e)=>setComment(e.target.value)} />

         
        <button className='w-[50%] h-[50px] bg-green-500 text-white rounded-md mx-2 hover:bg-white hover:text-green-500' 
        type='button' 
        onClick={addItems}>Submit</button>
         </form>
    </div>
  )
}

export default CreateApp