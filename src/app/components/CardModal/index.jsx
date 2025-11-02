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

  // ✅ Safely handle both object and string images
  const getImageSrc = (img) => (typeof img === "string" ? img : img?.src);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-5xl h-[85vh] flex flex-col md:flex-row relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white shadow-md hover:bg-gray-100 text-gray-700 p-2 rounded-full transition transform hover:rotate-90"
        >
          <X size={22} />
        </button>

        {/* Left - Image */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center bg-gray-50">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg animate-pulse">
              <span className="text-gray-400 text-sm">Loading...</span>
            </div>
          )}

          <img
            src={getImageSrc(card.images[currentIndex])}
            alt={card.title}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
            className={`max-h-[75vh] max-w-full object-contain transition-opacity duration-300 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />

          {card.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition transform hover:scale-110"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition transform hover:scale-110"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
          <p className="text-gray-700">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
