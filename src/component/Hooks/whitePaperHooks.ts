import { useMutation,useQuery} from '@tanstack/react-query';
import { downloadWhitePaper,getWhitePapers } from '../Services/whitePaper';

export function useDownloadWhitePaper(){
    return (useMutation({
        mutationFn: downloadWhitePaper
    }))
}

export function useGetWhitePaper(){
    return useQuery({
        queryFn: () => getWhitePapers(),
        queryKey: ['get whitepaper']
    })
}