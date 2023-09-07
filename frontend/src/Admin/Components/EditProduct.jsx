import { Button, useToast } from '@chakra-ui/react'
import { FormControl, FormLabel } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Box, HStack,Text } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { GetSingleProduct } from '../../redux/singleProuductReducer/action'
import { updateProduct } from '../../redux/getdataReducer/action'

export const EditProduct = () => {
    const {product}=useSelector((store)=>store.singleproductReducer)
    const [image,setImage]=useState("")
    const [brand,setBrand]=useState( product.brand || "")
    const [name,setName]=useState(product.name || "")
    const [price,setPrice]=useState(product.price || "")
    const [category,setCategory]=useState(product.category || "")
    const [quantity,setQuantity]=useState(product.quantity || 1)
    const toast=useToast()
    const dispatch=useDispatch()
    const {token}=useSelector((store)=>store.authReducer)
    const location=useLocation()
    const navigate=useNavigate()
    const {id}=useParams()


    const handleSubmit=()=>{
        let obj={
            image,
            brand,
            name,
            price,
            category,
            quantity
        }
        dispatch(updateProduct(obj,token))
        
        .then((res)=>{
            if (res.status === 200) {
                navigate(location.pathname,{replace:true})
                return toast({
                    title: "Update",
                    description: "Product updated successfully",
                    duration: 6000,
                    isCloseble: true,
                    status: "success"
                })
                
            }
            else {
                return toast({
                    title: "Update",
                    description: "Product updated failed",
                    duration: 6000,
                    isCloseble: true,
                    status: "error"
                })
            }
                
        })
    }
    useEffect(()=>{
        
        dispatch(GetSingleProduct(id))
        .then(()=>{
            setImage(product.image)
            setBrand(product.brand)
            setPrice(product.price)
            setName(product.name)
            setCategory(product.category)
            setQuantity(product.quantity)
        })

    },[dispatch,id,product])
    return (
        <>
            <HStack>
                <AdminSidebar />
                <Box width={"80%"} height={"200px"} alignSelf={"baseline"} padding={"20px"}>
                    <Text bg={'gray.100'} boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" padding={"20px"} fontSize={"20px"} fontWeight={"700"}>ADD PRODUCT</Text>
                    <Box mt={"20px"} height={"auto"} width={"40%"} mx={"auto"} my={"40px"} display={"flex"} flexDirection={"column"} gap={"20px"} justifyContent={"center"} alignItems={"center"}>
                        <FormControl>
                            <FormLabel>
                                Image:
                                <Input value={image} onChange={(e) => setImage(e.target.value)} />
                            </FormLabel>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Brand:
                                <Input value={brand} onChange={(e) => setBrand(e.target.value)} />
                            </FormLabel>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Name:
                                <Input value={name} onChange={(e) => setName(e.target.value)} />
                            </FormLabel>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Price:
                                <Input value={price} onChange={(e) => setPrice(e.target.value)} />
                            </FormLabel>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Category:
                                <Input value={category} onChange={(e) => setCategory(e.target.value)} />
                            </FormLabel>
                        </FormControl>
                        <FormControl
                        >
                            <FormLabel>
                                Quantity:
                                <Input value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                            </FormLabel>
                        </FormControl>
                        <FormControl>
                            <Button padding={"10px 40px"} bg={"orange"} color={"white"} onClick={handleSubmit}>Submit</Button>
                        </FormControl>
                    </Box>
                </Box>
            </HStack>
        </>
    )
}
