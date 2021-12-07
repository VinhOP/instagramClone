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
        <Flex overflowX='scroll' mt='2em'>
        {suggestions?.map((user) => {
            return <Story key={user.id}
            img={user.avatar}
            firstName={user.first_name}
            lastName={user.last_name}
            />
        })}
        </Flex>
    );
}

export default Stories;