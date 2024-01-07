import { ProjectType } from 'src/pages/ProjectSchedulePage/services/types/scheduleTimeline';
import TimelineTable from '.';
import moment, { Moment } from 'moment';
import { RowProps } from './Row';
import { DATE_FORMAT } from 'src/utils/constants';

type ProjectTimelineType = RowProps & {
  project : ProjectType;
  widthCol: number;
  startDateAllProject: Moment;
  endDateAllProject: Moment
}

const ProjectTimeline = ({project, widthCol, startDateAllProject, endDateAllProject, ...props}: ProjectTimelineType) => {

  const getCoorStart = (date: string) => {
    const startDate = moment(date, DATE_FORMAT).isBefore(moment()) ? moment() : moment(date, DATE_FORMAT);
    return startDate.diff(moment(), 'day') * widthCol;
  };

  const getCoorVolumne =(startDate: string, endDate: string) => {
    return moment(endDate, DATE_FORMAT).diff(moment(startDate, DATE_FORMAT), 'day') * widthCol;
  };

  return (
    <TimelineTable.Row
      {...props}>

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
  );
};

export default ProjectTimeline;