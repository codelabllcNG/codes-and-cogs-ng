import { Flex,Box,Text,Image,Heading,Button } from "@chakra-ui/react";
import Navigator from "@/component/navigator";
import Footer from "@/component/footer";
import CertificationGrid from "@/component/cerifications";
import HeaderAndFooter from "@/component/layout/HeaderAndFooter";



const certificationPage = ()=>{
    const imageData = [
        { name: 'Andy G', title: 'Managing Director', image: 'tra1.svg' },
        { name: 'Andy G', title: 'Managing Director', image: 'tra2.svg' },
        { name: 'Andy G', title: 'Managing Director', image: 'tra3.svg' },
        { name: 'Andy G', title: 'Managing Director', image: 'tra4.svg' },
     ];
      
    return(

        <HeaderAndFooter>
                      {/*section 1  */}
                    <Box
                            maxWidth="2000px"
                            bgImage="url('ctbg2.svg')"
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

                            <Flex flexDir={{base:'column',lg:'row'}} alignItems={'center'}>
                                <Box w={{sm:'100%',lg:'100%'}}>
                                    <Heading fontWeight={'500'} lineHeight={'70px'}>Advance Your Professional <br/>Journey with Our Certification<br /> Programs</Heading>
                                    <Text m={'2rem 0'}>Gain globally recognized qualifications to advance your career in the oil <br/> and gas industry</Text>
                                    <Button
                                        borderRadius="4px"
                                        px="24px"
                                        py="12px"
                                        textColor="white"
                                        bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
                                        boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"
                                        >
                                        Get White Paper
                                    </Button>
                                </Box>
                                <Box w={{sm:'100%',lg:'100%'}}>
                                    <Image src="ctv.svg"/>
                                </Box>
                            </Flex>
                        
                    </Box>


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
                          <CertificationGrid />
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
                            <Heading color={'#2E3192'} textAlign={'center'} fontSize={'28px'}>WHY INVEST IN OUR CERTIFICATION PROGRAMS</Heading>
                            <Flex flexDir={{sm:'column',lg:'row'}} mt="2rem">
                                <Box w={{lg:'50%',sm:'100%'}}>
                                  <Text mb={5}>Codes and Cogs offers certification programs that are globally recognized and trusted in the oil and gas industry. Our certifications are designed for professionals aiming to enhance their skills, improve their career prospects, and gain expertise in key oilfield and safety areas.</Text>
                                   <Box display={'flex'} flexDir={'column'} gap={'1rem'}>
                                        <Flex p={3} gap={2} alignItems={'center'} bg={'#F5F4F4'} borderRadius={'4px'} width={'fit-content'}>
                                            <Image src="checkic.svg" />
                                            <Text>Practical Knowledge</Text>
                                        </Flex>
                                        <Flex p={3} gap={2} alignItems={'center'} bg={'#F5F4F4'} borderRadius={'4px'} width={'fit-content'}>
                                            <Image src="checkic.svg" />
                                            <Text>Global Career oppurtunities</Text>
                                        </Flex>
                                        <Flex p={3} gap={2} alignItems={'center'} bg={'#F5F4F4'} borderRadius={'4px'} width={'fit-content'}>
                                            <Image src="checkic.svg" />
                                            <Text>Industry Recognized Credentials</Text>
                                        </Flex>
                                        <Flex p={3} gap={2} alignItems={'center'} bg={'#F5F4F4'} borderRadius={'4px'} width={'fit-content'}>
                                            <Image src="checkic.svg" />
                                            <Text>Highly Skilled Facilitators</Text>
                                        </Flex>
                                   </Box>
                                   <Button
                                   mt={'1rem'}
                                        borderRadius="4px"
                                        px="24px"
                                        py="12px"
                                        textColor="white"
                                        bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
                                        boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"
                                    >
                                        Get Certified
                                    </Button>
                                </Box>

                                <Box w={{lg:'50%',sm:'100%'}} display={'flex'} justifyContent={'flex-end'}>
                                          <Image src={'ctimg1.svg'} />
                                </Box>
                            </Flex>
                         
                     </Box>
                    {/* section 3 */}

                    {/* section 4 */}
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
                              <Heading fontWeight={'600'} color={'#2E3192'} mt={'1rem'} mb={'2rem'} fontSize={'28px'} textAlign={'center'}>MEET OUR LEAD TRAINERS</Heading>

                            <Flex 
                            gap="2rem" 
                            overflowX={{ base: 'auto', lg: 'visible' }}
                            flexWrap={{ base: 'nowrap', lg: 'wrap' }}
                            px={{ base: 4, lg: 0 }} // Add horizontal padding on mobile for better scroll
                            css={{
                                '&::-webkit-scrollbar': {
                                height: '6px',
                                },
                                '&::-webkit-scrollbar-track': {
                                background: '#f1f1f1',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                background: '#888',
                                borderRadius: '4px',
                                },
                            }}
                            >
                            {imageData.map((item, index) => (
                                <Flex
                                key={index}
                                flexDir="column"
                                position="relative"
                                minWidth={{ 
                                    base: "300px", // Fixed width for mobile scrolling
                                    md: "calc(50% - 16px)", 
                                    lg: "calc(20% - 16px)"
                                }}
                                flexShrink={0} // Prevent items from shrinking
                                mb={4} // Add bottom margin for wrapped items on desktop
                                >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    w="100%"
                                    h={{ base: "400px", md: "500px" }} // Responsive height
                                    objectFit="cover"
                                    borderRadius="md" // Add border radius for better appearance
                                />
                                
                                {/* Gradient Overlay */}
                                <Flex
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    w="100%"
                                    h="100%"
                                    bg="linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 100%)"
                                    zIndex={1}
                                    borderRadius="md" // Match image border radius
                                />
                                
                                {/* Text Overlay */}
                                <Box
                                    position="absolute"
                                    bottom="5%"
                                    left="3%"
                                    color="white"
                                    zIndex={2}
                                    p={2}
                                    maxW="90%"
                                >
                                    <Heading fontSize={{ base: "18px", md: "20px" }} fontWeight="500">
                                    {item.name}
                                    </Heading>
                                    <Text fontSize={{ base: "14px", md: "16px" }}>{item.title}</Text>
                                </Box>
                                </Flex>
                            ))}
                            </Flex>
                    </Box>    
                    {/* section 4 */}

                    {/* section 5 */}
                    <Box
                            maxWidth="2000px"
                            mx="auto"
                            padding={{
                            lg: "1.5rem 5rem",
                            md: "1.5rem 2rem",
                            sm: "1rem",
                            base: "1rem",
                            }}
                            bg={'#EDF2FC'}
                        >

                            <Flex>
                                <Image mx={'auto'} src="comingsoon.svg" />
                            </Flex>

                            <Flex alignItems={'center'} m={'2rem 0'}>
                                <Box w={{base:'100%',lg:'50%'}} display={'flex'} >
                                    <Image mx={'auto'} src="csimg.svg" />
                                </Box>
                                <Box w={{base:'100%',lg:'50%'}}>
                                    <Text>Cohort 1 of our 2025 certification program is drawing close. This time, the program is curated to cover comprehensive and hands-on trainings  on slickline operations, HSE, IWCF, BHP Well Testing, and Data Acquisition. </Text>
                                    <Button
                                        borderRadius="4px"
                                        px="24px"
                                        py="12px"
                                        textColor="white"
                                        bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
                                        boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"
                                        mt={'2rem'}
                                    >
                                        Explore Details
                                    </Button>
                                </Box>
                            </Flex>

                    </Box>
                    {/* section 5 */}
                    
                    {/* section 6 */}
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
                            How Our Trainings Works
                            </Heading>

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
                        <Heading m={'1rem 0'} as="h3" size="md" mb={3} fontWeight={'500'} >
                        Choose Program
                        </Heading>
                        <Text>
                        Explore our diverse courses and select the one tailored to your career goals.
                        </Text>
                    </Box>

                    <Box
                        flex="1"
                        p={'1rem'}
                        width={{base:'100%',sm:'100%',md:'20%', lg:'30%'}}
                        textAlign="center"
                    >
                        <Heading m={'1rem'} as="h3" size="md" mb={3} fontWeight={'500'} >
                        Enroll
                        </Heading>
                        <Text>
                        Sign up quickly through our intuitive registration system and gain instant access.
                        </Text>
                    </Box>

                    <Box
                        flex="1"
                        p={'1rem'}
                        width={{base:'100%',sm:'100%',md:'20%', lg:'30%'}}
                        textAlign="center"
                    >
                        <Heading m={'1rem'} as="h3" size="md" mb={3} fontWeight={'500'} >
                        Learn and Get Certified
                        </Heading>
                        <Text>
                        Learn from experts, complete assessments, and earn recognized certifications.
                        </Text>
                    </Box>
                    </Flex>
                        </Box>
                    {/* section 6 */}

                    {/* section 7 */}
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
                       Get Certified and Take the Next Step in Your Career
                    </Heading>
                    <Text fontSize="lg" mb={5}>
                      Enroll in Industry-Leading Certification Programs and Transform Your Career in Oil and Gas.
                    </Text>
                    <Button width={'fit-content'} m={'3rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Enroll Now </Button>
                    
                  </Box>
                  </Box>
                    {/* section 7 */}
</HeaderAndFooter>
    )
}

export default certificationPage