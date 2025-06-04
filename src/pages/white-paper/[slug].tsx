import { Flex,Box,Text,Heading,Image,Button,FormControl,FormLabel,Input,Select} from "@chakra-ui/react";
import Navigator from "@/component/navigator";
import Footer from "@/component/footer";
import React, { useState } from "react";
import { useWhitePaperStore } from "@/store/whitePaperStore";
import { whitePaperStoreInterface } from "@/component/Interface/talents";
import { useDownloadWhitePaper } from "@/component/Hooks/whitePaperHooks";
import { toast } from "react-toastify";
import LoadingSpinner from "@/component/loadingSpinner";
import Link from "next/link";



const IndividualWhitePaper =()=>{
const selectedWhitePaper = useWhitePaperStore((state: whitePaperStoreInterface) => state.selectedWhitePaper);
const mutation = useDownloadWhitePaper()
const [loading,setLoading] = useState <boolean> (false)

const [formData,setFormData] = useState({
    "first_name": "",
    "last_name": "",
    "company_type": "",
    "company": "",
    "email": "",
    "id": ""
}) 



const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{
    const {value,name} = e.target

    setFormData((prev)=>{
       return {...prev,[name]:value}
    })
}


    const hanldeSubmit = async function(){
          try{
            setLoading(true)
            formData.id = String(selectedWhitePaper?.id)
            const response = await mutation.mutateAsync(formData)
            toast.success(response.message)
          } catch (error: unknown) {
                if (error instanceof Error) {
                    toast.error(error.message);
                  } else {
                    // Handle case when error is not an Error object
                    toast.error('An unknown error occurred');
                  }
            }finally{
                setLoading(false)
            }
           
    }

    return(
        <Box>
            <Navigator />
                           {/* section 1 */}
                           <Box
                            maxWidth="2000px"
                            bg={'#0D0F3A'}
                            mx="auto"
                            textColor="white" // Change the text color if needed.
                            padding={{
                            lg: "1.5rem 5rem",
                            md: "1.5rem 2rem",
                            sm: "1rem",
                            base: "1rem",
                            }}
                        >
                        <Box>   
                                <Heading textAlign={'center'} m={'3rem'} fontWeight={'500'}>{selectedWhitePaper?.title}</Heading>
                        </Box>
               </Box> 
            {/* section 1 */}

            {/* section 2 */}
                <Box
                    maxWidth="2000px"
                    mx="auto"
                    padding={{
                    lg: "1.5rem 5rem",
                    md: "1.5rem 2rem",
                    sm: "1rem",
                    base: "1rem",
                    }}
                >
                    <Flex flexDir={{base:'column-reverse',lg:'row'}} alignItems={'center'}gap={'2rem'}>
                            <Box w={{base:'100%',lg:'30%'}}>
                            <Image alt="Media" src={selectedWhitePaper?.image} />
                            </Box>
                            <Box w={{base:'100%',lg:'70%'}}>
                                { selectedWhitePaper?.description &&
                                   (<Text   dangerouslySetInnerHTML={{ __html: selectedWhitePaper?.description }} />  )
                                }
                            <Link href="#reg-form"> <Button  _hover={{ bg: "#2E3192" }} width={'fit-content'} m={'2rem auto'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Get Whitepaper </Button>   </Link>           
                            </Box>
                    </Flex>
                </Box>
            {/* section 2 */}

            {/* section 3 */}
            <Box
                    maxWidth="2000px"
                    mx="auto"
                    padding={{
                    lg: "1.5rem 5rem",
                    md: "1.5rem 2rem",
                    sm: "1rem",
                    base: "1rem",
                    }}
                >
                          <Flex  mt={'3rem'}>
                <Box id="reg-form" mx={'auto'} pos={'relative'}  p={5} bg={'#FAFAFA'} borderRadius={'4px'} w={{base:'100%',lg:'80%'}}>
         
                    <Heading m={{lg:'3rem auto'}} textAlign={'center'} fontSize={'28px'} color={'#2E3192'}> Download Whitepaper </Heading>
                     <LoadingSpinner showLoadingSpinner={loading} />
                            <Flex  gap={'3rem'} mt={'3rem'} flexDir={{base:'column',lg:'row'}}>
                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>First Name</FormLabel></Text>
                                            <Input onChange={handleChange} name="first_name" h={'60px'} placeholder="First Name" />
                                    </FormControl>

                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>Last Name</FormLabel></Text>
                                            <Input onChange={handleChange} name="last_name" h={'60px'} placeholder="Last Name" />
                                    </FormControl>
                            </Flex>
                            <Flex gap={'3rem'} mt={'3rem'} flexDir={{base:'column',lg:'row'}}>
                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>Company Type</FormLabel></Text>
                                        <Select 
                                            h={'60px'}
                                            placeholder="Select company type"
                                            name="company_type"
                                            onChange={handleChange}
                                        >
                                                       <option value="exploration-production">Exploration & Production</option>
                                                        <option value="oilfield-services-equipment">General Oilfield Services & Equipment</option>
                                                        <option value="engineering-technical-services">Engineering & Technical Services</option>
                                                        <option value="drilling-well-services">Drilling & Well Services</option>
                                                        <option value="pipeline-infrastructure">Pipeline & Infrastructure</option>
                                                        <option value="energy-consulting-project-management">Energy Consulting & Project Management</option>
                                                        <option value="environmental-safety-services">Environmental & Safety Services</option>
                                                        <option value="other">Other</option>
                                        </Select>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <Text fontWeight={'500'} ><FormLabel>Company Name</FormLabel></Text>
                                        <Input onChange={handleChange} name="company" h={'60px'} placeholder="Enter company name" />
                                    </FormControl>
                            </Flex>
                            <Flex gap={'3rem'} mt={'3rem'} flexDir={{base:'column',lg:'row'}}>
                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>Work Email</FormLabel></Text>
                                            <Input onChange={handleChange} name="email" h={'60px'} placeholder="Work Email" />
                                    </FormControl>
                            </Flex>
                          
                            <Flex>
                              <Button onClick={hanldeSubmit} _hover={{ bg: "#2E3192" }} width={'fit-content'} mx={'auto'} m={'3rem auto'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Submit Request</Button>
                            </Flex>                       

                </Box>
        </Flex>
            </Box>        

            {/* section 3 */}
            <Footer />
        </Box>
    )


}


export default IndividualWhitePaper