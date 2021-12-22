import { HomeIcon,MenuIcon } from '@heroicons/react/solid';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { PaperAirplaneIcon,PlusCircleIcon,HeartIcon } from '@heroicons/react/outline';
import { Flex,Box,Img, Button } from '@chakra-ui/react';
import { useSession,signIn } from 'next-auth/react';

const Right = () => {
    const { data: session } = useSession()
    
    return ( 
        <Flex 
        alignItems='center' 
        experimental_spaceX={4}
        sx= {{
            '.nav': {d: ['none','none','block']},
            '.menu': {d: {base: 'block' , md: 'none'}, boxSize: '2em'}
        }}>
            <HomeIcon className='nav'/>
            <PlusCircleIcon className='nav'/>
            <Box pos='relative' className='nav'>
                    <PaperAirplaneIcon />
                <Flex pos='absolute' top='-2' right='-2' boxSize='1.1em' rounded='full' justifyContent='center' alignItems='center'
                bg='red' color='white'>
                    3
                </Flex>
            </Box>
            <HeartIcon className='nav' />
            <MenuIcon className='menu' />

            {session?
            <Img
            src={session.user?.image} 
            alt='profile picture'
            boxSize='1.6em'
            rounded='full'
            cursor='pointer'
            /> : 
            <Button onClick={signIn}> Sign in </Button>}
        </Flex>
     );
}
 
export default Right;