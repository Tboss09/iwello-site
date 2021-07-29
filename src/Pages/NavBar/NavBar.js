import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
 Box,
 Button,
 Collapse,
 Flex,
 Icon,
 IconButton,
 Link,
 Popover,
 PopoverTrigger,
 Stack,
 Text,
 useColorModeValue,
 useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

export default function WithSubnavigation() {
 const { isOpen, onToggle } = useDisclosure()

 return (
  <Box as ="nav">
   <Flex
    as="div"
    bg={useColorModeValue('white', 'gray.800')}
    color={useColorModeValue('gray.600', 'white')}
    zIndex="overlay"
    minH={'20'}
    py={{ base: 4 }}
    w="90%"
    mx="auto"
    borderBottom={1}
    borderStyle={'solid'}
    borderColor={useColorModeValue('gray.200', 'gray.900')}
    align={'center'}
   >
    {/* Mobile Nav */}
    <Flex
     flex={{ base: 1, md: 'auto' }}
     ml={{ base: -2 }}
     display={{ base: 'flex', md: 'none' }}
    >
     <IconButton
      onClick={onToggle}
      icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
      variant={'ghost'}
      aria-label={'Toggle Navigation'}
     />
    </Flex>

    {/* Logo */}
    <Box flex={['1', null, '0']}>Logo</Box>
    {/* Logo */}

    <Flex
     display={['none', null, 'flex']}
     flex={{ base: 1 }}
     justify={{ base: 'center', md: 'center' }}
    >
     <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
      <DesktopNav />
     </Flex>
    </Flex>

    <Stack
     flex={{ base: 1, md: 0 }}
     justify={'flex-end'}
     direction={'row'}
     spacing={6}
    >
     <Button
      rounded={'md'}
      textTransform="uppercase"
      size="lg"
      shadow="none"
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
    </Stack>
   </Flex>

   <Collapse in={isOpen} animateOpacity>
    <MobileNav />
   </Collapse>
  </Box>
 )
}

const DesktopNav = () => {
 const linkColor = 'brand.100'
 const linkHoverColor = 'brand.10'

 return (
  <Stack direction={'row'} spacing={4}>
   {NAV_ITEMS.map(navItem => (
    <Box key={navItem.label}>
     <Popover trigger={'hover'} placement={'bottom-start'}>
      <PopoverTrigger>
       <Link
        p={2}
        href={navItem.href ?? '#'}
        fontSize={'base'}
        fontWeight={600}
        transition="ease-out color 0.2s "
        color={linkColor}
        _hover={{
         textDecoration: 'none',
         color: linkHoverColor,
        }}
       >
        {navItem.label}
       </Link>
      </PopoverTrigger>
     </Popover>
    </Box>
   ))}
  </Stack>
 )
}

const MobileNav = () => {
 return (
  <Stack
   bg={useColorModeValue('white', 'gray.800')}
   p={4}
   display={{ md: 'none' }}
  >
   {NAV_ITEMS.map(navItem => (
    <MobileNavItem key={navItem.label} {...navItem} />
   ))}
  </Stack>
 )
}

const MobileNavItem = ({ label, children, href }) => {
 const { isOpen, onToggle } = useDisclosure()

 return (
  <Stack spacing={4} onClick={children && onToggle}>
   <Flex
    py={2}
    as={Link}
    href={href ?? '#'}
    justify={'space-between'}
    align={'center'}
    _hover={{
     textDecoration: 'none',
    }}
   >
    <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
     {label}
    </Text>
    {children && (
     <Icon
      as={ChevronDownIcon}
      transition={'all .25s ease-in-out'}
      transform={isOpen ? 'rotate(180deg)' : ''}
      w={6}
      h={6}
     />
    )}
   </Flex>

   <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
    <Stack
     mt={2}
     pl={4}
     borderLeft={1}
     borderStyle={'solid'}
     borderColor={useColorModeValue('gray.200', 'gray.700')}
     align={'start'}
    >
     {children &&
      children.map(child => (
       <Link key={child.label} py={2} href={child.href}>
        {child.label}
       </Link>
      ))}
    </Stack>
   </Collapse>
  </Stack>
 )
}

const NAV_ITEMS = [
 {
  label: 'Home',
 },
 {
  label: 'Our Services',
  href: '#',
 },
 {
  label: 'Testimonial',
  href: '#',
 },
 {
  label: 'About Us',
  href: '#',
 },

 {
  label: 'The Team',
  href: '#',
 },
]
