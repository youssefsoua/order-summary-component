function App() {
  return (
    <div className="flex flex-col justify-center justify-items-center w-[450px] max-sm:w-[300px]  rounded-3xl overflow-hidden bg-white">
      <div>
        <img src="./illustration-hero.svg" alt="hero" />
      </div>
      <div className="p-8 max-sm:p-6 flex flex-col text-center">
        <h2 className="text-[28px] max-sm:text-[24px] font-black">
          Order Summary
        </h2>
        <p className="text-neutral-400 mb-6 max-sm:mb-4 p-4">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="p-6 flex flex-row justify-between items-center bg-veryPaleBlue rounded-xl mb-6 max-sm:mb-4">
          <div className="px-2 max-sm:px-[5px] flex flex-row">
            <img
              src="./icon-music.svg"
              className="mr-6 max-sm:mr-[5px]"
              alt="music"
            />
            <div className="flex flex-col justify-center">
              <h4 className="text-darkBlue font-black text-sm max-sm:text-xs">
                Annual Plan
              </h4>
              <p className="text-neutral-400 text-sm max-sm:text-xs">
                $59.99/year
              </p>
            </div>
          </div>
          <a className="text-brightBlue font-black text-sm underline hover:no-underline hover:text-darkBlue max-sm:text-xs">
            Change
          </a>
        </div>
        <a className="bg-brightBlue font-black text-white no-underline py-4 rounded-xl text-sm shadow-lg mb-2 hover:text-darkBlue hover:bg-desaturatedBlue max-sm:text-xs">
          Proceed to Payment
        </a>
        <a className="font-black text-desaturatedBlue no-underline py-4 text-sm hover:text-darkBlue max-sm:text-xs">
          Cancel Order
        </a>
      </div>
    </div>
  );
}

export default App;
