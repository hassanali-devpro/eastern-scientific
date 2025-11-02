import Link from 'next/link';

const Index = () => {
  return (
    <div className="bg-[#3069B1] p-[5%] text-white">
      <div className="flex flex-wrap gap-5 justify-between items-center">
        <img src="/logo1.png" alt="Eastern Logo" width={100} height={100} className='mx-3'/>
        <p className="text-sm">© 2024 Eastern Scientific Corporation (PVT) LTD. All rights reserved.</p>
        <div className="flex gap-4 items-center">
          <a href="https://www.facebook.com/escientificpk" target='blank' className="">
            <img src="/facebook.png" alt="Facebook" width={28} height={28} />
          </a>
          <a href="https://www.instagram.com/escientificpk" className="" target='blank'>
            <img src="/insta.png" alt="Instagram" width={28} height={28} />
          </a>
          <a href="https://x.com/escientificpk" className="" target='blank'>
            <img src="/x.png" alt="X (formerly Twitter)" width={28} height={28} />
          </a>
          <a href="https://www.linkedin.com/company/escientificpk" className="" target='blank'>
            <img src="/linkedin.png" alt="LinkedIn" width={28} height={28} />
          </a>
          <a href="https://www.youtube.com/@escientificpk" className="" target='blank'>
            <img src="/youtube.png" alt="YouTube" width={28} height={28} />
          </a>
          <a href="https://www.tiktok.com/@escientificpk?lang=en" className="" target='blank'>
            <img src="/tiktok.png" alt="Tiktok" width={28} height={28} />
          </a>
        </div>
      </div>
      <div className="h-[2px] my-10 bg-white w-full"></div>
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start mt-3">
            <h1 className="font-semibold">Headquarters:</h1>
            <p className="">Eastern Tower, 73 R1, Johar Town, Lahore - Pakistan</p>
          </div>
          <div className="flex flex-col items-start mt-3">
            <h1 className="font-semibold">Email</h1>
            <p className="">sales@easternscientific.com.pk</p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-start mt-3">
            <h1 className="font-semibold">UAN</h1>
            <p className="">+92 42 111 111 116</p>
          </div>
          <div className="flex flex-col items-start mt-3">
            <h1 className="font-semibold">Helpline</h1>
            <p className="">+92 336 111 3737</p>
          </div>
        </div>
        <div className=""><img src="/iso.png" width={80} height={80} alt="ISO Logo" /></div>
      </div>
      <div className="h-[2px] my-10 bg-white w-full"></div>
      <div className="flex flex-wrap gap-5 justify-between">
        <div className="flex gap-5">
          <div className="flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/pages/products">All Products</Link>
            <Link href="/pages/industries">Verticals</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/pages/career">Join us</Link>
            <Link href="/pages/news">Latest Updates</Link>
            <Link href="/pages/products">Research Instruments</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/pages/about">About Us</Link>
            <Link href="/pages/contact">Contact Us</Link>
            <Link href="/pages/services">Our Services</Link>
          </div>
        </div>
        <div className="flex md:justify-end">
          <h1 className="relative text-4xl font-semibold w-2/3">
            Science For a Better Tomorrow<span className="text-sm absolute bottom-5 ml-2">(TM)</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
