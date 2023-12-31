import moment from 'moment';
import { ProjectType } from 'src/pages/ProjectSchedulePage/services/types/scheduleTimeline';
import { DATE_FORMAT } from 'src/utils/constants';
import { getDateFormat } from 'src/utils/date';

const start_date = moment('2024-01-08', DATE_FORMAT);
const start_date_project = moment('2024-01-08', DATE_FORMAT);
// const end_date = moment('2023-12-28', DATE_FORMAT);

const phases_1_duration = 27;
const phases_2_duration = 15;
const phases_3_duration = 20;
const phases_4_duration = 9;

export const tags = [
  {
    id: 'tag_1',
    name: 'Website'
  },
  {
    id: 'tag_2',
    name: 'Important'
  },
  {
    id: 'tag_3',
    name: 'Mobile app'
  },
];

export const roles = [
  {
    id: 'role_1',
    name: 'Designer'
  },
  {
    id: 'role_2',
    name: 'Developer'
  },
  {
    id: 'role_3',
    name: 'Tester'
  },
  {
    id: 'role_4',
    name: 'Project manger'
  },
];

export const memberSkills = [
  {
    id: 'skill_1',
    name: 'UX'
  },
  {
    id: 'skill_2',
    name: 'UI'
  },
  {
    id: 'skill_3',
    name: 'Font end'
  },
  {
    id: 'skill_4',
    name: 'Back end'
  },
  {
    id: 'skill_5',
    name: 'Back end'
  },
  {
    id: 'skill_6',
    name: 'Manage System'
  },
];

export const phases = [
  {
    id: 'phases_1',
    name: 'General overview',
    start_date: getDateFormat(start_date_project),
    end_date: getDateFormat(start_date.add(phases_1_duration, 'day')),
    color: 'red',
  },
  {
    id: 'phases_2',
    name: 'Specific methodologies',
    start_date: '2024-02-15',
    end_date: '2024-02-23',
    color: 'yellow',

  },
  {
    id: 'phases_3',
    name: 'Project stages',
    start_date: getDateFormat(start_date_project),
    end_date: getDateFormat(start_date.add(phases_3_duration, 'day')),
    color: 'pink',
  },
  {
    id: 'phases_4',
    name: 'Tools and techniques',
    start_date: getDateFormat(start_date.add(phases_2_duration, 'day')),
    end_date: getDateFormat(start_date.add(phases_4_duration, 'day')),
    color: 'blue',
  }
];

export const schedules: ProjectType[] = [
  {
    id: 'project_1',
    project_name: 'Hidden Moon Base',
    project_avatar: 'https://lh4.googleusercontent.com/givn9c6tCwdmzCPv5moOlI8S1U1mErtQJ6jhPLyHDlGc0WEbaQPO6Vv-ucPL7sumVI1rPfQWvPsloFCkxilKbNR6dCHWVOrQ6KrY-Z8IKrkk150xyM9lGmt2Hw-UO3UdyHbpZBGy',
    client_name: 'Amazon',
    tags: ['tag_1', 'tag_3'],
    phases: phases,
    none_working: ['sat', 'sun'],
    members: [
      {
        id: 'member_1',
        member_name: 'Member 1',
        role: roles[0],
        skills: [memberSkills[0], memberSkills[1]],
        timelines: [
          {
            hour_per_day: 8,
            ...phases[0],
            id: 'time_line_1',
          },
          {
            hour_per_day: 8,
            ...phases[2],
            id: 'time_line_2',
          }
        ]
      },
      {
        id: 'member_2',
        member_name: 'Member 2',
        role: roles[0],
        skills: [memberSkills[3], memberSkills[4]],
        timelines: [
          {
            hour_per_day: 8,
            ...phases[1],
            id: 'time_line_3',
          },
        ]
      },
      {
        id: 'member_3',
        member_name: 'Member 3',
        role: roles[1],
        skills: [memberSkills[0], memberSkills[1]],
        timelines: [
          {
            hour_per_day: 8,
            ...phases[1],
            id: 'time_line_4',
          },
          {
            hour_per_day: 8,
            ...phases[4],
            id: 'time_line_5',
          },
        ]
      },
    ]
  }
];