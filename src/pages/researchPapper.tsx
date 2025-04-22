import { Flex,Box,Button,Heading,Image,Text,Link } from "@chakra-ui/react";
import Navigator from "@/component/navigator";
import Footer from "@/component/footer";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import HeaderAndFooter from "@/component/layout/HeaderAndFooter";


const ResearchPapper = ()=>{
    return(
<HeaderAndFooter>        
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
            <Heading m={{base:'1rem 0',lg:'3rem 0'}} color={'#0D0F3A'}>University Of Oil And Gas</Heading>

                 <Image src="rp.svg" width={'100%'} />
                            <Heading color={'#414141'} fontSize={'18px'} mt={'1rem'}>01 Jan, 2024 | 3:45PM</Heading>
                            <Flex alignItems={'center'}  mt={{base:'1rem',lg:'3rem'}} justifyContent={'space-between'}>
                               <Heading color={'#0F0F0F'} >Blockchain and Smart Contracts in Oil and Gas</Heading>
                                    <Flex>
                                        <CiHeart fontSize={'30px'} />
                                        <FcLike fontSize={'30px'} />
                                        <Text>32</Text>
                                    </Flex>
                            </Flex>
                            <Text mt={'1rem'}>Blockchain and smart contracts are emerging as transformative technologies in the oil and gas industry, enabling unparalleled levels of transparency and efficiency across supply chain operations by securely recording and tracking transactions on an immutable ledger, automating complex contract execution without intermediaries to reduce costs and disputes, improving regulatory compliance through transparent and auditable data records, and fostering trust among stakeholders by ensuring integrity and accuracy in critical operations like resource tracking, royalty payments, and joint ventures.</Text>
                           <Text mt={'1rem'}>Blockchain provides a decentralized and immutable ledger, enabling all parties to access real-time, verified data. This transparency ensures resources like oil and gas can be tracked seamlessly from extraction to delivery. For instance, oil shipments can be verified for origin and authenticity, significantly reducing fraud and mismanagement.</Text>
                          <Text mt={'1rem'}>Blockchain and smart contracts are set to revolutionize the oil and gas industry. By streamlining operations, enhancing security, and improving trust among stakeholders, these technologies pave the way for a more efficient and transparent energy sector. Companies that embrace this transformation stand to gain a significant competitive advantage in the years to come.</Text>
            </Box>


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

            <Heading m={{base:'1rem 0',lg:'3rem 0'}} color={'#0D0F3A'} textAlign={'center'}>Explore more papers</Heading>
        

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
                                 <Box   minWidth={{ base: "300px", md: "400px" }} cursor={'pointer'} bg={' rgba(237, 244, 255, 0.20);'} borderRadius={'8px'} p={2} boxShadow={'0px 4.443px 16.663px 0px rgba(0, 0, 0, 0.08)'}>
                                            <Image src="rp.svg" width={'100%'} />
                                            <Heading color={'#414141'} fontSize={'12px'} mt={3}>01 Jan, 2024 | 3:45PM</Heading>
                                            <Heading color={'#0F0F0F'} fontSize={'18px'} mt={{base:'1rem',lg:'3rem'}}>Blockchain and Smart Contracts in Oil and Gas</Heading>
                                            <Text fontSize={'14px'} fontWeight={'400'} mt={'1rem'} noOfLines={4}>Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry Discover how blockchain and smart contracts are improving Discover how blockchain and smart contracts are improving transparency, reducing fraud, and ensuring the security of transactions in the oil and gas industry</Text>
                                            <Link display="flex" alignItems="center" mt={3} color="#2E3192" fontWeight="bold" href="#"> Read More <ArrowForwardIcon ml={1} /> </Link>
                                        </Box>
                    ))}
                </Flex>

            </Box>
</HeaderAndFooter>

    )
}


export default ResearchPapper