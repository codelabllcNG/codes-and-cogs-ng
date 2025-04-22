import axios, { AxiosError } from "axios";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL


interface listOpeningBody{
    fname: string,
    lname: string,
    email: string,
    cname: string,
    ctype: string,
    country: string,
    phone?: string,
    soon: string,
    skills: string[],
    comments: string
}

interface JobsParams {
    search?: string
    limit?:string
} 

interface registerToGetListedBody{
    fname:string,
    lname:string,
    email:string,
    cv:string,
    listing_id:string
}

export async function listOpening(data:listOpeningBody){
    try {
     const response = await axios.post(`${backendUrl}/add-listing`,data)
     return response.data
    } catch (error) {
     if (error instanceof AxiosError) {
         throw new Error(error.response?.data?.message || 'An unexpected error occurred');
     }
     console.error(error)
     throw new Error('An unexpected error occurred');
  
    }
}

export async function getJobs(params?:JobsParams) {
    console.log(params)
    try{
        const response = await axios.get(`${backendUrl}/listing`,{
            params: params,
        })
        console.log(`${backendUrl}/talents`)
        return response.data
    } catch(error) {
      if(error instanceof AxiosError){
         throw new Error(error.response?.data?.message)
      }
      
      throw new Error('An Unexpected Error Occured')

    }
}

export async function getJobsById(id:string | string[] |undefined) {
    console.log({id})
    if(!id) return 
    
    try{
        const response = await axios.get(`${backendUrl}/listing?list_id=${id}`)
        return response.data
    } catch(error) {
      if(error instanceof AxiosError){
         throw new Error(error.response?.data?.message)
      }
      
      throw new Error('An Unexpected Error Occured')

    }
}

export async function applyForListing(data:registerToGetListedBody){
    try {
     const response = await axios.post(`${backendUrl}/get-listed`,data)
     return response.data
    } catch (error) {
     if (error instanceof AxiosError) {
         throw new Error(error.response?.data?.message || 'An unexpected error occurred');
     }
     console.error(error)
     throw new Error('An unexpected error occurred');
  
    }
 }
 


 