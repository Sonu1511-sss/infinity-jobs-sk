import React from 'react';

function Pricing() {
  return (
    <div className="bg-gray-900">
      <div className="bg-blue-500 text-white w-full h-[14rem] py-4">
        <div className="max-w-7xl mx-auto mt-11 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Title */}
            <h1 className="text-3xl font-semibold">Find the right plan for your site</h1>
            {/* Last modified text */}
            <p className="text-sm text-opacity-80 mt-2">Last modified: March 27, 2024</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-100 md:mb-8 lg:text-3xl xl:mb-12">Our plans for you</h2>
          <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
            {/* plan - Free */}
            <div className="flex flex-col rounded-lg border border-gray-700 bg-gray-800 p-4 pt-6">
              <div className="mb-12">
                <div className="mb-2 text-center text-2xl font-bold text-gray-100">Free</div>
                <p className="mx-auto mb-8 px-8 text-center text-gray-400">For individuals and organizations who want to try our system</p>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100">1.000 MB file storage</span>
                  </div>
                  <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100">2.000 MB bandwidth per month</span>
                  </div>
                  <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100">200 tasks per month</span>
                  </div>
                  <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100">Community support</span>
                  </div>
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-8">
                <div className="flex items-end justify-center gap-1">
                  <span className="self-start text-gray-600">$</span>
                  <span className="text-4xl font-bold text-gray-300">0</span>
                  <span className="text-gray-500">per user/month</span>
                </div>
                <a href="#" className="block rounded-lg bg-gray-700 px-8 py-3 text-center text-sm font-semibold text-gray-300 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-gray-400 md:text-base">Join for free</a>
              </div>
            </div>
            {/* plan - Team */}
            <div className="relative flex flex-col rounded-lg border-2 border-indigo-500 bg-gray-800 p-4 pt-6">
              <div className="mb-12">
                <div className="absolute inset-x-0 -top-3 flex justify-center">
                  <span className="flex h-6 items-center justify-center rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">most popular</span>
                </div>
                <div className="mb-2 text-center text-2xl font-bold text-gray-100">Team</div>
                <p className="mx-auto mb-8 px-8 text-center text-gray-400">Advanced features for Individuals and organizations</p>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100">Unlimited file storage</span>
                  </div>
                  <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100">10 GB bandwidth per month</span>
                  </div>
                  <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100">10.000 tasks per month</span>
                  </div>
                  <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100">Email support</span>
                  </div>
                  <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100">100 Webhooks</span>
                  </div>
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-8">
                <div className="flex items-end justify-center gap-1">
                  <span className="self-start text-gray-600">$</span>
                  <span className="text-4xl font-bold text-gray-300">19</span>
                  <span className="text-gray-500">per user/month</span>
                </div>
                <a href="#" className="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-gray-300 outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-400 focus-visible:ring active:text-gray-400 md:text-base">Choose plan</a>
              </div>
            </div>
            {/* plan - Enterprise */}
            <div className="flex flex-col rounded-lg border border-gray-700 bg-gray-800 p-4 pt-6">
              <div className="mb-12">
                <div className="mb-2 text-center text-2xl font-bold text-gray-100">Enterprise</div>
                <p className="mx-auto mb-8 px-8 text-center text-gray-400">For big teams and organizations with extensive needs</p>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100">Unlimited file storage</span>
                  </div>
                  <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100">Unlimited bandwidth</span>
                  </div>
                  <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100">Unlimited tasks per month</span>
                  </div>
                  <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100">24/7 support</span>
                  </div>
                  <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-100">Unlimited Webhooks</span>
                  </div>
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-8">
                <div className="flex items-end justify-center gap-1">
                  <span className="self-start text-gray-600">$</span>
                  <span className="text-4xl font-bold text-gray-300">49</span>
                  <span className="text-gray-500">per user/month</span>
                </div>
                <a href="#" className="block rounded-lg bg-gray-700 px-8 py-3 text-center text-sm font-semibold text-gray-300 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-gray-400 md:text-base">Choose plan</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
