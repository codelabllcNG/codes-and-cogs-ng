import { Flex,Text,Heading,Box,Button,Image,Wrap } from "@chakra-ui/react";
import Navigator from "@/component/navigator";
import Footer from "@/component/footer";
import TalentExplorer from "@/component/talents";
import RegistrationForm from "@/component/registerForm"
import HowItWorks from "@/component/howItWorks"
import { IoLocationOutline } from "react-icons/io5";




const Consultant = ()=>{
    return(
      <Box>
        <Navigator />

                {/*section 1  */}
                    <Box
                        maxWidth="2000px"
                        bgImage="url('Consultant.svg')"
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
                            <Heading textAlign={'center'} m={"2rem 0"}>International Collaboration for Oil & Gas Experts</Heading>

                            <Text textAlign={'center'}>
                                We connect industry-leading professionals with international oil and gas projects tailored <br /> to their expertise.
                            </Text>

                            <Flex width={'fit-content'} mx={'auto'} gap={'3rem'} flexDir={{lg:'row',md:'row',sm:'column',base:'column'}}>
                                <Button width={'fit-content'} m={{lg:'3rem 0'}} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Become A Consultant </Button>
                                <Button width={'fit-content'} m={{lg: '3rem 0'}} borderRadius="4px" padding={'12px 24px'} textColor={'white'} border={'2px solid #C9CBFF'} bg={'transparent'} boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Become A Consultant </Button>
                                                    
                            </Flex>


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
                                display={'none'}
                >
                       <Heading textAlign={'center'} fontWeight={'600'} color={'#2E3192'} fontSize={'28px'} >OPPORTUNITIES THROUGH CODES AND COGS</Heading>
                       <Text textAlign={'center'}>Explore job opportunities that connect you with multiple companies through our platform</Text>  
                       
                       <Box border={'1px solid rgba(0, 0, 0, 0.25)'} borderRadius={'12px'} width={'50%'}>
                         <Box p={'1rem'} borderBottom={'1px dotted rgba(136, 136, 136, 0.80);'}>
                            <Flex gap={'3rem'} mt={'1rem'} mb={'1rem'}>
                                <Box>
                                    <Image src="companyImage.png" />
                                </Box>
                                <Box>
                                    <Heading fontWeight={'600'} fontSize={'27px'}>Senior Drilling Consultant</Heading>
                                    <Flex alignItems={'center'}> <IoLocationOutline fontSize={'32px'} fontWeight={'500'}/><Text fontWeight={'300'} fontSize={'15px'}>Middle East</Text> </Flex>
                                </Box>
                            </Flex>
                            <Wrap spacing={2} gap={'2rem'} >
                                {['$40,000','10-15 years','Full Time'].map((skill, skillIndex) => (
                                        <Flex 
                                        key={skillIndex} 
                                        p={2} 
                                        borderRadius={'12px'} 
                                        bg={'rgba(136, 136, 136, 0.10)'}
                                        fontSize={['xs', 'sm']}
                                        >
                                        {skill}
                                        </Flex>
                                    ))}
                            </Wrap>
                         </Box>
                         <Flex justifyContent={'space-between'} p={'1rem'}>
                                <Heading fontWeight={'550'} fontSize={'15px'}>Posted 3hrs ago</Heading>
                                <Heading fontWeight={'550'} fontSize={'15px'}>50 Applicants</Heading>
                         </Flex>
                       </Box>

                </Box>

                {/* section 2 */}

                {/* section 2 */}
                    <Box
                                maxWidth="2000px"
                                padding={{
                                lg: "1.5rem 5rem",
                                md: "1.5rem 2rem",
                                sm: "1rem",
                                base: "1rem",
                                }}
                        >
                        <Heading textAlign={'center'} fontWeight={'600'} color={'#2E3192'} >Your Gateway to Global Expertise</Heading>
                        <Text m={'3rem 0'} textAlign={'center'} >Our platform identifies, screens, and places experts in projects that demand deep industry knowledge and innovative solutions. From oilfield services to emerging technologies and strategic consultancy, we empower our clients to tackle their most challenging projects.</Text>
                    
                        <Flex 
                                justifyContent={'space-between'} 
                                alignItems={'center'} 
                                flexDirection={{ base: 'column', lg: 'row' }}
                                gap={{ base: 8, lg: 0 }}
                                py={8}
                                px={{ base: 4, lg: 8 }}
                                >
                                {/* Professionals Section */}
                                <Box w={{ base: '100%', lg: '50%' }} order={{ base: 1, lg: 0 }}>
                                    <Heading fontSize={{ base: '24px', lg: '28px' }} color={'#2E3192'}>
                                    Bridging Talent and Opportunity
                                    </Heading>
                                    <Heading my={4} fontSize={{ base: '24px', lg: '28px' }}>
                                    FOR PROFESSIONALS
                                    </Heading>
                                    <Flex flexDir={'column'} gap={4} maxW={{ lg: '90%' }}>
                                    <Text fontSize={{ base: 'md', lg: 'lg' }}>
                                        Access Global Projects: Work on impactful, career-defining projects worldwide.
                                    </Text>
                                    <Text fontSize={{ base: 'md', lg: 'lg' }}>
                                        Skill Enhancement: Advance your career with certifications and specialised training.
                                    </Text>
                                    <Text fontSize={{ base: 'md', lg: 'lg' }}>
                                        Tailored Matches: Secure roles that align with your expertise and ambitions.
                                    </Text>
                                    <Text fontSize={{ base: 'md', lg: 'lg' }}>
                                        Comprehensive Support: Receive assistance throughout project tenure, guaranteed payments, HMO package.
                                    </Text>
                                    </Flex>
                                </Box>

                                <Box 
                                        w={{ base: '100%', lg: '50%' }} 
                                        display={'flex'} 
                                        justifyContent={{ base: 'center', lg: 'flex-end' }}
                                        mt={{ base: 4, lg: 0 }}
                                    >
                                    <Image 
                                    src={'consultant1.svg'} 
                                    alt="Professionals illustration"
                                    width={500}
                                    height={400}
                                    style={{ objectFit: 'contain' }}
                                    />
                                </Box>
                        </Flex>

                        <Flex 
                            justifyContent={'space-between'} 
                            alignItems={'center'} 
                            flexDirection={{ base: 'column', lg: 'row-reverse' }}
                            gap={{ base: 8, lg: 0 }}
                            py={8}
                            px={{ base: 4, lg: 8 }}
                            bg={'white'}
                            >
                                {/* Companies Section */}
                                <Box w={{ base: '100%', lg: '50%' }} order={{ base: 1, lg: 0 }}>
                                    <Heading my={4} fontSize={{ base: '24px', lg: '28px' }}>
                                    FOR COMPANIES
                                    </Heading>
                                    <Flex flexDir={'column'} gap={4} maxW={{ lg: '90%' }}>
                                    <Text fontSize={{ base: 'md', lg: 'lg' }}>
                                        Pre-Screened Professionals: Hire experts rigorously vetted for technical skills and field experience.
                                    </Text>
                                    <Text fontSize={{ base: 'md', lg: 'lg' }}>
                                        Global Talent Pool: Access diverse consultants, engineers, and tech specialists.
                                    </Text>
                                    <Text fontSize={{ base: 'md', lg: 'lg' }}>
                                        Scalable Solutions: Whether for a short-term need or a long-term partnership, we provide flexible talent solutions.
                                    </Text>
                                    <Text fontSize={{ base: 'md', lg: 'lg' }}>
                                        Custom Recruitment: We identify and connect talent tailored to specific project requirements.
                                    </Text>
                                    </Flex>
                                </Box>

                                <Box 
                                        w={{ base: '100%', lg: '50%' }} 
                                        display={'flex'} 
                                        justifyContent={{ base: 'center', lg: 'flex-start' }}
                                        mt={{ base: 4, lg: 0 }}
                                    >
                                        <Image 
                                        src={'consultant1.svg'} 
                                        alt="Companies illustration"
                                        width={500}
                                        height={400}
                                        style={{ objectFit: 'contain' }}
                                        />
                                </Box>
                        </Flex>
                        
                    </Box>    
                {/* section 2 */}

                {/* section 3 */}
                        <Box
                                maxWidth="2000px"
                                bg={'#EDF2FC'}
                                padding={{
                                lg: "5rem 5rem",
                                md: "1.5rem 2rem",
                                sm: "1rem",
                                base: "1rem",
                                }}
                            >
                                <HowItWorks />
                
                        </Box>
                {/* section 3 */}

                {/* section 4 */}
                    <Box
                                    maxWidth="2000px"
                                    padding={{
                                    lg: "5rem 5rem",
                                    md: "1.5rem 2rem",
                                    sm: "1rem",
                                    base: "1rem",
                                    }}
                        >
                      <TalentExplorer />
                    </Box>
                {/* section 4 */}


                {/* section 5 */}
                    <Box
                                maxWidth="2000px"
                                bg={'#EDF2FC'}
                                padding={{
                                lg: "5rem 5rem",
                                md: "1.5rem 2rem",
                                sm: "1rem",
                                base: "1rem",
                                }}
                    >
                        <RegistrationForm />
                    </Box >    
                {/* section 5 */}

                {/* section 6 */}
                    <Box
                            maxWidth="2000px"
                            bgImage="url('WhiteBg.svg')"
                            bgSize="cover" // Ensures the image covers the entire container.
                            bgPosition="center" // Centers the background image.
                            bgRepeat="no-repeat" // Prevents the background image from repeating.
                            mx="auto"
                            textColor="#333" // Change the text color if needed.
                            padding={{
                            lg: "5rem 5rem",
                            md: "1.5rem 2rem",
                            sm: "1rem",
                            base: "1rem",
                            }}
                        >
                            <Box textAlign="center" mb={{ base: 6, md: 8 }}>
                                <Heading fontWeight={'600'} fontSize={{base:'25px',sm:'25px',md:'36px',lg:'36px',}} mb={3} >
                                    Find a Tailored Talent for Your Specific Needs 
                                </Heading>
                                <Text fontSize="lg" mb={5}>
                                Companies with specific skillset requirements can list their job openings, <br/> ensuring they find the perfect match for their needs
                                </Text>
                                <Button width={'fit-content'} m={'3rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> List Your Opening </Button>
                                
                            </Box>
                    </Box>
                {/* section 6 */}

                

        <Footer />
      </Box>
    )
}
export default Consultant