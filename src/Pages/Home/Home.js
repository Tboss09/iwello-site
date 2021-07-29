import { Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import FemaleDoc from '../../assets/images/doctors/african-doc.png'

export default function SplitScreen() {
 return (
  <Stack
   id="home"
   className="hero-section"
   minH={'100vh'}
   direction={{ base: 'column', md: 'row' }}
  >
   <Flex p={8} flex={1} align={'center'} justify={'center'}>
    <Stack spacing={6} w={'full'} maxW={'lg'}>
     <Heading
      fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
      textTransform="uppercase"
     >
      <Text as={'span'} position={'relative'} color="brand.100">
       Talk to a doctor today for less than
      </Text>
      <Text color={'brand.10'} as={'span'} pl="4">
       one dollar
      </Text>{' '}
     </Heading>
     <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#0d061899'}>
      Getting care from a licensed medical practitioner is a big step, with
      iWello, you can find trusted medical personnel close to your location as
      fast as lighting for less than a dollar! No more high medical bills and
      travelling distances to get the perfect service.
     </Text>

     <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={12}
      pt="6"
      alignItems="center"
     >
      <Button
       rounded={'md'}
       textTransform="uppercase"
       size="lg"
       shadow="none"
       w={'3xs'}
       h={'14'}
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

      <Button
       w={'3xs'}
       rounded={'md'}
       bg="transparent"
       border="1px solid #823DF1"
       color="brand.100"
       h={'14'}
       size="lg"
       textTransform="uppercase"
      >
       Sign in
      </Button>
     </Stack>
    </Stack>
   </Flex>
   <Flex flex={1}>
    <Image
     alt={'Login Image'}
     objectFit={['contain', null, 'cover', 'contain']}
     src={FemaleDoc}
    />
   </Flex>
  </Stack>
 )
}
