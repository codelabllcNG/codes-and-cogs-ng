import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    VisuallyHidden,
    Flex,
    Text,
    Heading,
  } from '@chakra-ui/react';
  import { useRef,useState } from 'react';
  import { useForm } from 'react-hook-form';
  import { toast } from 'react-toastify';
  import LoadingSpinner from './loadingSpinner';
  import { useRegisterTogetListedHook } from './Hooks/talentsHook';
  import React from 'react';
  
  interface RegistrationFormProp {
    listing_id?: string
  }

  interface FormData {
    firstName: string;
    lastName: string;
    companyType: string;
    companyName: string;
    wordEmail: string;
    updatedCP: string;
    file: FileList;
    listing_id?: string
  }
  
 
 const RegistrationForm : React.FC<RegistrationFormProp> = ({listing_id})=>{
    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState<File>();
    const [loading,setLoading] = useState(false)
    const mutation = useRegisterTogetListedHook()
    const [formData,setFormData] =useState({
        "fname": "",
        "lname": "",
        "email": "",
        "cv": "",
        "listing_id":""
    })

    
    function fileToBase64(file:File) {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file); // This includes the MIME type (e.g., data:image/png;base64,...)
              reader.onload = () => resolve(reader.result);
              reader.onerror = error => reject(error);
            });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormData((prev) => ({
              ...prev,
              [name]: value,
            }));
    };
    
    const hanldeSubmit = async function(){
            try {
                setLoading(true)
                if(!file){
                    console.log(typeof file)
                    toast.error('please upload you cv')
                   
                }
                if(file){
                     const base64File = await fileToBase64(file)
                        formData.cv = String(base64File)                     
                }

                if(listing_id){
                    formData.listing_id = listing_id
                    console.log({formData})
                    const data = await  mutation.mutateAsync(formData)
                    console.log({formData})
                    toast.success(data.message)
                    return

                }

                setLoading(true)
               
                const data = await  mutation.mutateAsync(formData)
                console.log(data)
                toast.success(data.message)

                
            } catch (error:any) {
                toast.error(error.message)
            }finally{
                setLoading(false)
            }
           
    }

    return(
        <Flex>
                <Box pos={'relative'} mx={'auto'} p={5} border={'0.7px solid rgba(136, 136, 136, 0.10)'} bg={'white'} borderRadius={'4px'} w={{base:'100%',lg:'80%'}}>

                    <Heading m={{lg:'3rem auto'}} textAlign={'center'} fontSize={'28px'} color={'#2E3192'}> Register To Get Listed </Heading>
                            <LoadingSpinner showLoadingSpinner={loading} />
                            <Flex gap={'3rem'} mt={'3rem'} flexDir={{base:'column',lg:'row'}}>
                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>First Name</FormLabel></Text>
                                            <Input h={'60px'} name='fname' value={formData.fname} onChange={handleChange} placeholder="First Name" />
                                    </FormControl>

                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>Last Name</FormLabel></Text>
                                            <Input h={'60px'} name="lname" value={formData.lname} onChange={handleChange} placeholder="Last Name" />
                                    </FormControl>
                            </Flex>
                            {/* <Flex gap={'3rem'} mt={'3rem'} flexDir={{base:'column',lg:'row'}}>
                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>Company Type</FormLabel></Text>
                                        <Select 
                                            name='ctype' 
                                            value={formData.ctype} 
                                            onChange={handleChange}
                                            h={'60px'}
                                            placeholder="Select company type"
                                        >
                                            <option value="startup">Startup</option>
                                            <option value="sme">SME</option>
                                            <option value="enterprise">Enterprise</option>
                                            <option value="government">Government</option>
                                            <option value="nonprofit">Non-Profit</option>
                                        </Select>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>Company Name</FormLabel></Text>
                                        <Input h={'60px'} placeholder="Enter company name" />
                                    </FormControl>
                            </Flex> */}
                            <Flex gap={'3rem'} mt={'3rem'} flexDir={{base:'column',lg:'row'}}>
                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>Email</FormLabel></Text>
                                            <Input name='email' value={formData.email} onChange={handleChange} h={'60px'} placeholder="First Name" />
                                    </FormControl>
                            </Flex>
                            <Flex gap={'3rem'} mt={'3rem'} flexDir={{base:'column',lg:'row'}}>
                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>Upoload Cv</FormLabel></Text>
                                        <Input
                                            id="cv-upload"
                                            type="file"
                                            h={'60px'}
                                            p={1}
                                            accept=".pdf,.doc,.docx"
                                            borderRadius="md"
                                            onChange={(e) => {
                                                const selectedFile = e.target.files?.[0];
                                                if (selectedFile) {
                                                    setFileName(selectedFile.name);
                                                    setFile(selectedFile)
                                                }
                                            }}
                                        />
                                    </FormControl>
                            </Flex>
                            <Flex>
                              <Button width={'fit-content'} onClick={hanldeSubmit} mx={'auto'} m={'3rem auto'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Submit Details</Button>
                            </Flex>                       



                </Box>
        </Flex>
    )
 }

 export default RegistrationForm