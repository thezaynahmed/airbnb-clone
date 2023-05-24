import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

// type PictureType = {
//   category: string;
//   createdAt: string;
//   favorites: number;
//   isHidden: boolean;
//   title: string;
//   updatedAt: string;
//   url: string;
//   user: string;
// };
// type ResponseDataType = {
//   lastPictures: PictureType[];
//   picturesByCat: PictureType[];
// };
type PageProps = {
  exploreData: any;
  cardsData: any;
  // data: ResponseDataType;
};

const Home: NextPage<PageProps> = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>AIRBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header placeholder={"Search your dream Airbnb"} />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Pull data from server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }: any) => (
              <SmallCard
                key={location}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-5">Live anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }: any) => (
              <MediumCard key={title} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}

export default Home;
