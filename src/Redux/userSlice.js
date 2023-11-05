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
    setUser: (state,action) => {
     if(action.payload.username){
      state.user.username = action.payload.username;
     }
     if(action.payload.email){
      state.user.email = action.payload.email;
     }
     if(action.payload.password){
      state.user.password = action.payload.password;
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
export const { setUser ,ResetUser } = userSlice.actions

export default userSlice.reducer