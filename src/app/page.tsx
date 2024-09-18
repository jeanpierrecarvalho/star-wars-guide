import PageTitle from "@/components/Page/PageTitle";
import Menu from "@/components/Menu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Star Wars Guide</title>
        <meta
          name="description"
          content="Explore the Star Wars universe through our comprehensive guide."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main role="main" aria-labelledby="page-title">
        <PageTitle title="home" />
        <Menu />
      </main>
    </>
  );
}
