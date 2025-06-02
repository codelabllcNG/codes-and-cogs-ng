import axios, { AxiosError } from "axios";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
import { ContactFormData } from "../Interface/form";


export async function contactUs(data:ContactFormData){
    try {
     const response = await axios.post(`${backendUrl}/contact`,data)
     return response.data
    } catch (error) {
     if (error instanceof AxiosError) {
         throw new Error(error.response?.data?.message || 'An unexpected error occurred');
     }
     console.error(error)
     throw new Error('An unexpected error occurred');
  
    }
 }