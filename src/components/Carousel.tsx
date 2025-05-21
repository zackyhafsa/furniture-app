import axios from "axios";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageType = {
  id: number;
  title: string;
  price: string;
  images: string[];
};

const Carousel = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");
        setImages(response.data.slice(0, 7));
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, []);

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-screen-xl overflow-hidden pt-10 mx-auto py-4 px-10">
      <div className="flex justify-center items-center gap-4">
        <div className="relative w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-10"
            style={{ transform: `translateX(-${activeIndex * 200}px)` }}
          >
            {images.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer transition-all duration-300 shrink-0 relative ${
                  index === activeIndex ? "scale-120" : "scale-100 opacity-50"
                }`}
                style={{ width: "250px", height: "350px" }}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl shadow-md "
                />
                {index === activeIndex && (
                  <div className="text-black text-sm absolute bottom-5 space-y-3 ml-5">
                    <p className="bg-white/50 text-lg inline-block px-4 py-2 rounded-xl">${item.price}</p>
                    <p className="text-3xl text-white text-shadow-xs text-shadow-primary">{item.title}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-5 mt-10">
        <button onClick={prev} className="p-2 rounded-full bg-greenlight hover:bg-lime-300">
          <ChevronLeft size={40} />
        </button>

        <button onClick={next} className="p-2 rounded-full bg-greenlight hover:bg-lime-300">
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
