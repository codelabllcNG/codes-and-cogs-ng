import { HStack, Icon } from "@chakra-ui/react";
import { FaStar, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number; // number from 0 - 5
}

const StarRating = ({ rating }: StarRatingProps) => {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <Icon
        key={index}
        as={index < rating ? FaStar : FaRegStar}
        color={index < rating ? "yellow.400" : "gray.300"}
      />
    ));

  return <HStack spacing={1}>{stars}</HStack>;
};

export default StarRating;
