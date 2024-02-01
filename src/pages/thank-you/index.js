import React from "react";

export default function ThankYou() {
  return (
    <div>
      <Header />

      <div className="main flex flex-col justify-center items-center">
        <h1 className="text-[120px] text-[#000] mt-[100px]">
          Thank <span className="text-[#FF5B46]">You!!</span>
        </h1>

        <p>
          Thank You For Your Interest!! Your inquiry has been sent successfully,
          someone from our team will get back to you shortly. In the mean time
          you can have a look at what else we has to offer you.
        </p>

        <button className="bg-[#FF5B46] hover:bg-blue-600 text-white px-4 py-2 rounded">
          visit homepage
        </button>
      </div>

      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className=" text-[#000] py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left side */}
        <div className="flex items-center">
          <a href="/">
            <img
              class="w-[60px] object-contain"
              src="https://diginsy.com/wp-content/uploads/2023/06/logo-3.png"
              alt=""
            />
          </a>
        </div>

        {/* Middle (placeholder for logo or other content) */}
        <nav className="space-x-4">
          <a href="#" className="hover:text-gray-300">
            Link 1
          </a>
          <a href="#" className="hover:text-gray-300">
            Link 2
          </a>
          <a href="#" className="hover:text-gray-300">
            Link 3
          </a>
        </nav>

        {/* Right side */}
        <div>
          <button className="bg-[#FF5B46] hover:bg-blue-600 text-white px-4 py-2 rounded">
            REQUEST quote
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return <footer className="bg-gray-600 w-full py-4 h-[500px]"></footer>;
};
