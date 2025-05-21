import { Mail } from "lucide-react";

const Membership = () => {
  return (
    <div className="py-20 px-[10%] text-text bg-graylight space-y-10 max-lg:text-center">
      <h1 className="text-2xl tracking-wide uppercase">Limited Deals</h1>
      <h1 className="font-bold text-6xl max-lg:text-4xl">Become a member and get 10% off of your first purchase</h1>
      <div className="flex items-center max-lg:justify-center">
        <input
          type="email"
          placeholder="Enter your email here"
          className="text-2xl py-3 px-2 bg-white rounded-l-xl max-lg:text-xl max-md:text-lg"
        />
        <Mail size={55} className="bg-greenlight text-2xl py-4 rounded-r-xl max-lg:text-7xl max-lg:px-2 w-10" />
      </div>
    </div>
  );
};

export default Membership;
