import HeaderAndFooter from "@/component/layout/HeaderAndFooter";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Flex,
    Text,
    Heading,
    Select,
    Textarea
  } from '@chakra-ui/react';
  import {useState } from 'react';
  import React from 'react';




export default function RequestService () {
    const [formData, setFormData] = useState({
        companyType: '',
        companyName: '',
        companyEmail: '',
        country: '',
        phone: '',
        serviceType: '',
        comments: '',
      })
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
      }

    return(
        <HeaderAndFooter>
 
        {/* section 1 */}
        <Box
                        maxWidth="2000px"
                        textColor="white" // Change the text color if needed.
                        padding={{
                        lg: "1.5rem 5rem",
                        md: "1.5rem 2rem",
                        sm: "1rem",
                        base: "1rem",
                        }}
                        bg={'#0D0F3A'}
                        mx={'auto'}
                    >
                    <Box>   
                            <Heading textAlign={'center'} m={'3rem'} fontWeight={'500'}>Request Service</Heading>
                    </Box>


        </Box> 
        {/* section 1 */}
        <Flex
            gap="3rem"
            mt="3rem"
            flexDir={{ base: 'column', lg: 'row' }}
            align="flex-start"
            alignItems={'center'}
            padding={{
                lg: "1.5rem 5rem",
                md: "1.5rem 2rem",
                sm: "1rem",
                base: "1rem",
                }}
            mx={'auto'}
        >
                <Box flex="1">
                {/* Row 1: Company Type + Company Name */}
                <Flex gap="3rem" mb="3rem" flexDir={{ base: 'column', lg: 'row' }}>
                <FormControl isRequired>
                    <FormLabel fontWeight="500">Company Type</FormLabel>
                    <Select
                    name="companyType"
                    placeholder="Select"
                    value={formData.companyType}
                    onChange={handleChange}
                    h="60px"
                    >
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                    </Select>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel fontWeight="500">Company Name</FormLabel>
                    <Input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    h="60px"
                    />
                </FormControl>
                </Flex>

                {/* Row 2: Company Email */}
                <Flex gap="3rem" mb="3rem" flexDir={{ base: 'column', lg: 'row' }}>
                <FormControl isRequired flex="1">
                    <FormLabel fontWeight="500">Company Email</FormLabel>
                    <Input
                    name="companyEmail"
                    type="email"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    h="60px"
                    />
                </FormControl>
                </Flex>

                {/* Row 3: Country + Phone */}
                <Flex gap="3rem" mb="3rem" flexDir={{ base: 'column', lg: 'row' }}>
                <FormControl isRequired>
                    <FormLabel fontWeight="500">Country</FormLabel>
                    <Select
                    name="country"
                    placeholder="Select"
                    value={formData.country}
                    onChange={handleChange}
                    h="60px"
                    >
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel fontWeight="500">Phone Number</FormLabel>
                    <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    h="60px"
                    />
                </FormControl>
                </Flex>

                {/* Row 4: Service Type */}
                <Flex gap="3rem" mb="3rem" flexDir={{ base: 'column', lg: 'row' }}>
                <FormControl isRequired flex="1">
                    <FormLabel fontWeight="500">What type of service do you need?</FormLabel>
                    <Select
                    name="serviceType"
                    placeholder="Select"
                    value={formData.serviceType}
                    onChange={handleChange}
                    h="60px"
                    >
                    <option value="inspection">Inspection</option>
                    <option value="maintenance">Maintenance</option>
                    </Select>
                </FormControl>
                </Flex>

                {/* Row 5: Comments */}
                <Flex gap="3rem" mb="3rem" flexDir={{ base: 'column', lg: 'row' }}>
                <FormControl isRequired flex="1">
                    <FormLabel fontWeight="500">Comments</FormLabel>
                    <Textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    placeholder="Your message..."
                    minH="150px"
                    />
                </FormControl>
                </Flex>

                {/* Submit */}
                    <Button width={'fit-content'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)">
                       Submit Form
                   </Button>
                </Box>

                {/* ——— Aside Card ——— */}
                <Box
                    w={{ base: '100%', lg: '300px' }}
                    bg="gray.50"
                    p="1.5rem"
                    borderRadius="md"
                >
                    <Heading size="md" mb="2">Explore Our Services</Heading>
                    <Text mb="4" color="gray.600">
                    We offer various well solutions
                    </Text>
                    <Button variant="link" colorScheme="blue" rightIcon={<Box as="span" fontSize="xl">→</Box>}>
                    Learn More
                    </Button>
                </Box>
        </Flex>

        </HeaderAndFooter>
    )
}