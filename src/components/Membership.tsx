import { Mail } from "lucide-react";

const Membership = () => {
  return (
    <div className="py-20 px-52 text-text bg-graylight space-y-10">
      <h1 className="text-2xl tracking-wide uppercase">Limited Deals</h1>
      <h1 className="font-bold text-6xl">Become a member and get 10% off of your first purchase</h1>
      <div className="flex items-center">
        <input
          type="email"
          placeholder="Enter your email here"
          className="text-2xl py-3 px-5 bg-white rounded-l-xl"
        />
        <Mail size={55} className="bg-greenlight text-2xl py-4 rounded-r-xl" />
      </div>
    </div>
  );
};

export default Membership;
