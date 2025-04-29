import HeaderAndFooter from "@/component/layout/HeaderAndFooter";
import { Box, Heading, Text, Image, Flex,Icon,Button } from "@chakra-ui/react";
import { FaLightbulb, FaLeaf, FaUsers } from "react-icons/fa";

const imageData = [
  { name: 'Andy G', title: 'Managing Director', image: 'AndyG.svg' },
  { name: 'Andy G', title: 'Managing Director', image: 'AndyG.svg' },
  { name: 'Andy G', title: 'Managing Director', image: 'AndyG.svg' },
  { name: 'Andy G', title: 'Managing Director', image: 'AndyG.svg' },
  { name: 'Andy G', title: 'Managing Director', image: 'AndyG.svg' },
  { name: 'Andy G', title: 'Managing Director', image: 'AndyG.svg' },
  { name: 'Andy G', title: 'Managing Director', image: 'AndyG.svg' }
];

function About() {
  return (
<HeaderAndFooter >

      {/*section 1  */}
      <Box
        maxWidth="2000px"
        bgImage="url('About.svg')"
        bgSize="cover" // Ensures the image covers the entire container.
        bgPosition="center" // Centers the background image.
        bgRepeat="no-repeat" // Prevents the background image from repeating.
        mx="auto"
        textColor="white" // Change the text color if needed.
        padding={{
          lg: "1.5rem 5rem",
          md: "1.5rem 2rem",
          sm: "1rem",
          base: "1rem",
        }}
      >
        <Box
          m={{ lg: "12rem 0" }}
          w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
        >
          <Heading m={"2rem 0"}>Who We Are</Heading>

          <Text>
            We provide technology and oilfield services and connects oil and gas
            talents with corporate clients seeking specialised services.
          </Text>
        </Box>
      </Box>

      {/* section 2 */}
      <Box
        maxWidth="2000px"
        padding={{
          lg: "1.5rem 5rem",
          md: "1.5rem 2rem",
          sm: "1rem",
          base: "1rem",
        }}
        mx={'auto'}
        mt={'5rem'}

      >
        <Box w={"100%"} >
          <Heading fontWeight={"500"} fontSize={"28px"} width={"fit-content"}>
            About
            <Box
              h="3px"
              fontSize={"28px"}
              mt={"1.5rem"}
              borderRadius={"12px"}
              w="100%"
              bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
            ></Box>
          </Heading>

          <Heading fontSize={"20px"} m={"2rem 0"} fontWeight={"600"}>
            Innovative Solutions for the Future of Oil & Gas
          </Heading>

          <Box m={"1rem 0"}>
            <Text>
              Codes and Cogs is a tech and oilfield services company at the
              forefront of innovation in the energy sector. We leverage advanced
              computing capabilities to provide cutting-edge solutions and are
              also dedicated to developing local talent. We profer solutions in
              areas such as well insight analysis, reservoir management,
              thru-tubing well intervention, non-destructive testing (NDT),
              slickline, coiled tubing, well testing, wellhead maintenance, and
              the provision of specialized tools and equipment.
            </Text>
            <Text mt={"1rem"}>
              Our focus is on enabling safer, more efficient oil and gas
              production while minimizing carbon emissions and exploring
              alternative energy solutions. Beyond operations, we are dedicated
              to developing world-class training tools for the oil and gas
              sector and connecting businesses with top-tier talent globally
              through our rigorous recruitment processes.
            </Text>
          </Box>
        </Box>
      </Box>

      {/* section 3 */}

      <Box
        maxWidth="2000px"
        padding={{
          lg: "1.5rem 5rem",
          md: "1.5rem 2rem",
          sm: "1rem",
          base: "1rem",
        }}
        mx={'auto'}
        mb={'3rem'}
      >
        <Box w={"100%"} m={"0rem 0"}>
          <Heading fontWeight={"500"} m={'3rem 0'} fontSize={"28px"} width={"fit-content"}>
            OUR TEAM EXPERTISE
            <Box
              h="3px"
              fontSize={"28px"}
              mt={"1.5rem"}
              borderRadius={"12px"}
              w="100%"
              bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
            ></Box>
          </Heading>
          

          <Flex wrap="wrap" justify="center" gap={4}>

      {imageData.map((item, index) => (
        <Flex
          key={index}
          flexDir="column"
          position="relative"
          width={{ base: "calc(100% - 16px)", md: "calc(50% - 16px)", lg: "calc(25% - 16px)" }}
        >
          <Image
            src={item.image}
            alt={item.name}
            w="100%"
            h="500px"
            objectFit="cover"
          />
          {/* Gradient Overlay */}
          <Flex
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 100%)"
            zIndex={1}
          />
          {/* Text Overlay */}
          <Box
            position="absolute"
            bottom="5%"
            left="3%"
            color="white"
            zIndex={2}
            p={2}
          >
            <Heading fontSize="20px" fontWeight="500">
              {item.name}
            </Heading>
            <Text>{item.title}</Text>
          </Box>
        </Flex>
      ))}
    </Flex>

        </Box>
      </Box>


      {/* section 4 */}
      <Box
          maxWidth="2000px"
          bgImage="url('Footer.svg')"
          bgSize="cover"        // Ensures the image covers the entire container.
          bgPosition="center"   // Centers the background image.
          bgRepeat="no-repeat"  // Prevents the background image from repeating.
          mx="auto"
          textColor="white"     // Change the text color if needed.
          padding={{ lg: "5rem 5rem", md: "1.5rem 2rem", sm: "1rem", base: "1rem" }}
          
      >

<Heading as="h2" textAlign="center" mb={4}>
          Our Core Values
        </Heading>

        {/* Subheading / Description */}
        <Text textAlign="center" maxW="2xl" mx="auto" mb={12}>
          We are committed to driving innovation, sustainability, and excellence
          in energy production and global workforce development.
        </Text>
        <Flex gap={'3rem'} flexDir={{base:'column',sm:'column',md:'row',lg:'row'}} justifyContent={'center'}>
            
                <Box
                    bg="white"
                    color="gray.800"
                    p={6}
                    borderRadius="md"
                    boxShadow="lg"
                    textAlign="center"
                    flex="1"
                    minW={{ base: "100%", md: "30%" }}
                >
                    <Flex align="center" justify="center" mb={4}>
                    <Icon as={FaLightbulb} boxSize={8} color="blue.500" />
                    </Flex>
                    <Heading as="h3" size="md" mb={2}>
                    Innovation in Energy
                    </Heading>
                    <Text>
                    Advanced solutions in well insight analysis and reservoir
                    management.
                    </Text>
                </Box>
                <Box
            bg="white"
            color="gray.800"
            p={6}
            borderRadius="md"
            boxShadow="lg"
            textAlign="center"
            flex="1"
            minW={{ base: "100%", md: "30%" }}
          >
            <Flex align="center" justify="center" mb={4}>
              <Icon as={FaLeaf} boxSize={8} color="green.500" />
            </Flex>
            <Heading as="h3" size="md" mb={2}>
              Sustainability Focus
            </Heading>
            <Text>
              Enabling efficient oil production while reducing carbon emissions.
            </Text>
          </Box>
                <Box
                    bg="white"
                    color="gray.800"
                    p={6}
                    borderRadius="md"
                    boxShadow="lg"
                    textAlign="center"
                    flex="1"
                    minW={{ base: "100%", md: "30%" }}
                >
                    <Flex align="center" justify="center" mb={4}>
                    <Icon as={FaUsers} boxSize={8} color="purple.500" />
                    </Flex>
                    <Heading as="h3" size="md" mb={2}>
                    Workforce Excellence
                    </Heading>
                    <Text>
                    Connecting businesses with talents through rigorous recruitment.
                    </Text>
                </Box>
        </Flex>
      </Box>

      {/* sectione 5 */}
       <Flex maxWidth={'2000px'} alignItems={'center'}  bg={''}  mx={'auto'} textColor={''}   padding={{lg:'0.1rem 5rem',md:'1.5rem 2rem',sm:'1rem',base:'1rem'}}>
                      <Flex  flexDir={{ base:'column', sm:'column', md:'row',lg:'row'}} alignItems={'center'}>
                        <Box w={{base:'100%',sm:'100%',md:'100%',lg:'50%'}}>   
                            <Heading fontSize={'20px'} m={'2rem 0'} fontWeight={'600'} >Want to find out more?</Heading>
                            
                            <Box m={'1rem 0'}>
                            <Text>We have a team of team of experts ready to answer your enquiries and help you get what you need.</Text>
                           </Box>
      
                            <Button width={'fit-content'} m={'3rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Contact us </Button>
                            
                        </Box>
                        <Box display={'flex'} justifyContent={'flex-end'} w={{base:'100%',sm:'100%',md:'100%',lg:'50%'}}>
                             <Image alt="Media" src="AboutImage.svg"></Image>
                          </Box>
                      </Flex>
       </Flex>

 </HeaderAndFooter>
  );
}

export default About;
