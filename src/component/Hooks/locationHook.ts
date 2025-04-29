import {useQuery} from '@tanstack/react-query';
import { getLocation } from '../Services/locationService';
import { LocationParams } from '../Interface/talents';

export function useGetLocationHook(params:LocationParams){
    return useQuery({
        queryFn: () => getLocation(params), // Pass the params from queryKey[1]
        queryKey: ['get location']
    })
}
