import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MakeDisable, MakeEnable } from '../../redux/adminReducer/action'

const AdminComp = ({firstname,lastname,id,role,setChange,change}) => {
    const {token}=useSelector((store)=>{
        return store.authReducer
    })
    const dispatch=useDispatch()

    const handleDisable=(id)=>{
        dispatch(MakeDisable(id,token))
        setChange(!change)
    }

    const handleEnable=(id)=>{
        dispatch(MakeEnable(id,token))
        setChange(!change)
    }
    return (
        <Box  bg={"green.100"} width={"80%"} height={"100px"} display={"flex"} alignItems={"center"}>
            <Box width={"15%"} height={"100%"}  >
                <Image ml={"20px"} width={"70%"} height={"90%"} mt={"5px"} src='https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png'/>
            </Box>
            <Box width={"60%"} height={"100%"}  display={"flex"} alignItems={"center"} >
                <Text width={"100%"} fontSize={"25px"} fontWeight="500"  color={"black"}>{firstname} {lastname}</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} >
                <Button px={"auto"} display={role==="admin"?"block":"none"} padding={"10px 30px"} ml={"65px"} color={"white"} bg={"orange"} _hover={{color:"orange",bg:"white",corder:"1px solid orange"}} onClick={()=>handleDisable(id)}>Disable</Button>
                <Button px={"auto"} display={role==="disable"?"block":"none"}  padding={"10px 30px"} ml={"65px"} color={"white"} bg={"orange"} _hover={{color:"orange",bg:"white",corder:"1px solid orange"}} onClick={()=>handleEnable(id)}>Enable</Button>
            </Box>
            
        </Box>
    )
}

export default AdminComp