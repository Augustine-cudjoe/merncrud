import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function EditPage() {
  const navigate = useNavigate();
  
  const [firstName,setFirstName]=useState('')
  const [secondName,setSecondName]=useState('')
  const [title,setTitle]=useState('')
  const [comment,setComment]=useState('')
  const {id}=useParams()


 

  useEffect(()=>{

    async function getItemById(){
      const res = await axios.get('http://localhost:5000/get/'+id)
        console.log(res.status);
        if(res.status==200){
           setFirstName(res.data.firstName);
          setSecondName(res.data.secondName);
          setTitle(res.data.title);
          setComment(res.data.comment)
        }
      
      }

    getItemById()
  


  },[]);
 
  

  function editItem(e) {
    e.preventDefault();

  
  
    axios.put('http://localhost:5000/edit/'+id, 
    {firstName,secondName,title,comment})
    .then(response => {
      console.log('this is :'+response);
      
       navigate('/')
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  

  
  return (
    <div className='flex flex-col items-center justify-center pt-10 '>
        <form className='flex flex-col items-center justify-center space-y-3 text-start '>
         <input type="text"  
         className='w-[100%] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        placeholder='enter firstname'
          value={firstName }
         onChange={(e)=>setFirstName(e.target.value)}/>
         <input type="text"  
         className='w-[100%] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        placeholder='enter surname'
        value={secondName }
        onChange={(e)=>setSecondName(e.target.value)}/>

         <input type="email"  
         className='w-[100%] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        placeholder='enter item'
          value={title }
        onChange={(e)=>setTitle(e.target.value)}/>

         <input type='text'
         className='w-[100%] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
             placeholder='enter role'
              value={comment }
             onChange={(e)=>setComment(e.target.value)} />

         
        <button type='submit' 
        className='w-[50%] h-[50px] bg-green-500 text-white rounded-md mx-2 hover:bg-white hover:text-green-500' 
        onClick={editItem}>Update</button>
         </form>
    </div>
  )
}

export default EditPage;