import { Flex,Box,Heading,Text,Image,Button } from "@chakra-ui/react";
import ProfileCard from "@/component/profileCard";
import HeaderAndFooter from "@/component/layout/HeaderAndFooter";




const ProfilePage =()=>{
    const imageData = [
        { name: 'Andy G', title: 'Managing Director', image: 'tra1.svg' },
        { name: 'Andy G', title: 'Managing Director', image: 'tra2.svg' },
        { name: 'Andy G', title: 'Managing Director', image: 'tra3.svg' },
        { name: 'Andy G', title: 'Managing Director', image: 'tra4.svg' },
      ];
      
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
                                <Heading textAlign={'center'} m={'1rem'} fontWeight={'500'}>Our Facilitators </Heading>
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
               <ProfileCard />
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
                                  <Heading fontWeight={'600'} color={'#2E3192'} mt={'1rem'} mb={'2rem'} fontSize={'28px'} textAlign={'center'}>EXPLORE MORE TRAINERS</Heading>
    
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
            {/* section 3 */}

            {/* section 4 */}
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
            {/* section 4 */}

            {/* section 5 */}
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
                                <Button  _hover={{ bg: "#2E3192" }} width={'fit-content'} m={'3rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Enroll Now </Button>
                                
                              </Box>
                </Box>
            {/* section 5 */}
     </HeaderAndFooter>
    )
}


export default ProfilePage