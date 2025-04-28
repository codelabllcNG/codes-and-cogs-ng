import axios, { AxiosError } from "axios";
import { LocationParams } from "../Interface/talents";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL


export async function getLocation(params:LocationParams) {
    try{
        const response = await axios.get(`${backendUrl}/location`,{params:params})
        console.log({params})
        return response.data
    } catch(error) {
      if(error instanceof AxiosError){
         throw new Error(error.response?.data?.message)
      }
      throw new Error('An Unexpected Error Occured')

    }
}