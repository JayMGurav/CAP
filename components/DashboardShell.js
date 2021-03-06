import { 
  Flex,
  Link,
  HStack,
  Box,
  Text,
  Heading,
  Spacer,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Head from 'next/head';
import NextLink from 'next/link'
import SideBarList from './SideBarListItem';


const user = {
  fullname: "John Doe",
  title: "JS Developer",
  university: "LPU",
  img:"",
  bio:"Infamous Shenanigan dreaming to change the world with the naughty mischiefs"
}


function DashboardNavbar({userfullname, profileImgSrc}){
  return(
    <Flex w="full" px="6" py="2" pt="4" mb="4" align="center" >
      <Box>
      <Text as="span" fontSize="xl" fontWeight="semibold">🎓 milo</Text>      
      </Box>
      <Spacer/>
      <HStack spacing="1rem">
        <NextLink href="/legal"  ><Link m={1}>Legal</Link></NextLink>
        <NextLink href="/privacy"  ><Link m={1}>Privacy</Link></NextLink>
        <NextLink href="/terms"  ><Link m={1}>Terms and Conditions</Link></NextLink>
      </HStack>
      <Spacer/>
      <Flex align="center">
        <Menu isLazy>
          <MenuButton 
            as={Button} 
            variant="ghost" 
            
            rightIcon={<ChevronDownIcon />} 
            mx={3}
            // fontSize="xl"
          >
            {userfullname}
          </MenuButton>
          <MenuList borderRadius="8px" p={2}>
            <MenuItem borderRadius="md">My Profile</MenuItem>
            <MenuItem borderRadius="md">My Groups</MenuItem>
            <MenuItem borderRadius="md">Logout</MenuItem>
          </MenuList>
        </Menu>
        <Avatar size="md" name={userfullname} src={profileImgSrc} bg="gray.300"/>
      </Flex>
    </Flex>
  );
}

function ProfileBox({user}) {
  return(
    <Flex w="90%" p="6" borderRadius="xl" bg="gray.100" direction="column">
      <Box display="inline-flex">
        <Avatar size="lg" name={user.fullname} src={user.img} bg="gray.50" boxShadow="md" color="black"/>
        <Box ml="4">
          <Text fontSize="2xl" fontWeight="medium" >{user.fullname}</Text>
          <Text fontSize="md" color="gray.600">{user.title} | {user.university}</Text>
        </Box>
      </Box>
    </Flex>
  )
}


export default function DashboardShell() {
  return(
    <>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: `
          if (document.cookie && !document.cookie.includes('authed')) {
            window.location.href = "/"
          }
        ` }} />
      </Head>
      <Flex w="full" direction="column" h="100vh" maxH="100vh">
        <DashboardNavbar userfullname={user.fullname} profileImgSrc={""}/>
        <Flex h="100%" overflowY="auto">
          <Flex as="nav" direction="column"  flex="1 1 0%" align="flex-start" py={4} pl="6">
            <ProfileBox user={user}/>
            <SideBarList/>
          </Flex>
          <Flex as="main" px="4" py="0" flex="4 4 0%" bg="blue.100">
            <Heading>Dashboard</Heading>
          </Flex>
        </Flex>
      </Flex> 
  </>
  )
}
