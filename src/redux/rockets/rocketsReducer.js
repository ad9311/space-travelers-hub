import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchAPI from '../fetchAPI';

const FETCH_ROCKETS = 'spaceX/rockets/FETCH_ROCKETS/fulfilled';
const RESERVE_ROCKET = 'spaceX/rockets/RESERVE_ROCKET';

const initialState = {
  status: 'empty',
  rocketList: [],
  reservedRockets: [],
};

export const fetchRocket = createAsyncThunk('spaceX/rockets/FETCH_ROCKETS', async () => {
  const response = await fetchAPI('https://api.spacexdata.com/v3/rockets');
  return response;
});

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return {
        status: 'fetched',
        rocketList: [...state.rocketList, ...action.payload],
        reservedRockets: [],
      };
    case RESERVE_ROCKET:
      return {
        status: state.status,
        rocketList: state.rocketList,
        reservedRockets: [...state.reservedRockets, action.payload],
      };
    default:
      return state;
  }
};

export default rocketsReducer;
