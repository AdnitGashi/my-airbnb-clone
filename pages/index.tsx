import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Explore from "../components/Explore";
import MediumCard from "../components/Explore/MediumCard";
type Props ={
  img:string;
  title:string;
}
export default function Home({ exploreData, cardsData }: any) {
  console.log(cardsData)
  return (
    <>
      <Head>
        <title>test repo access</title>
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-5">
          <Explore exploreData={exploreData} />
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3" >
          {cardsData?.map(({ img,title }: Props) => (   
            <MediumCard key={img} img={img} title={title} />
           ))}    
           </div>
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
