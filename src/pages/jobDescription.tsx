import { Box ,Flex,Heading,Wrap,FormControl,FormLabel,Text,Button,Image,SimpleGrid,Icon,useColorModeValue,InputGroup,InputRightElement,IconButton,Input} from "@chakra-ui/react";
import Navigator from "@/component/navigator";
import Footer from "@/component/footer";
import AdsComponent from "@/component/adsComponent";


export default function JobDescription (){
    return(
        <Box>
            <Navigator />
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
                       <Flex flexDir={{lg:'row',base:'column'}} justifyContent={'space-between'}>
                         <Box w={{lg:'70%',base:'100%'}} bg='red'>

                         </Box>
                         <Box w={{lg:'25%',base:'100%'}} bg='blue' display={"flex"} flexDir={'column'} flexDirection={'column'} alignItems={'center'} >
                            <AdsComponent link="#" imageUrl="rigzone.png" />
                         </Box>
                       </Flex>
                    </Box>
                    {/* section 2 */}


            <Footer />
        </Box>
    )
}