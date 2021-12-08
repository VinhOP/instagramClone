import { Grid, GridItem } from "@chakra-ui/layout";
import Posts from "./Left/Posts";
import Stories from "./Left/Stories";
import MiniProfile from "./Right/MiniProfile";
import Suggestions from "./Right/Suggestions";

const Body = () => {
    return ( 
        <Grid 
        templateColumns={{base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', xl: 'repeat(3,1fr)' }}
        maxW={{md: '3xl', xl: '5xl'}}
        mx='auto'
        bg='gray.50'
        maxW='5xl'
        >
            <GridItem colSpan='2'>
                {/** Left */}
                <Stories />
                <Posts />
            </GridItem>

            <GridItem>
                {/** Right */}
                <MiniProfile />
                <Suggestions />
            </GridItem>
        </Grid>
     );
}
 
export default Body;