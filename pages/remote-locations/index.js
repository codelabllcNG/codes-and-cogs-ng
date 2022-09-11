import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { REMOTE_LOCATIONS } from "../../a-store/content-store/REMOTE_LOCATIONS";

function RemoteLocations(props) {
  const router = useRouter();

  const { title, locations, generalMap } = props;

  return (
    <div>
<Head>
        <title>{`Remote Locations - Codes and Cogs`}</title>
        <meta name="description" content={`Our remote locations across the world.`} />
        <link rel="icon" href="/favicon.ico" />
      
      </Head>


      <div className="flex  justify-center md:mb-2">
        <h2 className="font-bold header">
          {title}
        </h2>
      </div>
      <div className="flex justify-center mb-4">
        <div className=" w-[75px] md:w-[150px]">
          <Image alt="Image alt text"
            src="/images/logos-and-icons/red-underline.png"
            width={150}
            height={20}
          />
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <Image alt="Image alt text"
          src={generalMap.includes('https') || `/images/remote-location-map.png`}
          height="300"
          width="700"
      
        />
      </div>

      <div className="flex  justify-between scroll-smooth  overflow-x-scroll hover:overscroll-x-none  duration-500 scrollbar-hide space-x-5 px-3">
        {locations.map((location) => (
          <div
            onClick={() => {
              router.push(`/remote-locations/${location.id}`);
            }}
            key={location.id}
            className={`bg-white cursor-pointer rounded-lg   hover:scale-95 duration-300 shrink-0 snap-center shadow-md`}
          >
            <div className="w-[250px] 400:w-[300px] duration-200">
              <Image alt="Image alt text"
                className="rounded-t-lg"
                src={location.imageUrl}
                width={300}
                height={200}
              
              />
            </div>

            <div className="pl-2 400:text-xl font-semibold mt-2 mb-2">
              <p>{location.name}</p>
            </div>

            <div className="text-sm ml-2 font-semibold text-pry-color mb-4">
              <button
                onClick={() => {
                  router.push(`/remote-locations/${location.id}`);
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_BASE}/codesandcogs/dev/api/codesandcogs/v1/remotelocations`
  );
  const data = await response.json();

  const title = data.title;
  const locations = data.locations;
  const generalMap = data.locationMap

  return {
    props: {
      title,
      locations,
      generalMap
    },
    revalidate: 300,
  };
}

export default RemoteLocations;
