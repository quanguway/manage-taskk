import { schedules } from 'src/mocks/schedule';
import ScheduleTimeline from './component/templates/ScheduleTimeline';

const ProjectSchedulePage = () => {

  console.log(schedules);
  return (
    <>
      <ScheduleTimeline />
    </>
  );
};

export default ProjectSchedulePage;