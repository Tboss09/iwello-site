import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
   } from '@chakra-ui/react'
   import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
   import { ReactElement } from 'react'
   
   
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
     <Container maxW={'7xl'} py={}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
       <Stack spacing={4}>
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
         Our Story
        </Text>
        <Heading>A Online Healthcare Service</Heading>
        <Text color={'gray.500'} fontSize={'lg'}>
        Inspired by personal stories of the many who the health delivery system in Africa has failed. iWello is a passion project supported by a team of health enthusiasts who want to put a huge dent in the continuous devastating trend caused by the poor health care delivery system in this part of the world.
        </Text>
        
     
       </Stack>
       <Flex>
        <Image
         rounded={'md'}
         alt={'feature image'}
         src={
          'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
         }
        />
       </Flex>
      </SimpleGrid>
     </Container>
    )
   }
   