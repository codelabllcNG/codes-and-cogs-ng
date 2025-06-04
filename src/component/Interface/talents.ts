import { whitePaperInterface } from "./form";
interface CertificationCredential {
    name: string;
    logo:string;    
  }
  
export  interface CategoryInterface {
    id: number;
    name: string;
    // Add other properties if they exist in your category objects
  }
export interface CategoryParams {
    for: string
}  

export  interface LocationInterface {
    id: number;
    name: string;
    // Add other properties if they exist in your category objects
  }

  export interface ExpertisesInterface {
    id : number;
    name : string ;
  }
  
  export interface TalentInterface {
    id: number;
    name: string;
    nicename: string;
    email: string;
    role: string;
    description: string;
    image: string;
    location:LocationInterface[];
    years_of_experience: string;
    rating: string;
    category: CategoryInterface[];
    certifications_credentials: CertificationCredential[];
    expertises: ExpertisesInterface[];
  }

  export interface TalentStoreInterface {
      selectedTalent: TalentInterface | null
      talents: TalentInterface[] | null
      editSelectedTalent: (talent: TalentInterface) => void
      editTalents: (talents: TalentInterface[]) => void
    }

   export interface whitePaperStoreInterface {
      selectedWhitePaper: whitePaperInterface | null
      whitePaper: whitePaperInterface[] | null
      editSelectedWhitePaper: (whitePaper: whitePaperInterface) => void
      editWhitePapers: (whitePaper: whitePaperInterface[]) => void
    }

  export interface TalentParams {
      search?: string
      cat?:string
      limit?:string
      offset?:number
      exclude?:string[]
  }  

  export interface LocationParams {
    for?: string
  }  