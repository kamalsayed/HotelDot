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
     
      state.user.username = action.payload.username;
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer