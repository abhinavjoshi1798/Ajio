import { Box, Image,Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'

const ProductCard = ({image,brand,name,price,discount,id}) => {
    const navigate=useNavigate()
  return (
    <Box bg={"green.100"} onClick={()=>navigate(`/singleproductpage/${id}`)} >
        <Image src={image} alt='image'/>
        <Text color={"orange.300"} fontWeight={"400"} fontSize={"15px"}>{brand}</Text>
        <Text fontSize={"13px"} fontFamily={"lora"}>{name}</Text>
        <p style={{font:"10px"}}>₹{price} <span style={{textDecoration:"line-through"}}> ₹{Math.floor(price+(price*(discount/100)))}</span><span style={{color:'orange'}}> (₹{discount}%)</span></p>
    </Box>
  )
}

export default ProductCard