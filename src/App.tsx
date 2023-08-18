function App() {
  return (
    <article className="flex h-[568px] w-[326px] flex-col overflow-hidden rounded-2xl bg-white md:h-[697px] md:w-[450px] ">
      <section>
        <img src="./illustration-hero.svg" alt="hero" width="100%" />
      </section>
      <section className="flex flex-col px-6 py-8 text-center md:p-12">
        <h1 className="text-3xl font-black text-dark-blue ">Order Summary</h1>
        <p className="py-6 text-desaturated-blue md:text-lg">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <section className="mb-6 flex flex-row items-center justify-between rounded-xl bg-very-pale-blue p-4 md:p-6">
          <div className="flex w-36 flex-row justify-between md:w-40">
            <img src="./icon-music.svg" className="h-12 w-12" alt="music" />
            <div className="flex flex-col justify-center">
              <p className="text-sm font-black text-dark-blue md:text-base ">
                Annual Plan
              </p>
              <span className="text-sm text-desaturated-blue md:text-base">
                $59.99/year
              </span>
            </div>
          </div>
          <a className="text-sm font-black text-bright-blue underline hover:text-dark-blue hover:no-underline md:text-base ">
            Change
          </a>
        </section>
        <button className="mb-6 rounded-xl bg-bright-blue p-4 text-sm font-black text-white no-underline shadow-xl hover:bg-bright-blue/50 md:text-base">
          Proceed to Payment
        </button>
        <button className="text-sm font-black text-desaturated-blue no-underline hover:text-dark-blue md:text-base">
          Cancel Order
        </button>
      </section>
    </article>
  );
}

export default App;
