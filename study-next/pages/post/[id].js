import {useRouter} from 'next/router'
import MainLayout from '../../components/layouts/layout';


const PostId = () => {
    const router = useRouter();
    console.log(router)
    console.log(router.query.id)
    console.log(typeof router.query.id)
    return (<MainLayout>
        <h1>List of Posts</h1>
        <p>Post № {router.query.id}</p>
    </MainLayout>)
}

export default PostId