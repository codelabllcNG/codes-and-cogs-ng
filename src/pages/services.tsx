import { Flex, Box, Heading, Text, Link, Image,Button } from "@chakra-ui/react";
import Navigator from "@/component/navigator";
import Footer from "@/component/footer";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Services = () => {
  return (
    <Box>
      <Navigator></Navigator>
      {/*section 1  */}
      <Box
        maxWidth="2000px"
        bgImage="url('Services.svg')"
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
          <Heading m={"2rem 0"}>
            Unlock Actionable Insights for Peak Well Performance
          </Heading>

          <Text>
            We provide technology and oilfield services and connects oil and gas
            talents with corporate clients seeking specialised services.
          </Text>
        </Box>
      </Box>

      {/* Section 2 */}
      <Box
        maxWidth="2000px"
        mx="auto"
        padding={{
          lg: "3.5rem 5rem",
          md: "1.5rem 2rem",
          sm: "1rem",
          base: "1rem",
        }}
      >
        <Heading
          fontWeight={"600"}
          textAlign={"center"}
          color={"#2E3192"}
          fontSize={"28px"}
        >
          OUR KEY SERVICES
        </Heading>

        <Flex
          gap={"5rem"}
          mt={"5rem"}
          flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }}
          justifyContent={"center"}
        >
          <Box
            borderRadius="md"
            boxShadow="sm"
            borderColor="gray.200"
            w={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }}
          >
            <Image width={"100%"} src="Service1.svg" />

            <Heading mt={"1rem"} size="md">
              Well Insight Services
            </Heading>

            <Text mt={"2rem"}>
              We provide precise well testing solutions, including Surface Well
              Testing and Bottom Hole Pressure (BHP) analysis, to evaluate
              reservoir performance and optimize production using advanced
              AI-driven methodologies.
            </Text>

            <Link
              display="flex"
              alignItems="center"
              mt={3}
              color="#2E3192"
              fontWeight="bold"
              href="#"
            >
              Read More <ArrowForwardIcon ml={1} />
            </Link>
          </Box>
          <Box
            borderRadius="md"
            boxShadow="sm"
            borderColor="gray.200"
            w={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }}
          >
            <Image width={"100%"} src="Service2.svg" />

            <Heading mt={"1rem"} size="md">
              Thru Tubing Re-Entry Solutions
            </Heading>

            <Text mt={"2rem"}>
              Our specialised tools include thru-tubing completions and
              slickline services, offering efficiency and precision for well
              intervention and maintenance in operational environments.
            </Text>

            <Link
              display="flex"
              alignItems="center"
              mt={3}
              color="#2E3192"
              fontWeight="bold"
              href="#"
            >
              Read More <ArrowForwardIcon ml={1} />
            </Link>
          </Box>
        </Flex>

        <Flex
          gap={"5rem"}
          mt={"5rem"}
          flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }}
          justifyContent={"center"}
        >
          <Box
            borderRadius="md"
            boxShadow="sm"
            borderColor="gray.200"
            w={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }}
          >
            <Image width={"100%"} src="Service3.svg" />

            <Heading mt={"1rem"} size="md">
              NDT and PCE Integrity Testing
            </Heading>

            <Text mt={"2rem"}>
              We deliver comprehensive corrosion control solutions, including
              non-destructive testing (NDT) and treatment, ensuring asset
              integrity and extended equipment lifespan.
            </Text>

            <Link
              display="flex"
              alignItems="center"
              mt={3}
              color="#2E3192"
              fontWeight="bold"
              href="#"
            >
              Read More <ArrowForwardIcon ml={1} />
            </Link>
          </Box>
          <Box
            borderRadius="md"
            boxShadow="sm"
            borderColor="gray.200"
            w={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }}
          >
            <Image width={"100%"} src="Service4.svg" />

            <Heading mt={"1rem"} size="md">
              Equipment Rentals
            </Heading>

            <Text mt={"2rem"}>
              Access a wide range of reliable rental equipment, from wellhead
              scaffolds to PCE testing devices, designed to support seamless and
              efficient oilfield operations.
            </Text>

            <Link
              display="flex"
              alignItems="center"
              mt={3}
              color="#2E3192"
              fontWeight="bold"
              href="#"
            >
              Read More <ArrowForwardIcon ml={1} />
            </Link>
          </Box>
        </Flex>
      </Box>

      {/* section 3 */}
      <Box
        maxWidth="2000px"
        bgImage="url('Footer.svg')"
        bgSize="cover" // Ensures the image covers the entire container.
        bgPosition="center" // Centers the background image.
        bgRepeat="no-repeat" // Prevents the background image from repeating.
        mx="auto"
        textColor="white" // Change the text color if needed.
        padding={{
          lg: "5rem 5rem",
          md: "1.5rem 2rem",
          sm: "1rem",
          base: "1rem",
        }}
      >
        <Heading mb={2} fontWeight={'500'} textAlign={'center'}>
          Why Choose Codes and Cogs?
        </Heading>
        <Text textAlign={'center'}  m={'1rem'}>
          Unmatched Expertise, Innovation, and Global Oilfield Solutions
          Tailored for Success
        </Text>

        {/* Three Columns */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={'2rem'}
          justifyContent={'center'}
          mt={'4rem'}
          color={'black'}
        >
          <Box
            flex="1"
            bg={"#FFF"}
            p={'1rem'}
            width={{base:'100%',sm:'100%',md:'20%', lg:'20%'}}
            borderRadius="md"
            boxShadow="md"
            textAlign="left"
          >
            <Heading as="h3" size="md" mb={3} >
              End-to-End Solutions
            </Heading>
            <Text>
              We are your one-stop partner for comprehensive oilfield services,
              from well testing and specialized tool deployment, to production
              enhancement, and corrosion control.
            </Text>
          </Box>

          <Box
            flex="1"
            bg={"#FFF"}
            p={'1rem'}
            width={{base:'100%',sm:'100%',md:'20%', lg:'20%'}}
            borderRadius="md"
            boxShadow="md"
            textAlign="left"
          >
            <Heading as="h3" size="md" mb={3} >
              Advanced Technology
            </Heading>
            <Text>
              We leverage our patented pumping simulations and AI/ML-based tools
              to ensure accuracy, efficiency, and equipment reliability across
              every region.
            </Text>
          </Box>

          <Box
            flex="1"
            bg={"#FFF"}
            p={'1rem'}
            width={{base:'100%',sm:'100%',md:'20%', lg:'20%'}}
            borderRadius="md"
            boxShadow="md"
            textAlign="left"
          >
            <Heading as="h3" size="md" mb={3} >
              Global Reach
            </Heading>
            <Text>
              With a proven track record of oil and gas operations worldwide,
              Codes and Cogs operates across all major regions, including remote
              and challenging environments.
            </Text>
          </Box>
        </Flex>
      </Box>


      {/* section 4 */}
      <Box
        maxWidth="2000px"
        bgImage="url('WhiteBg.svg')"
        bgSize="cover" // Ensures the image covers the entire container.
        bgPosition="center" // Centers the background image.
        bgRepeat="no-repeat" // Prevents the background image from repeating.
        mx="auto"
        textColor="#2E3192" // Change the text color if needed.
        padding={{
          lg: "5rem 5rem",
          md: "1.5rem 2rem",
          sm: "1rem",
          base: "1rem",
        }}
      >
          <Box textAlign="center" mb={{ base: 6, md: 8 }}>
            <Heading fontWeight={'600'} fontSize={{base:'25px',sm:'25px',md:'36px',lg:'36px',}} mb={3} >
              Your Partner in High-Performance Oilfield Services
            </Heading>
            <Text fontSize="lg" mb={5}>
              Join industry leaders in harnessing top-tier solutions for every
              aspect of your projects.
            </Text>
            <Button width={'fit-content'} m={'3rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Become A Consultant </Button>
             
          </Box>
      </Box>

      <Footer></Footer>
    </Box>
  );
};

export default Services;
