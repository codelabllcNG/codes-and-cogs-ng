import { Flex,Box,Heading,Text,FormControl,FormLabel,Select,Input,Textarea,Button,Link,Checkbox } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import HeaderAndFooter from "@/component/layout/HeaderAndFooter";
import ReactFlagsSelect from 'react-flags-select';
import { useState } from "react";
import { useContactUs } from "@/component/Hooks/formHooks";
import LoadingSpinner from "@/component/loadingSpinner";
import { toast } from 'react-toastify';

const Contact = ()=>{
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const mutation = useContactUs()
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [formData,setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    title: "",
    company: "",
    country: "",
    phone: "",
    comments: "",
    service: ""
  })

  const handleChange = function (e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement > ) {
    const {value,name} = e.target

    setFormData((prev)=>{
      return {...prev,[name]:value}
    })
  }

  const handleSubmit = async function(){
    try {
      setIsLoading(true)
      formData.country = selectedCountry ;
      console.log(formData) ;
      const resonse = await mutation.mutateAsync(formData)
      toast.success(resonse?.message)
      
    } catch (error: unknown) {

      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        // Handle case when error is not an Error object
        toast.error('An unknown error occurred');
      }
  }finally {
    setIsLoading(false)
  }
  
}
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
                  m={{ lg: "8rem 0" }}
                  w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
                >
                  <Heading m={"2rem 0"}>Connect with us</Heading>
        
                  <Text>
                    Have enquiries? Get in touch with a Codes and Cogs expert by completing the form below.
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
                    pos={'relative'}
                >
                  <LoadingSpinner showLoadingSpinner={isLoading} />
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

         
         {/* imbed form */}
            <Box
            as="iframe"
            aria-label="Contact Form"
            src="https://forms.zohopublic.com/clpphonesystemsgm1/form/CodesandCogsContactUsForm/formperma/bx_l7ws8Oij_GZ48ul8bL5hwioysfIYgs_nAQE6vExw"
            width="99%"
            height={{lg:"1000px",md:'1000px',sm:'1200px',base:'1200px'}}
            border="none"
           />
         {/* Row 1: Category Backup maual form */}
         <Box display={'none'}>

                <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
                  <FormControl isRequired>
                    <Text fontWeight="500">
                      <FormLabel>Choose your category</FormLabel>
                    </Text>
                    <Select h="60px" placeholder="Select" name="service" onChange={handleChange}>
                    <option value="recruitment expert consultation">Recruitment Expert Consultation</option>
                    <option value="become a partner">Become a Partner</option>
                    <option value="advertise service/product">Advertise Service/Product</option>
                    <option value="speak to a local rep">Speak to a Local Rep</option>
                    <option value="get assistance with registration">Get assistance with registration</option>
                    <option value="safety concern">Safety Concern</option>
                    <option value="other">Other</option>
                    </Select>
                  </FormControl>
                  </Flex>

                {/* Row 2: First Name / Last Name */}
                <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
                  <FormControl isRequired>
                    <Text fontWeight="500">
                      <FormLabel>First Name</FormLabel>
                    </Text>
                    <Input h="60px" placeholder="First Name" name="fname" onChange={handleChange} />
                  </FormControl>

                  <FormControl isRequired>
                    <Text fontWeight="500">
                      <FormLabel>Last Name</FormLabel>
                    </Text>
                    <Input h="60px" placeholder="Last Name" name="lname" onChange={handleChange} />
                  </FormControl>
                </Flex>

                {/* Row 3: Email */}
                <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
                <FormControl isRequired>
                    <Text fontWeight="500">
                      <FormLabel>Work Email</FormLabel>
                    </Text>
                    <Input h="60px" placeholder="Work Email" name="email" onChange={handleChange} />
                  </FormControl>
                </Flex>



                {/* Row 2: Job title/ Company Name */}
                <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>

                  <FormControl isRequired>
                    <Text fontWeight="500">
                      <FormLabel>Job Title</FormLabel>
                    </Text>
                    <Input h="60px" name="title" onChange={handleChange} />
                  </FormControl>
                  <FormControl isRequired>
                    <Text fontWeight="500">
                      <FormLabel>Company</FormLabel>
                    </Text>
                    <Input h="60px" name="company" onChange={handleChange} />
                  </FormControl>
                </Flex>

                {/* Row 3: Work Email / Country */}
                <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
                <FormControl isRequired>
                    <Text fontWeight="500">
                      <FormLabel>Country</FormLabel>
                    </Text>
                        <ReactFlagsSelect
                        id="country-select"
                        countries={undefined}          // leave undefined to show ALL countries
                        selected={selectedCountry}     // ISO alpha-2 code, e.g. "US", "NG"
                        onSelect={(code) => setSelectedCountry(code)}
                        placeholder="Choose a country"
                        searchable={true}           // dropdown aligns to the left edge
                        optionsSize={20}               // height of each flag option in px
                        selectedSize={25}              // height of the “selected” flag in px
                        className="custom-react-flag"
                      />
          
                  </FormControl>
                  <FormControl isRequired>
                    <Text fontWeight="500">
                      <FormLabel>Phone number</FormLabel>
                    </Text>
                    <Input h="60px" placeholder="Phone number" name="phone" onChange={handleChange} />
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
                    name="comments"
                    onChange={handleChange}
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
                    _hover={{ bg: "#2E3192" }}
                    onClick={handleSubmit}
                  >
                    Submit Details
                  </Button>
                </Flex>
         </Box>
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
                href="/training"
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
                href="/talents"
                >
                Learn More <ArrowForwardIcon ml={1} />
                </Link>
            </Box>
            <Box bg="#F0F0F0" w={'100%'} p={3}>
                <Heading fontSize="22px" fontWeight="500">
                Become A Consultant
                </Heading>
                <Text color="#A3A2A2">Get listed as a Top Talent</Text>
                <Link
                display="flex"
                alignItems="center"
                mt={3}
                color="#2E3192"
                fontWeight="bold"
                href="/talents/consultant"
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