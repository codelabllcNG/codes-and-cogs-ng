import { Box, Flex, Text, VStack, Heading,Image, Link } from "@chakra-ui/react";
import { useState } from "react";

interface TabContent {
  title: string;
  description: string;
  image: string;
  link:string
}

const tabData: { [key: string]: TabContent } = {
  "Well Insight Services": {
    title: "Well Insight Services",
    description:
      "We provide precise well testing solutions, including Surface Well Testing and Bottom Hole Pressure (BHP) analysis, to evaluate reservoir performance and optimise production.",
    image: "HP-SERVICE1.svg",
    link:'/service'
  },
  "Thru Tubing Re-Entry Solutions": {
    title: "Thru Tubing Re-Entry Solutions",
    description:
      "Our specialised tools include thru-tubing completions and slickline services, offering efficiency and precision for well intervention and maintenance in operational environments..",
    image: "HP-SERVICE2.svg",
    link:'/service'
  },
  "NDT & PCE Integrity Testing": {
    title: "NDT & PCE Integrity Testing",
    description:
      "We deliver comprehensive corrosion control solutions, including non-destructive testing (NDT) and treatment, ensuring asset integrity and extended equipment lifespan.",
    image: "HP-SERVICE3.svg",
    link:'/service'
  },
  "Equipment Rentals": {
    title: "Equipment Rentals",
    description:
      "Our specialised tools include thru-tubing completions and slickline services, offering efficiency and precision for well intervention and maintenance in operational environments.",
    image: "HP-SERVICE4.svg",
    link:'/service'
  },
};

const ServiceComponent = () => {
  const [activeTab, setActiveTab] = useState("Well Insight Services");

  return (
    // <Flex
    //   borderRadius="md"
    //   w="100%"
    //   bg={'#F1F2F2'}
    //   flexDir={{ base:'column', sm:'column', md:'row',lg:'row'}}
    // >
    //   {/* Sidebar */}
    //   <Flex
    //     bg={'#F1F2F2'}
    //     flexDir={{base:'row',sm:'row',md:'column',lg:'column'}}
    //     w={{base:'100%',sm:'',md:'',lg:'20%'}}
    //     overflowX={'auto'}
    //   >
    //     {Object.keys(tabData).map((tab) => (
          
    //       <Heading
    //         key={tab}
    //         border={'1px solid  white'}
    //         cursor="pointer"
    //         p={'2rem 1rem'}
    //         w={'100%'}
    //         bg={activeTab === tab ?'white':'#F1F2F2'}
    //         fontSize={'20px'}
    //         fontWeight={activeTab === tab ? "500" : "500"}
    //         color={activeTab === tab ? "#2E3192" : "#3D3D3D"}
    //         onClick={() => setActiveTab(tab)}
    //         _hover={{ color: "#2E3192" }}
    //       >
    //         {tab}
    //       </Heading>
    //     ))}
    //   </Flex>

    //   {/* Content Section */}
    //   <Box flex="1" padding={'3rem'}>
    //     <Text color="gray.700">{tabData[activeTab].description}</Text>

    //     <Image
    //       src={tabData[activeTab].image}
    //       alt={tabData[activeTab].title}
    //       width={'100%'}
    //       borderRadius="md"
    //       mt={4}
    //     />

    //     <Link
    //       color="blue.500"
    //       fontWeight="bold"
    //       mt={4}
    //       display="inline-block"
    //       href={tabData[activeTab].link}
    //     >
    //       Read More →
    //     </Link>
    //   </Box>
    // </Flex>

    <Flex
    borderRadius="md"
    w="100%"
    bg="#F1F2F2"
    // Set flex direction to column on mobile and row on larger screens
    flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }}
  >
    {/* Sidebar */}
    <Flex
      bg="#F1F2F2"
      // On mobile, display tabs in a row; on larger screens, display as a column.
      flexDir={{ base: "row", sm: "row", md: "column", lg: "column" }}
      w={{ base: "100%", sm: "100%", md: "auto", lg: "20%" }}
      // Enable horizontal scrolling on mobile
      overflowX={{ base: "auto", sm: "auto", md: "visible", lg: "visible" }}
      // Prevent wrapping on mobile so the tabs stay in one line
      whiteSpace={{ base: "nowrap", sm: "nowrap", md: "normal", lg: "normal" }}
    >
      {Object.keys(tabData).map((tab) => (
        <Heading
          key={tab}
          border="1px solid white"
          cursor="pointer"
          p="2rem 1rem"
          // Prevent the tab from shrinking so it maintains its size in the scroll area.
          flexShrink={0}
          w={{ base: "auto", md: "100%" }}
          bg={activeTab === tab ? "white" : "#F1F2F2"}
          fontSize="20px"
          fontWeight="600"
          color={activeTab === tab ? "#2E3192" : "#3D3D3D"}
          onClick={() => setActiveTab(tab)}
          _hover={{ color: "#2E3192" }}
        >
          {tab}
        </Heading>
      ))}
    </Flex>

    {/* Content Section */}
    <Box flex="1" p={{ base: "1rem", sm: "1rem", md: "3rem", lg: "3rem" }}>
      <Text color="gray.700" mb={4}>
        {tabData[activeTab].description}
      </Text>

      <Image
        src={tabData[activeTab].image}
        alt={tabData[activeTab].title}
        w="100%"
        borderRadius="md"
        mt={4}
      />

      <Link
        color="#2E3192"
        fontWeight="bold"
        mt={4}
        display="inline-block"
        href={tabData[activeTab].link}
      >
        Read More →
      </Link>
    </Box>
  </Flex>
  );
};

export default ServiceComponent;
