import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Moment } from 'moment';
import React from 'react';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import theme from 'src/theme';
import { styled } from '@mui/material';

export type RowProps = {
  children?: React.ReactNode;
  projectInfo: React.ReactNode;
  colDates: Moment[];
  timeScheduleColumns: number;
  colSpanTimeLine: number;
  containerRef:React.MutableRefObject<any>

}

const Row = ({
  children,
  projectInfo,
  colDates,
  timeScheduleColumns,
  colSpanTimeLine
  ,containerRef
}: RowProps) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid wrap='nowrap' columns={timeScheduleColumns} container>

        {/* Project info */}
        <Grid item xs={theme.taskk.colSpanTimeSchedule.INFO}>
          {projectInfo}
        </Grid>

        {/* Milestone line */}

        <Grid item xs={colSpanTimeLine}>
          <Box ref={containerRef} position={'relative'} height={'100%'}>
            <Grid height={'100%'} wrap='nowrap' container columns={colDates.length}>
              {colDates.map((col, index) => (
                <Grid key={index} item xs={theme.taskk.colSpanTimeSchedule.DATE}>
                  <MilestoneStyled border={'0.5px solid'} height={'100%'} width={'100%'}>
                    <AddCircleRoundedIcon color='primary' fontSize={'small'} />
                  </MilestoneStyled>

                </Grid>
              ))}
            </Grid>
            {children}
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Row;

const MilestoneStyled = styled(Box)`

  cursor: pointer;
  display: flex;
  justify-content: center;

  svg {
    display: none;
  }

  &:hover {
    svg {
      display: block;
    }
  }
`;