import { useMutation, useQueryClient ,useQuery} from '@tanstack/react-query';
import { getTalents,hireTalent,registToGetListed } from '../Services/talentsService';

interface TalentParams {
    search?: string
    cat?:string
    limit?:string
} 

export function useGetTalentHook(params?:TalentParams){
    return useQuery({
        queryFn: () => getTalents(params), // Pass the params from queryKey[1]
        queryKey: ['get talents', params],
        enabled: true, // or your condition
    })
}

export function useHireTalentHook(){
    return useMutation({
        mutationFn:hireTalent
    })
}

export function useRegisterTogetListedHook(){
    return (useMutation({
        mutationFn: registToGetListed
    }))
}


