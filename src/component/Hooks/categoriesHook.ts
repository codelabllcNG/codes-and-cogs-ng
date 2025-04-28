import { useMutation, useQueryClient ,useQuery} from '@tanstack/react-query';
import { getCategories } from '../Services/categoriesService';
import { CategoryParams } from '../Interface/talents';

export function useGetCategoriesHook(params:CategoryParams){
    return useQuery({
        queryFn: ({ queryKey }) => getCategories(params), // Pass the params from queryKey[1]
        queryKey: ['get talents']
    })
}

