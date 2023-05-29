import React, {useEffect, useState} from 'react';
import log from '../../assets/Login.jpg'
import{AiOutlineGoogle} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { googleInitiate, loginInitiate } from '../../redux/userSlice/UserSlice';
import { ToastContainer } from 'react-toastify';
import Loader from '../../components/loader/Loader';


const Login = () => {

    const [email,setEmail] =useState('');
    const [password,setPassword] = useState('')

     const dispatch = useDispatch()
    const history= useNavigate()
     const {currentUser,loading} = useSelector((state)=>state.user)
    
    const handleLogin=(e)=>{
      e.preventDefault();
      dispatch(loginInitiate(email,password));
      setEmail('')
      setPassword('')

  }

  const handleRegister=()=>{

    dispatch(googleInitiate())
  }


  useEffect(()=>{
 if(currentUser){
     history('/')
 }
  },[currentUser])


  return (
    <>
    {loading ? <Loader/> :''}
    <div className='container flex  min-h-[600px] justify-around h-5/6 '> 
        <img className='w-1/2 h-full m-auto' src={log} alt='login'/>

        <div className='relative m-auto w-80 pl-4 h-96 shadow-xl shadow-lightBlue'>
        
            <form onSubmit={handleLogin}>
            <h1 className='text-center text-xl font-bold text-lightBlue'> Login</h1>
                
                  <input className='border-b-4 w-[280px] border-lightBlue pt-6' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
                    <br/>
                   <input className='border-b-4 w-[280px] pt-6 border-lightBlue' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
                  
                    <br/>
                
                <button onClick={handleLogin} className='bg-lightBlue w-[280px] text-white p-2 mt-6 px-6 rounded-xl' type='Submit'> Login </button>
            </form>
            <Link to='/reset'>
            <button className='pt-6 hover:text-lightBlue'> Forgot Password?</button>
            </Link>
            
            <div className='flex-col justify-center relative right-2 items-center text-center '>
             <div> <p>  ---  or ---</p></div>
             <div>
                <button  onClick={handleRegister} className=' bg-lightBlue text-white p-2 w-72 mt-6 px-6 rounded-xl '><span className='flex justify-center'>Login with Google<AiOutlineGoogle size={24}/></span> 
                </button>
             </div>
             </div>

             <p> Do not have an account? <Link to='/register'>
                <span className='text-lightBlue font-bold' >Register</span></Link></p>
        </div>
    
    </div>
    <ToastContainer/>
    </>
  )
}

export default Login