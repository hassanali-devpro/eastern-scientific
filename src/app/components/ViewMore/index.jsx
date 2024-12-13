import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Index = ({ link }) => {
  return (
    <Link href={link} className='flex items-center justify-between cursor-pointer p-1 pl-2 w-36 border-2 border-gray-400 rounded-3xl bg-black bg-opacity-15 hover:bg-opacity-50'>
      <p className="text-base text-white">Show More</p>
      <img src="/arrow.png" alt="Arrow icon" className='w-9' /> {/* Updated alt text */}
    </Link>
  );
};

// Add PropTypes for validation
Index.propTypes = {
  link: PropTypes.string.isRequired, // Ensure 'link' is a required string
};

export default Index;
