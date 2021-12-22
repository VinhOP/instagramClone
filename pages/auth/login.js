import { Box, Button, Center, Flex, Grid, GridItem} from "@chakra-ui/react";
import Header from "../../components/Header";
import { getProviders, signIn } from 'next-auth/react'

const LogIn = ({providers}) => {

    const backgroundColor = ((provider) => {
        switch(provider.name) {
            case 'Google':
                return 'white';
            case 'Facebook':
                return 'blue.500';
        }
    })

    return ( 
        <Box>
            <Header />
            <Flex w='20em' h='10em' alignItems='center' flexDir='column' borderRadius={5} 
            justifyContent='space-evenly' bg='gray.300' mx='auto' mt='2em'>
                {Object.values(providers).map((provider) => (
                    <Box key={provider.name}>
                        <Button 
                        w='14em' 
                        bg={() => backgroundColor(provider)} 
                        onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
                            Sign in with {provider.name}
                        </Button>
                    </Box>
                ))}
            </Flex>
        </Box>
     );
}
 
export async function getServerSideProps() {
    const providers = await getProviders()

    return {
      props: { providers },
    }
}

export default LogIn;