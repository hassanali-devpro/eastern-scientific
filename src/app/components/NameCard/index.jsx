import React from 'react';

const Index = React.memo(({ name = 'Eastern' }) => {
  return (
    <section className="bg-[url('/dna.png')] bg-center bg-cover bg-[#1BBAC8] bg-opacity-10 py-10 flex items-center justify-center">
      <h1 className="text-[#042182] text-5xl font-semibold my-20">{name}</h1>
    </section>
  );
});

// Set the displayName for the memoized component
Index.displayName = 'Index';

export default Index;
