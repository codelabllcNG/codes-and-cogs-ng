export interface JobInterface {
  id: number;
  title: string;
  icon: string;
  location: string;
  proposed_salary: string;
  work_type: string;
  similar_listings:JobInterface[]
  details: TrustedHTML | string ;
  job_type: JobTypeInterface[];
  applicants: number;
  date: string;
}

// Interface for a Job Type.
export interface JobTypeInterface {
  id: number;
  name: string;
  active_icon : string;
  non_active_icon : string;
}

export interface JobStoreInterface {
      selectedJob: JobInterface | null
      jobs: JobInterface[] | null
      editSelectedJob: (job: JobInterface) => void
      editJobs: (job: JobInterface[]) => void
}


export interface JobsParams {
  search?: string
  cat?:string
  limit?:string
  offset?:number
} 