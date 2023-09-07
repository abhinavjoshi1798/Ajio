import { Box, Grid, GridItem, HStack,Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { Dashboarddata } from '../../redux/adminReducer/action'

export const Dashoard = () => {
    const dispatch=useDispatch()
    const {TotalProduct ,Totalorder,TotalUser,TotalAdmin}=useSelector((store)=>store.adminReducer)

    useEffect(()=>{
        dispatch(Dashboarddata())
    },[])
  return (
    <>
        <HStack>
            <AdminSidebar/>
            <Box   width={"80%"} height={"200px"} alignSelf={"baseline"} padding={"20px"}> 
                <Text bg={'gray.100'} boxShadow= "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"  padding={"20px"} fontSize={"20px"} fontWeight={"700"}>ADMIN DASHBOARD</Text>
                <Box  mt={"20px"} height={"auto"}>
                    <Grid templateColumns={"repeat(3,1fr)"} padding={"50px 150px"} gap={"40px"}>
                        <GridItem width={"300px"} bg={"orange"} color={"white"} _hover={{color:"white",bg:"green",border:"1px solid green"}} height={"150px"}  borderRadius={"20px"} p={"20px"}>
                            <Text fontSize={"20px"} fontWeight={"700"}>Admins</Text>
                            <Text fontSize={"35px"} fontWeight={"700"} mt={"15px"}>{TotalAdmin}</Text>
                        </GridItem>
                        <GridItem width={"300px"} bg={"orange"} color={"white"} _hover={{color:"white",bg:"green",border:"1px solid green"}} height={"150px"}  borderRadius={"20px"} p={"20px"}>
                            <Text fontSize={"20px"} fontWeight={"700"}>Total Users</Text>
                            <Text fontSize={"35px"} fontWeight={"700"} mt={"15px"}>{TotalUser}</Text>
                        </GridItem>
                        <GridItem width={"300px"} bg={"orange"} color={"white"} _hover={{color:"white",bg:"green",border:"1px solid green"}} height={"150px"}  borderRadius={"20px"} p={"20px"}>
                            <Text fontSize={"20px"} fontWeight={"700"}>Total Producs</Text>
                            <Text fontSize={"35px"} fontWeight={"700"} mt={"15px"}>{TotalProduct}</Text>
                        </GridItem>
                        <GridItem width={"300px"} bg={"orange"} color={"white"} _hover={{color:"white",bg:"green",border:"1px solid green"}} height={"150px"}  borderRadius={"20px"} p={"20px"}>
                            <Text fontSize={"20px"} fontWeight={"700"}> Total Orders</Text>
                            <Text fontSize={"35px"} fontWeight={"700"} mt={"15px"}>{Totalorder}</Text>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
        </HStack>
    </>
  )
}
