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
                {[
                  {name:"Home",url:"/"}, 
                  {name:"About Us",url:'/about'},
                  {name:"Work With Us",url:'/talents/consultant'},
                  // {name:"Investors",url:'/investor'},
                  {name:"Contact Us",url:"/contact"}].map((link) => (
                  <Link key={link.name} href={link.url} color="white" _hover={{ color: "white" }}>
                    {link.name}
                  </Link>
                ))}
              </Flex>
      
              {/* Resources */}
              <Flex flexDir={'column'} gap={'2rem'}>
                <Heading fontSize={'18px'} fontWeight={'500'}>Resources</Heading>
                {[
                  {name:"Whitepapers",url:"/white-paper"},
                  // {name:"Oil and Gas News",url:"/oil-and-gas-news"},
                  {name:"Corporate Social Responsibility",url:''},
                  {name:"Terms and Condition",url:""},
                  {name:"Privacy Policy",url:""},
                ].map((link) => (
                  <Link key={link.name} href={link.url} color="white" _hover={{ color: "white" }}>
                    {link.name}
                  </Link>
                ))}
              </Flex>
          </Flex>
          
  
          {/* Services */}
          <Flex mt={{base:'2rem',lg:'0'}} flexDir={'column'} gap={'2rem'}>
            <Heading fontSize={'18px'} fontWeight={'500'}>Services</Heading>
            {[
              // {name:"Oilfield Services",url:"/service"},
              {name:"Talent Network",url:'/talents'},
              {name:"Certification Trainings",url:'/certifications'},
              // {name:"Equipment Services",url:"/equipment"},
              {name:"Opportunities Hub",url:"/jobs"}
            ].map((link) => (
              <Link key={link.name} href={link.url} color="white" _hover={{ color: "white" }}>
                {link.name}
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
            <Box  position="relative" w={{lg:"100%",base:"80%"}} >
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
                _hover={{ bg: "#2E3192" }}
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
          <Link href="https://www.linkedin.com/company/codes-and-cogs/"><RiLinkedinBoxLine fontSize={'40px'} /></Link>
            <Link href="https://web.facebook.com/Officialcodesandcogs/?_rdc=1&_rdr#"><RiFacebookCircleLine fontSize={'40px'} /></Link>
            <Link href="https://www.instagram.com/codesandcogs/"><RiInstagramLine fontSize={'40px'} /></Link>
            <Link href="https://x.com/codesandcogs"><RiTwitterXFill fontSize={'40px'} /></Link>
          </Flex>
  
          <Text fontSize="sm" color="white" >
            © 2025 CodeLab Projects Company. All rights reserved.
          </Text>
        </Flex>
      </Box>
    );
  };
  
  export default Footer;
  