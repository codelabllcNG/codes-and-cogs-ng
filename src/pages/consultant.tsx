import { Flex,Text,Heading,Box,Button,Image,Wrap,SimpleGrid, } from "@chakra-ui/react";
import Navigator from "@/component/navigator";
import Footer from "@/component/footer";
import TalentExplorer from "@/component/talents";
import RegistrationForm from "@/component/registerForm"
import HowItWorks from "@/component/howItWorks"
import { IoLocationOutline } from "react-icons/io5";
import AdsComponent from "@/component/adsComponent";
import { useState } from "react";
import { useRouter } from "next/router";
import HeaderAndFooter from "@/component/layout/HeaderAndFooter";



const Consultant = ()=>{
    const router = useRouter()
    const [formData,setFormData] =useState({
        "fname": "",
        "lname": "",
        "ctype":"",
        "cname":"",
        "email": "",
        "cv": "",
    })      

    return(

<HeaderAndFooter>
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
                                    <Button onClick={()=>router.push('/consultant#form')} width={'fit-content'} m={{lg:'3rem 0'}} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Register as a Consultant </Button>
                                    <Button onClick={()=>router.push('/')}  width={'fit-content'} m={{lg: '3rem 0'}} borderRadius="4px" padding={'12px 24px'} textColor={'white'} border={'2px solid #C9CBFF'} bg={'transparent'} boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> See Job Openings </Button>
                                </Flex>
                            </Box>
             </Box>
             {/* section 1 */}
            

            {/* ads block */}
            <Flex
                            maxWidth="2000px"
                            mx="auto"
                            justifyContent={'center'}
                            textColor="white" // Change the text color if needed.
                            padding={{
                            lg: "1.5rem 5rem",
                            md: "1.5rem 2rem",
                            sm: "1rem",
                            base: "1rem",
                            }}
                        >
                          <AdsComponent link="#" imageUrl="ads 1.png" />
            </Flex>
            {/* ads block */}

            {/* ads layout */}
            <Flex
            maxWidth="2000px"
            padding={{
            lg: "1.5rem 5rem",
            md: "1.5rem 2rem",
            sm: "1rem",
            base: "1rem",
            }}
            mx={'auto'}
            flexDir={{lg:'row',base:'column'}}
            >
                <Box w={{lg:'80%',md:'80%',sm:'100%',base:'100%'}}>
                    
    

                    {/* section 2 */}
                        <Box >
                                <Heading textAlign={'center'} fontWeight={'600'} color={'#2E3192'} fontSize={'28px'} >OPPORTUNITIES THROUGH CODES AND COGS</Heading>
                                <Text textAlign={'center'}>Explore job opportunities that connect you with multiple companies through our platform</Text>  
                                
                                    <SimpleGrid
                                        columns={{ base: 1, md: 2, lg: 2 }}
                                        spacingX="40px"
                                        spacingY="20px"
                                        marginTop={'4rem'}
                                        // minChildWidth="250px"
                                        >
                                            {[1,2,3,4].map((item)=>{
                                                return(
                                                    <Box border={'1px solid rgba(0, 0, 0, 0.25)'} borderRadius={'12px'} >
                                                    <Box p={'3rem 1rem'} borderBottom={'1px dotted rgba(136, 136, 136, 0.80);'}>
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
                                                )
                                            })}
                                    </SimpleGrid>
                                    <Flex>
                                    <Button  width={'fit-content'} m={'2rem auto'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> See All Opportunities </Button>              
                                    </Flex>

                                    <Flex 
                                            justifyContent={'space-between'} 
                                            alignItems={'center'} 
                                            flexDirection={{ base: 'column', lg: 'row' }}
                                            gap={{ base: 8, lg: 8 }}
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
                                        gap={{ base: 8, lg: 8 }}
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
                            padding={{
                            lg: "5rem 5rem",
                            md: "1.5rem 2rem",
                            sm: "1rem",
                            base: "1rem",
                            }}
                            id="form"
                        >
                            <RegistrationForm />
                        </Box >    
                    {/* section 3 */}

                    {/* section 4 */}
                        <Flex
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
                                gap={'3rem'}
                            >
                                <AdsComponent imageUrl="ads6.png" link="#" />
                                <AdsComponent imageUrl="ads6.png" link="#" />
            
                        </Flex>
                    {/* section 4 */}

                </Box>
                <Box display={'flex'} flexDir={'column'} pt={'4rem'} gap={'3rem'} w={{lg:'20%',md:'20%',sm:'100%',base:'100%'}} alignItems={'center'}>
                    <AdsComponent imageUrl="ads2.png" link="#" />
                    <AdsComponent imageUrl="ads3.png" link="#" />
                    <AdsComponent imageUrl="ads4.png" link="#" />
                    <AdsComponent imageUrl="ads5.png" link="#" />

                </Box>
            </Flex>
            {/* ads layout */}
                

        <Footer />
 </HeaderAndFooter>
    )
}
export default Consultant