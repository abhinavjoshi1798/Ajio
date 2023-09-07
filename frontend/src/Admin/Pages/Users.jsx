import { Box, HStack, Text } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import Paginantion from '../../components/Pagination'
import { UserComp } from '../Components/UserComp'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetUsers } from '../../redux/userRouter/action'

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const initailPage = searchParams.get("page")
    const [page, setPage] = useState(initailPage || 1)
    const location = useLocation()
    const dispatch = useDispatch()
    const { token } = useSelector((store) => store.authReducer)
    const { users, total } = useSelector((store) => store.userReducer)

    useEffect(() => {

        let params = {
            page
        }
        setSearchParams(params)
    }, [page])

    let obj = {
        params: {
            page: searchParams.get("page"),
        },
        headers: {
            Authorization: token
        }
    }


    useEffect(() => {
        dispatch(GetUsers(obj))
    }, [location.search])



    return (
        <>
            <HStack>
                <AdminSidebar />
                <Box width={"80%"} height={"200px"} alignSelf={"baseline"} padding={"20px"} alignItems={"center"}>
                    <Text bg={'gray.100'} boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" padding={"20px"} fontSize={"20px"} fontWeight={"700"}>USERS</Text>
                    <Text padding={"20px"} fontSize={"18px"} fontWeight={"500"}>Total: {total}</Text>
                    <Box mt={"20px"} height={"auto"} width={"100%"} display={"flex"} flexDirection={"column"} gap={"20px"} justifyContent={"center"} alignItems={"center"}>
                        {
                            users?.map((el) => <UserComp key={el._id} id={el._id} firstname={el.first_name} lastname={el.last_name} />)
                        }
                    </Box>
                    <Paginantion page={page} setPage={setPage} total={total} />
                </Box>
            </HStack>
        </>
    )
}   
