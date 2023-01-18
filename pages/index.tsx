import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Explore from "../components/Explore";

export default function Home({ exploreData, cardsData }: any) {
  return (
    <>
      <Head>
        <title>test repo access</title>
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-5">
          <Explore exploreData={exploreData} cardsData={cardsData}/>
        </section>
        
      </main>
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then((res) =>
    res.json()
  );

  return {
    props: { exploreData, cardsData },
  };
}
