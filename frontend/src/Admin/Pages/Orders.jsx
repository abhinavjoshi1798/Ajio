import React, { useEffect, useState } from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import { Box, HStack, Text } from '@chakra-ui/react'
import Paginantion from '../../components/Pagination'
import OrderComp from '../Components/OrderComp'
import { useDispatch, useSelector } from 'react-redux'
import { GetOrders } from '../../redux/orderReducer/action'
import { useLocation, useSearchParams } from 'react-router-dom'


export const Orders = () => {
    const [searchParams,setsearchParams]=useSearchParams()
    const dispatch=useDispatch()
    const {token}=useSelector((store)=>store.authReducer)
    const {orders,Totalorders}=useSelector((store)=>store.orderReducer)
    const initialPage=searchParams.get("page")
    const [page,setpage]=useState(initialPage || 1)
    const location=useLocation()
    useEffect(()=>{
        let params={
            page
        }
        setsearchParams(params)
    },[page])
    let obj={
        params:{
            page:searchParams.get("page")
        }
    }
    useEffect(()=>{
        dispatch(GetOrders(token,obj))
    },[location.search])
    return (
        <>
            <HStack>
                <AdminSidebar />
                <Box width={"80%"} height={"200px"} alignSelf={"baseline"} padding={"20px"}>
                    <Text bg={'gray.100'} boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" padding={"20px"} fontSize={"20px"} fontWeight={"700"}>ORDERS</Text>
                    <Text padding={"20px"} fontSize={"18px"} fontWeight={"500"}>Total: {Totalorders}</Text>
                    <Box mt={"20px"} height={"auto"} width={"100%"} display={"flex"} flexDirection={"column"} gap={"20px"} justifyContent={"center"} alignItems={"center"}>
                        {orders?.map((el)=>{
                            return <OrderComp key={el._id} status={el.status} userId={el.userId} length={el.products.length} />
                        })}
                    </Box>
                    <Paginantion page={page} setPage={setpage} total={Totalorders}/>
                </Box>
            </HStack>
        </>

    )
}
