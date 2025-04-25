interface CertificationCredential {
    id: number;
    name: string;
    issuing_organization?: string; // Optional based on your data
    year_obtained?: number;        // Optional based on your data
  }
  
export  interface CategoryInterface {
    id: number;
    name: string;
    // Add other properties if they exist in your category objects
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

  export interface TalentParams {
      search?: string
      cat?:string
      limit?:string
      offset?:number
  }  