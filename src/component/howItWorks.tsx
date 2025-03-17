import { useState } from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface TabContent {
  image: string;
  title: string;
  description: string;
}

interface ContentData {
  [key: string]: TabContent[];
}

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('Hire a Talent');
  
  const contentData: ContentData = {
    'Hire a Talent': [
      {
        image: 'explore.svg',
        title: 'Explore Talents',
        description: 'Access our pool of pre-vetted professionals across various industries.'
      },
      {
        image: 'undergo.svg',
        title: 'Review Profiles',
        description: 'Evaluate detailed profiles with skills, experience, and certifications.'
      },
      {
        image: 'icon1.svg',
        title: 'Hire Experts',
        description: 'Onboard selected professionals and start your project.'
      }
    ],
    'Lite Your Opening': [
      {
        image: 'post.svg',
        title: 'Post Opportunity',
        description: 'Share your project requirements with our platform.'
      },
      {
        image: 'match.svg',
        title: 'Get Matched',
        description: 'Receive curated matches based on your needs.'
      },
      {
        image: 'interview.svg',
        title: 'Interview & Select',
        description: 'Conduct interviews and choose the best fit.'
      }
    ],
    'Work With Us': [
      {
        image: 'apply.svg',
        title: 'Apply Now',
        description: 'Submit your application and credentials.'
      },
      {
        image: 'kyc.svg',
        title: 'Complete KYC',
        description: 'Verify your identity and qualifications.'
      },
      {
        image: 'projects.svg',
        title: 'Get Projects',
        description: 'Start working on matched opportunities.'
      }
    ]
  };

  return (
    <Box maxWidth="2000px" bg="#EDF2FC" p={{ lg: "5rem 5rem", md: "1.5rem 2rem", base: "1rem" }}>
      <Heading mb={2} color="#2E3192" fontWeight="600" textAlign="center">
        HOW IT WORKS
      </Heading>

      <Flex
        m={{ base: '1.5rem auto', md: '2rem auto' }}
        borderRadius="48px"
        bg="#4C4FB0"
        p="1rem"
        flexDirection={{ base: 'column', sm: 'row' }}
        gap={2}
        width={{ base: '100%', lg: '50%' }}
        mx="auto"
      >
        {['Hire a Talent', 'Lite Your Opening', 'Work With Us'].map((tab) => (
          <Box
            key={tab}
            borderRadius="48px"
            p={3}
            fontWeight="500"
            color={activeTab === tab ? '#1C55E0' : 'white'}
            bg={activeTab === tab ? 'white' : 'transparent'}
            flex={1}
            textAlign="center"
            whiteSpace="nowrap"
            cursor="pointer"
            transition="all 0.3s ease"
            _hover={{
              bg: activeTab === tab ? 'white' : 'rgba(255,255,255,0.1)'
            }}
            onClick={() => setActiveTab(tab)}
            role="button"
            tabIndex={0}
          >
            {tab}
          </Box>
        ))}
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap="2rem"
        justifyContent="center"
        mt="4rem"
        color="black"
        bg="white"
        width="100%"
      >
        {contentData[activeTab].map((item, index) => (
          <Box
            key={index}
            flex="1"
            p="1rem"
            width={{ base: '100%', md: '20%', lg: '30%' }}
            textAlign="center"
          >
            <Image mx="auto" src={item.image} alt={item.title} mb={4} />
            <Heading m="1rem" as="h3" size="md" fontWeight="500">
              {item.title}
            </Heading>
            <Text fontSize="sm">{item.description}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default HowItWorks;