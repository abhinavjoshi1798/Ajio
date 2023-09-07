import { Box,Text,Image } from '@chakra-ui/react'
import React from 'react'

export const UserComp = ({firstname,lastname}) => {
  return (
    <Box bg={"green.100"} width={"80%"} height={"120px"} display={"flex"} alignItems={"center"}>
        <Box width={"15%"} height={"100%"}  >
                <Image bg={"green"} ml={"20px"} width={"70%"} height={"90%"} mt={"5px"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0m5Cy4lXCbuyG54L0vuo3i5-ALavHe9KmhWA_wDM&s"}/>
            </Box>
            <Box width={"85%"} height={"100%"} display={"flex"} alignItems={"center"} >
                <Text width={"100%"} fontSize={"25px"} fontWeight="500" color={"black"}>{firstname} {lastname}</Text>
            </Box>
    </Box>
  )
}
