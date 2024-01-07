export type IState = {
  config: {
    colWidthDate: number;
    colTotalTimeline: number;
    colSpanTimeline: number;
    colSpanDate: number;
    colSpanInfo: number;

    // colSpanDate?: number;
    // colNumTimelineMonth?: number;
    // colSpanInfo?: number;
  }
}

export type ConfigTimelineType = IState['config'];