import { useState } from "react";
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
    Textarea,
    Link,
    
  } from '@chakra-ui/react';
  import { ArrowForwardIcon } from "@chakra-ui/icons";
  import { TalentStoreInterface } from "@/component/Interface/talents";
  import { useTalentsStore } from "@/store/talentStore";
  import { useHireTalentHook } from "@/component/Hooks/talentsHook";
  import ReactFlagsSelect from 'react-flags-select';
  import { toast } from 'react-toastify';
  import LoadingSpinner from "@/component/loadingSpinner";
  import { useRouter } from "next/router";
  import HeaderAndFooter from "@/component/layout/HeaderAndFooter";


const HireTalent = ()=>{
    const [loading,setLoading] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const talent = useTalentsStore((state:TalentStoreInterface)=>state.selectedTalent)
    const mutation = useHireTalentHook()
    const router = useRouter()
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        cname: "",
        ctype: "",
        country: "",
        phone: "",
        soon: "",
        talent: "",
        comments: "",
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      const hanldeSubmit = async function(){
        try {
            setLoading(true)
            formData.talent = String(talent?.id)
            formData.country = selectedCountry
            const data = await  mutation.mutateAsync(formData)
            toast.success(data.message)
            
        } catch (error:unknown) {
            if (error instanceof Error) {
                toast.error(error.message);
              } else {
                // Handle case when error is not an Error object
                toast.error('An unknown error occurred');
              }
        }finally{
            setLoading(false)
        }
       
      }



   return(
            <HeaderAndFooter>
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
                         <Text
                            mt={{ base: '1rem', lg: '3rem' }}
                            mb={{ base: '2rem', lg: '3rem' }}
                            textAlign="center"
                            >
                             Thank you for your interest in our oil and gas talent! Complete the form below so we can better understand your company’s needs
                         </Text>
                   <Flex
                        w="90%"
                        flexDirection={{ base: 'column', lg: 'row' }}
                        p={'3rem'}
                        gap={5}
                        alignItems={'center'}
                        bg={'#FAFAFA'}
                        borderRadius={'4px'}
                        >

                        {/* Right Column: Form */}
                        <Box w={{ base: '100%', lg: '80%' }} pos={'relative'}>

                                 <LoadingSpinner showLoadingSpinner={loading}  />
                               
                                {/* Row 1: First Name / Last Name */}
                                <Flex gap="3rem" mb="2rem" mt={'1rem'} flexDir={{ base: 'column', lg: 'row' }}>
                                <FormControl isRequired>
                                    <Text fontWeight="500">
                                    <FormLabel>First Name</FormLabel>
                                    </Text>
                                    <Input h="60px" name="fname" value={formData.fname} onChange={handleChange} placeholder="First Name" />
                                </FormControl>

                                <FormControl isRequired>
                                    <Text fontWeight="500">
                                    <FormLabel>Last Name</FormLabel>
                                    </Text>
                                    <Input h="60px" name="lname" value={formData.lname} onChange={handleChange} placeholder="Last Name" />
                                </FormControl>
                                </Flex>

                                {/* Row 2: Company Type / Company Name */}
                                <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
                                <FormControl isRequired>
                                    <Text fontWeight="500">
                                    <FormLabel>Company Type</FormLabel>
                                    </Text>
                                    <Select h="60px" name="ctype" placeholder="Select company type" value={formData.ctype} onChange={handleChange}>
                                            <option value="exploration-production">Exploration & Production</option>
                                            <option value="oilfield-services-equipment">General Oilfield Services & Equipment</option>
                                            <option value="engineering-technical-services">Engineering & Technical Services</option>
                                            <option value="drilling-well-services">Drilling & Well Services</option>
                                            <option value="pipeline-infrastructure">Pipeline & Infrastructure</option>
                                            <option value="energy-consulting-project-management">Energy Consulting & Project Management</option>
                                            <option value="environmental-safety-services">Environmental & Safety Services</option>
                                            <option value="other">Other</option>
                                    </Select>
                                </FormControl>

                                <FormControl isRequired>
                                    <Text fontWeight="500">
                                    <FormLabel>Company Name</FormLabel>
                                    </Text>
                                    <Input h="60px" name="cname" value={formData.cname} onChange={handleChange} placeholder="Enter company name" />
                                </FormControl>
                                </Flex>

                                {/* Row 3: Work Email / Country */}
                                <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
                                <FormControl isRequired>
                                    <Text fontWeight="500">
                                    <FormLabel>Work Email</FormLabel>
                                    </Text>
                                    <Input h="60px" name="email" value={formData.email} onChange={handleChange} placeholder="Work Email" />
                                </FormControl>

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
                                </Flex>

                                {/* Row 4: Phone Number / How soon do you want to hire? */}
                                <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
                                <FormControl isRequired>
                                    <Text fontWeight="500">
                                    <FormLabel>Phone Number</FormLabel>
                                    </Text>
                                    <Input h="60px" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
                                </FormControl>

                                <FormControl isRequired>
                                    <Text fontWeight="500">
                                    <FormLabel>How soon do you want to hire?</FormLabel>
                                    </Text>
                                    <Input h="60px" name="soon" value={formData.soon} onChange={handleChange} placeholder="e.g. Immediately, 1-2 weeks..." />
                                </FormControl>
                                </Flex>

                                {/* Row 5: Comments (full width) */}
                                <FormControl isRequired mb="2rem">
                                <Text fontWeight="500">
                                    <FormLabel>Comments</FormLabel>
                                </Text>
                                <Textarea
                                    name="comments"
                                    value={formData.comments} onChange={handleChange}
                                    placeholder="Enter any additional details..."
                                    size="md"
                                    resize="vertical"
                                    rows={7}
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
                                <Flex justifyContent="left">
                                <Button
                                    _hover={{ bg: "#2E3192" }}
                                    borderRadius="4px"
                                    px="24px"
                                    py="12px"
                                    textColor="white"
                                    bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
                                    boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"
                                    onClick={hanldeSubmit}
                                >
                                    Submit Details
                                </Button>
                                </Flex>
                        </Box>

                        <Box w={{ base: '100%', lg: '20%' }} p={3}>
                                <Box bg='#F0F0F0;' w={{lg:'160%', base:'100%'}} mt="1rem" p={3}>
                                    <Heading fontSize={'22px'} fontWeight={'500'} >List Your Opening </Heading>
                                    <Text color={'#A3A2A2'}>Publish your job on Codes and Cogs</Text>
                                    <Link
                                        display="flex"
                                        alignItems="center"
                                        mt={3}
                                        color="#2E3192"
                                        fontWeight="bold"
                                        href="#"
                                        onClick={()=>router.push('/jobs/openings')}
                                    >
                                        Learn More <ArrowForwardIcon ml={1} />
                                    </Link>
                                </Box>
                                <Box bg='#F0F0F0;' w={{lg:'160%', base:'100%'}}  mt="1rem" p={3}>
                                    <Heading fontSize={'22px'} fontWeight={'500'} > Become A Consultant</Heading>
                                    <Text color={'#A3A2A2'}>Get listed on our platform</Text>
                                    <Link
                                        display="flex"
                                        alignItems="center"
                                        mt={3}
                                        color="#2E3192"
                                        fontWeight="bold"
                                        href="#"
                                        onClick={()=>router.push('/talents/consultant')}
                                    >
                                        Learn More <ArrowForwardIcon ml={1} />
                                    </Link>
                                </Box>
                        </Box>

                   </Flex>
            </Box>
            
            </HeaderAndFooter>
   )
}

export default HireTalent