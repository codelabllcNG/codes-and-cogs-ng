interface CertificationCredential {
    id: number;
    name: string;
    issuing_organization?: string; // Optional based on your data
    year_obtained?: number;        // Optional based on your data
  }
  
  interface Category {
    id: number;
    name: string;
    // Add other properties if they exist in your category objects
  }

  interface Expertises {
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
    category: Category[];
    certifications_credentials: CertificationCredential[];
    expertises: Expertises[];
  }