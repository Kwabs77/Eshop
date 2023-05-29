import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {FaShoppingCart, FaUserCircle} from 'react-icons/fa';
import {HiOutlineMenuAlt3} from 'react-icons/hi';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitiate, userInitiate } from '../../redux/userSlice/UserSlice';
import Loader from '../loader/Loader'
import { auth } from '../../firebase/Config';
const Header = () => {
    
    const [ display, setDisplay] = useState(false)
    const {currentUser,loading} = useSelector((state)=> state.user)
    const [name, setName] = useState('')
    const dispatch= useDispatch();
   const history = useNavigate()

    const handleLogout =()=>{
    dispatch(logoutInitiate());
    }


    useEffect(()=>{
      if(currentUser===null){
        history('/')
       }
     


    },[currentUser])
    
  useEffect(()=>{
   
    auth.onAuthStateChanged((current)=>{
      if (current){
         console.log(current)
        setName(current.displayName)
     
      }
       else {
         setName('')
      }
    })

  },[])
 
  
  
  return (
    <>
    {loading?<Loader/>:''}
    <div className='container max-w-full bg-deepBlue flex justify-around py-6 text-white'>
    <div className='flex text-2xl'> e<h1 className='text-orangeLogo '>Shop</h1>.</div>
    <div>
      <ul className='flex space-x-3 mt-1'>
        <Link to='/'>
        <li className='hidden md:block hover:text-orangeLogo cursor-pointer'>Home</li>
        </Link>
        <Link to='/contact'> 
        <li className='hidden md:block hover:text-orangeLogo cursor-pointer'>Contact Us</li>
        </Link>
      </ul>
      </div>
    <div>
      <ul className='flex space-x-3 mt-1'>
      <li className='hidden md:flex text-registerBlue'>{name?<FaUserCircle size={20}/>:''}  {name} </li>
        <Link to='/register'>
        {!name && <li className='hidden md:block hover:text-orangeLogo cursor-pointer'>Register</li>}  
        </Link>
      
      <Link to='/login'>
       {!name &&  <li className='hidden md:block hover:text-orangeLogo cursor-pointer'>Login</li>}
      </Link>
        <li className='hidden md:block hover:text-orangeLogo cursor-pointer'>My Orders</li>
      {name &&  <li onClick={handleLogout} className='hidden md:block hover:text-orangeLogo cursor-pointer'>Logout</li> }  
        <li className=' flex hover:text-orangeLogo cursor-pointer'>Cart<FaShoppingCart size={20}/> <p className='relative bottom-2'>0</p></li>
       <li className='block md:hidden' onClick={()=>{setDisplay(!display)}}> <HiOutlineMenuAlt3 size={20} /></li>
      </ul>
    </div>

   
    </div>
      
    {  display &&  <div className='container max-w-full text-white bg-blacktransp h-screen'>

      <div className='absolute w-60 h-full bg-deepBlue pl-16 top-6' >
          <div className='flex text-3xl justify-between'><div className='flex'>e<h1 className='text-orangeLogo '>Shop</h1>.</div> <div className='relative top-1 right-3' onClick={()=>{setDisplay(false)}}><AiOutlineCloseCircle/></div></div>
        <ul className='pt-6 space-y-4'>
            
             <li className='hover:text-orangeLogo'>Home</li>
             <hr className='w-24'/>
             <li  className='hover:text-orangeLogo'>Contact us</li>
             <hr className='w-24'/>
           <li  className='hover:text-orangeLogo'>Register</li>
           <hr className='w-24'/>
           <li  className='hover:text-orangeLogo'>Login</li>
           <hr className='w-24'/>
           <li  className='hover:text-orangeLogo'>My Orders</li>
           <hr className='w-24'/>
           <li  className='hover:text-orangeLogo'>Logout</li>
        </ul>
     </div>

      </div>
}
    </>
  )
}

export default Header