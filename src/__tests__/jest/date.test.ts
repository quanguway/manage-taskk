import moment from 'moment';
import { getDatesArray } from '../../utils/date';

describe('getDatesArray', () => {
  test('getDatesArray: returns empty array when from is after to', () => {
    const from = moment('2023-12-19');
    const to = moment('2023-12-18');
    const dates = getDatesArray(from, to);
    expect(JSON.stringify(dates)).toEqual(JSON.stringify([]));
  });

  test('getDatesArray: returns single date array when from and to are the same', () => {
    const date = moment('2023-12-18');
    const dates = getDatesArray(date, date);
    expect(JSON.stringify(dates)).toEqual(JSON.stringify([date]));
  });

  test('getDatesArray: returns dates array with default step (1 day)', () => {
    const from = moment('2023-12-18');
    const to = moment('2023-12-20');
    const dates = getDatesArray(from, to);
    expect(JSON.stringify(dates)).toEqual(JSON.stringify([
      moment('2023-12-18'),
      moment('2023-12-19'),
      moment('2023-12-20'),
    ]));
  });

  test('getDatesArray: returns dates array with custom step', () => {
    const from = moment('2023-12-18');
    const to = moment('2023-12-25');

    const receivedResult = getDatesArray(from, to, 3); // every 3 days

    const expectResult = [
      moment('2023-12-18'),
      moment('2023-12-21'),
      moment('2023-12-24'),
    ];

    expect(JSON.stringify(receivedResult)).toEqual(JSON.stringify(expectResult));
  });
});