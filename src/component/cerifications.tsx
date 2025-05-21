import { Box, Grid, Heading, Text, VStack,Button} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useGetCertificatesHook } from "./Hooks/certificationHook";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { useRouter } from "next/router";

// Wrap Chakra Box with framer-motion
const MotionBox = motion(Box);

interface certificationInterface {
  title: string;
  subtitle: string;
  description: string;
}

interface cerificationsProps {
  number? : number;
  showButton?: boolean;
}



const CertificationGrid:React.FC<cerificationsProps> = ({number,showButton}) => {
  const {data} = useGetCertificatesHook()
  const [certifications,setCertifications] = useState<certificationInterface[]>([])
  const router = useRouter()


  useEffect(()=>{
    setCertifications(data?.certifications)
  },[data])
  return (
    <Box textAlign="center">

      <Heading size="lg" m={{lg:"2rem 0",base:"1rem 0"}} color="#1C55E0" fontWeight="600">
        CERTIFICATION TRAINING FOR INDUSTRY EXCELLENCE
      </Heading>

      <Text mt="2rem" maxW="900px" mx="auto" color="gray.600">
        Navigating the oil and gas sector demands top-tier expertise and professional skills.
        Designed to meet the best standards, our certification trainings ensure you achieve
        excellence and remain competitive in the industry.
      </Text>

      <Grid
        mt={8}
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={6}
      >
        { (number? certifications?.slice(0,6) : certifications)?.map((cert: certificationInterface, index) => (
            <MotionBox
              key={index}
              role="group"
              p={6}
              borderRadius="md"
              boxShadow="sm"
              border="1px solid"
              borderColor="gray.200"
              bg="white"
              textAlign="left"
              // Flip animation
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              // Background flip on hover
              whileHover={{ backgroundColor: "#2E3192",color:"white" }}
            >
              <Heading size="md" _groupHover={{ color: "white" }}>
                {cert?.title}
              </Heading>
              <Text fontWeight="semibold" color="gray.500" _groupHover={{ color: "white" }}>
                {cert?.subtitle}
              </Text>
              <VStack align="start" mt={3} spacing={2}>
                 <Box dangerouslySetInnerHTML={{ __html: cert?.description }} />
              
              </VStack>
  
            </MotionBox>
          ))}
      </Grid>

      <Button
        onClick={() => router.push('/certifications')}
        width="fit-content"
        m={{lg:"2rem auto",base:"1rem auto"}}
        borderRadius="4px"
        padding="12px 24px"
        textColor="white"
        bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
        boxShadow="2px 5px 5px rgba(51, 51, 51, 0.15)"
        _hover={{ bg: "#2E3192" }}
        display={showButton? 'block' : 'none'}
      >
        See All Certification
      </Button>
    </Box>
  );
};

export default CertificationGrid;
