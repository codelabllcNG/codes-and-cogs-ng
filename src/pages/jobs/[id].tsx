import { Box ,Flex,Heading,Link,Text,Button,useDisclosure} from "@chakra-ui/react";
import AdsComponent from "@/component/adsComponent";
import { FaRegMessage } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import HeaderAndFooter from "@/component/layout/HeaderAndFooter";
import { useEffect,useState } from "react";
import { useGetJobByIdHook } from "@/component/Hooks/jobHooks";
import LoadingSpinner from "@/component/loadingSpinner";
import { timeAgo } from "@/component/utils";
import { JobInterface,JobTypeInterface } from "@/component/Interface/Jobs";
import RegistrationForm from "@/component/registerForm";
import EmailJobModal from "@/component/modal/emailModal";




export default function JobDescription (){
    const router = useRouter()
    const id = router.query.id
    const {data,isLoading,isRefetching,refetch} = useGetJobByIdHook(id) 
    const [job,setJob] = useState<JobInterface>()
    const [active,setActive] = useState('main-page')
    const { onOpen: onShareOpen} = useDisclosure();
    const { isOpen: isEmailOpen, onOpen: onEmailOpen, onClose: onEmailClose } = useDisclosure();

    useEffect(()=>{
      if(id) {
        refetch()
      }
    },[id])


    useEffect(()=>{
       console.log(data?.listings[0] )
       setJob(data?.listings[0])
    },[data])

    return(
        <HeaderAndFooter>
            
                    {/* section 1 */}
                    <Box
                                    maxWidth="2000px"
                                    textColor="white" // Change the text color if needed.
                                    padding={{
                                    lg: "1.5rem 5rem",
                                    md: "1.5rem 2rem",
                                    sm: "1rem",
                                    base: "1rem",
                                    }}
                                    bg={'#0D0F3A'}
                                    mx={'auto'}
                                >
                                <Box>   
                                        <Heading textAlign={'center'} m={'3rem'} fontWeight={'500'}>Job Description</Heading>
                                </Box>


                    </Box> 
                    {/* section 1 */}


                    {/* section 2 */}
                    <Box
                        maxWidth="2000px"
                        padding={{
                        lg: "1.5rem 5rem",
                        md: "1.5rem 2rem",
                        sm: "1rem",
                        base: "1rem",
                        }}
                        mx={'auto'}
                        pos={'relative'}
                        display={active==='main-page'? 'block' :'none'}
                    >
                        <LoadingSpinner showLoadingSpinner={isLoading || isRefetching} />
                       <Flex flexDir={{lg:'row',base:'column'}} justifyContent={'space-between'}>
                         <Box w={{lg:'70%',base:'100%'}} >
                               <Box mt={{base:'3rem'}} border={'1px solid rgba(0, 0, 0, 0.25)'} p={'2rem'} borderRadius={'4px'}>
                                    {/* header */}
                                    <Flex justifyContent={'space-between'} flexDir={{lg:'row',base:'column'}} alignItems={{lg:'center',base:'flex-start'}}>
                                        <Heading fontSize={'20px'} fontWeight={'600'}>{job?.title}</Heading>
                                        <Text fontSize={'14px'} color={'#656060'}> {job?.applicants} Applicant </Text>
                                    </Flex>   
                                    {/* header */}
                                    {job?.location.map((loc,index:number)=>(
                                    <Text key={index} mt={'2rem'} fontSize={'14px'} color={'#656060'}>Location: {loc?.name}</Text> 
                                    ))}
                                    <Text mb={'2rem'} fontSize={'14px'} color={'#656060'}>{timeAgo(String(job?.date))}</Text> 
                                    <Flex mb={'2rem'} gap={'2rem'}>
                                        {job?.job_type.map((jobType:JobTypeInterface,index:number)=>{
                                            return(
                                                <Flex key={index}  p={2} borderRadius={'12px'}  bg={'rgba(136, 136, 136, 0.10)'} fontSize={['xs', 'sm']} >{jobType.name}</Flex>
                                            )
                                        })}
                                       
                                    </Flex>  

                                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                                       <Button onClick={()=>setActive('registration-form')} borderRadius="4px" px="24px" py="12px" textColor="white" bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)">Apply Now</Button>
                                       <Flex gap={'1rem'}> <FaRegMessage onClick={onEmailOpen} fontSize={'30px'} color="#2E3192" /> <IoShareSocialOutline onClick={onShareOpen} fontSize={'30px'} color="#2E3192" /></Flex>
                                    </Flex>  
                               </Box>
                               <Box mt={{base:'3rem'}} border={'1px solid rgba(0, 0, 0, 0.25)'} p={'2rem'} borderRadius={'4px'}>
                                    <Box dangerouslySetInnerHTML={{__html:job?.details ? job?.details :''}}></Box>
                                    <Flex mt={'1rem'} alignItems={'center'} justifyContent={'space-between'} pt={'2rem'}  borderTop={'1px solid rgba(136, 136, 136, 0.80);'}>
                                       <Button onClick={()=>setActive('registration-form')} borderRadius="4px" px="24px" py="12px" textColor="white" bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)">Apply Now</Button>
                                       <Flex gap={'1rem'}> <FaRegMessage onClick={onEmailOpen} fontSize={'30px'} color="#2E3192" /> <IoShareSocialOutline  onClick={onShareOpen} fontSize={'30px'} color="#2E3192" /></Flex>
                                    </Flex> 
                                   
                                </Box> 

                               
                         </Box>

                         <Box w={{lg:'25%',base:'100%'}} mt={{base:'3rem'}}  display={"flex"} flexDir={'column'} flexDirection={'column'} alignItems={'center'} >
                            <AdsComponent link="#"  imageUrl="/rigzone.png" />


                            {job?.similar_listings.map((job:JobInterface,index:number)=>{
                                return(
                                    <Box key={index} mt={'2rem'} border={'1px solid rgba(0, 0, 0, 0.25)'} borderRadius={'4px'} width={'100%'}>
                                    <Box p={'1rem'}>
                                      <Heading fontSize={'20px'} fontWeight={'600'}>{job.title}</Heading>
                                      <Flex alignItems={'center'} gap={'1rem'} mt={'1rem'}>
                                        <IoLocationOutline fontSize={'25px'} />
                                        {job?.location.map((loc,index:number)=>(
                                        <Heading key={index} fontWeight={'500'} fontSize={'15px'}>{loc.name}</Heading>

                                        ))}
                                      </Flex>
                                      <Flex m={'1rem 0'} gap={'2rem'}>
                                         {job.job_type.map((jobType:JobTypeInterface,index:number)=>{
                                            return(
                                              <Flex key={index}   p={2} borderRadius={'12px'}  bg={'rgba(136, 136, 136, 0.10)'} fontSize={['xs', 'sm']} >{jobType.name}</Flex>
                                            )
                                         })}
                                       </Flex>  
                                    </Box>
                                    <Box p={'1rem'}  borderTop={'1px dotted rgba(136, 136, 136, 0.80);'} > 
                                       <Flex justifyContent={'space-between'} >
                                           <Heading fontWeight={'500'} fontSize={'13px'}>{timeAgo(job.date)}</Heading>
                                           <Heading fontWeight={'500'} fontSize={'13px'}>{job.applicants} Applicant</Heading>
                                       </Flex>
                                    </Box>
                                   </Box>
                                )
                            })}

                          

                      

                            <Box mt={'2rem'} bg='#F0F0F0;' w='100%' p={3}>
                                <Heading fontSize={'22px'} fontWeight={'500'} >List Your Opening </Heading>
                                <Text color={'#A3A2A2'}>Publish your job on Codes and Cogs</Text>
                                <Link
                                    display="flex"
                                    alignItems="center"
                                    mt={3}
                                    color="#2E3192"
                                    fontWeight="bold"
                                    href="#"
                                    onClick={()=>router.push('/openings')}
                                >
                                    Learn More <ArrowForwardIcon ml={1} />
                                </Link>
                            </Box>

                            <Box mt={'2rem'} bg='#F0F0F0;' w='100%' p={3}>
                                <Heading fontSize={'22px'} fontWeight={'500'} > Become A Consultant</Heading>
                                <Text color={'#A3A2A2'}>Get listed on our platform</Text>
                                <Link
                                    display="flex"
                                    alignItems="center"
                                    mt={3}
                                    color="#2E3192"
                                    fontWeight="bold"
                                    href="#"
                                    onClick={()=>router.push('/talents/consultant')}
                                >
                                    Learn More <ArrowForwardIcon ml={1} />
                                </Link>
                            </Box>

                         </Box>
                       </Flex>
                    </Box>
                    {/* section 2 */}

                   
                    {/* Apply Section */}
                    <Box display={active==='registration-form'? 'block' :'none' } >
                         <RegistrationForm listing_id={job?.id ? String(job?.id) : ''} />
                    </Box>

                    {/* Apply Section */}

                    {/* email modal */}
                        <EmailJobModal isOpen={isEmailOpen} onClose={onEmailClose}/>
                    {/* email modal */}

                    {/* share Job */}
                    {/* <ShareJobModal isOpen={isShareOpen} onClose={onShareClose} /> */}
                    {/* share Job */}

        </HeaderAndFooter>
    )
}