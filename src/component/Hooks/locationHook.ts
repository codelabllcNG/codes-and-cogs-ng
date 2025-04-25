import { useMutation, useQueryClient ,useQuery} from '@tanstack/react-query';
import { getLocation } from '../Services/locationService';

export function useGetLocationHook(){
    return useQuery({
        queryFn: ({ queryKey }) => getLocation(), // Pass the params from queryKey[1]
        queryKey: ['get talents']
    })
}

