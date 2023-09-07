import { Box, Flex, Image, VStack, Text, HStack, Input, InputGroup, Icon, InputRightElement } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons"
import { AiOutlineHeart, } from "react-icons/ai"
import { BsBag } from "react-icons/bs"
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Menu from './Menu'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutAction } from '../redux/authReducer/action'
import Searchpage from './Searchpage'
import { SearchProduct } from '../redux/searchReducer/action'

const Navbar = ({ onOpen }) => {
    const [searchparams,setSearchparams]=useSearchParams()
    const dispatch = useDispatch()
    const [menuopen, setMenuopen] = useState(false)
    const navigate = useNavigate()
    const [menu, setmenu] = useState("")
    const [showmenu, setShowmenu] = useState(false)
    const { isAuth, role } = useSelector((store) => store.authReducer)
    const location=useLocation()
    const [display,setDisplay]=useState(false)
    const [q,setq]=useState("")
    const handleInputfocus=()=>{
        setDisplay(true)
    }
    const handleInputblur=()=>{
        setDisplay(false)
    }

    let obj={
        params:{
            q:q
        }
    }
    useEffect(()=>{
        dispatch(SearchProduct(obj))
    },[q])


    return (
        <>
            <Box bg={"white"} zIndex={1}>
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
                                    }} onClick={() => navigate("/login",{state:{from:location.pathname}})}>Login</Text> :
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
                                <HStack spacing={{ md: 4, xl: 6, "2xl": 7 }} >
                                    <Text fontSize={{ md: "10px", lg: "13px", xl: "15px" }} color={"gray.600"} fontFamily={"SourceSansPro"} _hover={{ color: "black", fontWeight: "700" }} onMouseEnter={() => {
                                        setmenu("men")
                                        setShowmenu(true)
                                    }}
                                    >MEN</Text>
                                    <Text fontSize={{ md: "10px", lg: "13px", xl: "15px" }} color={"gray.600"} fontFamily={"SourceSansPro"} _hover={{ color: "black", fontWeight: "700" }} onMouseEnter={() => { setShowmenu(true); setmenu("women") }}>WOMEN</Text>
                                    <Text fontSize={{ md: "10px", lg: "13px", xl: "15px" }} color={"gray.600"} fontFamily={"SourceSansPro"} _hover={{ color: "black", fontWeight: "700" }}>KIDS</Text>
                                    <Text fontSize={{ md: "10px", lg: "13px", xl: "15px" }} color={"gray.600"} fontFamily={"SourceSansPro"} _hover={{ color: "black", fontWeight: "700" }}>INDIE</Text>
                                    <Text fontSize={{ md: "10px", lg: "13px", xl: "15px" }} color={"gray.600"} fontFamily={"SourceSansPro"} _hover={{ color: "black", fontWeight: "700" }}>HOME AND KITCHEN</Text>
                                    <InputGroup width={"25%"} >
                                        <Input type="text" placeholder="Search AJIO" h={"26px"} border={"1px solid black"} borderRadius={"13px"} color={"gray.600"} focusBorderColor='black' p={1} fontSize={{ md: "10px", lg: "14px", xl: "16px" }}  onFocus={handleInputfocus}  onChange={(e)=>setq(e.target.value)}/>
                                        <InputRightElement h={"20px"}>
                                            <Icon as={SearchIcon} color="gray.600" mt={1} fontSize={{ md: "10px", lg: "14px", xl: "16px" }} />
                                        </InputRightElement >
                                    </InputGroup>
                                    <Icon as={AiOutlineHeart} fontSize={{ md: "10px", lg: "14px", xl: "16px" }} boxSize={6} color="white" bg={"gray.600"} w={"30px"} h={"30px"} borderRadius={"50%"} p={1} />
                                    <Icon as={BsBag} onClick={() => navigate("/cart")} fontSize={{ md: "10px", lg: "14px", xl: "16px" }} boxSize={6} color="white" bg={"gray.600"} w={"30px"} h={"30px"} borderRadius={"50%"} p={2} />

                                </HStack>
                            </Box>
                        </VStack>

                    </Box>
                </Flex>
                <HStack h={"75px"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" position={"fixed"} top={0} left={0} right={0} zIndex={1} overflow={"hidden"} display={{ md: "none" }}>
                    <Box width={"10%"}  >
                        <HamburgerIcon fontSize={"25px"} mt={"10px"} onClick={onOpen} />
                    </Box>
                    <VStack height={"100%"} w={"80%"} >
                        <Box width={"20%"} mt={"-20px"}>
                            <img src='https://assets.ajio.com/static/img/Ajio-Logo.svg' />
                        </Box>
                        <Box width={"100%"} ml={"70px"}>
                            <InputGroup width={"100%"} >
                                <Input type="text" placeholder="Search AJIO" h={"26px"} border={"1px solid black"} borderRadius={"13px"} color={"gray.600"} focusBorderColor='black' p={1} fontSize={{ md: "10px", lg: "14px", xl: "16px" }} />
                                <InputRightElement h={"20px"}>
                                    <Icon as={SearchIcon} color="gray.600" mt={1} fontSize={{ md: "10px", lg: "14px", xl: "16px" }} />
                                </InputRightElement >
                            </InputGroup>
                        </Box>
                    </VStack>
                </HStack>
            </Box>
            <Menu menu={menu} showmenu={showmenu} setmenu={setmenu} setShowmenu={setShowmenu} />
            <Searchpage display={display}/>
        </>
    )
}

export default Navbar