import React from 'react';

const Testimonial = () => {
    return (
        // User Testimonial
         <div>
             <div class="container mx-auto px-4 flex flex-col lg:items-center justify-between lg:flex-col">
                    <div class="mb-14 xl:mb-0">
                        <h1 class="text-2xl leading-tight md:text-4xl xl:text-5xl font-bold text-gray-800 md:w-full  pr-16 lg:pr-0">Our customers love what we do</h1>
                        <p class="mt-4 text-base leading-normal text-gray-600 md:w-2/3 lg:w-full pr-16 lg:pr-0">Over 500 companies use our product to understand their business and marketing better. <br />
                        Once you’ve found what you’re looking for, learn about your host, read past guest reviews, and get the details on cancellation options—then book in just a few clicks.
                        </p>
                        <button class="w-full sm:w-auto mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-700 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">Read success stories</button>
                    </div>

                    <div role="list" aria-label="Testimonials" class="xl:w-full lg:w-full my-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-wrap justify-center items-start">
                        <div role="listitem" class="bg-white shadow rounded p-4 xl:p-8">
                            <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                            <div class="pl-4 pt-4 flex items-start justify-between">
                                <div class="mr-6">
                                    <p class="xl:text-xl xl:leading-loose text-gray-600">This website has a bunch of amazing packages which help to decide my cheap travel</p>
                                    <p class="mt-4 text-base font-semibold leading-none text-gray-800">Anna Smith</p>
                                </div>
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-1.png" alt="Display Avatar of Anna Smith" role="img" />
                            </div>
                        </div>

                        <div role="listitem" class="bg-white shadow rounded p-4 xl:p-8">
                            <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                            <div class="pl-4 pt-4 flex items-start justify-between">
                                <div class="mr-6">
                                    <p class="xl:text-xl xl:leading-loose text-gray-600">This website help me to visit my dream place. Oviously i will recommend everyone for a try</p>
                                    <p class="mt-4 text-base font-semibold leading-none text-gray-800">Dany John</p>
                                </div>
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-2.png" alt="Display avatar of Dany John" role="img" />
                            </div>
                        </div>
                        <div role="listitem" class="bg-white shadow rounded p-4 xl:p-8">
                            <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                            <div class="pl-4 pt-4 flex items-start justify-between">
                                <div class="mr-6">
                                    <p class="xl:text-xl xl:leading-loose text-gray-600">This website has a bunch of amazing packages which help to decide my cheap travel</p>
                                    <p class="mt-4 text-base font-semibold leading-none text-gray-800">Mike Blake</p>
                                </div>
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-3.png" alt="Display Avatar of Mike Blake" role="img" />
                            </div>
                        </div>
                    </div>
                </div>
             </div>
    );
};

export default Testimonial;