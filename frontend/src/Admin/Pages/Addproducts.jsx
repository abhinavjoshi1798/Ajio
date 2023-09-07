import React, { useState } from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import { Box, Button, FormControl, FormLabel, HStack, Input, Text, useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../redux/getdataReducer/action'

export const Addproducts = () => {
    const [image,setImage]=useState("")
    const [brand,setBrand]=useState("")
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [category,setCategory]=useState("")
    const [quantity,setQuantity]=useState(1)
    const toast=useToast()
    const dispatch=useDispatch()
    const {token}=useSelector((store)=>store.authReducer)

console.log(token)
    const handleSubmit=()=>{
        if(image==="" || name===""|| brand==="" || price==="" || category==="" || quantity===""){
            return toast({
                message:"Empty",
                status:"error",
                description:"fill all details",
                duration:6000,
                isClosable:true
            })
        }   
        const obj={
            image,
            name,
            price,
            brand,
            category,
            quantity
        }
        dispatch(addProduct(obj,token))
        .then((res)=>{
            console.log(res)
            if(res.status===200){
                return toast({
                    title:"Add",
                    description:"product added successfully",
                    status:"success",
                    duration:6000,
                    isClosable:true
                })
            }
            else{
                return toast({
                    title:"Add",
                    description:"product added failed",
                    status:"error",
                    duration:6000,
                    isClosable:true
                })
            }
            setImage("")
            setBrand("")
            setName("")
            setPrice("")
            setCategory("")
            setQuantity(1)
        })
        
    }
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
                                <Input onChange={(e)=>setImage(e.target.value)}/>
                            </FormLabel>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Brand:
                                <Input onChange={(e)=>setBrand(e.target.value)}/>
                            </FormLabel>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Name:
                                <Input onChange={(e)=>setName(e.target.value)}/>
                            </FormLabel>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Price:
                                <Input onChange={(e)=>setPrice(e.target.value)}/>
                            </FormLabel>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Category:
                                <Input onChange={(e)=>setCategory(e.target.value)}/>
                            </FormLabel>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Quantity:
                                <Input onChange={(e)=>setQuantity(e.target.value)}/>
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
