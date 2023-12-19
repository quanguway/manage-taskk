import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import moment from 'moment';
import { taskk } from 'src/utils/constants';
import { range } from 'lodash';
import RadioButtonDate, { EPeriodOptions } from '../../molecules/RadioButtonDate';
import { useMemo, useState } from 'react';
import { DatePeriodType } from 'src/pages/ProjectSchedulePage/services/types/scheduleTimeline';
import { getDatesArray } from 'src/utils/date';

const ScheduleTimeline = () => {

  const [optionDate, setOptionDate] = useState<EPeriodOptions>(EPeriodOptions.month);

  const period: DatePeriodType = useMemo(() => ({
    startDate: moment(),
    endDate: moment().add(1, optionDate as moment.unitOfTime.DurationConstructor)
  }), [optionDate]);

  console.log(period);
  
  console.log(getDatesArray(moment(), moment().add(4, 'day')));
  
  const startDate = moment();
  const endDate = startDate.add(1, 'month');

  const diffScheduleDate = endDate.diff(startDate, 'day');
  const timeScheduleColumns = taskk.colSpanTimeSchedule.MEMBER + (taskk.colSpanTimeSchedule.DATE * diffScheduleDate);

  return (
    <>
      <RadioButtonDate value={optionDate} setValue={setOptionDate}/>

      <Box sx={{ flexGrow: 1 }}>
        <Grid columns={timeScheduleColumns} container>
          <Grid item xs={taskk.colSpanTimeSchedule.MEMBER}>
            <Item>Member</Item>
          </Grid>
          {range(period.startDate.get('date'), period.endDate.get('date')).map(time => (
            <Grid key={time} item xs={taskk.colSpanTimeSchedule.DATE}>
              <Item> {time} </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ScheduleTimeline;

const Item = styled(Paper)`
  border: 1px solid;
`;