import React from 'react'

const Index = () => {
  const logos = Array.from({ length: 39 }, (_, i) => ({
    id: i + 1,
    src: `/l${i + 1}.png`,
  }))

  return (
    <div className="flex flex-col justify-center items-center md:p-[8%] p-[5%] bg-[url('/bg-circle-center.png')] bg-center bg-cover">
      <h1 className="text-4xl font-semibold py-10 text-[#042182]">
        Our Valued Customers
      </h1>

      <div className="flex flex-wrap gap-5 justify-center">
        {logos.map((logo) => (
          <img
            key={logo.id}
            src={logo.src}
            alt={`Customer Logo ${logo.id}`}
            className="w-28 md:w-36 h-auto object-contain" />
        ))}
      </div>
    </div>
  )
}

export default Index