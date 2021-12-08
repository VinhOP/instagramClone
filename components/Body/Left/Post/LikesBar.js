import { Box,Text } from "@chakra-ui/react";
import { useContext } from "react";
import { PostContext } from "../../../../Contexts/PostContext";

const LikesBar = () => {

    const {likes} = useContext(PostContext)

    return ( 
        <Box>
            <Text> {likes} lượt thích </Text>
        </Box>
     );
}
 
export default LikesBar;