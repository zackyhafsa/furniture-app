import Accordion from "./Accordion";

const CategoriesSection = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "photo1",
    },
    {
      url: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "photo2",
    },
    {
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "photo3",
    },
  ];

  return (
    <div className="flex lg:h-screen py-20 gap-10 max-lg:justify-center">
      <div className="w-2/3 flex gap-5 max-lg:hidden">
        <div className="w-50 bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-full rounded-xl bg-cover bg-center bg-no-repeat"></div>
        <div className="w-50 bg-[url('https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat h-full rounded-xl"></div>
        <div className="flex-1 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] rounded-xl bg-cover bg-center bg-no-repeat"></div>
      </div>
      <div className="lg:w-1/3 flex flex-col justify-between py-10 text-text lg:mr-52 max-lg:px-10 max-lg:space-y-10">
        <h1 className="text-2xl">Categories</h1>
        <p className="font-bold text-5xl">Furniture Sets Recommendations</p>
        <Accordion />
        <div className="grid grid-cols-3 gap-5 lg:hidden">
          {images.map((image) => (
            <img src={image.url} alt={image.name} className="h-52 w-full object-cover rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
