import { Box, Grid, Heading, Text, Link, VStack, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

// Wrap Chakra Box with framer-motion
const MotionBox = motion(Box);

interface certificationInterface {
  title: string;
  subtitle: string;
  description: string[];
}

const certifications = [
  {
    title: "IWCF",
    subtitle: "International Well Control Forum",
    description: [
      "Essential for professionals involved in well drilling and maintenance.",
      "Covers pressure control, equipment usage, blowout prevention, and safety procedures.",
    ],
  },
  // ...additional certification entries
];

const CertificationGrid = () => {
  const router = useRouter();
  return (
    <Box textAlign="center">
      <Heading size="lg" m="2rem 0" color="#1C55E0" fontWeight="600">
        CERTIFICATION TRAINING FOR INDUSTRY EXCELLENCE
      </Heading>

      <Text mt="2rem" maxW="700px" mx="auto" color="gray.600">
        Navigating the oil and gas sector demands top-tier expertise and professional skills.
        Designed to meet the best standards, our certification trainings ensure you achieve
        excellence and remain competitive in the industry.
      </Text>

      <Grid
        mt={8}
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={6}
      >
        {Array(6)
          .fill(certifications[0])
          .map((cert: certificationInterface, index) => (
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
              whileHover={{ backgroundColor: "#2E3192" }}
            >
              <Heading size="md" _groupHover={{ color: "white" }}>
                {cert.title}
              </Heading>
              <Text fontWeight="semibold" color="gray.500" _groupHover={{ color: "white" }}>
                {cert.subtitle}
              </Text>
              <VStack align="start" mt={3} spacing={2}>
                {cert.description.map((line, i: number) => (
                  <Text key={i} fontSize="sm" color="gray.700" _groupHover={{ color: "white" }}>
                    • {line}
                  </Text>
                ))}
              </VStack>
              <Link
                display="flex"
                alignItems="center"
                mt={3}
                color="blue.500"
                fontWeight="bold"
                href="#"
                _groupHover={{ color: "white" }}
              >
                Read More <ArrowForwardIcon ml={1} />
              </Link>
            </MotionBox>
          ))}
      </Grid>

      <Button
        onClick={() => router.push('/certifications')}
        width="fit-content"
        m="2rem auto"
        borderRadius="4px"
        padding="12px 24px"
        textColor="white"
        bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
        boxShadow="2px 5px 5px rgba(51, 51, 51, 0.15)"
      >
        See All Certification
      </Button>
    </Box>
  );
};

export default CertificationGrid;
