import axios, { AxiosError } from "axios";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
import { getWhitePaperFormData } from "../Interface/form";


export async function downloadWhitePaper(data:getWhitePaperFormData){
    try {
     const response = await axios.post(`${backendUrl}/download-whitepapers`,data)
     return response.data
    } catch (error) {
     if (error instanceof AxiosError) {
         throw new Error(error.response?.data?.message || 'An unexpected error occurred');
     }
     throw new Error('An unexpected error occurred');
    }
}

 export async function getWhitePapers() {
    try{
        const response = await axios.get(`${backendUrl}/whitepapers`)
        return response.data
    } catch(error) {
      if(error instanceof AxiosError){
         throw new Error(error.response?.data?.message)
      }
      throw new Error('An Unexpected Error Occured')

    }
}