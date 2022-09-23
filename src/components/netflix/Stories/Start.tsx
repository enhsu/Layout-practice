function Start() {
  return (
    <div className="relative bg-transparent card">
      {/* Background Image */}
      <div className="absolute -top-header_h left-0 right-0 bottom-0 z-0">
        {/* Image */}
        <div className="h-full">
          <picture>
            <img
              className="h-full w-auto min-w-full object-cover z-0"
              src="/netflix/bg-start.jpeg"
              alt="Start card background image"
            />
          </picture>
          {/* Gradian */}
          <div className="start-bg-cover"></div>
        </div>
      </div>
      {/* Information */}
      <div className="card-text relative z-10">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <form action="">
          <h3 className="text-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <input
            className="w-full my-4 h-12 py-2 px-4"
            placeholder="Emall address"
          />
          <button className="btn py-2 px-4">Get Started {`>`}</button>
        </form>
      </div>
    </div>
  );
}

export default Start;
