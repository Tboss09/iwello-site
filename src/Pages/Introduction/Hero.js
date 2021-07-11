import {
 Box,
 Button,
 Flex,
 Heading,
 Image,
 Stack,
 Text,
 useBreakpointValue,
} from '@chakra-ui/react'
import LauginDoc from '../../assets/images/doctors/laugingDoc.png'
export default function SplitScreen() {
 return (
  <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
   <Flex p={8} flex={1} align={'center'} justify={'center'}>
    <Stack spacing={6} w={'full'} maxW={'lg'}>
     <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
      <Text
       as={'span'}
       position={'relative'}
      
      >
       Quality HealthCare Service
      </Text>
      <Text pl="4" as={'span'}>
       for as Low as &#8358;300
      </Text>{' '}
     </Heading>
     <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
      <Box as="span" color="blue.400" fontWeight="medium">
       {' '}
       iWello.org
      </Box>{' '}
      is here to make a statement that everyone has a chance of getting access
      to a healthy life regardless of income class; whether living below $1 or
      managing with $10 a day.
     </Text>
     <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
      <Button
       rounded={'none'}
       fontWeight="md"
       size="lg"
       bg={'blue.400'}
       color={'white'}
       _hover={{
        bg: 'blue.500',
       }}
      >
       See A Doctor
      </Button>
      <Button size="lg">Learn More</Button>
     </Stack>
    </Stack>
   </Flex>
   <Flex flex={1}>
    <Image alt={'Login Image'} objectFit={'contain'} h="90vh" w='full' src={LauginDoc} />
   </Flex>
  </Stack>
 )
}
