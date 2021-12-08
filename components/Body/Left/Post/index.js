import { Box } from "@chakra-ui/react";
import Caption from "./Caption";
import IconBar from "./IconBar";
import Image from "./Image";
import InputBar from "./InputBar";
import LikesBar from "./LikesBar";
import UserInfoBar from "./UserInfoBar";


const Post = () => {
    return ( 
        <Box mt='2em' bg='white' border='1px' borderColor='gray.300'>
            <UserInfoBar />
            <Image />
            <Box mx='1em'>
                <IconBar />
                <LikesBar />
                <Caption />
            </Box>
            <InputBar />
        </Box>

    );
}
 
export default Post;