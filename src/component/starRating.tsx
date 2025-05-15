import { HStack, Icon } from "@chakra-ui/react";
import { FaStar, FaRegStar, FaRegStarHalf } from "react-icons/fa";

interface StarRatingProps {
  rating: number; // number from 0 - 5, can be fractional (e.g., 3.5)
}

const StarRating = ({ rating }: StarRatingProps) => {
  // Build an array of 5 star icons based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => {
    let icon;
    // Full star for ratings >= index + 1
    if (rating >= index + 1) {
      icon = FaStar;
    }
    // Half star for ratings >= index + 0.5
    else if (rating >= index + 0.5) {
      icon = FaRegStarHalf;
    }
    // Empty star otherwise
    else {
      icon = FaRegStar;
    }

    // Determine color for full and half stars
    const color = icon === FaRegStar ? "gray.300" : "yellow.400";

    return <Icon key={index} as={icon} color={color} />;
  });

  return <HStack spacing={1}>{stars}</HStack>;
};

export default StarRating;
