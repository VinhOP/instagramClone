import { Box,Img,Text,Flex,Button } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { signOut } from 'next-auth/react'

const MiniProfile = () => {

    const { data: session } = useSession()

    return ( 
    <Flex justifyContent='space-between'>
        <Flex>
            <Img 
            src={session.user?.image}
            alt=''
            rounded='full'
            mr='.5em'
            h='3em'
            />
            <Box>
                <Text fontWeight='semibold' fontSize='.8em'> {session.user?.email} </Text>
                <Text color='gray' fontSize='.7em'> {session.user?.name}</Text>
            </Box>
        </Flex>
        <Box>
            <Button onClick={signOut}> <Text fontSize='.8em'> Sign out </Text> </Button>
        </Box>
    </Flex>
     );
}
 
export default MiniProfile;