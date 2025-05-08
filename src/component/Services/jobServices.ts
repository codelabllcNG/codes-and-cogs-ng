import axios, { AxiosError } from "axios";
import { JobsParams } from "../Interface/Jobs";
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
    try{
        const response = await axios.get(`${backendUrl}/listing`,{
            params: params,
        })
        return response.data
    } catch(error) {
      if(error instanceof AxiosError){
         throw new Error(error.response?.data?.message)
      }
      
      throw new Error('An Unexpected Error Occured')

    }
}

export async function getJobsById(id:string | string[] |undefined) {
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
 


 