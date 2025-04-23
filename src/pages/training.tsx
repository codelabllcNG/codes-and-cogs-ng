import { Flex,Box,Heading,Text,Button,Image, } from "@chakra-ui/react";
import Navigator from "@/component/navigator";
import Footer from "@/component/footer";
import { useState } from "react";
import HeaderAndFooter from "@/component/layout/HeaderAndFooter";

const Training = ()=>{
    const equpimentData = [
        { name: 'Training Auditorium', title: 'Managing Director', image: 'tfe1.svg' },
        { name: 'Personal Protective Equipments (PPE)', title: 'Managing Director', image: 'tfe2.svg' },
        { name: 'Wellsite Tour Location', title: 'Managing Director', image: 'tfe3.svg' },
        { name: 'Patent-Pending Simulator' , title: 'Managing Director', image: 'tfe4.svg' },
      ];
      const [activeEqupiment,setActiveEqupiment] = useState('')

    const contentData =[
        {
          image: 'icon4.svg',
          title: 'Expert Instructors',
          description: 'You match our standards? Submit your details below.'
        },
        {
          image: 'icon5.svg',
          title: 'Wellsite Tour',
          description: 'You match our standards? Submit your details below.'
        },
        {
          image: 'icon6.svg',
          title: 'Listing on Job Board',
          description: 'You match our standards? Submit your details below.'
        }
      ]

    return(
            <HeaderAndFooter>
                {/*section 1  */}
                     <Box
                        maxWidth="2000px"
                        bgImage="url('Training.svg')"
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
                        <Box
                        m={{ lg: "12rem 0" }}
                    
                        >
                    <Heading fontWeight={'500'} textAlign="center" m="2rem 0">
                    Codes and Cogs Presents Cohort 1 <br />
                    Of Its 2025  
                    <Heading 
                    as="span"
                    textShadow=" 2.423px 4.845px 8.075px rgba(201, 203, 255, 0.55)"  // Dark shadow for white text
                    color="white"
                    fontWeight={'500'}
                    ml={2}
                    >
                    Certification Training Program
                    </Heading>
                    </Heading>;

                    </Box>
                    </Box>
                {/* section 1 */}

                {/* section 2 */}
                    <Box
                        maxWidth="2000px"
                        mx="auto"
                        padding={{
                        lg: "4.5rem 5rem",
                        md: "1.5rem 2rem",
                        sm: "1rem",
                        base: "1rem",
                        }}
                    >
                        <Heading color={'#2E3192'} textAlign={'center'} fontSize={'28px'}>ABOUT THE TRAINING</Heading>
                        <Flex flexDir={{base:'column',lg:'row'}} gap={'3rem'} mt="2rem">
                            <Box w={{lg:'50%',sm:'100%'}}>
                                <Text mb={5}> Participants, get ready to be equipped with oil and gas industry skills and recognised certifications. Taking place in Port Harcourt, Rivers State, this 3 weeks training offers the perfect blend of theoretical knowledge and hands-on practice in:</Text>
                                <Box display={'flex'} flexDir={'column'} gap={'1rem'}>
                                    <Flex p={3} gap={2} alignItems={'center'} bg={'#F5F4F4'} borderRadius={'4px'} width={'fit-content'}>
                                        <Image src="checkic.svg" />
                                        <Text>HSE Level 1-4</Text>
                                    </Flex>
                                    <Flex p={3} gap={2} alignItems={'center'} bg={'#F5F4F4'} borderRadius={'4px'} width={'fit-content'}>
                                        <Image src="checkic.svg" />
                                        <Text>IWCF Level 2-4</Text>
                                    </Flex>
                                    <Flex p={3} gap={2} alignItems={'center'} bg={'#F5F4F4'} borderRadius={'4px'} width={'fit-content'}>
                                        <Image src="checkic.svg" />
                                        <Text>BHP Well Testing</Text>
                                    </Flex>
                                    <Flex p={3} gap={2} alignItems={'center'} bg={'#F5F4F4'} borderRadius={'4px'} width={'fit-content'}>
                                        <Image src="checkic.svg" />
                                        <Text>Data Acquisition</Text>
                                    </Flex>
                                    <Flex p={3} gap={2} alignItems={'center'} bg={'#F5F4F4'} borderRadius={'4px'} width={'fit-content'}>
                                        <Image src="checkic.svg" />
                                        <Text>Basic Slickline Operations</Text>
                                    </Flex>
                                    <Flex p={3} gap={2} alignItems={'center'} bg={'#F5F4F4'} borderRadius={'4px'} width={'fit-content'}>
                                        <Image src="checkic.svg" />
                                        <Text>Advanced Slickline Operations</Text>
                                    </Flex>
                                </Box>
                            </Box>

                            <Box w={{lg:'50%',sm:'100%'}} display={'flex'} justifyContent={'flex-end'}>
                                        <Image src={'trainingVideo.svg'} />
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
                    <Heading fontWeight={'600'} color={'#2E3192'} mt={'1rem'} mb={'2rem'} fontSize={'28px'} textAlign={'center'}>
                        OUR FACILITIES/EQUIPMENTS
                    </Heading>

                    <Flex 
                        gap="2rem" 
                        overflowX={{ base: 'auto', lg: 'hidden' }}
                        flexWrap={{ base: 'nowrap', lg: 'wrap' }}
                        px={{ base: 4, lg: 0 }}
                        justify={{ lg: 'space-between' }}
                        css={{
                            '&::-webkit-scrollbar': { height: '6px' },
                            '&::-webkit-scrollbar-track': { background: '#f1f1f1' },
                            '&::-webkit-scrollbar-thumb': { 
                                background: '#888',
                                borderRadius: '4px',
                            },
                        }}
                        mb={'2rem'}
                    >
                        {equpimentData.slice(0, 4).map((item, index) => ( // Show only first 4 items
                            <Flex
                                key={index}
                                flexDir="column"
                                position="relative"
                                flex={{
                                    base: '0 0 300px', // Fixed width for mobile
                                    lg: '1 1 calc(25% - 32px)' // 4 items per row (25% - gap)
                                }}
                                mb={4}
                                minH={{ base: "400px", md: "500px" }}
                                onMouseEnter={()=>setActiveEqupiment(item.name)}
                                onMouseLeave={()=>setActiveEqupiment('')}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    w="100%"
                                    h="100%"
                                    objectFit="cover"
                                    borderRadius="md"
                                />
                                
                                {/* Gradient Overlay */}
                                <Flex
                                    display={activeEqupiment===item.name?'flex':'none'}
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    w="100%"
                                    h="100%"
                                    bg="linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 100%)"
                                    zIndex={1}
                                    borderRadius="md"
                                />
                                
                                {/* Text Overlay */}
                                <Box
                                    display={activeEqupiment===item.name?'flex':'none'}
                                    position="absolute"
                                    bottom="5%"
                                    left="3%"
                                    color="white"
                                    zIndex={2}
                                    p={2}
                                    maxW="90%"
                                    justifyContent={'center'}
                                >
                                    <Heading textAlign={'center'} fontSize={{ base: "18px", md: "20px" }} fontWeight="500">
                                        {item.name}
                                    </Heading>
                                    <Text fontSize={{ base: "14px", md: "16px" }}>
                                    </Text>
                                </Box>
                            </Flex>
                        ))}
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
                    bg={'#EDF2FC'}
                 
                 >
                 
                   <Heading mt={'4rem'}  color={'#2E3192'} fontWeight={'550'} textAlign={'center'}>Why Enroll</Heading>
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        gap="2rem"
                        justifyContent="center"
                        color="black"
                        bg="white"
                        width={{lg:"70%",base:"90%"}}
                        m={'4rem auto'}
                    >
                        {contentData.map((item, index) => (
                        <Box
                            key={index}
                            flex="1"
                            p="1rem"
                            width={{ base: '100%', md: '20%', lg: '30%' }}
                            textAlign="center"
                        >
                            <Image mx="auto" src={item.image} alt={item.title} mb={4} />
                            <Heading m="1rem" as="h3" size="md" fontWeight="500">
                            {item.title}
                            </Heading>
                            <Text fontSize="sm">{item.description}</Text>
                        </Box>
                        ))}
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
                textColor="black" // Change the text color if needed.
                padding={{
                    lg: "5rem 5rem",
                    md: "1.5rem 2rem",
                    sm: "1rem",
                    base: "1rem",
                }}
                >
                    <Box textAlign="center" mb={{ }}>
                    <Heading fontWeight={'600'} fontSize={{base:'25px',sm:'25px',md:'36px',lg:'36px',}} mb={3} >
                        Explore Course Contents and Timelines
                    </Heading>
                    <Text fontSize="lg" mb={5}>
                        We have curated our training catalog which covers all the details you need your chosen <br/> track prerequisites and well-detailed curriculum.
                    </Text>
                    <Button width={'fit-content'} m={'1rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Download Brochure </Button>
                    
                    </Box>
                </Box>
                {/* section 5 */}


                {/* section 6 */}
                <Box
                maxWidth="2000px"
                mx="auto"
                padding={{
                    lg: "0rem 5rem",
                    md: "1.5rem 2rem",
                    sm: "1rem",
                    base: "1rem",
                }}
                >
                    <Flex alignItems={'center'} flexDir={{base:'column',lg:'row'}}>
                        <Box w={{base:'100%',lg:'50%'}}>
                            <Heading fontSize={'28px'}>Secure Your Spot Now</Heading>
                            <Text m={'1rem 0'}>Ready to take the next step in your career? Secure your spot in our June 2025 training cohort by filling out the registration form below:</Text>
                            <Button width={'fit-content'} m={'3rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Enroll Now </Button>
                        </Box>
                        <Box display={'flex'} justifyContent={'flex-end'} w={{base:'100%',lg:'50%'}}>
                            <Image src={'harrison.svg'} />
                        </Box>
                    </Flex>
                </Box>
                {/* section 6 */}

                {/* section 7 */}
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
                    <Heading textAlign={'center'} color={'#2E3192'}>HAVE MORE ENQUIRIES?</Heading>
                    <Flex justifyContent={'center'} gap={'4rem'} mt={'3rem'} flexDir={{lg:'row',base:'column'}}>
                        <Box bg={'#F0F0F0'} w={{lg:'20%'}} p={'2rem 1rem'}>
                            <Heading fontSize={'22px'} textAlign={'center'}>Send An Email</Heading>
                            <Text textAlign={'center'} color={'#2E3192'}>training@codesandcogs.com</Text>
                        </Box>
                        <Box bg={'#F0F0F0'} w={{lg:'20%'}} p={'2rem 1rem'}>
                            <Heading fontSize={'22px'} textAlign={'center'}>Send An Email</Heading>
                            <Text textAlign={'center'} color={'#2E3192'}>+(667) 292-9258 |+(234) 9164451212 </Text>
                        </Box>
                        <Box bg={'#F0F0F0'} w={{lg:'20%'}} p={'2rem 1rem'}>
                            <Heading fontSize={'22px'} textAlign={'center'}>Send An Email</Heading>
                            <Text textAlign={'center'} color={'#2E3192'}> Contact Us </Text>
                        </Box>
                    </Flex>
                </Box >
                {/* section 7 */}
        </HeaderAndFooter>
    )
}

export default Training