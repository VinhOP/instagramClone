import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import { Box, Flex } from "@chakra-ui/react";

const Header = () => {
    return ( 
        <Box borderBottom='1px' pos='sticky' top='0' shadow='sm' borderColor='gray.300' bg='white'>
            <Flex justifyContent='space-between' maxW='5xl' mx={['5','5','5','auto']}>
                <Left />
                <Middle />
                <Right />
            </Flex>
        </Box>
    );
}
 
export default Header;