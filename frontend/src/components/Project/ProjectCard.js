import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ProjectCards({ heading, data = [] }) {
  const [startIndex, setStartIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const cardsPerPage = 3;

  const handleNext = () => {
    if (startIndex + cardsPerPage < data.length) {
      setStartIndex(startIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  const visibleCards = data.slice(startIndex, startIndex + cardsPerPage);
  const openModal = (index) => {
    setCurrentImageIndex(index);
  };
  const closeModal = () => {
    setCurrentImageIndex(null);
  };
  const modalPrev = () => {
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : data.length - 1
    );
  };
  const modalNext = () => {
    setCurrentImageIndex((prev) =>
      prev < data.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <section className="px-6 md:px-20 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#114329] mb-12">
        {heading}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleCards.map((card, idx) => (
          <div
            key={card._id || card.id}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
          >
            <div
              className="w-full aspect-[4/3] relative"
              onClick={() => openModal(startIndex + idx)}
            >
              <img
                className="object-cover rounded-t-xl w-full h-full"
                src={card.image}
                alt={card.title}
              />
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.location}</p>
              <p className="text-sm text-gray-500 mt-2">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
      {data.length > cardsPerPage && (
        <div className="flex justify-end mt-10 gap-3">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="p-2 border rounded-full shadow 
               hover:bg-[#00382F] hover:text-white 
               disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-inherit"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + cardsPerPage >= data.length}
            className="p-2 border rounded-full shadow 
               hover:bg-[#00382F] hover:text-white 
               disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-inherit"
          >
            <ChevronRight />
          </button>
        </div>
      )}
      {currentImageIndex !== null && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]">
    <button
      onClick={closeModal}
      className="absolute top-6 right-6 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200"
    >
      <X size={20} />
    </button>
    <button
      onClick={modalPrev}
      className="absolute left-6 text-white p-2 rounded-full hover:bg-gray-700"
    >
      <ChevronLeft size={36} />
    </button>
    <img
      src={data[currentImageIndex].image}
      alt="project"
      className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg"
    />
    <button
      onClick={modalNext}
      className="absolute right-6 text-white p-2 rounded-full hover:bg-gray-700"
    >
      <ChevronRight size={36} />
    </button>
  </div>
)}

    </section>
  );
}
