import { createSlice } from "@reduxjs/toolkit";
import { auth, googleAuthProvider } from "../../firebase/Config";
import { toast } from 'react-toastify';


 
export const registerInitiate = (email, password, displayName) => {
    return function (dispatch){
        dispatch(register_start());
        auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
            user.updateProfile({
                displayName
            })
            dispatch(register_success(user))                
        }).catch((error)=> {dispatch(register_failed(error.message)); toast.error(error.message)})
    }
}

export const loginInitiate= (email,password) =>{
   return function (dispatch){
            dispatch(login_start());
            auth.signInWithEmailAndPassword(email,password).then(({user})=>{

                dispatch(login_success(user))
            }).catch((error)=> {dispatch(login_failed(error.message)) ;
                 toast.error(error.message)})

   }

}


export const logoutInitiate= ()=>{
   return function(dispatch){
        dispatch(logout_start());
        auth.signOut().
        then((resp)=>{
            dispatch(logout_success())
        }).catch((error)=>{
            dispatch(logout_failed());
            toast.error(error.message)
        })

   }
}



export const googleInitiate=()=>{
 return function(dispatch){
   dispatch(google_start())
   auth.signInWithPopup(googleAuthProvider).then(({user})=>{

    dispatch(google_successful(user))

   }).catch((error)=>{
        dispatch(google_failed(error.message));
        toast.error(error.message)
   })

  }
}


export const userInitiate = ()=>{
    return function (dispatch){
        auth.onAuthStateChanged((user)=>{
                if (user){
                    dispatch(setUser(user))
                }
            
                   
        })
    
    }
}



export const resetPasswordInitiate=(email)=>{
    return function(dispatch){
        dispatch(forgotPassword_start());
            auth.sendPasswordResetEmail(email).then((res)=>{
                    dispatch(forgotPassword_successful())
                toast.success('Check your mail to reset password!(check spam if the link is not in your inbox)');
                
            }).catch((error)=>{
                dispatch(register_failed(error.message))
                toast.error(error.message)
            })

    }
}
////////////////////////////////////// -------  /////////////////////////


const initialState={
    loading:false,
    currentUser:null,
    error:null
}

export const userSlice = createSlice({

    name:'user',
    initialState,
    reducers:{
        register_start:(state)=>{
            state.loading = true
        },

        register_success:(state,action)=>{
            state.loading =false
            state.currentUser = action.payload
        },

        register_failed:(state,action)=>{
            state.loading =false
            state.error =action.payload
        },

        login_start:(state)=>{
            state.loading=true
        },
        login_success:(state,action)=>{
            state.loading= false
            state.currentUser=action.payload
        },
        login_failed:(state,action)=>{
            state.loading=false
            state.error=action.payload
        },
        logout_start:(state)=>{
            state.loading=true
        },
        logout_success:(state)=>{
            state.loading=false
            state.currentUser =null
        },
        logout_failed:(state,action)=>{
            state.loading=false
            state.error= action.payload
        },
        google_start:(state) =>{
            state.loading=true;
        },
        google_successful:(state,action)=>{
            state.loading=false
            state.currentUser=action.payload
        },
        google_failed:(state,action)=>{
            state.loading=false
            state.error= action.payload
        },
        forgotPassword_start:(state)=>{
            state.loading=true

        },
        forgotPassword_successful:(state)=>{
            state.loading=false;
          
            state.error=false
        },
        forgotPassword_failed:(state,action)=>{
            state.loading=false
            state.currentUser=false
            state.error= action.payload
        },
        setUser:(state,action)=>{
            state.loading=false
            state.currentUser=action.payload
            state.error=false
        }
    }

})


export const {register_start,register_success,register_failed,
             login_failed,login_start,login_success,
             logout_start,logout_success,logout_failed,
             google_start,google_successful,google_failed,
             forgotPassword_start,forgotPassword_successful,forgotPassword_failed
            ,setUser
            } = userSlice.actions

export default userSlice.reducer