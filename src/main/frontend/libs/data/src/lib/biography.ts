export enum BiographyState {
  JOB_FINISHED = "JOB_FINISHED",
  JOB_CURRENT = "JOB_CURRENT",
  PROJECT_FINISHED = "PROJECT_FINISHED",
  PROJECT_CURRENT = "PROJECT_CURRENT",
}

export interface Biography {
  start: Date;
  end: Date;
  element: string;
  biographyState: BiographyState;
}
