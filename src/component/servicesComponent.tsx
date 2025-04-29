import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface TabContent {
  title: string;
  description: string;
  image: string;
  link: string;
}

const tabData: { [key: string]: TabContent } = {
  "Well Insight Services": {
    title: "Well Insight Services",
    description:
      "We provide precise well testing solutions, including Surface Well Testing and Bottom Hole Pressure (BHP) analysis, to evaluate reservoir performance and optimise production.",
    image: "HP-SERVICE1.svg",
    link: "/service",
  },
  "Thru Tubing Re-Entry Solutions": {
    title: "Thru Tubing Re-Entry Solutions",
    description:
      "Our specialised tools include thru-tubing completions and slickline services, offering efficiency and precision for well intervention and maintenance in operational environments.",
    image: "HP-SERVICE2.svg",
    link: "/service",
  },
  "NDT & PCE Integrity Testing": {
    title: "NDT & PCE Integrity Testing",
    description:
      "We deliver comprehensive corrosion control solutions, including non-destructive testing (NDT) and treatment, ensuring asset integrity and extended equipment lifespan.",
    image: "HP-SERVICE3.svg",
    link: "/service",
  },
  "Equipment Rentals": {
    title: "Equipment Rentals",
    description:
      "Our specialised tools include thru-tubing completions and slickline services, offering efficiency and precision for well intervention and maintenance in operational environments.",
    image: "HP-SERVICE4.svg",
    link: "/service",
  },
};

const ServiceComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Well Insight Services");

  return (
    <Box w="100%" bg="#F1F2F2" borderRadius="md">
      {/* MOBILE: Accordion */}
      <Box display={{ base: "block", md: "none" }} p="1rem">
        <Accordion allowToggle>
          {Object.entries(tabData).map(([key, { title, description, image, link }]) => (
            <AccordionItem
              key={key}
              border="none"
              mb="0.5rem"
              borderRadius="md"
              overflow="hidden"
            >
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    bg={activeTab === key ? "white" : "#F1F2F2"}
                    _expanded={{ bg: "white", color: "#2E3192" }}
                    onClick={() => setActiveTab(key)}
                    p="1rem"
                  >
                    <Heading as="span" flex="1" textAlign="left" fontSize="lg">
                      {title}
                    </Heading>
                    {isExpanded ? <FiMinus size={20} /> : <FiPlus size={20} />}
                  </AccordionButton>
                  <AccordionPanel bg="white" p="1.5rem">
                    <Text color="gray.700" mb={4}>
                      {description}
                    </Text>
                    <Image
                      src={image}
                      alt={title}
                      w="100%"
                      borderRadius="md"
                      mb={4}
                    />
                    <Link href={link} fontWeight="bold" color="#2E3192">
                      Read More →
                    </Link>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>

      {/* DESKTOP & TABLET: Tabs */}
      <Flex display={{ base: "none", md: "flex" }} flexDir="row">
        {/* Sidebar */}
        <Flex
          flexDir="column"
          w="20%"
          bg="#F1F2F2"
          borderRight="1px solid #E2E8F0"
        >
          {Object.keys(tabData).map((tab) => (
            <Heading
              key={tab}
              cursor="pointer"
              p="2rem 1rem"
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

        {/* Content */}
        <Box flex="1" p="3rem">
          <Text color="gray.700" mb={4}>
            {tabData[activeTab].description}
          </Text>
          <Image
            src={tabData[activeTab].image}
            alt={tabData[activeTab].title}
            w="100%"
            borderRadius="md"
            mb={4}
          />
          <Link
            color="#2E3192"
            fontWeight="bold"
            href={tabData[activeTab].link}
          >
            Read More →
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default ServiceComponent;
