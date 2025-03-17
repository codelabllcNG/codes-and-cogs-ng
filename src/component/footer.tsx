import {
    Box,
    Flex,
    Heading,
    Text,
    VStack,
    Input,
    Button,
    Link,
    HStack,
    IconButton,
    Image
  } from "@chakra-ui/react";
  import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <Box
          maxWidth="2000px"
          bgImage="url('Footer.svg')"
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
          
          {/* Useful Links */}
          <Flex flexDir={'column'} gap={'2rem'}>
            <Heading fontSize={'18px'} fontWeight={'500'}>Useful Link</Heading>
            {["Home", "About Us", "Services", "Work With Us", "Investors", "Contact Us"].map((link) => (
              <Link key={link} href="#" color="gray.400" _hover={{ color: "white" }}>
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
              <Link key={link} href="#" color="gray.400" _hover={{ color: "white" }}>
                {link}
              </Link>
            ))}
          </Flex>
          
  
          {/* Services */}
          <Flex flexDir={'column'} gap={'2rem'}>
            <Heading fontSize={'18px'} fontWeight={'500'}>Services</Heading>
            {[
              "Well Insights",
              "Drilling Support",
              "Equipment Services",
              "Training Hub",
              "Talent Network",
              "Sustainable Tech",
            ].map((link) => (
              <Link key={link} href="#" color="gray.400" _hover={{ color: "white" }}>
                {link}
              </Link>
            ))}
          </Flex>
  
          {/* Logo & Newsletter */}
          <Flex flexDir={'column'} gap={'2rem'}>
             <Box>
             <Image src={'LOGO-WHITE.svg'}/>
             </Box>
            <Text fontSize="sm">Subscribe to our Newsletter</Text>
            <Flex bg="gray.800" p={2} borderRadius="md">
              <Input
                placeholder="Enter your Email"
                bg="gray.800"
                border="none"
                _focus={{ outline: "none" }}
                color="white"
              />
              <Button colorScheme="whiteAlpha">Subscribe</Button>
            </Flex>
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
          <Flex gap={'4rem'} mb={'3rem'}>
            <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
            <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
          </Flex>
  
          <Text fontSize="sm" color="gray.400">
            © 2025 Code Lab Projects Company. All rights reserved.
          </Text>
        </Flex>
      </Box>
    );
  };
  
  export default Footer;
  