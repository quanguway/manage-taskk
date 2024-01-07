import { createSlice } from '@reduxjs/toolkit';
import { NAME_REDUCER } from './constants';
import actions from './actions';
import { IState } from './types/reducers';

const initialState: IState = {
  config: {
    colWidthDate: 0,
    colTotalTimeline: 0,
    colSpanTimeline: 0,

    // colNumTimelineMonth: 0,
    // colSpanDate: 0,
    // colSpanInfo: 0,
    // colSpanTimeline: 0,
  }
};

export const Slice = createSlice({
  name: NAME_REDUCER,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(actions.setTimelineInfo, (state, { payload }) => {
        const config = state.config;
        state.config = {
          ...config,
          ...payload
        };
      });
  },
});
const projectReducer = Slice.reducer;
export default projectReducer;
