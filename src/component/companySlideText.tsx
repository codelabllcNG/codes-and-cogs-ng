import { Box, Flex, Text,Heading } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const companies = [
  'CerTech Energy',
  'Nok Engineering',
  'WeAfri',
  'Star Offshore',
  'Cadelab LLC'
];

const slide = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const CompanySlideText = () => {
  return (
    <Box background={'#383B9C'} mt={'3rem'} width={'100vw'} >
    <Flex     maxWidth={'2000px'} 
        alignItems={'center'} 
        mx={'auto'} 
        padding={{
          base: '0rem 1rem',
          sm: '0rem 1.5rem',
          md: '0rem 2rem',
          lg: '1rem 5rem'
        }} align="center" gap={4}  py={4}  background={'#383B9C'} >
      <Heading display={{lg:'block',base:'none'}}  fontSize="18px" fontWeight="400" color={'white'} whiteSpace="nowrap">
        Companies who hire our talents:
      </Heading>
      <Heading display={{lg:'none',base:'block'}} fontSize="18px" fontWeight="400" color={'white'} whiteSpace="nowrap">
        Clients:
      </Heading>
      
      <Box overflow="hidden" flex="1">
        <Box
          display="inline-block"
          whiteSpace="nowrap"
          animation={`${slide} 20s linear infinite`}
          _hover={{ animationPlayState: 'paused' }}
        >
          {companies.map((company, index) => (
            <Text
              as="span"
              key={index}
              fontSize="lg"
              px={8}
              color="white"
              display="inline-block"
            >
              {company}
            </Text>
          ))}
        </Box>
      </Box>
    </Flex>
    </Box>
  );
};

export default CompanySlideText;