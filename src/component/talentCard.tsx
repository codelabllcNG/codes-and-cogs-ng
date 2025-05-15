import React from 'react';
import { Box, Image, Heading, Text, Flex, Button } from '@chakra-ui/react';
import { TalentInterface,TalentStoreInterface } from './Interface/talents';
import { upperCaseFirstLetter } from './utils';
import { useRouter } from 'next/router';
import { useTalentsStore } from '@/store/talentStore';

// Define the Talent and Skill interfaces
export interface Skill {
  name: string;
}



// Props for the TalentCard component
export interface TalentCardProps {
  talent: TalentInterface;
}



const TalentCard: React.FC<TalentCardProps> = ({ talent }) => {
  const router = useRouter();
  const editSelectedTalent = useTalentsStore((state: TalentStoreInterface) => state.editSelectedTalent);

  const viewProfile = (data: TalentInterface) => {
        editSelectedTalent(data);
        router.push(`/talents/bio`);
  };

  return (
    <Box w="100%" boxShadow="lg" p={2} bg="white" borderRadius="md">
      <Box w="100%" h="230px" overflow="hidden" borderRadius="md">
        <Image
          src={talent.image}
          alt={talent.name}
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box>

      <Heading m="0.2rem 0" fontSize={["md", "20px"]} color="#333">
        {upperCaseFirstLetter(talent.name)}
      </Heading>
      <Text m="0.2rem 0" fontSize={["sm", "16px"]} color="#2E3192">
        {upperCaseFirstLetter(talent.role)}
      </Text>
      <Text fontSize={["xs", "14px"]} color="#333">
        Expertise
      </Text>
      <Flex
        mt={3}
        wrap="wrap"
        gap={2}
        h="20vh"
        overflowY="auto"
        alignContent="flex-start"
        alignItems="flex-start"
        css={{
            /* Webkit browsers (Chrome, Safari) */
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            /* Firefox */
            scrollbarWidth: 'none',
            /* IE 10+ */
            '-ms-overflow-style': 'none',
          }}
      >
        {talent.expertises.slice(0, 6).map((skill, skillIndex) => (
          <Flex
            key={skillIndex}
            p={2}
            borderRadius="12px"
            border="0.8px solid #A3A2A2"
            fontSize={["xs", "sm"]}
            flex="0 0 auto"
          >
            {skill.name}
          </Flex>
        ))}
      </Flex>

      <Button
        onClick={() => viewProfile(talent)}
        width="fit-content"
        my={6}
        borderRadius="4px"
        px={6}
        py={3}
        colorScheme="blue"
        bgGradient="linear(to-r, #2E3192, #1C55E0)"
        boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"
        _hover={{ opacity: 0.9 }}
      >
        View Profile
      </Button>
    </Box>
  );
};

export default TalentCard;
