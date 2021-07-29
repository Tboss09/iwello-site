import {
 Box,
 chakra,
 Flex,
 Heading,
 Icon,
 SimpleGrid,
 useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'

const testimonials = [
 {
  name: '– Angie Blue',
  header: 'IWello came through for me',
  content:
   '“iWello came through for me with their service when I needed to urgently see a doctor, All I had to do was talk to a doctor about my symptoms and I was better before the end of the day” ',
 },
 {
  name: '– Tolwani Owoeye     ',
  header: 'I felt more secure',
  content:
   ' The doctor was comfortable to talk to, I felt more secured talking about some personal issues since I wasn’t seeing a face to face reaction',
 },
]

function TestmonialCard(props) {
 const { name, header, content } = props
 return (
  <Flex
   boxShadow={'lg'}
   maxW={'640px'}
   direction={{ base: 'column-reverse', md: 'row' }}
   width={'full'}
   rounded={'xl'}
   p={10}
   justifyContent={'space-between'}
   position={'relative'}
   bg={useColorModeValue('#fff', 'gray.800')}
  >
   <Flex
    direction={'column'}
    textAlign={'left'}
    justifyContent={'space-between'}
   >
    <Heading
     fontSize="md"
     letterSpacing=" 1px"
     color="#0C1030"
     lineHeight="taller"
     textTransform="uppercase"
    >
     {header}
    </Heading>
    <chakra.p
     color="brand.100"
     fontWeight={'medium'}
     fontSize={'15px'}
     lineHeight="tall"
     pt={2}
     position="relative"
     pb={4}
    >
     {content}
    </chakra.p>
    <chakra.p
     color="brand.10"
     fontWeight="bold"
     textTransform="uppercase"
     letterSpacing={'2px'}
     fontSize={'xs'}
    >
     {name}
    </chakra.p>
   </Flex>
  </Flex>
 )
}

export default function GridBlurredBackdrop() {
 return (
  <Flex
   textAlign={'center'}
   pt={10}
   justifyContent={'center'}
   direction={'column'}
   width={'full'}
  >
   <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
    <chakra.h3
     letterSpacing="1px"
     textTransform={'uppercase'}
     color={'brand.10'}
     fontWeight="bold"
     fontSize="xl"
    >
     Testimonials
    </chakra.h3>
   </Box>
   <SimpleGrid
    columns={{ base: 1, md: 2 }}
    justifyItems="center"
    spacing={'24'}
    w="90%"
    mt={12}
    mx={'auto'}
   >
    {testimonials.map((cardInfo, index) => (
     <TestmonialCard {...cardInfo} index={index} key={cardInfo.name} />
    ))}
   </SimpleGrid>
   <Box pb={3}>
    <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'brand.10'}>
     <path
      fill={'currentColor'}
      d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
     />
    </Icon>
   </Box>
  </Flex>
 )
}
