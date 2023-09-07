import { Box, Image, Button, Text } from '@chakra-ui/react'
import React from 'react'

const OrderComp = ({status,userId,length}) => {
    console.log(length)
    return (
        <Box bg={"green.100"} width={"80%"} height={"100px"} display={"flex"} justifyContent={"space-around"} alignItems={"center"}>
            <Box width={"70%"} height={"100%"} display={"flex"} alignItems={"center"} >
                <Text width={"100%"} fontSize={"18px"} fontWeight="500" color={"black"}>UserID:<br/>{userId}</Text>
                <Text width={"100%"} fontSize={"18px"} fontWeight="500" color={"black"}>ProductQuantity:<br/>{length}</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} >
                <Button px={"auto"} padding={"5px 20px"} ml={"65px"} color={"white"} bg={status?"green":"red"}>{status?"completed":"pending"}</Button>
            </Box>
        </Box>
    )
}

export default OrderComp