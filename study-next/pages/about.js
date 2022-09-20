import Router from "next/router"
import MainLayout from "../components/layouts/layout"

const About = () => {

const goToMainPage = () => {
    Router.push('/')
}
    
    return (<MainLayout>
        <h1>About Page</h1>
        <button onClick={goToMainPage}>Return to main page</button>
        <button onClick={ () => Router.push('/posts')}>Go to posts</button>
    </MainLayout>)
}

export default About