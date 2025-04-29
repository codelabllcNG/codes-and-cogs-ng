import { Box,Flex,Image,Button,Icon,Heading} from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { useRouter } from "next/router";
import Link from "next/link";

interface Prop {
    activeLink : string
}

export const DesktopView : React.FC<Prop> = ({activeLink}) =>{
    
    return(
      <Flex bg={'white'} height={'15vh'} padding={'1.5rem 5rem'} maxWidth={'2000px'}  mx={'auto'} textColor={'white'} display={{lg:'flex',md:'none',sm:'none',base:'none'}} >
        <Flex alignItems={'center'} justifyContent={'space-between'} width={'100%'} >
            {/* Logo */}
            <Link href={'/'}>
            <Image alt="Media" src="/LOGO.svg"/>
            </Link>

            {/* menu */}
            <Flex  gap={'3rem'}  >
                <Link href="/">
                    <Heading fontWeight={'600'}  color={activeLink==='/'? '#2E3192' :'black'} fontSize={'16px'}>
                        HOME
                     <Box h="3px" display={activeLink==='/'? 'block' :'none'} fontSize={'28px'} mt={'0.5rem'} borderRadius={'12px'} w="100%" bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"></Box>
                    </Heading>
                </Link>
                <Link href="/about">
                       <Heading fontWeight={'600'}  color={activeLink==='/about'? '#2E3192' :'black'} fontSize={'16px'}>
                           ABOUT US
                          <Box h="3px" display={activeLink==='/about'? 'block' :'none'} fontSize={'28px'} mt={'0.5rem'} borderRadius={'12px'} w="100%" bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"></Box>
                        </Heading>
                </Link>
                <Link href="/talents">
                       <Heading fontWeight={'600'}  color={activeLink==='/talents'? '#2E3192' :'black'} fontSize={'16px'}>
                           TALENTS
                          <Box h="3px" display={activeLink==='/talents'? 'block' :'none'} fontSize={'28px'} mt={'0.5rem'} borderRadius={'12px'} w="100%" bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"></Box>
                        </Heading>
                </Link>
                <Link href="/services">
                        <Heading fontWeight={'600'}  color={activeLink==='/services'? '#2E3192' :'black'} fontSize={'16px'}>
                             OILFIELD SERVICES
                            <Box h="3px" display={activeLink==='/services'? 'block' :'none'} fontSize={'28px'} mt={'0.5rem'} borderRadius={'12px'} w="100%" bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"></Box>
                        </Heading>
                </Link>
                <Link href="/contact">
                    <Heading fontWeight={'600'}  color={activeLink==='/contact'? '#2E3192' :'black'} fontSize={'16px'}>
                            CONTACT US 
                           <Box h="3px" display={activeLink==='/contact'? 'block' :'none'} fontSize={'28px'} mt={'0.5rem'} borderRadius={'12px'} w="100%" bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"></Box>
                    </Heading>
                </Link>
            </Flex>

            {/* button */}
            <Flex gap={'1rem'}>
            <Button p={0}borderRadius="4px" _hover={{background:"linear-gradient(90deg, #2E3192 10%, #1C55E0 100%)"}}  textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)" padding={'12px 24px'}>  <Link  href="/talents/consultant"> Become A Consultant </Link> </Button>
           </Flex>

        </Flex>
      </Flex>
    )
}

export const MobileView = () =>{
    const [showModileMenu,setShowMobileMenu ] =useState<boolean>(false)
    return(
      <Flex bg={'white'}  mx={'auto'} textColor={'white'} display={{lg:'none',md:'flex',sm:'flex',base:'flex'}} >
         <Flex padding={{lg:'1.5rem 5rem',md:'1.5rem 2rem',sm:'1rem',base:'1rem'}} alignItems={'center'} justifyContent={'space-between'} width={'100%'} >
            {/* Logo */}
            <Link href={'/'}>
               <Image alt="Media" src="/LOGO.svg"/>
            </Link>
            <Icon as={GiHamburgerMenu} fontSize={'35px'} color={'black'} onClick={()=>setShowMobileMenu(true)} />
        </Flex>
        <Box zIndex={'100'}  display={showModileMenu?'block':'none'} bg={'#0A0A0A'} position={'fixed'} h={'100vh'} w={'100%'}>
           <Flex justifyContent={'flex-end'}>
                  <Icon   as={IoIosClose} boxSize={'3rem'} onClick={()=>setShowMobileMenu(false)}></Icon>
           </Flex>
           <Flex mt={'4rem'} gap={'1rem'} flexDir={'column'}>
                <Link  onClick={()=>setShowMobileMenu(false)} href="#Features">Home</Link>
                <Link  onClick={()=>setShowMobileMenu(false)} href="#Works">About Us</Link>
                <Link  onClick={()=>setShowMobileMenu(false)} href="#Pricing">Contact Us</Link>
                <Link  onClick={()=>setShowMobileMenu(false)} href="#About">Contact Us</Link>
            </Flex>

            {/* button */}
            <Flex gap={'1rem'} mt={'3rem'} flexDir={'column'} >
            <Button width={'fit-content'} mx={'auto'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Become A Consultant </Button>
            
            </Flex>
        </Box>
      </Flex>
    )
}


const Navigator  = () => {
    const router = useRouter()
    const [activeLink,setActivelink] = useState('')

    useEffect(()=>{
       console.log(router.asPath)
       setActivelink(router.asPath)
    },[router])

    return(
        <Box >
            <DesktopView activeLink={activeLink} />
            <MobileView />
        </Box>
    )
}

export default Navigator