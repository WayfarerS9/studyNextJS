import {useRouter} from 'next/router'

const PostId = () => {
    const router = useRouter();
    console.log(router)
    console.log(router.query.id)
    console.log(typeof router.query.id)
    return (<>
        <h1>List of Posts</h1>
        <p>Post № {router.query.id}</p>
    </>)
}

export default PostId