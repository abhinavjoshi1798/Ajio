import {  HStack, IconButton, Text } from "@chakra-ui/react";
import {MdArrowForwardIos,MdArrowBackIosNew} from "react-icons/md"

export default function Paginantion({page,setPage,total}){

    return <HStack mt={6}  w={"100%"} justify={"center"}>

        <IconButton padding={"5px 10px"} bg={"green.400"}  icon={<MdArrowBackIosNew />}  isDisabled={page==1} onClick={()=>{
            setPage((prev)=>Number(prev)-1)
        }}></IconButton>
        <Text fontWeight={"bold"} color={"gray"}>{page}</Text>
        <IconButton padding={"5px 10px"} bg={"green.400"}  icon={<MdArrowForwardIos  />} isDisabled={page==Math.ceil(total/10)||total==0} onClick={()=>{
            setPage((prev)=>Number(prev)+1)
        }}></IconButton>

    </HStack>
}