import { Box, FormControl, FormLabel, Button, Input, VStack, Text, Divider, Image, Checkbox, useToast } from "@chakra-ui/react"
import React, { useEffect, useState } from 'react'
import google from "../assets/google.png"
import { useLocation, useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { LoginAction } from "../redux/authReducer/action"
import Navbar from "../components/Navbar"

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const location=useLocation()
    const toast = useToast()



    const handleLogin = () => {

        let userData = {
            email,
            password
        }

        dispatch(LoginAction(userData))
        .then((res)=>{
            if(res==200){
                navigate(location.state.from)
                toast({
                title: 'Login',
                description: "please successful!",
                status: 'success',
                duration: 3000,
                isClosable: true,
                })
            }
            else{
                toast({
                    title: 'Login',
                    description: "login failed!",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    })
            }
            
        })
        

        setEmail("")
        setPassword("")
    }
    return (
        <>
        <Navbar/>
        <Box width={{ base: "100%", md: "50%", lg: "40%", xl: "25%" }} bg={"white"} padding={"30px"} marginTop={"100px"} mx="auto" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" >
            <Text fontSize={"20px"} fontWeight={"700"}>Log In</Text>
            <VStack spacing={6} >
                <FormControl>
                    <FormLabel>
                        Email:
                    </FormLabel>
                    <Input type="email" required onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl>
                    <FormLabel>
                        Password:
                    </FormLabel>
                    <Input type="password" required onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <FormControl>
                    <Checkbox colorScheme="blue" ml={{ base: "-100px", md: "-150px", lg: "-200px" }}>Remember me</Checkbox>
                </FormControl>
                <FormControl>
                    <Button width={"98%"} color={"white"} bg="blue" _hover={{ border: "1px solid blue", bg: "white", color: "blue" }} onClick={handleLogin}>Log In</Button>
                </FormControl>
                <Divider></Divider>
                <Box border={"1px solid gray"} width={"100%"} height={"50px"} py="6px" >
                    <Image src={google} bg={"none"} width={"30%"} m="auto" />
                </Box>
                <Text color={"blue"} onClick={() => navigate("/register")}>Register?</Text>
            </VStack>
        </Box>
        </>
    )
}

export default Login