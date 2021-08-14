import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { chakra } from '@chakra-ui/react'
import { useStickyHeader } from 'react-use-sticky-header'

import {
 Box,
 Button,
 Collapse,
 Flex,
 Icon,
 IconButton,
 Image,
 Link,
 Popover,
 PopoverTrigger,
 Stack,
 Text,
 useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import Logo from '../../assets/images/newSite/logo.png'

export default function WithSubnavigation() {
 const { isOpen, onToggle } = useDisclosure()

 /*  Sticky Header*/

 const [setHeaderRef] = useStickyHeader(700, {
  headerDetached: 'animate__fadeInDown',
  headerSticky: 'sticky',
  headerUnsticky: 'animate__fadeOutUp',
 })
 /*  Sticky Header*/
 return (
  <>
   <Box as="nav" bg="#DFDBE5" transition="all .10s ease-in">
    <Flex
     as="div"
     className="animate__animated animate__faster"
     ref={setHeaderRef}
     bg="white"
     color="gray.600"
     zIndex="overlay"
     minH={'20'}
     py={{ base: 4 }}
     w="100%"
     px="3%"
     mx="auto"
     borderBottom={1}
     borderStyle={'solid'}
     borderColor="gray.200"
     align={'center'}
    >
     {/* Mobile Nav */}
     <Flex
      flex={{ base: 1, md: 1, lg: 'auto' }}
      ml={{ base: -2 }}
      display={{ base: 'flex', md: 'flex', lg: 'none' }}
     >
      <IconButton
       onClick={onToggle}
       icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={7} h={7} />}
       variant={'ghost'}
       aria-label={'Toggle Navigation'}
      />
     </Flex>

     {/* Logo */}
     <chakra.a flex={['2', null, '1']} w="full" href="/">
      <Image
       src={Logo}
       w={['36', null, '44', '36']}
       pr={['1', '0', '4', '0']}
      />
     </chakra.a>
     {/* Logo */}

     <Flex
      display={['none', null, 'none', 'flex']}
      flex={{ base: 1, lg: '3' }}
      justify={{ base: 'center', md: 'center' }}
     >
      <Flex display={{ base: 'none', md: 'none', lg: 'flex' }}>
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
       size="md"
       shadow="none"
       bg="brand.10"
       color={'white'}
       fontSize="sm"
       transition="ease-out background 0.2s"
       _active={{
        bg: 'brand.50',
       }}
       _hover={{
        bg: 'brand.90',
        shadow: 'xl',
       }}
       w={{ base: '24', md: '36' }}
       h="12"
      >
       Sign up
      </Button>
     </Stack>
    </Flex>

    <Collapse in={isOpen} animateOpacity>
     <MobileNav />
    </Collapse>
   </Box>
  </>
 )
}

const DesktopNav = () => {
 const linkColor = '#1A1A1A'
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
  <Stack bg="white" p={4} display={{ lg: 'none' }}>
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
    p={2}
    as={Link}
    href={href ?? '#'}
    justify={'space-between'}
    align={'center'}
    _hover={{
     textDecoration: 'none',
    }}
   >
    <Text fontWeight={600} color="gray.700">
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
     borderColor={'gray.200'}
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
