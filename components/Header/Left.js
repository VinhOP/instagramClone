import { createBreakpoints } from '@chakra-ui/theme-tools';
import Image from 'next/image';
import { Flex } from '@chakra-ui/react';

const Left = () => {
    return (
    <>
        <Flex pos='relative' w='6em' insetX='1em' d={['none','none','flex']}>
            <Image 
            src='https://links.papareact.com/ocw'
            layout='fill'
            objectFit='contain'
            priority
            />
        </Flex>
        <Flex pos='relative' insetX='1em' w='2.5em' flexShrink={0} d={['flex','flex','none']}>
            <Image
            src='https://links.papareact.com/jjm'
            layout='fill'
            objectFit='contain'
            />
        </Flex>
    </>
    );
}

export default Left;