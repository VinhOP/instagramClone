import { Flex,Box,Text,Img } from "@chakra-ui/react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { PostContext } from "../../../../Contexts/PostContext";

const UserInfoBar = () => {

    const {avatar,userName} = useContext(PostContext)
    
    return ( 
        <Flex alignItems='center' m='.5em 1em' justifyContent='space-between'>
            <Flex>
                <Box border='2px' borderColor='red.500' rounded='full'>
                    <Img src={avatar} rounded='full' boxSize='3em' p='2px'/>
                </Box>
                <Text m='.5em'> {userName} </Text>
            </Flex>
            <Box boxSize='1.1em'> <DotsHorizontalIcon /></Box>
        </Flex>
    );
}
 
export default UserInfoBar;