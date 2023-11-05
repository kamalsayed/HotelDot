import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user:{
    username:'',
    email:'',
    password:'',
    }
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUsername: (state,action) => {
     if(action.payload.username){
      state.user.username = action.payload.username;
     }else{
      state.user.username='';
     }
    },
    setUsermail:(state,action)=>{
      if(action.payload.email){
        state.user.email = action.payload.email;
       }else{
        state.user.email='';
       }
    },
    setUserpassword:(state,action)=>{
    if(action.payload.password){
      state.user.password = action.payload.password;
     }else{
      state.user.password='';
     }
    },

    
    ResetUser:(state)=>{
        state.user.username ='';
        state.user.email = '';
        state.user.password ='';
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUsermail, setUsername, setUserpassword ,ResetUser } = userSlice.actions

export default userSlice.reducer