import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.scss'

function MyApp({ Component, pageProps: {session , ...pageProps} }) {
  return (
    <ChakraProvider> 
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  )
}

export default MyApp;