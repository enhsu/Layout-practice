function TV() {
  return (
    <div className="card bg-black text-white">
      <div className="card-image-container">
        {/* Introduction */}
        <div className="card-text lg:flex-grow lg:pr-8 lg:text-left">
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>
        {/* TV & video */}
        <div className="flex justify-center max-w-2xl w-full">
          <div className="relative overflow-hidden">
            {/* TV picture */}
            <picture>
              <img
                className="relative -mt-[10%] z-10"
                src="/netflix/tv.png"
                alt="tv"
              />
            </picture>
            {/* Video */}
            <div className="absolute max-w-[73%] max-h-[54%] top-[8%] left-[13%] ">
              <video className="w-full h-full" autoPlay muted playsInline loop>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TV;
