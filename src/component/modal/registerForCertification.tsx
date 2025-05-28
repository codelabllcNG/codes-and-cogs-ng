import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
  Input,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Button,
  VStack,
  Wrap,
  WrapItem,Tag,TagLabel,TagCloseButton
} from '@chakra-ui/react';

interface RegisterForCertifiationProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterForCertifiation: React.FC<RegisterForCertifiationProps> = ({ isOpen, onClose }) => {

  const [certifications,setCertifications] = useState<string[]>([])
  const [formData,setFormData] = useState({
    fname:'',
    lname:'',
    job:'',
    cname:'',
    certification:['']

  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name,value} = e.target

        setFormData((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
  };

  const handleSubmit = () => {
    // Handle email submission logic here
    formData.certification=certifications
    console.log({formData})
    onClose();
  };

  const handleCertificationsChange = (data:string)=>{
      if(certifications.includes(data))return
      if(data==="")return
      setCertifications([...certifications,data])
      console.log(certifications)
  }

  const removeCertification =(certification:string)=>{
    setCertifications(certifications.filter(cert=>cert!==certification))
  }


  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW={'70%'} p={'1rem'}>
        <ModalHeader 
          py={3} 
          px={3} 
         fontSize={'25px'}
         color={"#2E3192"}
        >
          Please Fill Out The Form Bellow 
        </ModalHeader>
        
        <ModalBody p={4}>
          <VStack spacing={4} align="stretch">
                        <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
                          <FormControl isRequired>
                            <Text fontWeight="500">
                              <FormLabel>First Name</FormLabel>
                            </Text>
                            <Input h="60px" placeholder="First Name" name='fname' onChange={(e)=>handleChange(e)} />
                          </FormControl>
                
                          <FormControl isRequired>
                            <Text fontWeight="500">
                              <FormLabel>Last Name</FormLabel>
                            </Text>
                            <Input h="60px" placeholder="Last Name" name='lname' onChange={(e)=>handleChange(e)} />
                          </FormControl>
                        </Flex>

                        <FormControl isRequired>
                        <Text fontWeight="500">
                            <FormLabel>Email</FormLabel>
                        </Text>
                        <Input h="60px" placeholder="Email" name='email'  />
                        </FormControl>

                                    <Flex gap="3rem" mb="2rem" flexDir={{ base: 'column', lg: 'row' }}>
                                      <FormControl isRequired>
                                        <Text fontWeight="500">
                                          <FormLabel>Job Title</FormLabel>
                                        </Text>
                                       <Input h="60px" name="job"  placeholder="Enter Job Title" onChange={(e)=>handleChange(e)} />
                                      </FormControl>
                        
                                      <FormControl isRequired>
                                        <Text fontWeight="500">
                                          <FormLabel>Company Name</FormLabel>
                                        </Text>
                                        <Input h="60px" name="cname"  placeholder="Enter company name" onChange={(e)=>handleChange(e)} />
                                      </FormControl>
                                    </Flex>

                                     <FormControl isRequired>
                                        <Text fontWeight="500">
                                          <FormLabel>Select Your Preferred Certification Tracks(s)</FormLabel>
                                        </Text>

                                        <Wrap display={certifications.length > 0 ?'flex':'none'} spacing={2} mb={2}>
                                        {certifications.map((certification, index) => (
                                            <WrapItem key={index}>
                                            <Tag borderRadius="full" variant="solid" colorScheme="blue">
                                                <TagLabel>{certification}</TagLabel>
                                                <TagCloseButton onClick={() => removeCertification(certification)} />
                                            </Tag>
                                            </WrapItem>
                                        ))}
                                        </Wrap>

                                        <Select h="60px" name="ctype" placeholder="Select company type" onChange={(e)=>handleCertificationsChange(e.target.value)}>
                                                <option value="bhp-well-testing">BHP Well Testing</option>
                                                <option value="data-acquisition">Data Acquisition</option>
                                                <option value="hse-1-2-3">HSE 1, 2, 3</option>
                                                <option value="instrumentation">Instrumentation</option>
                                                <option value="introduction-to-upstream-oil-and-gas">Introduction to the Upstream Oil and Gas</option>
                                                <option value="iwcf-levels-1-4">IWCF Levels 1-4</option>
                                                <option value="nebosh">NEBOSH</option>
                                                <option value="reservoir-modeling-and-simulation">Reservoir Modeling and Simulation</option>
                                                <option value="scada-programming">SCADA Programming</option>
                                                <option value="slickline-operation-1-entry-level">Slickline Operation 1 (Entry-Level)</option>
                                                <option value="slickline-operations-2-advanced-fishing">Slickline Operations 2 (Advanced) - Fishing</option>
                                                <option value="wellhead-maintenance-levels-1-2-3">Wellhead Maintenance - Levels 1, 2, 3</option>
                                        </Select>
                                      </FormControl>
                                     <Flex justifyContent="left" mt={'3rem'}>
                                        <Button
                                            _hover={{ bg: "#2E3192" }}
                                            borderRadius="4px"
                                            px="24px"
                                            py="12px"
                                            textColor="white"
                                            bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
                                            boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"
                                            onClick={handleSubmit}
                                        >
                                            Submit Application
                                        </Button>
                             </Flex>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RegisterForCertifiation;