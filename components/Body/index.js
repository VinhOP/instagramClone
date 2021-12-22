import { Flex, Grid, GridItem,Text,Box, Button } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Posts from "./Left/Posts";
import Stories from "./Left/Stories";
import MiniProfile from "./Right/MiniProfile";
import Suggestions from "./Right/Suggestions";

const Body = () => {

    const {data: session } = useSession()
    return ( 
        <Grid 
        templateColumns={{base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', xl: 'repeat(3,1fr)' }}
        maxW={{md: '3xl', xl: '5xl'}}
        mx='auto'
        >
            <GridItem colSpan='2'>
                {/** Left */}
                <Stories />
                <Posts />
            </GridItem>

            <Flex colSpan='1' ml='2em' d={{base: 'none', xl: 'flex'}}>
                {/** Right */}
                <Box pos='fixed' top='6em' w='18em'>
                {session? 
                <>
                <MiniProfile />
                <Suggestions />
                </> : 
                <Button> Dang nhap de trai nghiem nhieu hon</Button>
                }
                </Box> 
            </Flex>
        </Grid>
     );
}
 
export default Body;