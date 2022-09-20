import Link from "next/link";

const MainLayout = ({ children }) => {
  return (
    <>
      <nav>
        <Link href='/'><a>HOME</a></Link>
        <Link href='/about'><a>ABOUT</a></Link>
        <Link href='/posts'><a>POSTS</a></Link>

      </nav>
      <main>{children}</main>
      {/*  Если дописать global, стили будут глобальными */}
      <style jsx> 
        {`
            nav {
                position: fixed;
                height: 60px;
                top: 0;
                background-color: indigo;
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100%;
            }

            nav a {
                color: white;
            }

            main {
                margin-top: 60px;
                padding: 1em 2em;
            }
        `}
      </style>
    </>
  );
};

export default MainLayout;
