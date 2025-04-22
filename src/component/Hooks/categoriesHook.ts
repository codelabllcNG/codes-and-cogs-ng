import { useMutation, useQueryClient ,useQuery} from '@tanstack/react-query';
import { getCategories } from '../Services/categoriesService';

export function useGetCategoriesHook(){
    return useQuery({
        queryFn: ({ queryKey }) => getCategories(), // Pass the params from queryKey[1]
        queryKey: ['get talents']
    })
}

