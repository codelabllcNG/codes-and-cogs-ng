import {create} from 'zustand'
import { JobStoreInterface } from '@/component/Interface/Jobs'
import { persist } from 'zustand/middleware'
import { TalentStoreInterface } from '@/component/Interface/talents'

  
  export const useJobStore = create<JobStoreInterface>()(
    persist(
      (set) => ({
        selectedJob:null,
        jobs:null,
        editSelectedJob: (job) =>
            set((state) => ({
              ...state,
              selectedJob: job,
            })),
        editJobs: (jobs) =>
            set((state) => ({
              ...state,
              jobs: jobs,
            })),
        
         
      }),
      {
        name: 'job-storage', // Key for localStorage
      }
    )
  )
  