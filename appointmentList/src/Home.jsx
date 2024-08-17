import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { IoIosAddCircleOutline } from "react-icons/io";
import axios from 'axios'
import { FaRegEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
function Home() {
    const [appoint, setAppoint]=useState([])
    

    useEffect(()=>{
      axios.get('http://localhost:5000/get')
      .then(res=>setAppoint(res.data))
      .catch(err=>console.log(err))


    },[]);

   
    const handleDelete =(id)=>{
      axios.delete('http://localhost:5000/delete/'+id)
      .then(res=>{
        location.reload()
      })
      .catch(err=>console.log(err))
    }
  return (
    <div className='bg-sky-500 h-screen'>
         
       <div className="flex ps-10 flex-col  pt-20">
      
       <div className='   border w-[200px] h-[30px] text-center bg-green-700 mb-5'>
          <Link to={'/posts'}  className='flex items-center gap-2 text-white  font-bold text-center ps-3'> Add new User <IoIosAddCircleOutline/></Link>
      </div>
            
    <div className='home flex   justify-center items-center overflow-auto rounded-lg shadow' >
  
    <table className="order-collapse border border-slate-400  w-[70%] table-auto ">
    <caption className="caption-top text-start p-1 bg-gray-200">
    User Lists
  </caption>
  <thead className='border border-slate-300'>
    <tr  className='  '>
      <th className="w-20  border border-slate-300  text-sm text-start  font-bold   text-slate-800">FirstName</th>
      <th className="w-20  border border-slate-300  text-sm text-start  font-bold   text-slate-800">SurName</th>
      <th className="w-25  border border-slate-300  text-sm text-start  font-bold   text-slate-800">Email</th>
      <th className="w-20  border border-slate-300  text-sm text-start  font-bold   text-slate-800">Role</th>
      <th className="w-7  border border-slate-300  text-sm text-start  font-bold   text-slate-800">Edit</th>
      <th className="w-8  border border-slate-300  text-sm text-start  font-bold   text-slate-800">Delete</th>
    </tr>
  </thead>
  <tbody>
     {
       appoint.map((app,index)=>(
        <tr key={index} className='odd:bg-rose-100 even:bg-slate-50'>
          <td className="border border-slate-300   ">{app.firstName}</td>
          <td className="border border-slate-300   ">{app.secondName}</td>
          <td className="border border-slate-300   ">{app.title}</td>
          <td className="border border-slate-300   ">{app.comment}</td>
          
          
          <td className=" border border-slate-300 text-blue-500 bg-blue-500 hover:bg-blue-500 hover:text-blue-500" 
          ><Link className='flex items-center justify-center gap-3 text-white  text-center' to={`/edit/${app._id}`}> Edit < FaRegEdit/> </Link></td>
          
          <td className="border border-slate-300 
          flex items-center justify-center text-center gap-3 text-white bg-red-500 hover:text-red-500 hover:bg-white " 
          onClick={()=>handleDelete(app._id)}
          >Delete <MdAutoDelete/></td>
        </tr>
      
      ))
     }
  </tbody>
     </table>
                
    </div>
       </div>
            
         
    </div>


  )
}

export default Home