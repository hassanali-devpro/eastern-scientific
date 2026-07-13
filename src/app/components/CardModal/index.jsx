"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const CardModal = ({ card, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  if (!card) return null;

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? card.images.length - 1 : prev - 1
    );
    setLoading(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === card.images.length - 1 ? 0 : prev + 1
    );
    setLoading(true);
  };

  const handleImageLoad = () => setLoading(false);

  const handleImageError = (e) => {
    setLoading(false);
    e.target.src = "/fallback.png";
  };

  // Handle both imported images and string URLs
  const getImageSrc = (img) => (typeof img === "string" ? img : img?.src);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-2 sm:p-4">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-5xl h-[95vh] md:h-[85vh] 2xl:h-[60vh] flex flex-col md:flex-row overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 bg-white shadow-md hover:bg-gray-100 text-gray-700 p-2 rounded-full transition duration-300 hover:rotate-90"
        >
          <X size={22} />
        </button>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-[42vh] md:h-full flex items-center justify-center bg-gray-50">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
              <span className="text-gray-400 text-sm">Loading...</span>
            </div>
          )}

          <img
            src={getImageSrc(card.images[currentIndex])}
            alt={card.title}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`w-full h-full object-contain transition-opacity duration-300 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />

          {card.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition hover:scale-110"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition hover:scale-110"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex-1 overflow-y-auto p-5 md:p-6 h-full flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {card.title}
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-7">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardModal;