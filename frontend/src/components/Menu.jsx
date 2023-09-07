import { Box, HStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Divider } from '@chakra-ui/react'
import { useNavigate } from 'react-router'

const Menu = ({menu,showmenu,setmenu,setShowmenu}) => {
    const [show,setShow]=useState(false)
    const navigate=useNavigate()

    return (
        <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" fontFamily={"sa"} width={"1200px"} height={"auto"} position={"fixed"} left={{ md: "0px", xl: "200px" }} bg={"white"} zIndex={1} overflow={"hidden"} display={{ base: "none", md: "block" }} onMouseLeave={()=>{setmenu(""); setShowmenu(false)}}>
            <>
                {(showmenu || show )&& menu==="men" && <><HStack ml={"20px"}>
                    <Text color={"gray.300"} fontFamily={"SourceSansPro"}>Shop By:</Text>
                    <Box bg="gray.100" padding={"15px 10px"} fontSize={"16px"} color={"gray.600"} _hover={{ color: "black", fontWeight: "600" }} fontFamily={"SourceSansPro"}>CATEGORIES</Box>
                    <Box bg="gray.100" padding={"15px 10px"} fontSize={"16px"} color={"gray.600"} _hover={{ color: "black", fontWeight: "600" }} fontFamily={"SourceSansPro"}>BRANDS</Box>
                </HStack>
                    <Divider color={"gray.100"} />
                    <HStack height={"auto"} padding={"10px"} >
                        <Box width={"23%"} h={"100%"} textAlign={"start"} padding={"5px 10px"} alignSelf={"baseline"}>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"} onClick={()=>navigate("/product/men/mens-clothing")}  >CLOTHING</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>FOOTWEAR</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>ACCESSORIES</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>ALL THATS NEW</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Clothing</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Footwear</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Accessories</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>AJIO GLOBAL</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>PLUS SIZE</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>NIGHT & LOUNZEWEAR</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>GROOMING</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>ETHINIC & FESTIVE</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Kurtas & Shirts</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Nehru Jackets</Text>
                        </Box>
                        <Box width={"23%"} h={"100%"} textAlign={"start"} padding={"5px 10px"} alignSelf={"baseline"}>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>WESTERN WEAR</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} onClick={()=>navigate("/product/men/jackets")} >Jackets & Coats</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} onClick={()=>navigate("/product/men/jeans")}>Jeans</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} onClick={()=>navigate("/product/men/shirt")}>Shirts</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Shorts & 3/4ths</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Sweatshirts & Hoodies</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Track Pants</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Trousers & Pants</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} onClick={()=>navigate("/product/men/t-shirt")} >T-Shirts</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>FOOTWEAR</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Casual Shoes</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Flip-Flops & Slippers</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Formal</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Shoes</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Sandals</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Sneakers</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Sports Shoes</Text>

                        </Box>
                        <Box width={"23%"} h={"100%"} textAlign={"start"} padding={"5px 10px"} alignSelf={"baseline"}>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>ACCESSORIES</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Backpacks</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Bags & WalletsBelts</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Caps & Hats</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Fashion Accessories</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Luggage & Trolleys</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Socks</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Sunglasses & Frames</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Watches</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>PRECIOUS JEWELLERY</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Gold And Silver Coins</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Gold And Diamond Jewellery</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Silver Jewellery</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>INNERWEAR</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Briefs</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Trunks & Boxers</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Vests</Text>
                        </Box>
                        <Box width={"23%"} h={"100%"} textAlign={"start"} padding={"5px 10px"} alignSelf={"baseline"}>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>FEATURED</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Bags Under 1499</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Footwear Under 1499</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Jeans Under 1199</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Shorts & 3/4ths Under 699</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>#AJIORECOMMENDS</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Play Time</Text>
                        </Box>
                    </HStack></>}
                {showmenu && menu==="women" && <><HStack ml={"20px"}>
                    <Text color={"gray.300"} fontFamily={"SourceSansPro"}>Shop By:</Text>
                    <Box bg="gray.100" padding={"15px 10px"} fontSize={"16px"} color={"gray.600"} _hover={{ color: "black", fontWeight: "600" }} fontFamily={"SourceSansPro"}>CATEGORIES</Box>
                    <Box bg="gray.100" padding={"15px 10px"} fontSize={"16px"} color={"gray.600"} _hover={{ color: "black", fontWeight: "600" }} fontFamily={"SourceSansPro"}>BRANDS</Box>
                </HStack>
                    <Divider color={"gray.100"} />
                    <HStack height={"auto"} padding={"10px"} >
                        <Box width={"23%"} h={"100%"} textAlign={"start"} padding={"5px 10px"} alignSelf={"baseline"}>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"} onClick={()=>navigate("/product/women/women-clothing")} >CLOTHING</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>FOOTWEAR</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>ACCESSORIES</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>ALL THATS NEW</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>CURVE SIZE</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>AJIO GLOBAL</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>NIGHT & LOUNGEWEAR</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>BEAUTY</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>ATHLEISURE</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>FUSION WEAR</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Dresses & Gowns</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Kurtas</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }}  >Kurtis & Tunics</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Pants & Shorts</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Jackets & Shrugs</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} onClick={()=>navigate("/product/women/shirts-tops-tunics")}>Shirts, Tops & Tunics</Text>
                        </Box>
                        <Box width={"23%"} h={"100%"} textAlign={"start"} padding={"5px 10px"} alignSelf={"baseline"}>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>ETHINIC WEAR</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} onClick={()=>navigate("/product/women/kurtas")}>Kurtas</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Dress Material</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Salwars & Churidars</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} onClick={()=>navigate("/product/women/kurtis-tunics")}>Kurtis & Tunics</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} onClick={()=>navigate("/product/women/saree")}>Sarees</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Dupattas </Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} onClick={()=>navigate("/product/women/kurta-suit-sets")}>Kurta Suit Sets</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Blouses</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Leggings</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Skirts & Ghagras</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Shawls & Wraps</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Palazzos & Culottes</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>JEWELLERY</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Gold And Silver Coins</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Gold And Diamond Jewellery</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Silver Jewellery</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Fashion Jewellery</Text>

                        </Box>
                        <Box width={"23%"} h={"100%"} textAlign={"start"} padding={"5px 10px"} alignSelf={"baseline"}>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>LINGERIE & INNERWEAR</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Bras</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Panties</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Maternity Wear</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Thermal Wear</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>ACCESSORIES</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Sunglasses & Frames</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >WatchesBag, Belts And Wallets</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Stoles And Scarves</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Socks And Stockings</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Caps</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Luggage & Trolleys</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>FEATURED</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Dresses Under 999</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Footwear Under 799</Text>
                        </Box>
                        <Box width={"23%"} h={"100%"} textAlign={"start"} padding={"5px 10px"} alignSelf={"baseline"}>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>FOOTWEAR</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Casual Shoes</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Flat Sandals</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Sports Shoes</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Flip Flop & Slippers</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Heeled Sandals</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Heeled Shoes</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Boots</Text>
                            <Text fontSize={"14px"} fontWeight={"700"} fontFamily={"SourceSansPro"} mb={"5px"}>WESTERN WEAR</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Tops</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >T-Shirts</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Jeans & Jeggings</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Dresses</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Trousers & Pants</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Shirts</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Track Pants</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Skirts & Shorts</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Jackets & Coats</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Jumpsuits & Playsuits</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Shrugs & Boleros</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Sweatshirts & Hoodies</Text>
                            <Text fontSize={"14px"} color={"gray.600"} _hover={{ textDecoration: "underline" }} >Sweaters & Cardigans</Text>
                        </Box>
                    </HStack></>}
            </>
        </Box>
    )
}

export default Menu