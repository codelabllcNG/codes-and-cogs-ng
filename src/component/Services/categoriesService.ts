import axios, { AxiosError } from "axios";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL


export async function getCategories() {
    console.log('running')
    try{
        const response = await axios.get(`${backendUrl}/category`)
        return response.data
    } catch(error) {
      if(error instanceof AxiosError){
         throw new Error(error.response?.data?.message)
      }
      throw new Error('An Unexpected Error Occured')

    }
}