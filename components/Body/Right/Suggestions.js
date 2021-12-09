import { Flex,Text,Img,Box } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../../Contexts/UsersContext";

const Suggestions = () => {

    const users = useContext(UsersContext)
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        setSuggestions(users)
    }, []);

    return ( 
        <Box mt='2em'>
            {/* Suggest Bar */}
            <Flex justifyContent='space-between'>
                <Text color='gray' fontSize='14px'> Suggest for you </Text>
                <Text fontWeight='semibold' fontSize='13px'> See more </Text>
            </Flex>
            {/* Suggest List */}
            {suggestions.map(suggestion => (
                <Flex justifyContent='space-between' alignItems='center' mt='1em' key={suggestion.id}>
                    <Flex>
                        {/* avatar */}
                        <Box border='2px' borderColor='red.500' rounded='full' p='2px' mr='.7em'>
                            <Img src={suggestion.avatar} rounded='full' bg='blue.600' boxSize='3em'/>
                        </Box>

                        {/* name */}
                        <Box maxW='5em' mt='.5em'>
                            <Text isTruncated fontSize='14px' fontWeight='semibold'> 
                                {suggestion.first_name} {suggestion.last_name} 
                            </Text>
                            <Text fontSize='14px' color='gray'> popular </Text>
                        </Box>
                    </Flex>

                    {/* Follow button */}
                    <Text color='blue.600' fontWeight='semibold'> Follow </Text>
                </Flex>
            )).filter((_,i) => i < 5)}

        </Box>
     );
}
 
export default Suggestions; 