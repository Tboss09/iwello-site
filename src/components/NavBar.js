import {
 ChevronDownIcon,
 ChevronRightIcon,
 CloseIcon,
 HamburgerIcon,
} from '@chakra-ui/icons'
import {
 Box,
 Button,
 Collapse,
 Flex,
 Icon,
 IconButton,
 Link,
 Popover,
 PopoverContent,
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
  <Box as="header">
   <Flex
    bg={useColorModeValue('white', 'gray.800')}
    color={useColorModeValue('gray.600', 'white')}
    minH={'20'}
    py={{ base: 2 }}
    position="fixed"
    top="0"
    right="0"
    left="0"
    px={{ base: 4 }}
    borderBottom={1}
    borderStyle={'solid'}
    borderColor={useColorModeValue('gray.200', 'gray.900')}
    align={'center'}
   >
    <Flex
     flex={{ base: 'initial', md: 'auto' }}
     display={{ base: 'flex', md: 'none' }}
    >
     <IconButton
      onClick={onToggle}
      icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
      variant={'ghost'}
      aria-label={'Toggle Navigation'}
     />
    </Flex>
    <Flex
     flex={{ base: 1 }}
     justify={{ base: 'center', md: 'start' }}
     align="center"
     ml={0}
    >
     <Box>Image here</Box>

     <Flex maxW="4xl" display={{ base: 'none', md: 'flex' }} ml="72">
      <DesktopNav />
     </Flex>
    </Flex>

    <Stack flex={{ base: 1, md: 0 }} justify={'center'} direction={'row'}>
     <Button
      display={{ base: 'initial', md: 'inline-flex' }}
      fontSize={'md'}
      fontWeight={500}
      color={'white'}
      bg={'#63A2D8'}
      size="lg"
      borderRadius="4px"
      href={'#'}
     >
      See a Doctor
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
 const linkColor = useColorModeValue('gray.600', 'gray.200')
 const linkHoverColor = useColorModeValue('gray.800', 'white')

 return (
  <Stack direction={'row'} spacing={10}>
   {NAV_ITEMS.map(navItem => (
    <Box key={navItem.label}>
     <Popover trigger={'hover'} placement={'bottom-start'}>
      <PopoverTrigger>
       <Link
        p={2}
        href={navItem.href ?? '#'}
        fontSize={'md'}
        fontWeight={500}
        color={linkColor}
        _hover={{
         textDecoration: 'none',
         color: linkHoverColor,
        }}
       >
        {navItem.label}
       </Link>
      </PopoverTrigger>

      {navItem.children && (
       <PopoverContent
        border={0}
        boxShadow={'xl'}
        bg={popoverContentBgColor}
        p={4}
        rounded={'xl'}
        minW={'lg'}
       >
        <Stack>
         {navItem.children.map(child => (
          <DesktopSubNav key={child.label} {...child} />
         ))}
        </Stack>
       </PopoverContent>
      )}
     </Popover>
    </Box>
   ))}
  </Stack>
 )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
 return (
  <Link
   href={href}
   role={'group'}
   display={'block'}
   p={2}
   rounded={'md'}
   _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
  >
   <Stack direction={'row'} align={'center'}>
    <Box>
     <Text
      transition={'all .3s ease'}
      _groupHover={{ color: 'pink.400' }}
      fontWeight={500}
     >
      {label}
     </Text>
     <Text fontSize={'sm'}>{subLabel}</Text>
    </Box>
    <Flex
     transition={'all .3s ease'}
     transform={'translateX(-10px)'}
     opacity={0}
     _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
     justify={'flex-end'}
     align={'center'}
     flex={1}
    >
     <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
    </Flex>
   </Stack>
  </Link>
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
     bg="red"
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
  label: 'About',
  href: '#',
 },
 {
  label: 'Services',
  href: '#',
 },
 {
  label: 'Testimonials',
  href: '#',
 },
 {
  label: 'The Team',
  href: '#',
 },
 {
  label: 'Contact Us',
  href: '#',
 },
]
