import { useDispatch } from 'react-redux';
import projectActions from '../actions';
import { ConfigTimelineType } from '../types/reducers';
import projectSelector from '../selectors';
import { EPeriodOptions } from '../../component/molecules/RadioButtonDate';
import { useEffect, useMemo, useState } from 'react';
import moment, { Moment } from 'moment';
import { getDatesArray } from 'src/utils/date';
import { DATE_FORMAT } from 'src/utils/constants';
import { ProjectType } from '../types/scheduleTimeline';
import { useContainerDimensions } from 'src/hooks/useDimensions';

export const useConfigSchedule = () => {

  const dispatch = useDispatch();
  const config = projectSelector.getProjectConfig();
  const handleChangeConfig = (val: ConfigTimelineType) => {
    dispatch(projectActions.setTimelineInfo(val));
  };

  return [config, handleChangeConfig] as const;
};

export const useGetPeriods = (optionDate: EPeriodOptions, startDateProject: Moment) => {

  const getEndDate = (startDate: Moment) => optionDate === EPeriodOptions.half ? startDate.add(6, 'month') : startDate.add(1, optionDate as moment.unitOfTime.DurationConstructor);
  const getDateStep = () => optionDate === EPeriodOptions.month ? 1 : 7;


  const { datePeriods, monthPeriods } = useMemo(() => {

    const startDate = moment(startDateProject.format());
    const startMonth = moment(startDateProject.format());
    const endDate = getEndDate(startDateProject); // Get the last date that can be displayed in the timeline.
    const dateStep = getDateStep(); // Get the step between days
    const monthStep = 1;

    const datePeriods = getDatesArray(startDate, endDate, dateStep);
    const monthPeriods = getDatesArray(startMonth, endDate, monthStep, 'month').slice(0, -1);

    return { datePeriods, monthPeriods };
  }, [optionDate, startDateProject]);

  return { datePeriods, monthPeriods };
};

export const useGetStartDateAllProject = (scheduleData: ProjectType[]) => {
  const [date, setDate] = useState<Moment>(moment());

  useEffect(() => {

    const phases = scheduleData.flatMap((project) => project.phases);
    const earliestPhase = phases.reduce((earliest, phase) =>
      moment(phase.start_date).isBefore(moment(earliest.start_date)) ? phase : earliest
    );
    setDate(moment(earliestPhase.start_date, DATE_FORMAT));
  }, [scheduleData]);

  return date;
};

export const useGetEndDateAllProject = (scheduleData: ProjectType[]) => {
  const [date, setDate] = useState<Moment>(moment());

  useEffect(() => {
    const phases = scheduleData.flatMap((project) => project.phases);
    const earliestPhase = phases.reduce((latest, phase) =>
      moment(phase.end_date).isAfter(moment(latest.end_date)) ? phase : latest
    );
    setDate(moment(earliestPhase.end_date, DATE_FORMAT));
  }, [scheduleData]);

  return date;
};

export const useGetDates = (startDateProject:Moment, optionDate: EPeriodOptions) => {
  const getEndDate = (startDate: Moment) => optionDate === EPeriodOptions.half ? startDate.add(6, 'month') : startDate.add(1, optionDate as moment.unitOfTime.DurationConstructor);
  const dates = useMemo(() => {
    const startDate = moment(startDateProject.format());

    return getDatesArray(startDateProject, getEndDate(startDate), 1);
  }, [startDateProject, optionDate]);

  return dates;
};

export const useGetWidthCol = (containerRef: React.MutableRefObject<any>, colDates: Moment[]) => {
  const dimensions = useContainerDimensions(containerRef);
  console.log(dimensions.width);
  
  const widthCol = useMemo(() => dimensions.width / colDates.length, [colDates, dimensions]);
  return widthCol;
};

export const useGetCoorStart = (date: string, widthCol: number, startDateAllProject: Moment) => {
  const coorStart = useMemo(() => moment(date, DATE_FORMAT).diff(startDateAllProject, 'day') * widthCol, [date, widthCol, startDateAllProject]);

  return coorStart;
};

export const useGetCoorVolume = (widthCol: number, startDate: string, endDate: string) => {
  const coorStart = useMemo(() => moment(endDate, DATE_FORMAT).diff(moment(startDate, DATE_FORMAT), 'day') * widthCol, [widthCol, startDate, endDate]);

  return coorStart;
};