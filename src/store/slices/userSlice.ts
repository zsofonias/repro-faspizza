import { createSlice } from '@reduxjs/toolkit';

interface IState {
  username: string;
}

const initialState: IState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setUsername } = userSlice.actions;

export default userSlice.reducer;
