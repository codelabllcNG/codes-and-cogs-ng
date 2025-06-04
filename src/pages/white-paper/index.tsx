import { Flex,Box,Text,Heading,Image,Link} from "@chakra-ui/react";
import Navigator from "@/component/navigator";
import Footer from "@/component/footer";
import { useState,useEffect } from "react";
import { useGetWhitePaper } from "@/component/Hooks/whitePaperHooks";
import { whitePaperInterface } from "@/component/Interface/form";
import { formatDateToMonthYear } from "@/component/utils";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useWhitePaperStore } from "@/store/whitePaperStore";
import { whitePaperStoreInterface } from "@/component/Interface/talents";
import { useRouter } from "next/router";
import LoadingSpinner from "@/component/loadingSpinner";


const WhitePaper =()=>{

    const [whitePapers,setWhitePapers] = useState<whitePaperInterface[]>()
    const {data,isLoading} = useGetWhitePaper()
    const editSelectedWhitePaper = useWhitePaperStore((state: whitePaperStoreInterface) => state.editSelectedWhitePaper);
    const router = useRouter()

    function handleRoute (whitepaper:whitePaperInterface){
       editSelectedWhitePaper(whitepaper)
       router.push(`/white-paper/${whitepaper.slug}`)
    }
    useEffect(()=>{
        setWhitePapers(data?.whitepapers)
    },[data])
    
    

    return(
        <Box>
            <Navigator />
                           {/* section 1 */}
                           <Box
                            maxWidth="2000px"
                            bgImage="url('wpsbg.svg')"
                            bgSize="cover" // Ensures the image covers the entire container.
                            bgPosition="center" // Centers the background image.
                            bgRepeat="no-repeat" // Prevents the background image from repeating.
                            mx="auto"
                            textColor="white" // Change the text color if needed.
                            padding={{
                            lg: "1.5rem 5rem",
                            md: "1.5rem 2rem",
                            sm: "1rem",
                            base: "1rem",
                            }}
                        >
                        <Box m={'12rem 0'} >   
                                
                                <Heading textAlign={'center'}  fontWeight={'500'}>Whitepaper</Heading>
                                <Text textAlign={'center'} mt={'1rem'} fontWeight={'500'}>Explore exclusive whitepapers from Codes and Cogs, featuring the latest oil and gas solutions <br/> and global talent connection discourse</Text>
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
            pos={'relative'}
            >
                <LoadingSpinner showLoadingSpinner={isLoading} />
                <Flex>
                 {whitePapers?.map((whitepaper)=>{
                    return(
                    <Box key={whitepaper.id} w={{lg:'30%',md:'30%', sm:'100%',base:'100%'}} borderRadius={'10px'} padding={'4px'} background={'rgba(237, 244, 255, 0.20)'} boxShadow={'0px 4.443px 16.663px 0px rgba(0, 0, 0, 0.08)'}>
                          <Image   w="100%" h="300px" objectFit="cover" src={whitepaper?.image} alt="" />
                          <Text mt={'1rem'} mb={'2rem'}>{formatDateToMonthYear(whitepaper.date)}</Text>
                          <Heading fontSize={'21px'}>{whitepaper.title}</Heading>
                          <Text mt={'1rem'}>{whitepaper.subtitle}</Text>
                          <Link display="flex" alignItems="center" mt={3} color="#2E3192" fontWeight="bold" onClick={()=>handleRoute(whitepaper)}> Read More <ArrowForwardIcon ml={1} /> </Link>
                    </Box>
                    )
                 })}
                 </Flex>
            </Box>
            
           {/* section 2 */}
           
            <Footer />
        </Box>
    )
}


export default WhitePaper