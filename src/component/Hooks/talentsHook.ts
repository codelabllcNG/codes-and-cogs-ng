import { useMutation,useQuery} from '@tanstack/react-query';
import { getTalents,hireTalent,registToGetListed } from '../Services/talentsService';
import { useState,useCallback } from 'react';
import { TalentParams } from '../Interface/talents';


export function useGetTalentHook(initialParams?: TalentParams) {
    const [params, setParams] = useState<TalentParams>(initialParams || {});
  
    const queryResult = useQuery({
      queryFn: () => getTalents(params),
      queryKey: ['get talents', params],
      enabled: true,
    });
  
    // Custom refetch with new parameters
    const refetchWithNewParams = useCallback((newParams: TalentParams) => {
      setParams(prev => ({...prev, ...newParams}));
    }, []);
  
    return {
      ...queryResult,
      refetchWithParams: refetchWithNewParams,
      currentParams: params
    };
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


