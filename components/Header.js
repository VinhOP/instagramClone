import { Flex,Box, Input } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import Image from 'next/image'
import { 
    HomeIcon,
    SearchIcon,
    MenuIcon,
} from '@heroicons/react/solid'

import { 
    PaperAirplaneIcon,
    PlusIcon,
    HeartIcon
 } from '@heroicons/react/outline'

function Header() {
    return (
        <div>
            {/**Left */}
            <Flex justifyContent='space-between' maxW='5xl' mx={['5','5','5','auto']}>
                <Flex pos='relative' w='6em' insetX='1em' d={['none','none','flex']}>
                    <Image 
                    src='https://links.papareact.com/ocw'
                    layout='fill'
                    objectFit='contain'
                    />
                </Flex>
                <Flex pos='relative' insetX='1em' w='2em' flexShrink={0} d={['flex','flex','none']} >
                    <Image 
                    src='https://links.papareact.com/jjm'
                    layout='fill'
                    objectFit='contain'
                    />
                </Flex>

                {/** Middle */}
                <Flex maxW={{base: '10em', sm:'20em'}}>
                    <Flex pos='relative' p='.5em' alignItems='center'>
                        <Flex pos='absolute' pl='.8em' zIndex='1'>
                            <SearchIcon height='1.5em' color='gray'/>
                        </Flex>
                        <Input
                        placeholder='Search...'
                        borderColor='gray.300'
                        _focus={{border: '2px solid'}}           
                        focusBorderColor='black'
                        bg='gray.50'
                        pl='2.5em'
                        />
                    </Flex>
                </Flex>

                {/** Right */}
                <Flex 
                alignItems='center' 
                experimental_spaceX={4}
                sx= {{
                    '.nav': {d: ['none','none','block']},
                    '.menu': {boxSize: {base: '2.5em' , md: '1.5em'}}
                }}>
                    <HomeIcon className='nav'/>
                    <PlusIcon className='nav'/>
                    <PaperAirplaneIcon  className='nav'/>
                    <HeartIcon  className='nav'/>
                    <MenuIcon className='menu'/>
                </Flex>
            </Flex>
        </div>
    )
}

export default Header;