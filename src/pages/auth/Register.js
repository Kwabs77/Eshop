import React , {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import register from '../../assets/register.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector,useDispatch } from 'react-redux';
import { registerInitiate } from '../../redux/userSlice/UserSlice';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
const Register = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [cpassword , setCPassword] = useState('')
    const [displayName, setDisplayName] = useState('');

      const dispatch = useDispatch()
        const history =useNavigate()
        const {currentUser,loading} = useSelector((state)=>state.user )
      const registerUser = (e)=>{
         e.preventDefault();
         console.log(email,password,cpassword);

         if(password !== cpassword){
            toast.error('Passwords do not match ')
            return
         }

         dispatch(registerInitiate(email,password,displayName))
         setEmail('')
         setPassword('')
         setCPassword('')
         setDisplayName('');
    }


    useEffect(()=>{
       if(currentUser){
        history('/')
        console.log(currentUser)
       }
    },[currentUser])
    
  return (
    <>
   {loading?<Loader/> :''}
    <div className='container max-w-full min-h-[600px]  flex justify-around items-center '>
         
        <div  className='pl-4 min-w-[330px] h-96 ml-40 shadow-xl shadow-registerBlue'>     
                <form onSubmit={registerUser}>
            <h1 className='text-center text-xl font-bold text-registerBlue'> Register</h1>
                     
                  <input className='border-b-4 w-[280px] border-registerBlue pt-6' type='Name' value={displayName}
                   onChange={(e)=>setDisplayName(e.target.value)} placeholder='Name' required/>
                     <br/>
                  <input className='border-b-4 w-[280px] border-registerBlue pt-6' type='email' value={email}
                   onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required/>
                    <br/>
                   <input className='border-b-4 w-[280px] pt-6 border-registerBlue' type='password' value={password} 
                    onChange={(e)=>setPassword(e.target.value)} placeholder='Password' required/>
                    <br/>
                   <input className='border-b-4 w-[280px] pt-6 border-registerBlue' type='password' value={cpassword} 
                    onChange={(e)=> setCPassword(e.target.value)} placeholder='Confirm Password' required />
                  
                    <br/>
                
                <button className='bg-registerBlue w-[280px] text-white p-2 mt-6 px-6 rounded-xl' type='submit'> Register </button>
          

         </form>

         <p className='pt-4'> Already have an account? <Link to='/login'>
                <span className='text-registerBlue font-bold'>Login</span></Link></p>
     </div> 

     <div className='w-2/5 ml-10'>
        <img   src={register} alt='register' />
     </div>
    </div>
  <ToastContainer/>
    </>
  )
}

export default Register