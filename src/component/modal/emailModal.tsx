import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
  Input,
  Button,
  VStack,
  Box,
} from '@chakra-ui/react';

interface EmailJobModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailJobModal: React.FC<EmailJobModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Handle email submission logic here
    console.log('Sending job to email:', email);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="300px">
        <ModalHeader 
          py={3} 
          px={3} 
          fontSize="md" 
          borderBottomWidth="1px" 
          borderBottomColor="gray.200"
        >
          Email this job
        </ModalHeader>
        
        <ModalBody p={4}>
          <VStack spacing={4} align="stretch">
            <Text fontSize="sm" color="gray.600">
              Please provide the email address to receive this job description.
            </Text>
            
            <Input 
              placeholder="Enter Email ID" 
              size="md"
              borderRadius="md"
              value={email}
              onChange={handleEmailChange}
              type="email"
            />
            
            <Box textAlign="right">
              <Button 
                color="blue.600" 
                variant="ghost" 
                size="sm" 
                fontWeight="medium"
                onClick={handleSubmit}
              >
                Email Job
              </Button>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EmailJobModal;