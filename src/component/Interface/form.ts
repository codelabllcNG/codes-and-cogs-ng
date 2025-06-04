export interface ContactFormData {
  fname: string;
  lname: string;
  email: string;
  title: string;
  company: string;
  country: string;
  phone: string;
  comments: string;
  service: string;
}

export interface getWhitePaperFormData{
    first_name : string ;
    last_name : string ;
    company_type : string;
    company : string;
    email : string;
    id : string
}

export interface whitePaperInterface{
  id: number;
  date: string; 
  title: string;
  subtitle: string;
  description: string | undefined; 
  image: string; 
  slug: string;
}

