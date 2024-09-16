import PageTitle from "@/components/Page/PageTitle";
import Menu from "@/components/Menu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Star Wars Guide</title>
      </Head>
      <main>
        <PageTitle title="home" />
        <Menu />
      </main>
    </>
  );
}
