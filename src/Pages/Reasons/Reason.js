import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Button,
  VStack,
} from "@chakra-ui/react";
export default function Wfl() {
  const Feature = (props) => {
    return (
      <Flex>
        <Icon
          boxSize={5}
          mr={2}
          color={useColorModeValue("brand.500", "brand.300")}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </Icon>
        <chakra.p
          fontSize="lg"
          color={useColorModeValue("gray.700", "gray.400")}
          {...props}
        />
      </Flex>
    );
  };

  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 2 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box>
            <chakra.h2
              mb={3}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("black")}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              REASONS FOR iWELLO
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
           iWello was created for the following reasons:
            </chakra.p>
            <Button
              as="a"
              
              variant="solid"
              w={{ base: "full", sm: "auto" }}
              colorScheme="teal"
              size="lg"
            >
              Become a Partner
            </Button>
          </Box>
          <VStack
            direction="column"
            flexGrow={1}
            spacing={5}
            alignItems="start"
          >
            <Feature>To provide healthcare solutions to low income earners who can’t afford the medical expenses.</Feature>
            <Feature>The need to provide subsidized payments for medical consultation and treatment.</Feature>
            <Feature> The need to see Nigeria as a healthy society with lesser cases of deaths due to lack of healthcare.</Feature>
            <Feature>Increase the welfare of doctors by providing more opportunities for them to do their jobs.</Feature>
            <Feature>To reduce the migration of able bodied doctors from the country.</Feature>
          </VStack>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}