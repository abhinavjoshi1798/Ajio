import { Box, Button, Image,  Text } from '@chakra-ui/react'



const CartComponent = ({ image, price, name, size,id,handleDelete,number,handleQuantity,originalPrice }) => {
    
    
    return (
        <Box border={"1px solid gray"} width={"100%"} height={"200px"} display={"flex"} gap={"10px"}>
            <Box width={"20%"} >
                <Image width={"100%"} height={"100%"} src={image} alt='image' />
            </Box>
            <Box width={"55%"} display={"flex"} padding={"20px"} gap={"10px"}>
                <Text color={"gray.500"}>{name}</Text>
                <Text color={"gray.500"}>size: {size}</Text>
                <Text color={"gray.500"}>quantity:</Text>
                <Box display={"flex"}>
                    <Button bg={"none"} onClick={()=>handleQuantity(id,-1,originalPrice)} isDisabled={number===1}>-</Button>
                    <Button fontSize={"16px"} padding={"2px"}>{number}</Button>
                    <Button bg={"none"} onClick={()=>handleQuantity(id,1,originalPrice)}>+</Button>
                    
                </Box>
            </Box>
            <Box width={"25%"} padding={"60px"}>
                <Text mb={"20px"} bg={"green.200"} fontSize={"18px"} fontWeight={"600"}>₹ {price}</Text>
                <Button bg={"none"} color={"blue.600"} onClick={()=>handleDelete(id)}>Delete</Button>
            </Box>
        </Box>
    )
}

export default CartComponent