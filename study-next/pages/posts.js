import MainLayout from "../components/layouts/layout";
import { useEffect, useState } from "react";

const Posts = () => {

    const [posts, setPosts] = useState(null)

    useEffect( () => {
        async function load() {
          let responce = await fetch('http://localhost:4200/posts');
          let postsList = await responce.json()
          setPosts(postsList)
          console.log(postsList)
        }

        load()
    }, [])



  return (
    <MainLayout>
      <h1>Posts Page</h1>
    </MainLayout>
  );
};

export default Posts;



// npm install -g json-server - пакет для мок сервера
