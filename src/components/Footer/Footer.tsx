const Footer = () => {
  return (
    <div className="px-6 sm:px-16 md:px-8 xl:px-16 w-full 2xl:max-w-7xl 2xl:mx-auto">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8">
        {/* left side */}
        <div className="flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left">
          {/* <img src="./logo2.png" alt="" width={120} /> */}
        <h1 className="text-4xl font-black text-orange-500">Rent <span className="text-black">Pe</span></h1>
          <span className="text-gray-400 text-sm">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <span className="text-[#1f3e72] font-bold text-xl">Information</span>
          <span className="text-gray-400 text-sm">145 New York, FL 5467, USA</span>
          <div className="flex justify-center items-center gap-6 mt-6 font-medium">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
