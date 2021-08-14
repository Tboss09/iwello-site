import { Button } from '@chakra-ui/button'
import { Text, VStack } from '@chakra-ui/layout'
import React from 'react'

const Convince = () => {
 return (
  <VStack
   spacing={7}
   mt={32}
   textAlign="left"
   bg="#42278F"
   px={8}
   py={20}
   alignItems={{ md: 'flex-start', lg: 'center' }}
  >
   <VStack spacing={3} alignItems={{ md: 'flex-start', lg: 'center' }}>
    <Text
     fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}
     color="gray.300"
     fontWeight="medium"
     textTransform=" uppercase"
    >
     Still need more convincing?
    </Text>
    <Text
     fontSize={{ base: '3xl', md: null, lg: '4xl' }}
     color="#fff"
     textAlign={{ lg: 'center' }}
     w={{ md: '60%' }}
     fontWeight=" bold"
     textTransform=" uppercase"
    >
     YOUR FIRST THREE CONSULTATIONS ARE FREE
    </Text>
   </VStack>
   <Text color="gray.400">Press Sign up button and try the service now!</Text>
   <Button
    rounded={'md'}
    textTransform="uppercase"
    size="lg"
    w={{ base: '60%', md: '20%' }}
    h="14"
    alignSelf={['flex-start', null, 'flex-start', 'center']}
    shadow="md"
    href="https://iwello.org/"
    bg="brand.10"
    color={'white'}
    transition="ease-out background 0.2s"
    _active={{
     bg: 'brand.50',
    }}
    _hover={{
     bg: '#42278F',
     shadow: 'xl',
    }}
   >
    Sign up
   </Button>
  </VStack>
 )
}

export default Convince
