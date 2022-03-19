import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav>
          <div>

          </div>
          <div>
            <ul className="font-semibold">
              <li>Log In</li>
              <li>Sign Up</li>
            </ul>

          </div>
        </nav>






        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>

      <footer></footer>
    </div>
  );
}
