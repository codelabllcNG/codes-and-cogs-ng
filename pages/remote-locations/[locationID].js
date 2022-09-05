import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Loading from "../../components/Loading";

function LocationID(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const { locationID, locationArray, selectedLocation } = props;

  return (
    <div>
      <Head>
        <title>Codes and Cogs in {selectedLocation.name}</title>
        <meta
          name="description"
          content={`Our remote location in  ${selectedLocation.title}`}
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://www.codesandcogs.com/remote-locations/${selectedLocation.id}`}
        />
      </Head>

      <div className="flex  justify-center md:mb-2">
        <h2 className="font-bold text-xs 400:text-xl font-larken md:text-3xl">
          {selectedLocation.name}
        </h2>
      </div>
      <div className="flex justify-center mb-4">
        <div className=" w-[75px] md:w-[150px]">
          <Image
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>

      <div className={`px-5 md:px-10 md:flex  justify-between  `}>
        <div
          className={`prose max-w-none prose-h1:text-3xl prose-h1:font-bold md:w-[55%] text-justify mb-5 md:mb-0 text-pry-color `}
        >
          <div
            dangerouslySetInnerHTML={{ __html: selectedLocation.content }}
            className="md:leading-10  "
          >
            {}
          </div>
        </div>

        <div className="md:w-[40%]  flex justify-center mb-5 md:mb-0">
          <Image
            width={400}
            height={300}
            className="w-300px rounded-lg"
            src={selectedLocation.imageUrl}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const locationID = context.params.locationID;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/remotelocations`
  );
  const data = await response.json();
  const locationArray = data.locations;

  function locationFinder() {
    return locationArray.find((location) => location.id === locationID);
  }
  const selectedLocation = locationFinder(locationID);

  if (!selectedLocation) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      locationID,
      locationArray,
      selectedLocation,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/remotelocations`
  );
  const data = await response.json();

  const locationArray = data.locations;

  const locationPaths = locationArray.map((location) => location.id);

  return {
    paths: locationPaths.map((locationID) => ({
      params: { locationID: locationID },
    })),
    fallback: true,
  };
}

export default LocationID;
