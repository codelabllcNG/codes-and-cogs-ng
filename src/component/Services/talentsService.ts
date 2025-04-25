import axios, { AxiosError } from "axios";
import { TalentParams } from "../Interface/talents";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

interface HireTalentBody{
    fname: string,
    lname: string,
    email: string,
    cname: string,
    ctype: string,
    country: string,
    phone?: string,
    soon: string,
    talent: string,
    comments: string
}


interface registerToGetListedBody{
    fname:string,
    lname:string,
    email:string,
    cv:string
}

export async function registToGetListed(data:registerToGetListedBody){
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

export async function getTalents(params?:TalentParams) {
    console.log(params)
    try{
        const response = await axios.get(`${backendUrl}/talents`,{
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

export async function hireTalent(data:HireTalentBody){
    try {
     const response = await axios.post(`${backendUrl}/hire`,data)
     return response.data
    } catch (error) {
     if (error instanceof AxiosError) {
         throw new Error(error.response?.data?.message || 'An unexpected error occurred');
     }
     console.error(error)
     throw new Error('An unexpected error occurred');
  
    }
 }