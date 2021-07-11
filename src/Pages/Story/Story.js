import {
    Box,
 Container,
 Flex,
 Heading,
 Image,
 SimpleGrid,
 Stack,
 Text,
 useColorModeValue,
} from '@chakra-ui/react'
import CaringDoc from '../../assets/images/doctors/national-cancer.jpg'
const Feature = ({ text, icon, iconBg }) => {
 return (
  <Stack direction={'row'} align={'center'}>
   <Flex
    w={8}
    h={8}
    align={'center'}
    justify={'center'}
    rounded={'full'}
    bg={iconBg}
   >
    {icon}
   </Flex>
   <Text fontWeight={600}>{text}</Text>
  </Stack>
 )
}

export default function SplitWithImage() {
 return (
  <Container maxW={'7xl'} py={8}>
   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems = 'flex-start'>
     
    <Box >
    <Stack spacing={7}>
     <Text
      textTransform={'uppercase'}
      color={'#1B655E'}
      fontWeight={400}
      fontSize={'sm'}
      bg={useColorModeValue('#AAD4F5', 'blue.900')}
      color = '#1A4971'
      p={2}
      alignSelf={'flex-start'}
      rounded={'md'}
     >
      Our Story
     </Text>
     <Heading color = 'gray.700' fontWeight ='bold' >A Online Healthcare Service</Heading>
     <Text color={'gray.500'} fontSize={'lg'}>
      Inspired by personal stories of the many who the health delivery system in
      Africa has failed. <Box as="span" color="blue.400" fontWeight="medium">
       {' '}
       iWello.org
      </Box>{' '} is a passion project supported by a team of
      health enthusiasts who want to put a huge dent in the continuous
      devastating trend caused by the poor health care delivery system in this
      part of the world.
     </Text>
     <Text color={'gray.500'} fontSize={'lg'}>
     <Box as="span" color="blue.400" fontWeight="medium">
       {' '}
       iWello.org
      </Box>{' '}
       is a project that is here to make a statement that everyone has
      a chance of getting access to a healthy life regardless of income class;
      whether living below $1 or managing with $10 a day.
     </Text>
     </Stack>
   
    </Box>
    
    <Box >
    <Stack spacing={7}>
     <Text
      textTransform={'uppercase'}
      color={'#1B655E'}
      fontWeight={400}
      fontSize={'sm'}
      bg={useColorModeValue('#A8EEEB', 'blue.900')}
      p={2}
      alignSelf={'flex-start'}
      rounded={'md'}
     >
      Our Solution
     </Text>
     <Heading>A Online Healthcare Service</Heading>
     <Text color={'gray.500'} fontSize={'lg'}>
     
     <Box as="span" color="blue.400" fontWeight="medium">
       {' '}
       iWello.org
      </Box>{' '} is a medical tech company with an agenda to provide healthcare services to low income earners in Nigeria. The initiative provides medical consultation and testing from $1 for subscribers and PAYG users. It has a B2C focus which means the communication focus is based on reaching out to consumers and regular people who can benefit from the plan.

     </Text>
     
     </Stack>
   
    </Box>
   </SimpleGrid>
  </Container>
 )
}
