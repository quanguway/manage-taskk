import { PREFIX_ACTIONS } from './constants';
import { createAction } from '@reduxjs/toolkit';
import { ConfigTimelineType } from './types/reducers';

const setTimelineInfo = createAction<ConfigTimelineType>(PREFIX_ACTIONS + 'SET_TIMELINE_INFO');

const projectActions = {
  setTimelineInfo,
};

export default projectActions;