import React, { useEffect, useState } from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import { Box, HStack, Text, Toast, useToast } from '@chakra-ui/react'
import Paginantion from '../../components/Pagination'
import ProductComp from '../Components/ProductComp'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { GetData, deleteProduct } from '../../redux/getdataReducer/action'

export const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const toast=useToast()
    const initailPage = searchParams.get("page")
    const [change,setChange]=useState(false)
    const [page, setPage] = useState(initailPage || 1)
    const dispatch = useDispatch()
    const location = useLocation()
    const { total, data } = useSelector((store) => store.getdataReducer)
    const { token } = useSelector((store) => store.authReducer)

    const handleDelete = (id) => {
        dispatch(deleteProduct(id, token))
            .then((res) => {
                if (res.status === 200) {
                    toast({
                        title: "Delete",
                        description: "Product deleted successfully",
                        duration: 6000,
                        isCloseble: true,
                        status: "success"
                    })
                }
                else {
                    toast({
                        title: "Delete",
                        description: "Product deleted failed",
                        duration: 6000,
                        isCloseble: true,
                        status: "error"
                    })
                }
            })
            setChange(!change)
    }


    useEffect(() => {

        let params = {
            page
        }
        setSearchParams(params)
    }, [page])

    let obj = {
        params: {
            page: searchParams.get("page"),
        }
    }

    useEffect(() => {
        dispatch(GetData(obj))
    }, [location.search])
    return (
        <>
            <HStack>
                <AdminSidebar />
                <Box width={"80%"} height={"200px"} alignSelf={"baseline"} padding={"20px"}>
                    <Text bg={'gray.100'} boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" padding={"20px"} fontSize={"20px"} fontWeight={"700"}>PRODUCTS</Text>
                    <Text padding={"20px"} fontSize={"18px"} fontWeight={"500"}>Total: {total}</Text>
                    <Box mt={"20px"} height={"auto"} width={"100%"} display={"flex"} flexDirection={"column"} gap={"20px"} justifyContent={"center"} alignItems={"center"}>
                        {
                            data?.map((el) => <ProductComp key={el._id} id={el._id} name={el.name} image={el.image} quantity={el.quantity} handleDelete={handleDelete} />)
                        }
                    </Box>
                    <Paginantion page={page} setPage={setPage} total={total} />
                </Box>
            </HStack>
        </>
    )
}
