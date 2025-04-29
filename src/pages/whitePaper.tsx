import { Flex,Box,Text,Heading,Image,Button,FormControl,FormLabel,Input,Select} from "@chakra-ui/react";
import Navigator from "@/component/navigator";
import Footer from "@/component/footer";


const WhitePaper =()=>{

    return(
        <Box>
            <Navigator />
                           {/* section 1 */}
                           <Box
                            maxWidth="2000px"
                            bgImage="url('wpbg.svg')"
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
                        <Box  >   
                                
                                <Heading textAlign={'center'} m={'3rem'} fontSize={'18px'} fontWeight={'500'}>White Paper</Heading>
                                <Heading textAlign={'center'} m={'3rem'} fontWeight={'500'}>AI-Based PCE Testing Services</Heading>
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
                    <Flex flexDir={{base:'column-reverse',lg:'row'}} alignItems={'center'}>
                            <Box w={{base:'100%',lg:'30%'}}>
                            <Image alt="Media" src="wp.svg" />
                            </Box>
                            <Box w={{base:'100%',lg:'70%'}}>
                            <Text>Over the years, in the upstream oil and gas industry, ensuring the integrity and functionality of Pressure Control Equipment (PCE) is critical to the safety of personnel, assets, and the environment during well intervention operations. </Text>
                            <Text mt={'2rem'}>This white paper introduces a proactive and comprehensive solution designed to inspect, pressure test, and function test PCEs daily, prior to well intervention activities. By leveraging fast and real-time data transmission and advanced monitoring techniques, this service mitigates risks, enhances safety, and optimizes operational efficiency.</Text>
                            <Button width={'fit-content'} m={'2rem auto'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Get White Paper </Button>              
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
                <Box mx={'auto'} p={5} bg={'#FAFAFA'} borderRadius={'4px'} w={{base:'100%',lg:'80%'}}>

                    <Heading m={{lg:'3rem auto'}} textAlign={'center'} fontSize={'28px'} color={'#2E3192'}> Download Whitepaper </Heading>

                            <Flex  gap={'3rem'} mt={'3rem'} flexDir={{base:'column',lg:'row'}}>
                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>First Name</FormLabel></Text>
                                            <Input h={'60px'} placeholder="First Name" />
                                    </FormControl>

                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>First Name</FormLabel></Text>
                                            <Input h={'60px'} placeholder="Last Name" />
                                    </FormControl>
                            </Flex>
                            <Flex gap={'3rem'} mt={'3rem'} flexDir={{base:'column',lg:'row'}}>
                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>Company Type</FormLabel></Text>
                                        <Select 
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
                            </Flex>
                            <Flex gap={'3rem'} mt={'3rem'} flexDir={{base:'column',lg:'row'}}>
                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>Work Email</FormLabel></Text>
                                            <Input h={'60px'} placeholder="First Name" />
                                    </FormControl>
                            </Flex>
                          
                            <Flex>
                              <Button width={'fit-content'} mx={'auto'} m={'3rem auto'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Submit Request</Button>
                            </Flex>                       



                </Box>
        </Flex>
            </Box>        

            {/* section 3 */}
            <Footer />
        </Box>
    )


}


export default WhitePaper