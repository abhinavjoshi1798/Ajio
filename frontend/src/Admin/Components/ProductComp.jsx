import { Box, Image, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'

const ProductComp = ({name,id,image,quantity,handleDelete}) => {
    const navigate=useNavigate()
    return (
        <Box bg={"green.100"} width={"80%"} height={"100px"} display={"flex"} alignItems={"center"}>
            <Box width={"15%"} height={"100%"}  >
                <Image ml={"20px"} width={"70%"} height={"90%"} mt={"5px"} src={image}/>
            </Box>
            <Box width={"55%"} height={"100%"} display={"flex"} alignItems={"center"} >
                <Text width={"100%"} fontSize={"18px"} fontWeight="500" color={"black"}>{name}</Text>
                <Text width={"100%"} fontSize={"18px"} fontWeight="500" color={"black"}>{quantity}</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} >
                <Button px={"auto"} padding={"5px 20px"} ml={"65px"} color={"white"} bg={"orange"} _hover={{ color: "orange", bg: "white", corder: "1px solid orange" }} onClick={()=>navigate(`/admin/products/${id}`)}>Edit</Button>
            </Box>
            <Box>
                <Button px={"auto"}  padding={"5px 20px"} ml={"65px"} color={"white"} bg={"orange"} _hover={{ color: "orange", bg: "white", corder: "1px solid orange" }} onClick={()=>handleDelete(id)}>Delete</Button>
            </Box>
        </Box>
    )
}

export default ProductComp