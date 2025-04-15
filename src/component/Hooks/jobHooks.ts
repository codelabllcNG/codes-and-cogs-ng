import { useMutation, useQueryClient ,useQuery} from '@tanstack/react-query';
import { listOpening,getJobs } from '../Services/jobServices';

interface JobsParams {
   search?: string
   limit?:string
} 

export function useListOpeningHook (){
   return useMutation({
    mutationFn:listOpening
   })
}

export function useGetTalentHook(params?:JobsParams){
    return useQuery({
        queryFn: () => getJobs(params), // Pass the params from queryKey[1]
        queryKey: ['get talents', params],
        enabled: true, // or your condition
    })
}