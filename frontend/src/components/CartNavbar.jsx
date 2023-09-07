import { Box, Flex, Image, VStack, Text, HStack, Icon } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsBag } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutAction } from '../redux/authReducer/action'
import { CiLocationOn } from "react-icons/ci"
import { FaRupeeSign } from "react-icons/fa"

const CartNavbar = () => {
    const dispatch = useDispatch()
    const [menuopen, setMenuopen] = useState(false)
    const navigate = useNavigate()
    const { isAuth, role } = useSelector((store) => store.authReducer)
    return (
        <>
            <Box >
                <Flex height={"85px"} textAlign={"center"} pb={4} display={{ base: "none", md: "flex" }} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" position={"fixed"} overflow={"hidden"} top={0} left={0} right={0} zIndex={1} bg={"white"}>
                    <Box width={"10%"} marginLeft={"11%"} onClick={() => navigate("/")} >
                        <Image src='https://assets.ajio.com/static/img/Ajio-Logo.svg' alt="logo" mt={"12px"} />
                    </Box>
                    <Box width={{ md: "70%", xl: "50%" }} marginLeft={"14%"}>
                        <VStack spacing={6}>
                            <Box height={"55%"} width={"100%"}>
                                <Flex gap={3} justifyContent={"end"}>
                                    <Text fontSize={"14px"} fontFamily={"SourceSansPro"} onMouseEnter={() => setMenuopen(true)} onMouseLeave={() => setMenuopen(false)}>Sign in / join AJIO</Text>
                                    <Text fontSize={"14px"} fontFamily={"SourceSansPro"} _hover={{
                                        transform: "scale(1.2)",
                                        transition: "transform 0.2s ease-in-out",
                                    }}>Customer Care</Text>
                                    <Text fontSize={"14px"} fontFamily={"SourceSansPro"} bg={"black"} color={"white"} padding={"2px 10px"}>visit AJIOLUXE</Text>
                                </Flex>
                                <Box display={menuopen ? "block" : "none"} bg={"white"} p={2} border={"1px solid grey"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" width={"10%"} position={"absolute"} marginLeft={"520px"} height={"auto"} zIndex={2} overflow={"hidden"} onMouseEnter={() => setMenuopen(true)} onMouseLeave={() => setMenuopen(false)}>
                                    {(role === "admin" || role === "superadmin") && <Text fontSize={"14px"} fontFamily={"SourceSansPro"} _hover={{
                                        transform: "scale(1.2)",
                                        transition: "transform 0.2s ease-in-out",
                                    }} onClick={() => navigate("/admin/dashboard")}>Admin</Text>}
                                    {(role === "admin" || role === "superadmin") && <Divider />}
                                    {!isAuth ? <Text fontSize={"14px"} fontFamily={"SourceSansPro"} _hover={{
                                        transform: "scale(1.2)",
                                        transition: "transform 0.2s ease-in-out",
                                    }} onClick={() => navigate("/login")}>Login</Text> :
                                        <Text fontSize={"14px"} fontFamily={"SourceSansPro"} _hover={{
                                            transform: "scale(1.2)",
                                            transition: "transform 0.2s ease-in-out",
                                        }} onClick={() => {
                                            dispatch(LogoutAction)
                                            navigate("/")
                                        }}>Logout</Text>}
                                </Box>
                            </Box>
                            <Box height={"55%"} width={"100%"}  >
                                <HStack height={"50px"} mt={"-20px"}>
                                    <Box padding={"10px 15px"} borderRadius={"50%"} bg={"gray"}>
                                        <Icon as={BsBag} color={"white"} />
                                    </Box>
                                    <Box width={"100px"} height={"2px"} bg={"gray.200"}></Box>
                                    <Box padding={"10px 15px"} borderRadius={"50%"} bg={"gray.200"}>
                                        <Icon as={CiLocationOn} color={"white"} fontSize={"20px"} />
                                    </Box>
                                    <Box width={"100px"} height={"2px"} bg={"gray.200"}></Box>
                                    <Box padding={"10px 15px"} borderRadius={"50%"} bg={"gray.200"}>
                                        <Icon as={FaRupeeSign} color={"white"} />
                                    </Box>
                                </HStack>
                            </Box>
                        </VStack>

                    </Box>
                </Flex>

            </Box>
        </>
    )
}

export default CartNavbar