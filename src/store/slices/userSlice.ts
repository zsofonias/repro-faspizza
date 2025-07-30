import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getGeocodedAddress } from '../../services/apiGeocoding';
import type { IPosition } from '../../types/user';

interface IState {
  username: string;
  address: string;
  position: IPosition | null;
  status: 'idle' | 'loading' | 'error';
  error: string;
}

function getPosition(): Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk('user/fetchAddress', async () => {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position: IPosition = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getGeocodedAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  // will automatically be the payload for the reducer
  return { position, address };
});

const initialState: IState = {
  username: '',
  address: '',
  position: null,
  status: 'idle',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = 'error';
        state.error =
          'Unable to get your geolocation address, Fill it manually.';
      });
  },
});

export const { setUsername } = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state: { user: IState }) => state.user;
export const getUsername = (state: { user: IState }) => state.user.username;
export const getAddress = (state: { user: IState }) => state.user.address;
