import Router from "next/router"

const About = () => {

const goToMainPage = () => {
    Router.push('/')
}
    
    return (<>
        <h1>About Page</h1>
        <button onClick={goToMainPage}>Return to main page</button>
        <button onClick={ () => Router.push('/posts')}>Go to posts</button>
    </>)
}

export default About