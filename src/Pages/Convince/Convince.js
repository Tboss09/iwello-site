import { Button } from '@chakra-ui/button'
import { Text, VStack } from '@chakra-ui/layout'
import React from 'react'

const Convince = () => {
 return (
  <VStack spacing={7} mt={32} textAlign="left" bg="brand.90" p={8} alignItems = {{md:'flex-start',lg:'initial'}}>
   <VStack spacing={3} alignItems = {{md:'flex-start',lg:'initial'}}> 
    <Text
     fontSize="xl"
     color="gray.300"
     fontWeight="medium"
     textTransform=" uppercase"
    >
     Still need more convincing?
    </Text>
    <Text
     fontSize="4xl"
     color="#9959ff"
     w ={{md:"60%"}}
     fontWeight=" bold"
     textTransform=" uppercase"
    >
     YOUR FIRST THREE CONSULTATIONS ARE FREE
    </Text>
   </VStack>
   <Text color="gray.400">
    Press the Sign up button and try the service now!
   </Text>
   <Button
    rounded={'md'}
    textTransform="uppercase"
    size="lg"
    alignSelf={["flex-start",null, "flex-start","center"]}
    shadow="md"
    href="https://iwello.org/"
    bg="brand.10"
    color={'white'}
    transition="ease-out background 0.2s"
    _active={{
     bg: 'brand.50',
    }}
    _hover={{
     bg: 'brand.',
     shadow: 'xl',
    }}
   >
    Sign up
   </Button>
  </VStack>
 )
}

export default Convince
