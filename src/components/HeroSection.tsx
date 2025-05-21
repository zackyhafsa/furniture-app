import { ChevronRight, PlayCircle, Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex justify-between items-center lg:h-screen max-lg:space-y-5 relative max-lg:flex-col pt-28">
      <div className="xl:ml-[10%] lg:ml-[5%]  max-lg:px-[10%]">
        <h1 className="font-bold text-7xl text-text w-[41rem] max-xl:w-[38rem] max-lg:w-full leading-19 max-lg:text-center max-md:text-6xl max-sm:text-5xl max-sm:leading-13">
          The kind of <span className="text-[#817253]">furniture</span> you have been looking for
        </h1>
        <div className="flex items-center gap-5 w-full mt-5 max-lg:flex-col max-lg:gap-2">
          <div className="lg:w-1/2 w-full text-text flex justify-center gap-2 items-center bg-[#E5F0B6] py-4 px-3 rounded-lg hover:bg-lime-300 cursor-pointer transition-all ease-in-out duration-300">
            <Search size={17} />
            <p className="uppercase text-lg">Search Catalog</p>
          </div>
          <div className="lg:w-1/2 w-full text-text flex justify-center gap-2 items-center bg-white border border-text py-4 px-3 rounded-lg hover:bg-text hover:text-white transition-all ease-in-out duration-300">
            <PlayCircle size={17} />
            <p className="uppercase text-lg">Watch Videos</p>
          </div>
        </div>
      </div>
      <div className="lg:absolute top-0 right-0 bg-[url('https://images.unsplash.com/photo-1659005766979-45ab682d1d0b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat w-[33rem] max-lg:w-full h-full flex items-end max-lg:items-center">
        <div className="my-20 ml-10 space-y-4">
          <p className="bg-white/50 text-text inline-block text-xl py-3 px-6 rounded-md">$329</p>
          <p className="text-7xl text-white max-md:text-6xl">Posht Sofa</p>
          <a
            href="#"
            className="inline-flex gap-3 bg-text text-white rounded-md py-3 px-6 text-lg items-center uppercase "
          >
            <p>View Details</p> <ChevronRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
