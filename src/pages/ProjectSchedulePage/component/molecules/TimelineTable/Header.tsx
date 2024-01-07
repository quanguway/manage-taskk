import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import moment, { Moment } from 'moment';
import styled from '@emotion/styled';
import theme, { ThemeTypeMUI } from 'src/theme';

type HeaderProps = {
  dates: Moment[],
  periods: Moment[]
}

const Header = ({dates, periods}: HeaderProps) => {

  const timeScheduleColumns = theme.taskk.colSpanTimeSchedule.INFO + (theme.taskk.colSpanTimeSchedule.DATE * dates.length);
  const colSpanTimeLine = theme.taskk.colSpanTimeSchedule.DATE * dates.length;

  const getColSpanBetweenTime = (from: Moment, to: Moment) => {
    if(from.isAfter(to)) return 0;
    const start = moment(dates[0]);
    const end = moment(dates[dates.length - 1]);
    const totalDateDiff = end.diff(start, 'day');
    const dateDiff = to.diff(from, 'day');
    return (dateDiff * colSpanTimeLine) / totalDateDiff;
  };


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid wrap={'nowrap'} columns={timeScheduleColumns} container>
          <Grid item xs={theme.taskk.colSpanTimeSchedule.INFO}>
            <Item theme={theme} sx={{height: '100%'}}> Member </Item>
          </Grid>
          <Grid item xs={colSpanTimeLine}>
            <Grid container columns={colSpanTimeLine}>
              {periods.map((time, index) => {
                const nextTime = periods?.[index + 1] ?? dates[dates.length - 1];
                return (
                  <Grid key={index} item xs={ getColSpanBetweenTime(time, nextTime) }>
                    <Item theme={theme}> { time.format('MMM \'YY') } </Item>
                  </Grid>);
              })}
            </Grid>
            <Grid wrap={'nowrap'} container columns={colSpanTimeLine}>
              {dates.map((time, index) => (
                <Grid key={index} item xs={theme.taskk.colSpanTimeSchedule.WEEK}>
                  <Item theme={theme}> { time.format('DD') } </Item>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;

const Item = styled(Box)<{theme: ThemeTypeMUI}>`
  border: 1px solid ${props => props.theme.taskk.colors.border.gray };
`;