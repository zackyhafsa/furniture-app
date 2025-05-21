import Carousel from "./Carousel";

const ProductSection = () => {
  return (
    <div className="py-20 bg-primary">
      <div className="flex justify-between gap-3 px-[10%] max-lg:px-[5%] py-20 items-center">
        <div className="text-greenlight space-y-3">
          <h1 className="text-2xl tracking-wide max-lg:text-xl">OUR PRIDUCTS</h1>
          <h1 className="font-bold text-5xl max-lg:text-2xl">This Month Best Seller</h1>
        </div>
        <a href="#" className="bg-greenlight hover:bg-lime-300 text-text rounded-md px-6 py-3 max-lg:px-1">
          See More
        </a>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default ProductSection;
