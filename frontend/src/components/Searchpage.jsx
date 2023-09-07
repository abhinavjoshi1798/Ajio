import { Box } from '@chakra-ui/react'
import React from 'react'
import { SearchComp } from './SearchComp'
import { useSelector } from 'react-redux'

const Searchpage = ({display}) => {
    const {products}=useSelector((store)=>store.searchReducer)
  return (
    <Box bg={"transperent"}  width={"40%"} mx={"auto"} height={"auto"}  position={"fixed"} top={"90px"} left={"30%"} right={"30%"} zIndex={"2"}  display={display?"flex":"none"} flexDirection={"column"} gap={"10px"}>
        {
            products?.map((el)=><SearchComp key={el._id} image={el.image} name={el.name} id={el._id}/>)
        }
    </Box>
  )
}

export default Searchpage