import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
 Box,
 Button,
 Flex,
 Icon,
 SimpleGrid,
 Stack,
 Text,
} from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as Consult } from '../../assets/images/newSite/Consult.svg'

import { ReactComponent as Emergency } from '../../assets/images/newSite/Emergency.svg'
import { ReactComponent as FakeDrug } from '../../assets/images/newSite/FakeDrug.svg'

const Feature = ({ title, text, icon, link }) => {
 return (
  <Stack>
   <Flex
    w={16}
    h={16}
    id ='feature'
    align={'center'}
    justify={'center'}
    color={'white'}
    rounded={'full'}
    bg={'#F3EBFF'}
    mb={1}
   >
    {icon}
   </Flex>
   <Text fontWeight={600} fontSize="lg">
    {title}
   </Text>

   <Text color={'brand.100'} fontSize="md" position="relative ">
    {text}
   </Text>
   <Button
    as="a"
    d="flex"
    alignItems="center"
    href="https://iwello.org/"
    justifyContent="flex-start"
    rightIcon={<ArrowForwardIcon />}
    colorScheme="none"
    color="brand.10"
    fontSize="sm"
    fontWeight="600"
    variant="link"
   >
    {link}
   </Button>
  </Stack>
 )
}

export default function SimpleThreeColumns() {
 return (
  <Box mt={24} w="95%" p="5%">
   <Box pb={12} textAlign="center">
    <Text
     textTransform="uppercase"
     color="brand.10"
     fontWeight="bold"
     fontSize="xl"
    >
     Our services
    </Text>
   </Box>
   <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12} mx="auto">
    <Box
     py="8"
     px="8"
     transform="unset"
     shadow="xs"
     transition="ease-in box-shadow 0.3s"
     _hover={{
      shadow: 'xl',
     }}
    >
     <Feature
      icon={<Icon as={Consult} w={10} h={10} fill="brand.10" />}
      title={'Consultation '}
      text={
       'We have a list of experienced doctors that you can trust to walk you through however you’re feeling'
      }
      link="Talk To a Doctor"
     />
    </Box>
    <Box
     py="8"
     px="8"
     shadow="xs"
     transition="ease-in box-shadow 0.3s"
     _hover={{
      shadow: 'xl',
     }}
    >
     <Feature
      icon={<Icon as={FakeDrug} w={10} h={10} fill="brand.10" />}
      title={'Fake Drug Checker'}
      text={
       'Got that drug and don’t know if it’s original or fake, we got you, find out with the fake drug checker'
      }
      link="Check Drug
      "
     />
    </Box>
    <Box
     py="8"
     px="8"
     shadow="xs"
     transition="ease-in box-shadow 0.3s"
     _hover={{
      shadow: 'xl',
     }}
    >
     <Feature
      icon={<Icon as={Emergency} w={10} h={10} fill="brand.10" />}
      title={'Emergency Surgery Funding'}
      text={
       '        We understand the sensitivity of needing funds for that urgent surgery, join our emergency surgery funding, No need for a line with us.'
      }
      link="Find Out More."
     />
    </Box>
   </SimpleGrid>
  </Box>
 )
}
