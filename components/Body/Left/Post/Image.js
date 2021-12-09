import { Center,Img } from "@chakra-ui/react";
import { useContext } from "react";
import { PostContext } from "../../../../Contexts/PostContext";


const Image = () => {

    const { img } = useContext(PostContext)

    return ( 
        <Center>
            <Img src={img} alt='' maxH='40em' maxW='full'/>
        </Center>
    );
}
 
export default Image;