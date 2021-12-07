import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Flex,Input } from '@chakra-ui/react';
import { SearchIcon } from '@heroicons/react/solid';

const Middle = () => {
    return ( 
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
    );
}
 
export default Middle;