import { useState } from 'react';
import NextLink from 'next/link'
import { useRouter } from 'next/router';
import { 
  List,
  Box,
  ListItem,
} from '@chakra-ui/react'


const listItemArr = [
  {icon: "🏠", name:"Home", href:"/dashboard/home"},
  {icon: "✍", name:"Blogs", href:"/dashboard/blogs"},
  {icon: "🙋‍♂️", name:"Ask", href:"/dashboard/ask"},
  {icon: "🙌", name:"Groups", href:"/dashboard/groups"},
  {icon: "🚩", name:"Events", href:"/dashboard/events"},
  {icon: "🎯", name:"Jobs", href:"/dashboard/jobs"},
]


function Item({item,href,i}) {
  const router = useRouter();
  const [isHovered, setHovered] = useState(false);

  const isPathMatch = router.pathname === href;

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }


  return(
    <ListItem 
      fontWeight="semibold"
      px="4" 
      py="3"
      borderRadius="2xl"  
      color={isPathMatch ? 'gray.600' : "gray.400"}
      bg={isPathMatch ? 'white' : "none"}
      _hover={{ color:"gray.600",bg:"white", cursor:"pointer" }} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    > 
    <Box
      filter={isHovered || isPathMatch ? "grayscale(0%)" : "grayscale(100%)"}
      transform={isHovered || isPathMatch ? "scale(1.3)" : "scale(1)"}
      transition="all 0.1s cubic-bezier(.43,.43,.73,.71)"
      display="inline-block"
      mr="4"
    >
      {item.icon}
    </Box> {item.name}
    </ListItem>
  )
}


export default function SideBarList() {
  return(
    <List spacing="2" my="8" >
    {listItemArr.map((item) => (
      <Item  key={item.name+item.href} item={item} href={item.href}/>
    ))}
    </List>
  )
}