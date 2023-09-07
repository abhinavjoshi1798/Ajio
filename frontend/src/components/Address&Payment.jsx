import { Box, HStack, VStack, Text, FormControl, FormLabel, Input, Button, RadioGroup, Radio, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export const AddressNPayment = ({ isOpen, onClose,setState,setDist,setHouseno,setPin,setMb,handleAddress,setPayment,payment }) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent maxW={"700px"}>
                    <ModalCloseButton />
                    <ModalBody >
                        <HStack>
                            <VStack>
                                <Text fontSize={"20px"} color={"black"} fontWeight={"700"}>ADDRESS</Text>
                                <Box>
                                    <FormControl>
                                        <FormLabel>
                                            STATE:<Input required onChange={(e)=>setState(e.target.value)}/>
                                        </FormLabel>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>
                                            DISTRICT:<Input required onChange={(e)=>setDist(e.target.value)}/>
                                        </FormLabel>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>
                                            PIN CODE:<Input type='number' required onChange={(e)=>setPin(e.target.value)}/>
                                        </FormLabel>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>
                                            HOUSE NUMBER:<Input required onChange={(e)=>setHouseno(e.target.value)}/>
                                        </FormLabel>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>
                                            MOBILE NUMBER:<Input type='mobile' required onChange={(e)=>setMb(e.target.value)} />
                                        </FormLabel>
                                    </FormControl>
                                </Box>
                            </VStack>
                            <VStack>
                                <Text fontSize={"20px"} color={"black"} fontWeight={"700"}>PAYMENT</Text>
                                <RadioGroup mt={"20px"} textAlign={"start"} fontSize={"20px"} fontWeight={"600"} onChange={()=>setPayment(true)}>
                                    <Radio fontSize={"18px"} value='cash' checked={payment==="cash"} onChange={(e)=>setPayment(e.target.value)}>Cash on Delivery</Radio><br />
                                    <Radio fontSize={"18px"} value='upi' checked={payment==="upi"} onChange={(e)=>setPayment(e.target.value)}>UPI</Radio><br />
                                    <Radio fontSize={"18px"} value='visa/debit' checked={payment==="visa/debit"} onChange={(e)=>setPayment(e.target.value)}>Visa/Debit</Radio><br />
                                    <Radio fontSize={"18px"} value='netbanking' checked={payment==="netbanking"} onChange={(e)=>setPayment(e.target.value)}>Net Banking</Radio>
                                </RadioGroup>
                                <Box width={"80%"} mt={"30px"} textAlign={"start"}>
                                    <Text fontSize={"18px"} fontWeight={"500"}>Instructions</Text>
                                    <Text>
                                        1. Secure Payment with AJIO
                                    </Text>
                                    <Text>
                                        2. Choose one from above Options
                                    </Text>
                                    <Text>
                                        3. your order will be delivered in 10 Days.
                                    </Text>
                                </Box>
                            </VStack>
                        </HStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='orange' m={"auto"} onClick={handleAddress}>
                            PLACE ORDER
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
