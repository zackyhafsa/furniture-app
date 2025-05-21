import { useState, useRef, useEffect } from "react";

type AccordionItemProps = {
  title: string;
  content: string;
  isOpen: boolean;
  heading: string;
  onClick: () => void;
};

const AccordionItem = ({ title, content, isOpen, heading, onClick }: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="w-full rounded-md overflow-hidden transition-all max-lg:px-[10%]">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-5 py-4 bg-graylight text-left text-text font-medium"
      >
        <span className="text-lg font-bold">{title}</span>
      </button>

      <div
        ref={contentRef}
        style={{ height: height, transition: "height 0.4s ease" }}
        className="overflow-hidden bg-greenlight px-5"
      >
        <div className="py-5">
          <h1 className="font-bold text-lg mb-3">{heading}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "Bedroom",
      heading: "Living Room",
      content:
        "Enjoy a great living room aesthetics with your family  Designs created for increased comfortability.",
    },
    {
      title: "Home Office ",
      heading: "Home Office",
      content:
        "Enjoy a great living room aesthetics with your family  Designs created for increased comfortability.",
    },
    {
      title: "Gaming Room",
      heading: "Gaming Room",
      content:
        "Enjoy a great living room aesthetics with your family  Designs created for increased comfortability.",
    },
  ];

  const handleToggle = (index: any) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          heading={item.heading}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
