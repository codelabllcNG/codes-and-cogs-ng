import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface AnimatedBoxesProps {
  durations: number[]; // Video durations in milliseconds
  activeIndex: number; // Sync with the VideoSlider's active index
}

function AnimatedBoxes({ durations, activeIndex }: AnimatedBoxesProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0); // Reset progress on index change
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, durations[activeIndex] / 100);

    return () => clearInterval(interval);
  }, [activeIndex, durations]);

  return (
    <Flex width="100%" height="30px" justify="space-between">
      {durations.map((_, index) => (
        <Box
          key={index}
          width="30%"
          height="10px"
          bg="#F5F5F5"
          position="relative"
          overflow="hidden"
          borderRadius="12px"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            opacity={activeIndex === index ? "1" : "0.5"}
            height="100%"
            bg="#2E3192"
            width={activeIndex === index ? `${progress}%` : "0%"}
            transition="width 0.1s linear"
          />
        </Box>
      ))}
    </Flex>
  );
}

export default AnimatedBoxes;
