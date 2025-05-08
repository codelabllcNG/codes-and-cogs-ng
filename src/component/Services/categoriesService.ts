import axios, { AxiosError } from "axios";
import { CategoryParams } from "../Interface/talents";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL


export async function getCategories(params:CategoryParams) {
    try{
        const response = await axios.get(`${backendUrl}/category`,{params:params})
        return response.data
    } catch(error) {
      if(error instanceof AxiosError){
         throw new Error(error.response?.data?.message)
      }
      throw new Error('An Unexpected Error Occured')

    }
}