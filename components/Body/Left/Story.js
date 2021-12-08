import { Img,Text,Box,Flex,Center } from "@chakra-ui/react";

const Story = ({img,firstName,lastName}) => {
    return (
        <Box mx='.5em'>
            <Center _hover={{transform: 'scale(1.1)'}} cursor='pointer' boxSize='4em' 
            rounded='full' border='2px' borderColor='red.500' overflow='hidden'>
                <Img src={img} alt='' p='3px' bg='royalblue' rounded='full' />
            </Center>
            <Text textAlign='center' w='4em' fontSize='.8em' isTruncated> {firstName} {lastName} </Text>
        </Box>
    );
}
 
export default Story;