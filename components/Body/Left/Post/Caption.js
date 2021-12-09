import { Flex,Text } from "@chakra-ui/react";
import { useContext } from "react";
import { PostContext } from "../../../../Contexts/PostContext";

const Caption = () => {

    const {userName,caption} = useContext(PostContext)

    return ( 
        <Flex h='fit-content'>
            <Text fontWeight='semibold' mr='.5em'> {userName} </Text>
            <Text wordBreak='break-all' h='fit-content'> {caption} </Text>
            {/* {<Box pos='relative'>
                <Text bottom={0} pos='absolute' fontSize='.9em' fontWeight='semibold' color='gray.500'> more</Text> 
            </Box>} */}
        </Flex>
     );
}
 
export default Caption;