import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LocationCard from "../components/LocationCard";
import { useRouter } from "next/router";
import moment from "moment";

function Search({ searchResults }: any) {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuest } = router.query;
  const formattedStartDate = moment(startDate).format("Do MMMM YY");
  const formattedEndDate = moment(endDate).format("Do MMMM YY");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuest} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} {noOfGuest && `- for ${noOfGuest} guests`}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button-search-filter">Cancellation Flexibilities</p>
            <p className="button-search-filter">Type Of Place</p>
            <p className="button-search-filter">Price</p>
            <p className="button-search-filter">Rooms And Bens</p>
            <p className="button-search-filter">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults?.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                lat,
                long,
                total,
              }: any) => (
                <LocationCard
                  key={title}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  lat={lat}
                  long={long}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
