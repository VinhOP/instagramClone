import { Flex,Button,Box} from "@chakra-ui/react";
import { BookmarkIcon, ChatIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";

const IconsBar = () => {

    const style = {
        cursor: 'pointer',
        marginR: '.5em'
    }

    return ( 
        <Flex justifyContent='space-between' h='2em' my='1em'>
            <Flex>
                <Box cursor={style.cursor} mr={style.marginR}> 
                    <HeartIcon className='post-icons'/> 
                </Box>
                <Box cursor={style.cursor} mr={style.marginR}> 
                    <ChatIcon className='post-icons'/> 
                </Box>
                <Box cursor={style.cursor} mr={style.marginR}> 
                    <PaperAirplaneIcon className='post-icons'/> 
                </Box>
            </Flex>
            <Flex>
                <BookmarkIcon className='bookmark-icon'/>
            </Flex>
        </Flex>
     );
}
 
export default IconsBar;