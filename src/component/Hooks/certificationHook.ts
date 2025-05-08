import { useQuery} from '@tanstack/react-query';
import { getCertificates } from '../Services/certificationService';

export function useGetCertificatesHook(){
    return useQuery({
        queryFn: () => getCertificates(),
        queryKey: ['get certificates']
    })
}

