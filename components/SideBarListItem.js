import { 
  List,
  Box,
  ListItem,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useState } from 'react';


const listItemArr = [
  {icon: "🏠", name:"Home", path:"/dashboard"},
  {icon: "✍", name:"Blogs", path:"/dashboard/"},
  {icon: "🙋‍♂️", name:"Ask", path:"/dashboard"},
  {icon: "🙌", name:"Groups", path:"/dashboard"},
  {icon: "🚩", name:"Events", path:"/dashboard"},
  {icon: "🎯", name:"Jobs", path:"/dashboard"},
]


function Item({item,i}) {
  const [isHovered, setHovered] = useState(false);

  return(
    <ListItem 
      fontSize="xl"
      color="gray.400"
      fontWeight="semibold"
      px="4" 
      py="3"
      borderRadius="2xl"  
      _hover={{ color:"gray.600",bg:"white", cursor:"pointer" }} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    > 
    <Box
      filter={isHovered ? "grayscale(0%)" : "grayscale(100%)"}
      transform={isHovered ? "scale(1.3)" : "scale(1)"}
      transition="all 0.1s cubic-bezier(.43,.43,.73,.71)"
      display="inline-block"
      mr="4"
    >
      {item.icon}
    </Box> {item.name}</ListItem>
  )
}


export default function SideBarList() {
  return(
    <List spacing="2" my="8" >
    {listItemArr.map((item,i) => (
      <Item  key={item.name+i} item={item} i={i}/>
    ))}
    </List>
  )
}