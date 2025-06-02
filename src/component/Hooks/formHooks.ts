import { useMutation} from '@tanstack/react-query';
import { contactUs } from '../Services/formServices';

export function useContactUs(){
    return (useMutation({
        mutationFn: contactUs
    }))
}