import { Box, Flex } from '@chakra-ui/layout';
import { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../../../Contexts/UsersContext';
import Story from './Story';

const Stories = () => {

    const users = useContext(UsersContext)
    const [suggestions, setSuggestions] = useState()

    useEffect(() => {
        setSuggestions(users)
    }, []);
    
    return (
        <Flex overflowX='scroll' bg='white' mt='2em' p='.5em' border='1px' borderColor='gray.300'>
        {suggestions?.map((user) => (
            <Story key={user.id}
            img={user.avatar}
            firstName={user.first_name}
            lastName={user.last_name}
            />
        ))}
        </Flex>
    );
}

export default Stories;