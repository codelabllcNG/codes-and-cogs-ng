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
  const [activeTab, setActiveTab] = useState('Employer');
  
  const contentData: ContentData = {
    'Employer': [
      {
        image: '/explore.svg',
        title: 'Explore Talents',
        description: 'Browse and discover top-tier oil and gas talents'
      },
      {
        image: '/undergo.svg',
        title: 'Undergo KYC',
        description: 'Complete a quick business verification'
      },
      {
        image: '/Industry.svg',
        title: 'Hire Industry Experts',
        description: 'Hire professionals ready to drive results'
      }
    ],
    'Join Talents': [
      {
        image: '/register.svg',
        title: 'Register With Us',
        description: 'Submit your details to join our verified talent network.'
      },
      {
        image: '/trainning.svg',
        title: 'Screening & Training',
        description: 'Undergo assessments and training'
      },
      {
        image: '/roles.svg',
        title: 'Get Exclusive Roles',
        description: 'Passed screening? Get listed and matched to exclusive oil and gas roles'
      }
    ],
    'List Opening': [
      {
        image: '/explore.svg',
        title: 'Need Specific Skill?',
        description: 'Post your job openings and reach specialized talents.'
      },
      {
        image: '/listing.svg',
        title: 'Create Your Listing',
        description: 'Verify your business for a trusted hiring process.'
      },
      {
        image: '/match.svg',
        title: 'Get Tailored Match',
        description: 'Get skilled professional applicants for you.'
      }
    ]
  };

  return (
    <Box  mx={'auto'} bg="#EDF2FC" p={{ lg: "5rem 5rem", md: "1.5rem 2rem", base: "1rem 0" }}>
      <Heading mb={2} fontSize={{lg:'30px',base:'20px'}} color="#2E3192" fontWeight="600" textAlign="center">
        HOW OUR PLATFORM WORKS
      </Heading>

      <Flex
        m={{ base: '1.5rem auto', md: '2rem auto' }}
        borderRadius="48px"
        bg="#4C4FB0"
        p="1rem"
        gap={2}
        width={{ base: '100%', lg: '50%' }}
        mx="auto"
      >
        {['Employer', 'Join Talents', 'List Opening'].map((tab) => (
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
          mx={'auto'}
        >
          {contentData[activeTab]?.map((item, index) => (
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