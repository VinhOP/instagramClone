import { Flex } from "@chakra-ui/react";
import { BookmarkIcon, ChatIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";

const IconBar = () => {
    return ( 
        <Flex justifyContent='space-between' h='2em' my='1em'>
            <Flex>
                <HeartIcon className='post-icons'/>
                <ChatIcon className='post-icons'/>
                <PaperAirplaneIcon className='post-icons'/>
            </Flex>
            <Flex>
                <BookmarkIcon />
            </Flex>
        </Flex>
     );
}
 
export default IconBar;