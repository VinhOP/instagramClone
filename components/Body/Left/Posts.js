import { Box } from "@chakra-ui/layout";
import { PostContext } from "../../../Contexts/PostContext";
import Post from "./Post/index";

const Posts = () => {

    const posts = [
        {
            id: 1,
            userName: 'Tom',
            userAvt: 'https://helios-i.mashable.com/imagery/articles/04voU2yaTvRXA8qWL1yMD3M/hero-image.fill.size_1200x900.v1614266958.jpg',
            img: {
                src: 'https://randompicturegenerator.com/img/people-generator/ga40a79457c77c0f435a964516a0a1bdb0f670070359517eb5e4ce88497871e999c3bf907c46bcb0093c33394ca89f2b8_640.jpg',
            },
            caption: {
                value: 'Tình thương',
            },
            likes: {
                counter: 0,
            },
        },
        {
            id: 2,
            userName: 'Jerry',
            userAvt: 'https://data.whicdn.com/images/286451881/original.jpg',
            img: {
                src: 'https://i.pinimg.com/736x/f0/4e/12/f04e12f69857f3bdc44151425707e708.jpg',
            },
            caption: {
                value: 'Check in HighLand Coffee',
            },
            likes: {
                counter: 0,
            },
        },
        {
            id: 3,
            userName: 'Spike',
            userAvt: 'https://upload.wikimedia.org/wikipedia/vi/8/8f/Love_That_Pup2.JPG',
            img: {
                src: 'https://i.pinimg.com/originals/3d/c4/49/3dc449b04d9ace524a0ecd247e1fdc83.png',
            },
            caption: {
                value: `Howdey`
            },
            likes: {
                counter: 0,
            },
        },
    ]

    return (
        <Box mt='2em'>
            {posts.map(post => (
            <PostContext.Provider key={post.id} value={{
                userName: post.userName,  
                avatar: post.userAvt, 
                img: post.img.src,
                likes: post.likes.counter, 
                caption: post.caption.value,
                }}>
                <Post />
            </PostContext.Provider>
            ))}
        </Box>
     );
    
}
 
export default Posts;