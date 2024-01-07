import { get } from 'lodash';
import { ConfigTimelineType, IState } from './types/reducers';
import { RootState } from 'src/store';
import { useAppSelector } from 'src/store/hooks';


type MyState = RootState['project'];

const getCurrentState = (state: RootState): MyState => state.project;

const selector = (key: keyof MyState, defaultValue?: any) => useAppSelector(state => get(getCurrentState(state), key, defaultValue));

const getProjectConfig = (): ConfigTimelineType => selector('config') as ConfigTimelineType;

const projectSelector = {
  getProjectConfig
};

export default projectSelector;
