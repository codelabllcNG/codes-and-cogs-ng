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
  Link
} from '@chakra-ui/react';
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from 'react';
import SkillsInput from "@/component/skillsInput";
import { toast } from 'react-toastify';
import LoadingSpinner from "@/component/loadingSpinner";
import { useListOpeningHook } from "@/component/Hooks/jobHooks";
import { useRouter } from "next/router";
import HeaderAndFooter from "@/component/layout/HeaderAndFooter";

const Openings = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    cname: "",
    ctype: "",
    country: "",
    phone: "",
    soon: "",
    skills: [''],
    comments: ""
  });
  const [skills,setSkills] = useState<string[]>([])
  const [loading,setLoading] = useState(false)
  const mutation = useListOpeningHook()
  const router = useRouter()

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
      formData.skills = skills
      const data = await mutation.mutateAsync(formData)
      toast.success(data.message)
    } catch (error: unknown) {
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
  

  return (
    <HeaderAndFooter>
      <Box
        maxWidth="2000px"
        mx="auto"
        bg="#0D0F3A"
        color="white"
        padding={{
          lg: "3rem 5rem",
          md: "1.5rem 2rem",
          sm: "1rem",
          base: "1rem",
        }}
      >
        <Box>
          <Heading textAlign="center" m="1rem" fontWeight="500">
          List Your Opening
          </Heading>
        </Box>
      </Box>

      {/* Main Form + Sidebar Section */}
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
          alignItems="center"
          bg="#FAFAFA"
          borderRadius="4px"
        >
          {/* LEFT COLUMN: The Form */}
          <Box w={{ base: '100%', lg: '80%' }} pos={'relative'}>
            <LoadingSpinner showLoadingSpinner={loading} />
            {/* Intro Text */}
            <Text
              mt={{ base: '1rem', lg: '2rem' }}
              mb={{ base: '2rem', lg: '3rem' }}
              textAlign="center"
            >
              Thank you for your continued talent platform! Complete the form
              below so we can better understand your company’s needs.
            </Text>

            {/* Row 1: First Name / Last Name */}
            <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
              <FormControl isRequired>
                <Text fontWeight="500">
                  <FormLabel>First Name</FormLabel>
                </Text>
                <Input h="60px" name="fname" onChange={handleChange} value={formData.fname} placeholder="First Name" />
              </FormControl>

              <FormControl isRequired>
                <Text fontWeight="500">
                  <FormLabel>Last Name</FormLabel>
                </Text>
                <Input h="60px" name="lname" onChange={handleChange} value={formData.lname} placeholder="Last Name" />
              </FormControl>
            </Flex>

            {/* Row 2: Company Type / Company Name */}
            <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
              <FormControl isRequired>
                <Text fontWeight="500">
                  <FormLabel>Company Type</FormLabel>
                </Text>
                <Select h="60px" name="ctype" value={formData.ctype} onChange={handleChange} placeholder="Select company type">
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
                <Input h="60px" name="cname" value={formData.cname} onChange={handleChange} placeholder="Enter company name" />
              </FormControl>
            </Flex>

            {/* Row 3: Work Email / Country */}
            <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
              <FormControl isRequired>
                <Text fontWeight="500">
                  <FormLabel>Work Email</FormLabel>
                </Text>
                <Input value={formData.email} name="email" onChange={handleChange} h="60px" placeholder="Work Email" />
              </FormControl>

              <FormControl isRequired>
                <Text fontWeight="500">
                  <FormLabel>Country</FormLabel>
                </Text>
                <Select h="60px" value={formData.country} name="country" onChange={handleChange} placeholder="Select Country">
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="canada">Canada</option>
                  {/* Add more countries as needed */}
                </Select>
              </FormControl>
            </Flex>

            {/* Row 4: Phone Number / What skill set(s) are you looking to hire? */}
            <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
              <FormControl isRequired>
                <Text fontWeight="500">
                  <FormLabel>Phone Number</FormLabel>
                </Text>
                <Input h="60px" value={formData.phone} name="phone" onChange={handleChange} placeholder="Phone Number" />
              </FormControl>

              <FormControl isRequired>
                <Text fontWeight="500">
                  <FormLabel>What skill set(s) are you looking to hire?</FormLabel>
                </Text>
                <SkillsInput skills={skills} onChange={setSkills} />
              </FormControl>
            </Flex>

            {/* Row 5: How soon do you want to hire? (full width) */}
            <FormControl isRequired mb="2rem">
              <Text fontWeight="500">
                <FormLabel>How soon do you want to hire?</FormLabel>
              </Text>
              <Input
                h="60px"
                placeholder="e.g. Immediately, 1-2 weeks..."
                value={formData.soon}
                name="soon"
                onChange={handleChange}
              />
            </FormControl>

            {/* Row 6: Comments (full width) */}
            <FormControl isRequired mb="2rem">
              <Text fontWeight="500">
                <FormLabel>Comments</FormLabel>
              </Text>
              <Textarea
                value={formData.comments}
                name="comments"
                onChange={handleChange}
                placeholder="Enter any additional details..."
                size="md"
                resize="vertical"
                rows={7}
              />
            </FormControl>



            {/* Submit Button */}
            <Flex justifyContent="center">
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
                Submit Form
              </Button>
            </Flex>
          </Box>

          {/* RIGHT COLUMN: Sidebar */}
          <Box
            bg="#F0F0F0"
            w={{ base: '100%', lg: '20%' }}
            p={3}
            borderRadius="4px"
          >
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
              onClick={()=>router.push('/talents')}
            >
              Learn More <ArrowForwardIcon ml={1} />
            </Link>
          </Box>
        </Flex>
      </Box>

      </HeaderAndFooter>
  );
};

export default Openings;
