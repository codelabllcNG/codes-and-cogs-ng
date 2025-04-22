import { Flex,Box,Heading,Text,FormControl,FormLabel,Select,Input,Image,Textarea,Button,Link,Checkbox } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Navigator from "@/component/navigator";
import Footer from "@/component/footer";
import HeaderAndFooter from "@/component/layout/HeaderAndFooter";

const Contact = ()=>{
   return (
<HeaderAndFooter>
              {/*section 1  */}
              <Box
                maxWidth="2000px"
                bgImage="url('Contact.svg')"
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
                  w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
                >
                  <Heading m={"2rem 0"}>Who We Are</Heading>
        
                  <Text>
                    We provide technology and oilfield services and connects oil and gas
                    talents with corporate clients seeking specialised services.
                  </Text>
                </Box>
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
                              <Heading fontWeight={"500"} fontSize={"28px"} width={"fit-content"}>
                                      Contact Form
                                <Box
                                h="3px"
                                fontSize={"28px"}
                                mt={"1.5rem"}
                                borderRadius={"12px"}
                                w="100%"
                                bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
                                ></Box>
                             </Heading>



                             <Flex
      w="100%"
      flexDirection={{ base: 'column', lg: 'row' }}
      p={5}
      gap={5}
      alignItems="center"
      bg="#FAFAFA"
      borderRadius="4px"
      mt={'1rem'}
    >
      {/* Left Column: Form */}
      <Box w={{ base: '100%', lg: '80%' }}>
  
         {/* Row 1: Category */}

         <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
          <FormControl isRequired>
            <Text fontWeight="500">
              <FormLabel>Choose your category</FormLabel>
            </Text>
            <Select h="60px" placeholder="Select">
              <option value="startup">Startup</option>
              <option value="sme">SME</option>
              <option value="enterprise">Enterprise</option>
              <option value="government">Government</option>
              <option value="nonprofit">Non-Profit</option>
            </Select>
          </FormControl>
          </Flex>

        {/* Row 2: First Name / Last Name */}
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

         {/* Row 3: Email */}
        <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
        <FormControl isRequired>
            <Text fontWeight="500">
              <FormLabel>Work Email</FormLabel>
            </Text>
            <Input h="60px" placeholder="Work Email" />
          </FormControl>
        </Flex>



        {/* Row 2: Job title/ Company Name */}
        <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>

          <FormControl isRequired>
            <Text fontWeight="500">
              <FormLabel>Job Title</FormLabel>
            </Text>
            <Input h="60px" />
          </FormControl>
          <FormControl isRequired>
            <Text fontWeight="500">
              <FormLabel>Company</FormLabel>
            </Text>
            <Input h="60px"  />
          </FormControl>
        </Flex>

        {/* Row 3: Work Email / Country */}
        <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
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
          <FormControl isRequired>
            <Text fontWeight="500">
              <FormLabel>Phone number</FormLabel>
            </Text>
            <Input h="60px" placeholder="Work Email" />
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

        <Box m={'3rem 0'}>
         <Text m={'1rem'}>Stay up to date and get first-hand information:</Text>         
        <Checkbox 
           color={'#2E3192'}
            >
            I want to subscribe to Codes and Cogs newsletter
        </Checkbox>
        </Box>

        {/* Submit Button */}
        <Flex justifyContent="left">
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

      {/* Right Column: Sidebar */}
      <Flex flexDir={'column'} gap={'1rem'} w={{ base: '100%', lg: '20%' }}>
            <Box bg="#F0F0F0" w={'100%'} p={3}>
                <Heading fontSize="22px" fontWeight="500">
                Trainings
                </Heading>
                <Text color="#A3A2A2">Explore our certification programs</Text>
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
            <Box bg="#F0F0F0" w={'100%'} p={3}>
                <Heading fontSize="22px" fontWeight="500">
                Hire A Talent
                </Heading>
                <Text color="#A3A2A2">Explore our professionals</Text>
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
            <Box bg="#F0F0F0" w={'100%'} p={3}>
                <Heading fontSize="22px" fontWeight="500">
                Work With Us
                </Heading>
                <Text color="#A3A2A2">Explore our opportunities</Text>
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
            <Box bg="#F0F0F0" w={'100%'} p={3}>
                <Heading fontSize="22px" fontWeight="500">
                Become A Consultant
                </Heading>
                <Text color="#A3A2A2">Work with Codes and Cogs</Text>
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

    </Flex>
              </Box>
              {/* section 2 */}

              </HeaderAndFooter>
   )
}

export default Contact