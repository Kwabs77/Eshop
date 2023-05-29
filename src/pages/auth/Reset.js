import React,{useState} from 'react'
import reset from '../../assets/resetPass.jpg'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { resetPasswordInitiate } from '../../redux/userSlice/UserSlice'
import Loader from '../../components/loader/Loader'
const Reset = () => {

  const [email,setEmail] = useState('')
   const dispatch =useDispatch();
   const {loading} = useSelector((state)=>state.user)
   console.log(loading)
   const handleReset=(e)=>{

    e.preventDefault();
    dispatch(resetPasswordInitiate(email))
  setEmail('')
   }
  return (
    <>
    { loading? <Loader/>:''}
    <div className='container flex min-h-[600px] min-w-full justify-around  text-white'>    
      <div className='w-1/3 m-auto'>
         <img  clasName='' src={reset} alt='reset password'/>
      </div>

      <div className=' w-[330px] relative right-[60px]  p-2 h-34 text-center shadow-xl m-auto shadow-resetBlue'>
         <form onSubmit={handleReset}>
            <input className='border-b-4 w-72 border-resetBlue text-black' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
            <br/>
            <button className='bg-resetBlue w-72 mt-6 p-2 rounded-xl' onSubmit={handleReset}> Reset Password</button> 
         </form>
           <br/>
           <div className='text-resetBlue flex justify-between cursor-pointer'> <Link to='/register'><p>Register</p></Link>  <Link to='/login'><p>Login</p></Link></div>
      </div>
    
    
    </div>
    <ToastContainer/>
    </>
  )
}

export default Reset