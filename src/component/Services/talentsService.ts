import axios, { AxiosError } from "axios";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

// export async function getPropertyChatOverview(id:string) {
//     try{
//         const token = getUserToken()
//         if(!token) return 

//         const response = await axios.get(`${backendUrl}/analytics/get-website-data/${id}`,{
//             headers:{
//                 Authorization:`Bearer ${token}`
//             }
//         })
//         return response.data
//     } catch(error) {
//       if(error instanceof AxiosError){
//          throw new Error(error.response?.data?.message)
//       }
      
//       throw new Error('An Unexpected Error Occured')

//     }
// }

export async function getTalents(id:string) {
    try{
      

        const response = await axios.get(`${backendUrl}/talents`)
        return response.data
    } catch(error) {
      if(error instanceof AxiosError){
         throw new Error(error.response?.data?.message)
      }
      
      throw new Error('An Unexpected Error Occured')

    }
}