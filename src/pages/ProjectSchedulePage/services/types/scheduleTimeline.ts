import { Moment } from 'moment';


export type DatePeriodType = {
  startDate: Moment
  endDate: Moment
}

export type ProjectType = {
  id: string,
  project_name: string,
  project_avatar: string,
  client_name: string,
  tags: string[],
  phases: PhasesType[],
  none_working: string[],
  members: TeamMemberType[]
}

export type PhasesType = {
  id: string;
  name:string;
  start_date: string;
  end_date: string;
  color: string;
}

export type TeamMemberType = {
  id: string,
  member_name: string,
  role: TeamMemberRoleType,
  skills: TeamMemberSkillType[],
  timelines: TimeLineType[]
}

export type TeamMemberRoleType = {
  id: string,
  name: string
}

export type TeamMemberSkillType = {
  id: string,
  name: string
}

export type TimeLineType = {
  id: string,
  name: string,
  start_date: string,
  end_date: string,
  hour_per_day: number,

}
