import { Flex,Box,Text,Heading,Image,Button } from "@chakra-ui/react";
import HeaderAndFooter from "@/component/layout/HeaderAndFooter";



const ThruTubing = ()=>{
    return(
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
                                <Heading textAlign={'center'} m={'1rem'} fontWeight={'500'}> Thru Tubing Re-Entry Solutions</Heading>
                                <Text textAlign={'center'}> Unlocking Cost-Effective, Efficient Solutions for Marginal Field Challenges</Text>
                        </Box>
              </Box> 
              {/* section 2 */}
              <Box
                maxWidth="2000px"
                mx="auto"
                padding={{
                lg: "5rem 5rem",
                md: "1.5rem 2rem",
                sm: "1rem",
                base: "1rem",
                }}
                >
                    <Text textAlign={'center'}>When dealing with marginal fields, operators face unique challenges such as low reservoir pressure, sand encroachment, and failures in gravel packs or screens. Our Thru Tubing Re-Entry Solutions offer the perfect balance of efficiency, precision, and affordability to keep your wells productive and profitable</Text>
                     
                            <Flex
                               gap={"5rem"}
                               mt={"5rem"}
                               flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }}
                               justifyContent={"center"}
                             >
                                    <Box
                                        borderRadius="md"
                                        boxShadow="sm"
                                        borderColor="gray.200"
                                        w={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }}
                                    >
                                        <Image alt="Media" width={"100%"} src="Tt1.svg" />
                            
                                        <Heading mt={"1rem"} size="md">
                                        Low Reservoir Pressure Mitigation
                                        </Heading>
                            
                                        <Text mt={"2rem"}>
                                        We utilize advanced Bottom Hole Pressure (BHP) surveys to gather critical reservoir information. By integrating AI and Machine Learning, we ensure data accuracy...
                                        </Text>
                            
                                    </Box>
                                    <Box
                                        borderRadius="md"
                                        boxShadow="sm"
                                        borderColor="gray.200"
                                        w={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }}
                                    >
                                        <Image alt="Media" width={"100%"} src="Wi2.svg" />
                            
                                        <Heading mt={"1rem"} size="md">
                                        Sand Encroachment Management
                                        </Heading>
                            
                                        <Text mt={"2rem"}>
                                        Our real-time downhole camera technology provides visualisation of wellbore conditions. Powered by AI-enhanced image processing, the system ensures quicker..
                                        </Text>
                                    </Box>
                            </Flex>
                            <Flex
                               gap={"5rem"}
                               mt={"5rem"}
                               flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }}
                               justifyContent={"center"}
                             >
                               <Box
                                 borderRadius="md"
                                 boxShadow="sm"
                                 borderColor="gray.200"
                                 w={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }}
                               >
                                 <Image alt="Media" width={"100%"} src="Wi3.svg" />
                     
                                 <Heading mt={"1rem"} size="md">
                                       Failed Screen or Gravel Pack Solutions
                                 </Heading>
                     
                                 <Text mt={"2rem"}>
                                 Our surface well testing services complement downhole insights by providing a comprehensive analysis of well performance. Using smart data analytics, we deliver...
                                 </Text>
                     
                               </Box>
                               <Box
                                 borderRadius="md"
                                 boxShadow="sm"
                                 borderColor="gray.200"
                                 w={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }}
                               >
                                 <Image alt="Media" width={"100%"} src="Wi1.svg" />
                     
                                 <Heading mt={"1rem"} size="md">
                                 Rejuvenation of Mature or Shut-In Wells
                                 </Heading>
                     
                                 <Text mt={"2rem"}>
                                 We utilize advanced Bottom Hole Pressure (BHP) surveys to gather critical reservoir information. By integrating AI and Machine Learning, we ensure data accuracy, ...
                                 </Text>
                               </Box>
                            </Flex>
                            <Flex
                               gap={"5rem"}
                               mt={"5rem"}
                               flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }}
                               justifyContent={"center"}
                             >
                               <Box
                                 borderRadius="md"
                                 boxShadow="sm"
                                 borderColor="gray.200"
                                 w={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }}
                               >
                                 <Image alt="Media" width={"100%"} src="Wi3.svg" />
                     
                                 <Heading mt={"1rem"} size="md">
                                 Plugging and Zonal Isolation
                                 </Heading>
                     
                                 <Text mt={"2rem"}>
                                 Our surface well testing services complement downhole insights by providing a comprehensive analysis of well performance. Using smart data analytics, we deliver...
                                 </Text>
                     
                               </Box>
                               <Box
                                 borderRadius="md"
                                 boxShadow="sm"
                                 borderColor="gray.200"
                                 w={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }}
                               >
                                 <Image alt="Media" width={"100%"} src="Wi1.svg" />
                     
                                 <Heading mt={"1rem"} size="md">
                                 Wellbore Cleanouts
                                 </Heading>
                     
                                 <Text mt={"2rem"}>
                                 We utilize advanced Bottom Hole Pressure (BHP) surveys to gather critical reservoir information. By integrating AI and Machine Learning, we ensure data accuracy, ...
                                 </Text>
                               </Box>
                            </Flex>
              </Box>   
           {/* section 3 */}
              <Box
                maxWidth="2000px"
                bgImage="url('Footer.svg')"
                bgSize="cover" // Ensures the image covers the entire container.
                bgPosition="center" // Centers the background image.
                bgRepeat="no-repeat" // Prevents the background image from repeating.
                mx="auto"
                textColor="white" // Change the text color if needed.
                padding={{
                  lg: "5rem 5rem",
                  md: "1.5rem 2rem",
                  sm: "1rem",
                  base: "1rem",
                }}
              >
        <Heading mb={2} fontWeight={'500'} textAlign={'center'}>
          Why Choose Codes and Cogs?
        </Heading>
        <Text textAlign={'center'}  m={'1rem'}>
          Unmatched Expertise, Innovation, and Global Oilfield Solutions
          Tailored for Success
        </Text>

        {/* Three Columns */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={'2rem'}
          justifyContent={'center'}
          mt={'4rem'}
          color={'white'}
          width={'100%'}
        >
          <Box
            flex="1"
            p={'1rem'}
            width={{base:'100%',sm:'100%',md:'20%', lg:'30%'}}
            textAlign="center"
          >
            <Image alt="Media" mx={'auto'} src="icon1.svg" />
            <Heading m={'1rem 0'} as="h3" size="md" mb={3} fontWeight={'500'} >
            AI-Driven Accuracy
            </Heading>
            <Text>
            Focuses on designing, programming, and managing Supervisory Control and Data Acquisition systems.
            </Text>
          </Box>

          <Box
            flex="1"
            p={'1rem'}
            width={{base:'100%',sm:'100%',md:'20%', lg:'30%'}}
            textAlign="center"
          >
              <Image alt="Media" mx={'auto'} src="icon2.svg" />
            <Heading m={'1rem'} as="h3" size="md" mb={3} fontWeight={'500'} >
            Real-Time Insights
            </Heading>
            <Text>
            Real-time data feeds and intelligent analytics provide actionable insights at a speed that minimizes downtime and keeps your operations efficient.
            </Text>
          </Box>

          <Box
            flex="1"
            p={'1rem'}
            width={{base:'100%',sm:'100%',md:'20%', lg:'30%'}}
            textAlign="center"
          >
              <Image alt="Media" mx={'auto'} src="icon3.svg" />
            <Heading m={'1rem'} as="h3" size="md" mb={3} fontWeight={'500'} >
            AI-Driven Accuracy
            </Heading>
            <Text>
            By integrating AI into our workflows, we eliminate the risks of human error and deliver precise, reliable data to empower your decision-making
            </Text>
          </Box>
        </Flex>
              </Box>
                {/* section 4 */}
              <Box
                maxWidth="2000px"
                bgImage="url('WhiteBg.svg')"
                bgSize="cover" // Ensures the image covers the entire container.
                bgPosition="center" // Centers the background image.
                bgRepeat="no-repeat" // Prevents the background image from repeating.
                mx="auto"
                textColor="#2E3192" // Change the text color if needed.
                padding={{
                  lg: "5rem 5rem",
                  md: "1.5rem 2rem",
                  sm: "1rem",
                  base: "1rem",
                }}
              >
                  <Box textAlign="center" mb={{ base: 6, md: 8 }}>
                    <Heading fontWeight={'600'} fontSize={{base:'25px',sm:'25px',md:'36px',lg:'36px',}} mb={3} >
                      Your Partner in High-Performance Oilfield Services
                    </Heading>
                    <Text fontSize="lg" mb={5}>
                      Join industry leaders in harnessing top-tier solutions for every
                      aspect of your projects.
                    </Text>
                    <Button width={'fit-content'} m={'3rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Contact Us </Button>
                    
                  </Box>
              </Box>

    </HeaderAndFooter>
    )
}

export default ThruTubing