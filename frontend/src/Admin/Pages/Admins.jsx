import { Box, HStack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import AdminComp from '../Components/AdminComp'
import Paginantion from '../../components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getAdmins } from '../../redux/adminReducer/action'

export const Admins = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const dispatch=useDispatch()
    const location=useLocation()
    const initialPage=searchParams.get("page")
    const [page,setpage]=useState(initialPage || 1)
    const {Admins,Totaladm}=useSelector((store)=>store.adminReducer)
    const {token}=useSelector((store)=>store.authReducer)
    const [change,setChange]=useState(false)

    



    useEffect(()=>{
        let params={
            page
        }
        setSearchParams(params)
    },[page])

    let obj={
        params:{
            page:searchParams.get("page")
        },
        headers:{
            Authorization:token
        }
    }


    useEffect(()=>{
        dispatch(getAdmins(obj,token))
    },[location.search,change])
    return (
        <>
            <HStack>
                <AdminSidebar />
                <Box width={"80%"} height={"200px"} alignSelf={"baseline"} padding={"20px"}>
                    <Text bg={'gray.100'} boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" padding={"20px"} fontSize={"20px"} fontWeight={"700"}>ADMINS</Text>
                    <Text   padding={"20px"} fontSize={"18px"} fontWeight={"500"}>Total: {Totaladm}</Text>
                    <Box mt={"20px"} height={"auto"} width={"100%"} display={"flex"} flexDirection={"column"} gap={"20px"} justifyContent={"center"} alignItems={"center"}>
                        {
                            Admins?.map((el)=><AdminComp key={el._id} id={el._id} firstname={el.first_name} lastname={el.last_name} role={el.role} setChange={setChange} change={change}/>)
                        }
                    </Box>
                    <Paginantion page={page} setPage={setpage} total={Totaladm}/>
                </Box>
            </HStack>
        </>
    )
}
