import { useMutation, useQueryClient ,useQuery} from '@tanstack/react-query';
import { getTalents } from '../Services/talentsService';

// export  function useGetTalentHook(){
//   return useMutation({
//     mutationFn:getTalents
//   });

// };

interface TalentParams {
    search?: string
} 

export function useGetTalentHook(params?:TalentParams){
    return useQuery({
        queryFn: ({ queryKey }) => getTalents(params), // Pass the params from queryKey[1]
        queryKey: ['get talents', params],
        enabled: true, // or your condition
    })
}
