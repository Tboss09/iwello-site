import {
 Box,
 chakra,
 Heading,
 HStack,
 Link,
 SimpleGrid,
 Stack,
 Text,
 useColorModeValue,
 VisuallyHidden,
 VStack,
} from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Logo = props => {
 return (
  <VStack
   spacing={2}
   align={{ base: 'center', md: 'flex-start', lg: 'flex-start' }}
  >
   <Heading color="brand.10" textTransform="uppercase" fontSize="md">
    About us
   </Heading>
   <Text w="90%" mx="auto" textAlign={['center', null, 'left']} fontSize="sm">
    We are a passion project supported by a team of health enthusiasts who want
    to put a huge dent in the continuous devastating trend.... <br />
    <Link color="brand.10">Read more</Link>
   </Text>
  </VStack>
 )
}

const SocialButton = ({ children, label, href }) => {
 return (
  <chakra.button
   bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
   rounded={'full'}
   w={8}
   h={8}
   cursor={'pointer'}
   as={'a'}
   href={href}
   display={'inline-flex'}
   alignItems={'center'}
   justifyContent={'center'}
   transition={'background, color,shadow 0.3s ease'}
   _hover={{ shadow: 'lg', bg: 'brand.10', color: 'white' }}
  >
   <VisuallyHidden>{label}</VisuallyHidden>
   {children}
  </chakra.button>
 )
}

export default function SmallWithLogoLeft() {
 return (
  <SimpleGrid
   as="footer"
   columns={['1', '3', '3']}
   bg="#F3EBFF"
   w="100%"
   spacing={8}
   px={['10', null, 10]}
   alignItems={'center'}
   pt={['10', null, 14]}
   pb={['10', null, 12]}
  >
   <Box w="100%" h="max-content">
    <Logo />
   </Box>
   <Box w="100%" h="max-content">
    <Stack
     direction={['column', null, 'row', 'row']}
     alignItems={'center'}
     spacing={[4, null, 20]}
     color="brand.10"
     fontWeight="700"
     justify={['center', 'center', 'center']}
    >
     <VStack align={['center', 'center', 'flex-start']} spacing={7}>
      <Link>Services</Link>
      <Link>Testimonials</Link>
      <Link>The Team</Link>
     </VStack>
     <VStack align={['center', 'center', 'flex-start']} spacing={7}>
      <Link>Login </Link>

      <Link href="https://iwello.org/">Sign Up</Link>
      <Link href="https://iwello.org/">Contact us</Link>
     </VStack>
    </Stack>
   </Box>

   <VStack align={['center', 'center', 'flex-end']} w="100%" h="max-content">
    <HStack spacing={8} pb={4}>
     <SocialButton label="Whatsapp" href="https://wa.link/ls52nw">
      <FaWhatsapp />
     </SocialButton>
     <SocialButton
      label="Instagram"
      href="https://www.instagram.com/iwellong/?hl=en"
     >
      <FaInstagram />
     </SocialButton>
     <SocialButton label="Facebook" href="https://web.facebook.com/iwelloNG">
      <FaFacebook />
     </SocialButton>
     <SocialButton label="Twitter" href="https://twitter.com/iwelloNG_">
      <FaTwitter />
     </SocialButton>
    </HStack>

    <Text>We would love to hear from you </Text>
    <Link fontWeight="bold" color="brand.10">
     @info@gmail.com
    </Link>
   </VStack>
  </SimpleGrid>
 )
}
