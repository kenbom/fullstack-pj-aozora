import React from 'react'
import { Box, Flex, Spacer } from '@chakra-ui/react'

export const Header = () => {
    return (
        <Box w= "740px" borderBottom="2px" borderBottomColor="blue.300" m={2}>
           <Flex>
                <Box m={2} fontSize="xl"　>
                らくらく！青色申告
            </Box>
            <Spacer />
            <Box　m={2}>
                決算書
            </Box>
            <Box　m={2}>
                取引登録
            </Box>
            </Flex>
        </Box>
        
    )
}
Header