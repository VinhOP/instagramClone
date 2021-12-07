import { HomeIcon,MenuIcon } from '@heroicons/react/solid';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { PaperAirplaneIcon,PlusCircleIcon,HeartIcon } from '@heroicons/react/outline';
import { Flex,Box,Img } from '@chakra-ui/react';

const Right = () => {
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
            <Img 
            src='https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg' 
            alt='profile picture'
            boxSize='1.5em'
            rounded='full'
            />
        </Flex>
     );
}
 
export default Right;