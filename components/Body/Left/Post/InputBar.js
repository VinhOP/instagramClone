import { Flex,Button } from '@chakra-ui/react';
import InputEmoji from 'react-input-emoji'

const InputBar = () => {
    return ( 
        <Flex alignItems='center' mx='1em'>
            <Button bg='gray.50' color='gray.300'> Post </Button>
            <InputEmoji />
        </Flex>
    )
}
 
export default InputBar;