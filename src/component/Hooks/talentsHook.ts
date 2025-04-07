import { useMutation, useQueryClient ,useQuery} from '@tanstack/react-query';
import { getTalents } from '../Services/talentsService';

export  function useRecordAnalytics(){
  return useMutation({
    mutationFn:getTalents
  });

};

