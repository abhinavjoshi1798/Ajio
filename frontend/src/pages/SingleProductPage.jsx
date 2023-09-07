import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Box, Button, Image, Skeleton, Text, useToast, } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router'
import { GetSingleProduct } from '../redux/singleProuductReducer/action'
import Navbar from '../components/Navbar'
import { AddtoCart } from '../redux/cartReducer/action'


const SingleProductPage = () => {
    const [returns, setReturns] = useState(true)
    const [promise, setPromise] = useState(false)
    const location=useLocation()
    const toast = useToast()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [size, setSize] = useState("")
    const { isAuth, token } = useSelector((store) => {
        return store.authReducer
    })
    const { product, isLoading } = useSelector((store) => {
        return store.singleproductReducer
    })
    const {userId}=useSelector((store)=>store.authReducer)


    const { id } = useParams()


    const handleBag = () => {
        if (isAuth) {
            if (size === "") {
                return toast({
                    title: 'Size.',
                    description: "select Size",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            }
            let obj = {
                productId: product._id,
                size,
                image: product.image,
                name: product.name,
                price: product.price,
                quantity: 1,
                userId: userId,
                originalPrice: product.price
            }
            if (isAuth) {
                dispatch(AddtoCart(obj, token))
                    .then((res) => {
                        if (res === 200) {
                            toast({
                                title: 'cart',
                                description: "Successfully added to cart",
                                status: 'success',
                                duration: 3000,
                                isClosable: true,
                            })
                        }
                    })
            }

        }
        else {
            toast({
                title: 'Login',
                description: "please login first!",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
            navigate("/login", {state:{from:location.pathname}},{ replace: true })
        }
    }

    useEffect(() => {
        dispatch(GetSingleProduct(id))
    }, [id])

    if (isLoading) {
        return <Skeleton />
    }

    return (
        <>
            <Navbar />
            <Box width={"80%"} mx={"auto"} padding={"20px"} display={"flex"} height={"750px"} justifyContent={"space-between"} mt={"85px"}>
                <Box width={"15%"} display={"flex"} flexDirection={"column"} mt={"-10px"} justifyContent={"space-around"} height={"80%"} gap={"5px"}>
                    <Box width={"50%"} mx="auto" height={"14%"}>
                        <ChevronUpIcon color={"gray.400"} mt="30px" fontSize={"80px"} />
                    </Box>
                    <Box width={"50%"} mx="auto" height={"10%"}>
                        <Image ml={"9px"} width={"80%"} height={"100%"} src={product.image} alt='image' />
                    </Box>
                    <Box width={"50%"} mx="auto" height={"10%"}>
                        <Image ml={"9px"} width={"80%"} height={"100%"} src={product.image} alt='image' />
                    </Box>
                    <Box width={"50%"} mx="auto" height={"10%"}>
                        <Image ml={"9px"} width={"80%"} height={"100%"} src={product.image} alt='image' />
                    </Box>
                    <Box width={"50%"} mx="auto" height={"10%"}>
                        <Image ml={"9px"} width={"80%"} height={"100%"} src={product.image} alt='image' />
                    </Box>
                    <Box width={"50%"} mx="auto" height={"10%"}>
                        <Image ml={"9px"} width={"80%"} height={"100%"} src={product.image} alt='image' />
                    </Box>
                    <Box width={"50%"} mx="auto" height={"10%"}>
                        <ChevronDownIcon color={"gray.400"} mt="-20px" fontSize={"80px"} />
                    </Box>
                </Box>
                <Box width={"40%"}>
                    <Image width={"100%"} height={"80%"} src={product.image} alt='Image' />
                    <Box textAlign={"start"} mt="30px" border={"1px solid gray"}>
                        <Button onClick={() => { setReturns(true); setPromise(false) }} color={"gray"} bg={"none"} borderRadius={"none"} zIndex={1} marginBottom={"1px solid white"} border={returns ? "none" : "1px solid gray"}>RETURNS</Button>
                        <Button onClick={() => { setReturns(false); setPromise(true) }} border={promise ? "none" : "1px solid gray"} color={"gray"} bg={"none"} borderRadius={"none"}>OUR PROMISE</Button>
                        <Text fontSize={"14px"} fontFamily={"inherit"} width={"90%"} padding={"10px"} display={returns ? "block" : "none"}>Easy 10 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies, please</Text>
                        <Text fontSize={"14px"} fontFamily={"inherit"} width={"90%"} padding={"10px"} display={promise ? "block" : "none"}>We assure the authenticity and quality of our products</Text>
                    </Box>
                </Box>
                <Box width={"30%"} textAlign={"center"} padding={"20px 10px"} display={"flex"} flexDirection={"column"}>
                    <Text fontSize={"18px"} color={"orange.200"} fontWeight={"600"}>{product.brand}</Text>
                    <Text fontSize={"18px"} fontWeight={"600"} mt="25px" color={"gray"}>{product.name}</Text>
                    <Text fontSize={"20px"} fontWeight={"600"} mt="0" color={"gray"}>₹{product.price}</Text>
                    <Text fontSize={"15px"} mt="0" color={"orange.300"} ><span style={{ textDecoration: 'line-through' }}>₹{Math.floor(product.price + (product.price * (product.discount / 100)))}</span> <span style={{ color: "white" }}>=</span><span>({product.discount}% off)</span></Text>
                    <Text mt="25px">Select Sizes</Text>
                    <Box mt="10px" padding={"10px 5px"} display={"flex"} justifyContent={"space-around"}>
                        <Box width={"50px"} height={"50px"} border={"1px solid black"} borderRadius={"50%"} bg={"gray.200"} p={"10px"} onClick={() => {
                            setSize("s"); toast({
                                title: 'size',
                                description: "selected size S",
                                status: 'success',
                                duration: 3000,
                                isClosable: true,
                            })
                        }}>S</Box>
                        <Box width={"50px"} height={"50px"} border={"1px solid black"} borderRadius={"50%"} bg={"gray.200"} p={"10px"} onClick={() => {
                            setSize("m"); toast({
                                title: 'size',
                                description: "selected sizes M",
                                status: 'success',
                                duration: 3000,
                                isClosable: true,
                            })
                        }}>M</Box>
                        <Box width={"50px"} height={"50px"} border={"1px solid black"} borderRadius={"50%"} bg={"gray.200"} p={"10px"} onClick={() => {
                            setSize("l"); toast({
                                title: 'size',
                                description: "selected size L",
                                status: 'success',
                                duration: 3000,
                                isClosable: true,
                            })
                        }}>L</Box>
                        <Box width={"50px"} height={"50px"} border={"1px solid black"} borderRadius={"50%"} bg={"gray.200"} p={"10px"} onClick={() => {
                            setSize("xl"); toast({
                                title: 'size',
                                description: "selected size XL",
                                status: 'success',
                                duration: 3000,
                                isClosable: true,
                            })
                        }}>XL</Box>
                    </Box>
                    <Button padding={"20px 100px"} fontSize={"20px"} border={"none"} borderRadius={"none"} mt="20px" color={"white"} bg={"orange.300"} _hover={{ bg: "white", color: "orange.300", border: "1px solid orange" }} onClick={handleBag}>ADD TO BAG</Button>
                    <Text color={"gray.400"} fontSize={"12px"}>HANDPICKED STYLES | ASSURED QUALITY</Text>
                    <Button padding={"20px 80px"} fontSize={"20px"} border={"1px solid orange"} borderRadius={"none"} mt="20px" color={"orange"} bg={"white"} _hover={{ bg: "orange.300", color: "white" }}>ADD TO WISHLIST</Button>
                    <Text alignSelf={"flex-start"} color={"blue.700"} fontWeight={"700"} mt="20px">Product Details</Text>
                    <Text ml={"10px"} alignSelf={"flex-start"} fontSize={"15px"} fontWeight={"600"} color={"gray.700"}>Regular Fit</Text>
                    <Text ml={"10px"} alignSelf={"flex-start"} fontSize={"15px"} fontWeight={"600"} color={"gray.700"}>Top Fashion</Text>
                    <Text ml={"10px"} alignSelf={"flex-start"} fontSize={"15px"} fontWeight={"600"} color={"gray.700"}>Best Deal</Text>
                    <Text ml={"10px"} alignSelf={"flex-start"} fontSize={"15px"} fontWeight={"600"} color={"gray.700"}>Low Price</Text>
                    <Text ml={"10px"} alignSelf={"flex-start"} fontSize={"15px"} fontWeight={"600"} color={"gray.700"}>More Benifits</Text>
                </Box>
            </Box>
        </>
    )
}

export default SingleProductPage