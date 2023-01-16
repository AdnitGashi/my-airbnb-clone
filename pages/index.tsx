import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/Explore/SmallCard";

type Locations = {
  location: string;
  img: string;
  distance: string;
};
export default function Home({ exploreData }: any) {
  return (
    <>
      <Head>
        <title>test repo access</title>
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-t">
          <h2 className="text-4xl font-semibold py-5 ">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4 " >
          {exploreData?.map(({img, distance, location}: Locations) => (
            // eslint-disable-next-line react/jsx-key
            <SmallCard
              key={img}
              img={img}
              distance={distance}
              location={location}
            />
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

  return {
    props: { exploreData },
  };
}
