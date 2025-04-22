import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent, 
  ModalHeader,
  ModalBody,
  VStack,
  Text,
  HStack,
  Divider,
  Icon,
  Button,
} from '@chakra-ui/react';
import { Link } from 'lucide-react';

interface ShareJobModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareJobModal: React.FC<ShareJobModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="240px">
        <ModalHeader 
          py={3} 
          px={3} 
          fontSize="md" 
          borderBottomWidth="1px" 
          borderBottomColor="gray.200"
        >
          Share job via:
        </ModalHeader>
        
        <ModalBody p={0}>
          <VStack spacing={0} align="stretch">
            <Button variant="ghost" justifyContent="flex-start" height="40px" borderRadius={0} onClick={onClose}>
              <HStack spacing={3}>
                <Text fontWeight="bold" w="24px" textAlign="center">in</Text>
                <Text>LinkedIn</Text>
              </HStack>
            </Button>
            
            <Divider />
            
            <Button variant="ghost" justifyContent="flex-start" height="40px" borderRadius={0} onClick={onClose}>
              <HStack spacing={3}>
                <Text fontSize="lg" w="24px" textAlign="center">f</Text>
                <Text>Facebook</Text>
              </HStack>
            </Button>
            
            <Divider />
            
            <Button variant="ghost" justifyContent="flex-start" height="40px" borderRadius={0} onClick={onClose}>
              <HStack spacing={3}>
                <Text fontSize="lg" w="24px" textAlign="center">𝕏</Text>
                <Text>X</Text>
              </HStack>
            </Button>
            
            <Divider />
            
            <Button variant="ghost" justifyContent="flex-start" height="40px" borderRadius={0} onClick={onClose}>
              <HStack spacing={3}>
                <Icon as={Link} boxSize={4} w="24px" textAlign="center" />
                <Text>Copy link</Text>
              </HStack>
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ShareJobModal;