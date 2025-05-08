import { Flex,Box,Heading,Text,Image,Link,SimpleGrid,Button,Select,FormControl,FormLabel} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import HeaderAndFooter from "@/component/layout/HeaderAndFooter";


const UniversityOfOilAndGas = ()=>{
    return(
<HeaderAndFooter>
            {/* section 1 */}
                <Box
                            maxWidth="2000px"
                            bgImage="url('oilandgasnews.svg')"
                            bgSize="cover" // Ensures the image covers the entire container.
                            bgPosition="center" // Centers the background image.
                            bgRepeat="no-repeat" // Prevents the background image from repeating.
                            mx="auto"
                            textColor="white" // Change the text color if needed.
                            padding={{
                            lg: "4.5rem 5rem",
                            md: "1.5rem 2rem",
                            sm: "1rem",
                            base: "1rem",
                            }}
                        >
                        <Box  >   
                                <Heading textAlign={'center'} m={'3rem'} fontWeight={'500'}>OIL AND GAS NEWS</Heading>
                        </Box>
               </Box> 
            {/* section 1 */}

            {/* filter section */}
            <Box 
            maxWidth={'2000px'}
            padding={{
                lg: "4.5rem 5rem",
                md: "1.5rem 2rem",
                sm: "1rem",
                base: "1rem",
                }}
            >
              
                <Flex gap={'1rem'} alignItems={'center'} flexDir={{lg:'row',md:'row',sm:'column',base:'column'}}>      
                                        <FormControl >
                                                <Text fontWeight={'500'}><FormLabel>Category</FormLabel></Text>
                                                <Select
                                                placeholder="Select Category"
                                                variant="filled"
                                                flex="1"
                                                border={'1px solid #656060'}
                                                h={'50px'} 
                                                >
                                                    <option value="technology">Technology</option>
                                                    <option value="engineering">Engineering</option>
                                                    <option value="energy">Energy</option>
                                                    <option value="offshore">Offshore</option>
                                                </Select>
                                        </FormControl>
                                        <FormControl >
                                                <Text fontWeight={'500'}><FormLabel>Date</FormLabel></Text>
                                                <Select
                                                placeholder="Select Date"
                                                variant="filled"
                                                flex="1"
                                                border={'1px solid #656060'}
                                                h={'50px'} 
                                                >
                                                    <option value="technology">Technology</option>
                                                    <option value="engineering">Engineering</option>
                                                    <option value="energy">Energy</option>
                                                    <option value="offshore">Offshore</option>
                                                </Select>
                                        </FormControl>
                                 
                                        <Button  _hover={{ bg: "#2E3192" }} width={{lg:'fit-content',base:'100%'}} mt={{lg:'2.5rem',base:'0.4rem'}} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Filter </Button>
                                        <Button  _hover={{ bg: "#2E3192" }} width={{lg:'fit-content',base:'100%'}} mt={{lg:'2.5rem',base:'0.4rem'}} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Reset </Button>
                                    
                </Flex>
            </Box>
            {/* filter section */}


            {/* section 2 */}
            <Box
                maxWidth="2000px"
                mx="auto"
                padding={{
                lg: "1.5rem 5rem",
                md: "1.5rem 2rem",
                sm: "1rem",
                base: "1rem",
                }}
            >

                <Heading m={{base:'1rem 0',lg:'3rem 0'}} color={'#0D0F3A'}>Research Papers</Heading>

           

                <SimpleGrid columns={{base:1,sm:1,md:2,lg:3}}  spacing={{ base: 4, md: 8 }}>
                        <Box  cursor={'pointer'} bg={' rgba(237, 244, 255, 0.20);'} borderRadius={'8px'} p={2} boxShadow={'0px 4.443px 16.663px 0px rgba(0, 0, 0, 0.08)'}>
                            <Image alt="Media" src="rp.svg" width={'100%'} />
                            <Heading color={'#414141'} fontSize={'12px'} mt={3}>01 Jan, 2024 | 3:45PM</Heading>
                            <Heading color={'#0F0F0F'} fontSize={'18px'} mt={{base:'1rem',lg:'3rem'}}>Blockchain and Smart Contracts in Oil and Gas</Heading>
                            <Text fontSize={'14px'} fontWeight={'400'} mt={'1rem'} noOfLines={4}>Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry Discover how blockchain and smart contracts are improving Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry</Text>
                            <Link display="flex" alignItems="center" mt={3} color="#2E3192" fontWeight="bold" href="#"> Read More <ArrowForwardIcon ml={1} /> </Link>
                        </Box>
                        <Box  cursor={'pointer'} bg={' rgba(237, 244, 255, 0.20);'} borderRadius={'8px'} p={2} boxShadow={'0px 4.443px 16.663px 0px rgba(0, 0, 0, 0.08)'}>
                            <Image alt="Media" src="rp.svg" width={'100%'} />
                            <Heading color={'#414141'} fontSize={'12px'} mt={3}>01 Jan, 2024 | 3:45PM</Heading>
                            <Heading color={'#0F0F0F'} fontSize={'18px'} mt={{base:'1rem',lg:'3rem'}}>Blockchain and Smart Contracts in Oil and Gas</Heading>
                            <Text fontSize={'14px'} fontWeight={'400'} mt={'1rem'} noOfLines={4}>Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry Discover how blockchain and smart contracts are improving Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry</Text>
                            <Link display="flex" alignItems="center" mt={3} color="#2E3192" fontWeight="bold" href="#"> Read More <ArrowForwardIcon ml={1} /> </Link>
                        </Box>
                        <Box  cursor={'pointer'} bg={' rgba(237, 244, 255, 0.20);'} borderRadius={'8px'} p={2} boxShadow={'0px 4.443px 16.663px 0px rgba(0, 0, 0, 0.08)'}>
                            <Image alt="Media" src="rp.svg" width={'100%'} />
                            <Heading color={'#414141'} fontSize={'12px'} mt={3}>01 Jan, 2024 | 3:45PM</Heading>
                            <Heading color={'#0F0F0F'} fontSize={'18px'} mt={{base:'1rem',lg:'3rem'}}>Blockchain and Smart Contracts in Oil and Gas</Heading>
                            <Text fontSize={'14px'} fontWeight={'400'} mt={'1rem'} noOfLines={4}>Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry Discover how blockchain and smart contracts are improving Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry</Text>
                            <Link display="flex" alignItems="center" mt={3} color="#2E3192" fontWeight="bold" href="#"> Read More <ArrowForwardIcon ml={1} /> </Link>
                        </Box>
                        <Box  cursor={'pointer'} bg={' rgba(237, 244, 255, 0.20);'} borderRadius={'8px'} p={2} boxShadow={'0px 4.443px 16.663px 0px rgba(0, 0, 0, 0.08)'}>
                            <Image alt="Media" src="rp.svg" width={'100%'} />
                            <Heading color={'#414141'} fontSize={'12px'} mt={3}>01 Jan, 2024 | 3:45PM</Heading>
                            <Heading color={'#0F0F0F'} fontSize={'18px'} mt={{base:'1rem',lg:'3rem'}}>Blockchain and Smart Contracts in Oil and Gas</Heading>
                            <Text fontSize={'14px'} fontWeight={'400'} mt={'1rem'} noOfLines={4}>Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry Discover how blockchain and smart contracts are improving Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry</Text>
                            <Link display="flex" alignItems="center" mt={3} color="#2E3192" fontWeight="bold" href="#"> Read More <ArrowForwardIcon ml={1} /> </Link>
                        </Box>
                        <Box  cursor={'pointer'} bg={' rgba(237, 244, 255, 0.20);'} borderRadius={'8px'} p={2} boxShadow={'0px 4.443px 16.663px 0px rgba(0, 0, 0, 0.08)'}>
                            <Image alt="Media" src="rp.svg" width={'100%'} />
                            <Heading color={'#414141'} fontSize={'12px'} mt={3}>01 Jan, 2024 | 3:45PM</Heading>
                            <Heading color={'#0F0F0F'} fontSize={'18px'} mt={{base:'1rem',lg:'3rem'}}>Blockchain and Smart Contracts in Oil and Gas</Heading>
                            <Text fontSize={'14px'} fontWeight={'400'} mt={'1rem'} noOfLines={4}>Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry Discover how blockchain and smart contracts are improving Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry</Text>
                            <Link display="flex" alignItems="center" mt={3} color="#2E3192" fontWeight="bold" href="#"> Read More <ArrowForwardIcon ml={1} /> </Link>
                        </Box>
                        <Box  cursor={'pointer'} bg={' rgba(237, 244, 255, 0.20);'} borderRadius={'8px'} p={2} boxShadow={'0px 4.443px 16.663px 0px rgba(0, 0, 0, 0.08)'}>
                            <Image alt="Media" src="rp.svg" width={'100%'} />
                            <Heading color={'#414141'} fontSize={'12px'} mt={3}>01 Jan, 2024 | 3:45PM</Heading>
                            <Heading color={'#0F0F0F'} fontSize={'18px'} mt={{base:'1rem',lg:'3rem'}}>Blockchain and Smart Contracts in Oil and Gas</Heading>
                            <Text fontSize={'14px'} fontWeight={'400'} mt={'1rem'} noOfLines={4}>Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry Discover how blockchain and smart contracts are improving Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry</Text>
                            <Link display="flex" alignItems="center" mt={3} color="#2E3192" fontWeight="bold" href="#"> Read More <ArrowForwardIcon ml={1} /> </Link>
                        </Box>
                        <Box  cursor={'pointer'} bg={' rgba(237, 244, 255, 0.20);'} borderRadius={'8px'} p={2} boxShadow={'0px 4.443px 16.663px 0px rgba(0, 0, 0, 0.08)'}>
                            <Image alt="Media" src="rp.svg" width={'100%'} />
                            <Heading color={'#414141'} fontSize={'12px'} mt={3}>01 Jan, 2024 | 3:45PM</Heading>
                            <Heading color={'#0F0F0F'} fontSize={'18px'} mt={{base:'1rem',lg:'3rem'}}>Blockchain and Smart Contracts in Oil and Gas</Heading>
                            <Text fontSize={'14px'} fontWeight={'400'} mt={'1rem'} noOfLines={4}>Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry Discover how blockchain and smart contracts are improving Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry</Text>
                            <Link display="flex" alignItems="center" mt={3} color="#2E3192" fontWeight="bold" href="#"> Read More <ArrowForwardIcon ml={1} /> </Link>
                        </Box>
                        <Box  cursor={'pointer'} bg={' rgba(237, 244, 255, 0.20);'} borderRadius={'8px'} p={2} boxShadow={'0px 4.443px 16.663px 0px rgba(0, 0, 0, 0.08)'}>
                            <Image alt="Media" src="rp.svg" width={'100%'} />
                            <Heading color={'#414141'} fontSize={'12px'} mt={3}>01 Jan, 2024 | 3:45PM</Heading>
                            <Heading color={'#0F0F0F'} fontSize={'18px'} mt={{base:'1rem',lg:'3rem'}}>Blockchain and Smart Contracts in Oil and Gas</Heading>
                            <Text fontSize={'14px'} fontWeight={'400'} mt={'1rem'} noOfLines={4}>Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry Discover how blockchain and smart contracts are improving Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry</Text>
                            <Link display="flex" alignItems="center" mt={3} color="#2E3192" fontWeight="bold" href="#"> Read More <ArrowForwardIcon ml={1} /> </Link>
                        </Box>
                </SimpleGrid>

            </Box>
            {/* section 2 */}


            {/* section 3 */}

            <Box
                maxWidth="2000px"
                mx="auto"
                padding={{
                lg: "1.5rem 5rem",
                md: "1.5rem 2rem",
                sm: "1rem",
                base: "1rem",
                }}
            >

            <Heading m={{base:'1rem 0',lg:'3rem 0'}} color={'#0D0F3A'}>Videos from Trainers</Heading>
        

                <Flex
                    overflowX="auto"
                    flexWrap="nowrap"
                    gap={4}
                    py={4}
                    css={{
                        scrollbarWidth: 'none',  // Firefox
                        '-ms-overflow-style': 'none',  // IE/Edge
                        '&::-webkit-scrollbar': {  // WebKit (Chrome/Safari)
                        display: 'none',
                        },
                    }}
                    >
                    {[1, 2, 3, 4, 5].map((item) => (
                        <Box
                        key={item}
                        minWidth={{ base: "300px", md: "400px" }}
                        cursor="pointer"
                        bg="rgba(237, 244, 255, 0.20)"
                        borderRadius="8px"
                        p={2}
                        boxShadow="0px 4.443px 16.663px 0px rgba(0, 0, 0, 0.08)"
                        flexShrink={0}
                        >
                        <Image alt="Media" src="videoph.svg" width="100%" />
                        <Heading 
                            color="#0F0F0F" 
                            fontSize="18px" 
                            mt={{ base: '1rem', lg: '3rem' }}
                        >
                            Blockchain and Smart Contracts in Oil and Gas
                        </Heading>
                        </Box>
                    ))}
               </Flex>

               <Flex justifyContent={'center'}>
                    <Button  _hover={{ bg: "#2E3192" }} width={'fit-content'} m={'2rem auto'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> See More Videos</Button>              
               </Flex>
            </Box>
            {/* section 3 */}


            </HeaderAndFooter>
    )
}


export default UniversityOfOilAndGas