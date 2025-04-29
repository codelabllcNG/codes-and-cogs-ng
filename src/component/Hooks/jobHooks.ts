import { useMutation,useQuery} from '@tanstack/react-query';
import { listOpening,getJobs,getJobsById,applyForListing } from '../Services/jobServices';
import { JobsParams } from '../Interface/Jobs';
import { useState } from 'react';
import { useCallback } from 'react';


export function useListOpeningHook (){
   return useMutation({
    mutationFn:listOpening
   })
}

export function useGetJobstHook(initialParams?: JobsParams) {
    const [params, setParams] = useState<JobsParams>(initialParams || {});
  
    const queryResult = useQuery({
      queryFn: () => getJobs(params),
      queryKey: ['get talents', params],
      enabled: true,
    });
  
    // Custom refetch with new parameters
    const refetchWithNewParams = useCallback((newParams: JobsParams) => {
      setParams(prev => ({...prev, ...newParams}));
    }, []);
  
    return {
      ...queryResult,
      refetchWithParams: refetchWithNewParams,
      currentParams: params
    };
  }

export function useGetJobByIdHook(id:string | string[] | undefined){
    return useQuery({
        queryFn: ()=> getJobsById(id),
        queryKey: ['get job by id'],
        enabled : Boolean(id)
    })
}

export function useApplyForListingHook(){
    return (useMutation({
        mutationFn: applyForListing
    }))
}