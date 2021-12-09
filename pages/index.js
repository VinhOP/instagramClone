import Body from '../components/Body'
import Header from '../components/Header/index'
import styles from '../styles/Home.module.css'
import { UsersContext } from '../Contexts/UsersContext'
import { Box } from '@chakra-ui/layout'


export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:8000/users')
  const data = await res.json()

  return{
    props: {users: data}
  }
}

export default function Home({users}) {
  return (
    <Box bg='gray.50'>
      <UsersContext.Provider value={users}>
        <Header />
        <Body />
      </UsersContext.Provider>
    </Box>
  )
}
