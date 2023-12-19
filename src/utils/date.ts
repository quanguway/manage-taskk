import { Moment } from 'moment';
import { DATE_FORMAT } from './constants';

/**
 * getDateFormat
 * @param date
 * @returns
 */
export const getDateFormat = (date: Moment) => {
  return date.format(DATE_FORMAT);
};

/**
 * getDatesArray
 * @param from Moment
 * @param to Moment
 * @param step number
 * @returns Moment[]
 */
export const getDatesArray = (from: Moment, to: Moment, step?: number) => {
  if(from.isAfter(to)) return [];

  if(from.isSame(to)) return [from];

  const date: Moment = from;
  const dates: Moment[] = [];

  while(date.isSameOrBefore(to, 'date')) {
    dates.push(date.clone());
    date.add(step ?? 1, 'day').clone();
  }

  return dates;
};