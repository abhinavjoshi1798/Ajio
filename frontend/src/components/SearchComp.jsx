import { Box ,Image,Text,id} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'

export const SearchComp = ({image,name,id}) => {
    const navigate=useNavigate()
    const handleClick=()=>{
      navigate(`/singleproductpage/${id}`)
    }
  return (
    <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" height={"75px"} bg={"white"} display={"flex"} justifyContent={"space-between"} px={"80px"} alignItems={"center"} onClick={handleClick}>
        <Image src={image} height={"100%"} width={"100px"}/>
        <Text fontSize={"20px"} color={"black"} fontWeight={"500"}>{name}</Text>
    </Box>
  )
}
