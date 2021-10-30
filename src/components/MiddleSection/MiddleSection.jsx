import React, { useEffect, useState } from 'react';
import { trackPromise } from 'react-promise-tracker';
import LargeCard from '../LargeCard/LargeCard';
import SmallCard from '../SmallCard/SmallCard';

const MiddleSection = () => {
    const [data, setData] = useState([])
    //Fetching api
    useEffect(()=>{

            trackPromise (
                fetch('https://awalhossain.github.io/jsonkeeper/keeper.json')
                .then(res=> res.json())
                .then(result => setData(result))
            )

    },[])
    return (
        //MiddleSection
        <main className="max-w-7xl mx-auto px-8 sm:px-16">
          <div className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
         </div>
         {/* Pull some data form the api */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
        {
             data.map(({img, location, distance })=> <SmallCard
             key={location}
             img={img}
             location={location}
             distance={distance}
             ></SmallCard>)
         }
        </div>
        <section>
        <LargeCard></LargeCard>
        </section>
        </main>
    );
};

export default MiddleSection;