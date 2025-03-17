import Navigator from "@/component/navigator";
import Footer from "@/component/footer";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Flex,
    Text,
    Heading,
    Image,
    Textarea,
    Link
  } from '@chakra-ui/react';
  import { ArrowForwardIcon } from "@chakra-ui/icons";


const HireTalent = ()=>{
   return(
    <Box>
        <Navigator />
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
                                    <Heading textAlign={'center'} m={'1rem'} fontWeight={'500'}>Hire A Talent</Heading>
                            </Box>
            </Box>
            
            <Box
                    maxWidth="2000px"
                    mx="auto"
                    padding={{
                    lg: "3rem 5rem",
                    md: "1.5rem 2rem",
                    sm: "1rem",
                    base: "1rem",
                    }}
            >
                   <Flex
                        w="100%"
                        flexDirection={{ base: 'column', lg: 'row' }}
                        p={5}
                        gap={5}
                        alignItems={'center'}
                        bg={'#FAFAFA'}
                        borderRadius={'4px'}
                        >

                        {/* Right Column: Form */}
                        <Box w={{ base: '100%', lg: '80%' }}>
                            <Text
                            mt={{ base: '1rem', lg: '3rem' }}
                            mb={{ base: '2rem', lg: '3rem' }}
                            textAlign="center"

                           
                            >
                             Thank you for your interest in our oil and gas talent! Complete the form below so we can better understand your company’s needs
                            </Text>

                                {/* Row 1: First Name / Last Name */}
                                <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
                                <FormControl isRequired>
                                    <Text fontWeight="500">
                                    <FormLabel>First Name</FormLabel>
                                    </Text>
                                    <Input h="60px" placeholder="First Name" />
                                </FormControl>

                                <FormControl isRequired>
                                    <Text fontWeight="500">
                                    <FormLabel>Last Name</FormLabel>
                                    </Text>
                                    <Input h="60px" placeholder="Last Name" />
                                </FormControl>
                                </Flex>

                                {/* Row 2: Company Type / Company Name */}
                                <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
                                <FormControl isRequired>
                                    <Text fontWeight="500">
                                    <FormLabel>Company Type</FormLabel>
                                    </Text>
                                    <Select h="60px" placeholder="Select company type">
                                    <option value="startup">Startup</option>
                                    <option value="sme">SME</option>
                                    <option value="enterprise">Enterprise</option>
                                    <option value="government">Government</option>
                                    <option value="nonprofit">Non-Profit</option>
                                    </Select>
                                </FormControl>

                                <FormControl isRequired>
                                    <Text fontWeight="500">
                                    <FormLabel>Company Name</FormLabel>
                                    </Text>
                                    <Input h="60px" placeholder="Enter company name" />
                                </FormControl>
                                </Flex>

                                {/* Row 3: Work Email / Country */}
                                <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
                                <FormControl isRequired>
                                    <Text fontWeight="500">
                                    <FormLabel>Work Email</FormLabel>
                                    </Text>
                                    <Input h="60px" placeholder="Work Email" />
                                </FormControl>

                                <FormControl isRequired>
                                    <Text fontWeight="500">
                                    <FormLabel>Country</FormLabel>
                                    </Text>
                                    <Select h="60px" placeholder="Select Country">
                                    <option value="usa">USA</option>
                                    <option value="uk">UK</option>
                                    <option value="canada">Canada</option>
                                    {/* Add more countries as needed */}
                                    </Select>
                                </FormControl>
                                </Flex>

                                {/* Row 4: Phone Number / How soon do you want to hire? */}
                                <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
                                <FormControl isRequired>
                                    <Text fontWeight="500">
                                    <FormLabel>Phone Number</FormLabel>
                                    </Text>
                                    <Input h="60px" placeholder="Phone Number" />
                                </FormControl>

                                <FormControl isRequired>
                                    <Text fontWeight="500">
                                    <FormLabel>How soon do you want to hire?</FormLabel>
                                    </Text>
                                    <Input h="60px" placeholder="e.g. Immediately, 1-2 weeks..." />
                                </FormControl>
                                </Flex>

                                {/* Row 5: Comments (full width) */}
                                <FormControl isRequired mb="2rem">
                                <Text fontWeight="500">
                                    <FormLabel>Comments</FormLabel>
                                </Text>
                                <Textarea
                                    placeholder="Enter any additional details..."
                                    size="md"
                                    resize="vertical"
                                />
                                </FormControl>

                                {/* (Optional) Upload CV — if you want to include it */}
                                {/* 
                                <FormControl isRequired mb="2rem">
                                <Text fontWeight="500">
                                    <FormLabel>Upload CV</FormLabel>
                                </Text>
                                <Input
                                    id="cv-upload"
                                    type="file"
                                    h="60px"
                                    p={1}
                                    accept=".pdf,.doc,.docx"
                                    borderRadius="md"
                                    onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        setFileName(file.name);
                                    }
                                    }}
                                />
                                </FormControl>
                                */}

                                {/* Submit Button */}
                                <Flex justifyContent="center">
                                <Button
                                    borderRadius="4px"
                                    px="24px"
                                    py="12px"
                                    textColor="white"
                                    bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
                                    boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"
                                >
                                    Submit Details
                                </Button>
                                </Flex>
                        </Box>

                        <Box bg='#F0F0F0;' w={{ base: '100%', lg: '20%' }} p={3}>
                            <Heading fontSize={'22px'} fontWeight={'500'} > Become A Consultant</Heading>
                            <Text color={'#A3A2A2'}>Work with Codes and Cogs</Text>
                            <Link
                                display="flex"
                                alignItems="center"
                                mt={3}
                                color="#2E3192"
                                fontWeight="bold"
                                href="#"
                            >
                                Learn More <ArrowForwardIcon ml={1} />
                            </Link>
                        </Box>
    </Flex>
            </Box>
            

        <Footer />
    </Box>
   )
}

export default HireTalent