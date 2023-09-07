import { Box, Button, FormControl, FormLabel, Input, VStack ,Text, Divider,Image} from '@chakra-ui/react'
import React from 'react'
import google from "../assets/google.png"
import Navbar from '../components/Navbar'

export const Register = () => {
  return (
    <>
    <Navbar/>
    <Box width={{base:"100%",md:"50%",lg:"40%",xl:"25%"}} bg={"white"} padding={"30px"} marginTop={"100px"} mx="auto" boxShadow ="rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Text fontSize={"20px"} fontWeight={"700"}>Register</Text>
        <VStack spacing={3}>
            <FormControl>
                <FormLabel>
                    First Name
                </FormLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <FormLabel>
                    Last Name
                </FormLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <FormLabel>
                    Email
                </FormLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <FormLabel>
                    Password
                </FormLabel>
                <Input/>
            </FormControl>
            <FormControl>
            <Button width={"98%"} color={"white"}  bg="blue" _hover={{border:"1px solid blue",bg:"white",color:"blue"}}>Register</Button>
        </FormControl>
        <Divider></Divider>
        <Text>Register using Google</Text>
        <Box border={"1px solid gray"} width={"100%"} height={"50px"} py="6px" >
            <Image src={google} bg={"none"} width={"30%"} m="auto" />
        </Box>
        </VStack>
    </Box>
    </>
  )
}
