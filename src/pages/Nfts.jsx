import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import enefte from "../../assets/Backend/nfts";

const Nft = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating loading for fun
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <section className="relative bg-mainBg select-none text-gray-100">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 relative z-10">
        <h2 className="sr-only">NFTs</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            {isLoading
              ? Array.from({ length: 12 }).map((_, index) => (
                  <div key={index} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-purple-800 hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105">
                      <Skeleton height={300} width={300} />
                    </div>
                    <div className="mt-4">
                      <Skeleton height={24} width={200} />
                    </div>
                    <div className="mt-1">
                      <Skeleton height={18} width={120} />
                    </div>
                  </div>
                ))
              : enefte.map((nft) => {
                  const { id, imageUrl, title, price } = nft;
                  return (
                    <a key={id} to="#" className="group">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-purple-800 hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105">
                        <img
                          src={imageUrl}
                          alt={title}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <h3 className="mt-4 text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-200">
                        {title}
                      </h3>
                      <p className="mt-1 text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-gray-200">
                        ${price}
                      </p>
                    </a>
                  );
                })}
          </SkeletonTheme>
        </div>
      </div>
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] sm:w-[200px] sm:h-[200px] -left-[80px] sm:-left-24 top-40 gradient-bg-ball rounded-full blur-3xl animate-blob animation-delay-2000 opacity-30"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] sm:w-[200px] sm:h-[200px] -right-[80px] sm:-right-24 top-96 gradient-bg-ball1 rounded-full blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] sm:w-[200px] sm:h-[200px] -left-[80px] sm:-left-24 bottom-20 gradient-bg-ball rounded-full blur-3xl animation-delay-2000 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] sm:w-[200px] sm:h-[200px] -right-[80px] sm:-right-24 bottom-96 gradient-bg-ball1 rounded-full blur-3xl animate-blob"></div>
    </section>
  );
};

export default Nft;
