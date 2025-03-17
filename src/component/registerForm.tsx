import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    VisuallyHidden,
    Flex,
    Text,
    Heading,
  } from '@chakra-ui/react';
  import { useRef,useState } from 'react';
  import { useForm } from 'react-hook-form';
  
  
  interface FormData {
    firstName: string;
    lastName: string;
    companyType: string;
    companyName: string;
    wordEmail: string;
    updatedCP: string;
    file: FileList;
  }
  
 
 const RegistrationForm = ()=>{
    const [fileName, setFileName] = useState('');
    return(
        <Flex>
                <Box mx={'auto'} p={5} bg={'white'} borderRadius={'4px'} w={{base:'100%',lg:'80%'}}>

                    <Heading m={{lg:'3rem auto'}} textAlign={'center'} fontSize={'28px'} color={'#2E3192'}> Want to Work with Us? Register </Heading>

                            <Flex gap={'3rem'} mt={'3rem'} flexDir={{base:'column',lg:'row'}}>
                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>First Name</FormLabel></Text>
                                            <Input h={'60px'} placeholder="First Name" />
                                    </FormControl>

                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>First Name</FormLabel></Text>
                                            <Input h={'60px'} placeholder="Last Name" />
                                    </FormControl>
                            </Flex>
                            <Flex gap={'3rem'} mt={'3rem'} flexDir={{base:'column',lg:'row'}}>
                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>Company Type</FormLabel></Text>
                                        <Select 
                                            h={'60px'}
                                            placeholder="Select company type"
                                        >
                                            <option value="startup">Startup</option>
                                            <option value="sme">SME</option>
                                            <option value="enterprise">Enterprise</option>
                                            <option value="government">Government</option>
                                            <option value="nonprofit">Non-Profit</option>
                                        </Select>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>Company Name</FormLabel></Text>
                                        <Input h={'60px'} placeholder="Enter company name" />
                                    </FormControl>
                            </Flex>
                            <Flex gap={'3rem'} mt={'3rem'} flexDir={{base:'column',lg:'row'}}>
                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>Work Email</FormLabel></Text>
                                            <Input h={'60px'} placeholder="First Name" />
                                    </FormControl>
                            </Flex>
                            <Flex gap={'3rem'} mt={'3rem'} flexDir={{base:'column',lg:'row'}}>
                                    <FormControl isRequired>
                                        <Text fontWeight={'500'}><FormLabel>Upoload Cv</FormLabel></Text>
                                        <Input
                                            id="cv-upload"
                                            type="file"
                                            h={'60px'}
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
                            </Flex>
                            <Flex>
                              <Button width={'fit-content'} mx={'auto'} m={'3rem auto'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Submit Details</Button>
                            </Flex>                       



                </Box>
        </Flex>
    )
 }

 export default RegistrationForm