import { Flex,Box,Heading,Text,Image,Button,VStack,Wrap,Grid,GridItem, } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useGetTalentHook } from "@/component/Hooks/talentsHook";
import { useEffect,useState } from "react";
import { TalentInterface } from "@/component/Interface/talents";
import { GoBriefcase } from "react-icons/go";
import { IoTime } from "react-icons/io5";
import {useTalentsStore} from "@/store/talentStore";
import { TalentStoreInterface } from "@/component/Interface/talents";
import StarRating from "@/component/starRating";
import LoadingSpinner from "@/component/loadingSpinner";
import HeaderAndFooter from "@/component/layout/HeaderAndFooter";


const TalentProfile =()=>{
    const router = useRouter()
    const [talents,setTalents] = useState<TalentInterface[]>()
    const talent = useTalentsStore((state:TalentStoreInterface)=>state.selectedTalent)
    const editSelectedTalent = useTalentsStore((state:TalentStoreInterface)=>state.editSelectedTalent)
    const [cat,setCat] =useState<string>('')
    const { data, isLoading } = useGetTalentHook({  limit : '8' ,cat})

    const viewProfile = function(data:TalentInterface){
      editSelectedTalent(data)
      router.push(`/talents/bio`)
    
    }


    useEffect(()=>{
        
        setTalents(data?.talents)
        setCat(`${talent?.category[0]?.id}`)
 
    },[cat,data,talent])
   
      
    return (
<HeaderAndFooter>

            {/* section 1 */}
            <Box
                maxWidth="2000px"
                mx="auto"
                bg="#0D0F3A" // Change the text color if needed.
                color={'white'}
                padding={{
                lg: "3rem 5rem",
                md: "1.5rem 2rem",
                sm: "1rem",
                base: "1rem",
                }}
                >
                        <Box  >   
                                <Heading textAlign={'center'} m={'1rem'} fontWeight={'500'}>BIO</Heading>
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
                   <Flex gap={'2rem'} alignItems={'center'} flexDir={{lg:'row',md:'column',sm:'column',base:'column'}}>
                       <Box w={{base:'100%',lg:'40%'}}>
                           <Flex justifyContent={'flex-end'} pos={'relative'}>
                            <Box bg={'linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);'} pos={'absolute'} bottom={'0'} left={'0'} w={'100%'} h={'50%'} ></Box>
                               <Box pos={'absolute'}p={5} bottom={'0'} left={'0'}>
                                  <Heading fontSize={'20px'} fontWeight={'500'} color={'white'} mb={'1rem'}>Code and Cogs Rating</Heading>
                                  <StarRating rating={Number(talent?.rating)} />
                               </Box>
                               <Image alt="Media" w={'full'} src={talent?.image} />
                           </Flex>
                       </Box>  
                    
                       <Box w={{base:'100%',lg:'60%'}}>
                           <VStack align="start" spacing={4}>
                           <Text fontSize="2xl" fontWeight="bold">
                               {talent?.name}
                           </Text>
                   
                           <Flex gap={'1rem'} alignItems={'center'} >
                               <GoBriefcase color="#2E3192" />
                               {talent?.role}
                           </Flex>
               
                           <Flex gap={'1rem'} alignItems={'center'} >
                           <IoTime color="#2E3192" />
                             {talent?.years_of_experience} years of experience
                           </Flex>
                   
                           <Heading fontSize="lg" fontWeight="semibold" mt={4}>
                               BIO
                           </Heading>
                           <Text>
                               {talent?.description}
                           </Text>
                   
                           <Heading fontSize="lg" fontWeight="semibold">
                               EXPERTISE
                           </Heading>
                           
                           <Wrap spacing={2}>
                               {talent?.expertises.map((skill, skillIndex) => (
                                       <Flex 
                                       key={skillIndex} 
                                       p={2} 
                                       borderRadius={'12px'} 
                                       border={'0.8px solid #A3A2A2'}
                                       fontSize={['xs', 'sm']}
                                       >
                                       {skill?.name}
                                       </Flex>
                                   ))}
                           </Wrap>

                           <Heading fontSize="lg" fontWeight="semibold">
                             CERTIFICATIONS/CREDENTIALS
                           </Heading>
                           
                           <Wrap spacing={2}>
                             
                               {talent?.certifications_credentials.map((certificate, certificateIndex) => (
                                   <Image alt="Media" width={'50px'} key={certificateIndex} height={'50px'} src={certificate?.name} />
                                   ))}
                           </Wrap>
                           <Button  _hover={{ bg: "#2E3192" }} onClick={()=>router.push('/talents/hire')} width={'fit-content'} m={'3rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Hire {talent?.name.split(' ')[0]}</Button>
                                                                
               
                           </VStack>
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
                                  <Heading fontWeight={'600'} color={'#2E3192'} mt={'1rem'} mb={'2rem'} fontSize={'28px'} textAlign={'center'}>EXPLORE MORE {talent?.category[0]?.name.toLocaleUpperCase()}</Heading>
                                                    <Flex mt={'2rem'} flexDirection={['column', 'column', 'row']} position={'relative'}>
                                                        <LoadingSpinner showLoadingSpinner={isLoading} />
                                                    <Box w={['100%', '100%', '100%']} p={[2, 4]}>
                                                        <Grid 
                                                        templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} 
                                                        gap={[4, 6]}
                                                        >
                                                        {talents?.map((talent, index) => (
                                                            <GridItem key={index} w="100%">
                                                            <Box w={'100%'} boxShadow={'lg'} p={2}>
                                                                <Image alt="Media" w={'100%'} src={talent.image} />
                                                                <Heading m={'0.2rem 0'} fontSize={['md', '20px']} color={'#333'}>
                                                                {talent?.name}
                                                                </Heading>
                                                                <Text m={'0.2rem 0'} fontSize={['sm', '16px']} color={'#2E3192'}>
                                                                {talent?.role}
                                                                </Text>
                                                                <Text fontSize={['xs', '14px']} color={'#333'}>Expertise</Text>
                                                                <Flex mt={3} wrap="wrap" gap={2}>
                                                                {talent?.expertises?.map((skill, skillIndex) => (
                                                                    <Flex 
                                                                    key={skillIndex} 
                                                                    p={2} 
                                                                    borderRadius={'12px'} 
                                                                    border={'0.8px solid #A3A2A2'}
                                                                    fontSize={['xs', 'sm']}
                                                                    >
                                                                    {skill?.name}
                                                                    </Flex>
                                                                ))}
                                                                </Flex>
                                                
                                                                <Button  _hover={{ bg: "#2E3192" }} onClick={()=>viewProfile(talent)} width={'fit-content'} m={'3rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> View Profile</Button>
                                                                    
                                                            </Box>
                                                            </GridItem>
                                                        ))}
                                                        </Grid> 
                                                        </Box>                                      
                                                    </Flex>
              </Box>   
            {/* section 3 */}
  </HeaderAndFooter>
    )
}


export default TalentProfile