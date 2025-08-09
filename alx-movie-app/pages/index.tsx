import Button from "@/components/commons/Button";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Movie App</title>
        <meta name="description" content="Discover movies with ALX Movie App" />
      </Head>
      <div className="min-h-screen container mx-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Welcome to ALX Movie App
        </h1>
        <Button label="Explore..." icon={faSearchengin} />
      </div>
    </>
  );
}
