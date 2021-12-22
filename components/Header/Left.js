import { createBreakpoints } from '@chakra-ui/theme-tools';
import Image from 'next/image';
import { Flex } from '@chakra-ui/react';
import Link from 'next/link'

const Left = () => {
    return (
    <>
        <Link href='/'>
            <Flex pos='relative' w='6em' insetX='1em' d={['none','none','flex']} cursor='pointer'>
                <Image 
                src='https://links.papareact.com/ocw'
                alt=''
                layout='fill'
                objectFit='contain'
                priority
                />
            </Flex>
        </Link>
        <Link href='/'>
            <Flex pos='relative' insetX='1em' w='2.5em' flexShrink={0} d={['flex','flex','none']} cursor='pointer'>
                <Image
                src='https://links.papareact.com/jjm'
                alt=''
                layout='fill'
                objectFit='contain'
                />
            </Flex>
        </Link>
    </>
    );
}

export default Left;