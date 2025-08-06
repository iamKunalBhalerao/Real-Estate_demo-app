const GetStarted = () => {
  return (
    <div id="get-started" className="px-6 sm:px-16 md:px-8 xl:px-16 w-full 2xl:max-w-7xl 2xl:mx-auto">
      <div className="flex flex-col justify-center items-center gap-6 bg-[#4161df] p-8 rounded-xl border-4 border-[#5d77d6] text-center custom-shadow">
        <span className="text-white font-semibold text-2xl sm:text-4xl">Get started with Homyz</span>
        <span className="text-white text-opacity-60 text-sm">
          Subscribe and find super attractive price quotes from us.
          <br />
          Find your residence soon
        </span>
        <button className="bg-[#5a73d7] border-2 border-white text-white font-medium px-6 py-3 rounded-xl custom-shadow transition-all duration-300 hover:cursor-pointer hover:scale-110">
          <a href="mailto:zainkeepscode@gmail.com">Get Started</a>
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
