import {
    Box,
    Flex,
    Heading,
    Text,
    Input,
    Button,
    Link,
    Image
  } from "@chakra-ui/react";
  import { RiInstagramLine, RiLinkedinBoxLine ,RiFacebookCircleLine,RiTwitterXFill  } from "react-icons/ri";
  
  const Footer = () => {
    return (
      <Box
          maxWidth="2000px"
          bgImage="url('/Footer.svg')"
          bgSize="cover"        // Ensures the image covers the entire container.
          bgPosition="center"   // Centers the background image.
          bgRepeat="no-repeat"  // Prevents the background image from repeating.
          mx="auto"
          textColor="white"     // Change the text color if needed.
          padding={{ lg: "1.5rem 5rem", md: "1.5rem 2rem", sm: "1rem", base: "1rem" }}
      >
        <Flex
          mx="auto"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          m={'3rem 0'}
          gap={'2rem'}
          
        >
          <Flex width={{lg:'40%',base:'100%'}}  gap={'2rem'} justifyContent={'space-between'} >
              {/* Useful Links */}
              <Flex flexDir={'column'} gap={'2rem'}>
                <Heading fontSize={'18px'} fontWeight={'500'}>Useful Link</Heading>
                {["Home", "About Us", "Services", "Work With Us", "Investors", "Contact Us"].map((link) => (
                  <Link key={link} href="#" color="white" _hover={{ color: "white" }}>
                    {link}
                  </Link>
                ))}
              </Flex>
      
              {/* Resources */}
              <Flex flexDir={'column'} gap={'2rem'}>
                <Heading fontSize={'18px'} fontWeight={'500'}>Resources</Heading>
                {[
                  "Privacy Policy",
                  "Terms and Condition",
                  "University of Oil and Gas",
                  "Corporate Social Responsibility",
                  "Whitepaper",
                ].map((link) => (
                  <Link key={link} href="#" color="white" _hover={{ color: "white" }}>
                    {link}
                  </Link>
                ))}
              </Flex>
          </Flex>
          
  
          {/* Services */}
          <Flex mt={{base:'2rem'}} flexDir={'column'} gap={'2rem'}>
            <Heading fontSize={'18px'} fontWeight={'500'}>Services</Heading>
            {[
              "Well Insights",
              "Drilling Support",
              "Equipment Services",
              "Training Hub",
              "Talent Network",
              "Sustainable Tech",
            ].map((link) => (
              <Link key={link} href="#" color="white" _hover={{ color: "white" }}>
                {link}
              </Link>
            ))}
          </Flex>
  
          {/* Logo & Newsletter */}
          <Flex flexDir={'column'} gap={'2rem'}>
             <Box display={'flex'} >
                <Image mx={{base:'auto',lg:'0'}} alt="Media" src={'/LOGO-WHITE.svg'}/>
             </Box>
            <Text align={{base:'center',lg:'left'}} fontSize="sm">Subscribe to our Newsletter</Text>
             
            {/* <Box bg={'red'} w={'100%'}> */}
            <Box  position="relative" w="80%" >
              <Input
                placeholder="Enter your Email"
                bg="#2B2E3C"
                border="none"
                _focus={{ outline: "none" }}
                color="white"
                pr="6rem"               // make room for the button
                borderRadius="md"
                p={8}
              />
              <Button
                position="absolute"
                top="50%"
                right="0"
                p={6}
                transform="translate(50%, -50%)"   // shift half outside
                bg="white"
                color="#1D2130"
                borderRadius="md"
                height="2.5rem"        // match input height
                px="1.5rem"
              >
                Subscribe
              </Button>
            </Box>
          </Flex>

        </Flex>
         <hr />
        {/* Social Icons & Copyright */}
        <Flex
          mt={8}
          direction={'column'}
          align="center"
          justify="space-between"
       
          mx="auto"
        >
         
          <Flex gap={'1rem'} m={'1rem auto'}>
            <Link><RiLinkedinBoxLine fontSize={'40px'} /></Link>
            <Link><RiFacebookCircleLine fontSize={'40px'} /></Link>
            <Link><RiInstagramLine fontSize={'40px'} /></Link>
            <Link><RiTwitterXFill fontSize={'40px'} /></Link>
          </Flex>
  
          <Text fontSize="sm" color="white" >
            © 2025 Code Lab Projects Company. All rights reserved.
          </Text>
        </Flex>
      </Box>
    );
  };
  
  export default Footer;
  