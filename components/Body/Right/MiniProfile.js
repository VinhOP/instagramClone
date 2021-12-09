import { Box,Img,Text,Flex,Button } from "@chakra-ui/react";

const MiniProfile = () => {
    return ( 
    <Flex justifyContent='space-between'>
        <Flex>
            <Img 
            src='https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg' 
            alt=''
            rounded='full'
            mr='.5em'
            h='3em'
            />
            <Box>
                <Text fontWeight='semibold' fontSize='.8em'> email@gmail.com </Text>
                <Text color='gray' fontSize='.7em'> name </Text>
            </Box>
        </Flex>
        <Box>
            <Button> <Text fontSize='.8em'> Sign out </Text> </Button>
        </Box>
    </Flex>
     );
}
 
export default MiniProfile;