import { Box, IconButton, Flex, Text,Heading } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useRef, useState, useEffect } from "react";
import Indicators from "./indicator";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

const VideoSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const durations = [49000, 8000, 9000]; // Durations in milliseconds
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth",
      });
    }
    setActiveIndex(index);
  };

  useEffect(() => {
    console.log({activeIndex})
    // Set a timeout to scroll automatically based on video duration
    const timeout = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % durations.length);
    }, durations[activeIndex]);

    return () => clearTimeout(timeout); // Cleanup on component unmount
  }, [activeIndex, durations]);

  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex]);

  const scrollLeft = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : durations.length - 1));
  };

  const scrollRight = () => {
    setActiveIndex((prev) => (prev < durations.length - 1 ? prev + 1 : 0));
  };


  const videoData = [
    {
    header:'Comprehensive Oilfield Solutions',
    text:'We provide expert well insights, corrosion control, well testing,  and equipment rentals for comprehensive oilfield solutions.',
    cta:'Discover Our Expertise',
    link:'#',
    videoSource: 'video1.mp4'
  },
  {
    header:'Global Talent Connection',
    text:'We specialise in outsourcing skilled manpower, connecting experienced oil and gas consultants with international projects tailored to their expertise.',
    cta:'Find Your Next Opportunity',
    link:'#',
    videoSource: 'video2.mp4' 
   },
  {
    header:'Certificate Training',
    text:'Get certified in IWCF, BOSIET, NEBOSH, OPITO, CESE, ARM, and more to excel in oil, gas and technology industries.',
    cta:'Start Your Certification Journey',
    link:'#',
    videoSource: 'video3.mp4' 
   }
]

  return (
    <Box position="relative" width="100%" mx={'auto'} maxWidth={'2000px'}  overflow="hidden">
      {/* Video Container */}
      <Flex
        ref={sliderRef}
        width="100%"
        height="100%"
        overflowX="hidden"
        sx={{
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scroll-snap-type": "x mandatory",
        }}
        whiteSpace="nowrap"
      >
        {videoData.map((video, index) => (
          <Box
            key={index}
            flex="0 0 100vw"
            height="85vh"
            scrollSnapAlign="start"
            position="relative"
          >
            <video
              src={video.videoSource}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bg="rgba(0, 0, 0, 0.5)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              color="white"
              px={6}
            >
        
        <Box textAlign={'center'} mx='auto' >
                <Heading whiteSpace="pre-line" fontWeight="bold" fontSize={{base:'20px',sm:'20px',md:'30px',lg:'40px'}}  >
                  {video.header}
                </Heading>
                <Text  whiteSpace="pre-line" mx={'auto'} w={{base:'90%', sm:'90%',md:'70%', lg:'70%'}} fontSize="lg" mt={2}>
                  {video.text}
                </Text>
                <Link href={video.link} >
                <Flex  width={'fit-content'} gap={'1rem'}  mx={'auto'} alignItems={'center'} mt={4} >
                   <Text>{video.cta} </Text>
                   <IoArrowForward color="white" />
                   
                </Flex>
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>

      {/* Navigation Buttons */}
      <Flex
        zIndex={2}
        gap={"2rem"}
        position="absolute"
        right={1}
        padding={{ lg: "1.5rem 5rem", md: "1.5rem 2rem", sm: "1rem", base: "1rem" }}
        top="80%"
        transform="translateY(-50%)"
      >
        <IconButton
          aria-label="Scroll Left"
          icon={<ChevronLeftIcon boxSize={8} />}
          onClick={scrollLeft}
          backgroundColor="rgba(255,255,255,0.3)"
          _hover={{ bg: "rgba(255,255,255,0.5)" }}
          borderRadius="full"
          width={{base:'40px',sm:'40px',md:'50px', lg:"50px"}}
          height={{base:'40px',sm:'40px',md:'50px', lg:"50px"}}
          color={"#2E3192"}
        />
        <IconButton
          aria-label="Scroll Right"
          icon={<ChevronRightIcon boxSize={8} />}
          onClick={scrollRight}
          backgroundColor="rgba(255,255,255,0.3)"
          _hover={{ bg: "rgba(255,255,255,0.5)" }}
          borderRadius="full"
          width={{base:'40px',sm:'40px',md:'50px', lg:"50px"}}
          height={{base:'40px',sm:'40px',md:'50px', lg:"50px"}}
          color={"#2E3192"}
        />
      </Flex>

      {/* Indicators */}
      <Flex
        zIndex={2}
        width={"100%"}
        position="absolute"
        right={1}
        padding={{ lg: "0rem 5rem", md: "0rem 2rem", sm: "1rem", base: "1rem" }}
        top="90%"
        transform="translateY(-50%)"
      >
        <Indicators durations={durations} activeIndex={activeIndex} />
      </Flex>
    </Box>
  );
};

export default VideoSlider;
