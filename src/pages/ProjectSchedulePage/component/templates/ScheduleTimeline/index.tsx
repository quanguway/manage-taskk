import styled from '@emotion/styled';
import moment from 'moment';
import RadioButtonDate, { EPeriodOptions } from '../../molecules/RadioButtonDate';
import { useCallback, useRef, useState } from 'react';
import TimelineTable from '../../molecules/TimelineTable';
import { HBox } from 'src/components/atoms/Boxes';
import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import Collapsed from 'src/components/atoms/Animate/Collapsed';
import Box from '@mui/material/Box';
import DraggableItem from '../../DnD/DraggableItem';
import Droppable from '../../DnD/Droppable';
import { schedules } from 'src/mocks/schedule';
import theme from 'src/theme';
import { ProjectType } from 'src/pages/ProjectSchedulePage/services/types/scheduleTimeline';
import { DATE_FORMAT } from 'src/utils/constants';
import ProjectInfo from '../../molecules/TimelineTable/ProjectInfo';
import Typography from '@mui/material/Typography';
import { Rotate } from 'src/components/atoms/Animate';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useGetDates, useGetEndDateAllProject, useGetPeriods, useGetStartDateAllProject, useGetWidthCol } from 'src/pages/ProjectSchedulePage/services/hooks/useSchedule';
import { useSnapGrid } from 'src/hooks/useSnapGrid';


const ScheduleTimeline = () => {
  const scheduleData: ProjectType[] = schedules;

  const [optionDate, setOptionDate] = useState<EPeriodOptions>(EPeriodOptions.quarter);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<any>();

  const startDateAllProject = useGetStartDateAllProject(scheduleData);
  const { datePeriods, monthPeriods } = useGetPeriods(optionDate, moment());
  const endDateAllProject = useGetEndDateAllProject(scheduleData);
  const dates = useGetDates(startDateAllProject, optionDate);
  const widthCol = useGetWidthCol(containerRef, dates);
  const snapToGrid = useSnapGrid(widthCol);

  const timeScheduleColumns = theme.taskk.colSpanTimeSchedule.INFO + (theme.taskk.colSpanTimeSchedule.DATE * datePeriods.length);
  const colSpanTimeLine = theme.taskk.colSpanTimeSchedule.DATE * datePeriods.length;


  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 500,
      tolerance: 8,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  const handleDrag = () => {
  };

  const getCoorStart = (date: string) => {
    console.log(moment(date, DATE_FORMAT).diff(startDateAllProject, 'day'));
    const startDate = moment(date, DATE_FORMAT).isBefore(moment()) ? moment() : moment(date, DATE_FORMAT);
    console.log(startDate.format(), moment().format(), startDate.diff(moment(), 'day'));
    
    return startDate.diff(moment(), 'day') * widthCol;
  };

  const getCoorVolumne =(startDate: string, endDate: string) => {
    console.log(startDate, endDate);
    console.log(moment(endDate, DATE_FORMAT).diff(moment(startDate, DATE_FORMAT), 'day'));
    
    return moment(endDate, DATE_FORMAT).diff(moment(startDate, DATE_FORMAT), 'day') * widthCol;
  };

  return (
    <>
      <RadioButtonDate value={optionDate} setValue={setOptionDate} />

      <DndContext modifiers={[snapToGrid]} onDragEnd={handleDrag} sensors={sensors}>
        <TimelineTableStyled>
          <TimelineTable.Header dates={datePeriods} periods={monthPeriods} />
          <HBox onClick={() => setIsOpen(!isOpen)}
            sx={{ width: '100%', height: '28px', cursor: 'pointer' }}
            justifyContent={'flex-start'}
            padding={1}
            border={'1px solid'}>
            <Rotate isRotate={isOpen} deg={90} >
              <KeyboardArrowRightIcon />
            </Rotate>
            <Typography>Project ({scheduleData.length})</Typography>
          </HBox>
          <Collapsed isOpen={isOpen}>
            {scheduleData.map(project => (
              <TimelineTable.Row
                key={project.id}
                projectInfo={<ProjectInfo isOpen={false} key={project.id} {...project} />}
                colDates={dates}
                colSpanTimeLine={colSpanTimeLine}
                containerRef={containerRef}
                timeScheduleColumns={timeScheduleColumns}>

                <TimelineTable.MilestoneLine
                  left={`${getCoorStart(startDateAllProject.format(DATE_FORMAT))}px`}
                  top={0}
                  width={`${getCoorVolumne(startDateAllProject.format(DATE_FORMAT), endDateAllProject.format(DATE_FORMAT))}px`}
                  bgcolor={'blueviolet'} />

                {project.phases.map((phases, index) => (
                  <TimelineTable.MilestoneLine
                    key={phases.id}
                    left={`${getCoorStart(phases.start_date)}px`}
                    top={(index + 1) * 6}
                    width={`${getCoorVolumne(phases.start_date, phases.end_date)}px`}
                    bgcolor={phases.color} />
                ))}
              </TimelineTable.Row>
            ))}
          </Collapsed>

        </TimelineTableStyled>


        <Box>
          <DraggableItem data={{}} id='3' >

            <Box>
              game
              <DndContext
                sensors={sensors}>
                <DraggableItem data={{}} id='4' >
                  <Box border={'1px solid'}>
                    change width
                  </Box>
                </DraggableItem>

              </DndContext>
            </Box>
          </DraggableItem>
        </Box>
        <Box>
          <Droppable data={{}} id='3' >
            <Box border={'1px solid'}>
              game
            </Box>
          </Droppable>
        </Box>

      </DndContext>
    </>
  );
};

export default ScheduleTimeline;

// const Item = styled(Paper)`
//   border: 1px solid;
// `;

const TimelineTableStyled = styled(Box)`

`;