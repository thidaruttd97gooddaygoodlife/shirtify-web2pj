import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Home = () => {
  const images = [
    '/Rectangle 62.svg',
    '/311064442_5467212733366013_1029512325697181988_n.jpg',
    '/qoe4a2tkrXYzcA12IiV-o.jpg',
  ]; // Replace with your image paths

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
      setQuery(e.target.value);
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        onSearch(query);
      }
    };

    return (
      <div className="flex items-center justify-center mt-[-50px] relative">
        <div className="relative w-[750px] ml-[100px]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 z-10"> {/* Ensure higher z-index */}
            <Image 
              src="/images/3dicons.svg" // Updated path
              alt="Search Icon" 
              width={30} 
              height={30} 
            />
          </div>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Search the clothes you need..."
            className="border border-gray-300 rounded-full p-3 pl-12 w-[600px] focus:outline-none focus:border-blue-500 drop-shadow-lg relative z-0 text-[#9A9A9A] "  // Ensure input is behind the icon
          />
        </div>
      </div>
    );
  };

  return (
    <main className="flex min-h-screen flex-col justify-between bg-[#7BA0FF]">
      <div className="mt-[30px] flex flex-col ml-[250px] relative"> {/* Center the content */}
        <div className="relative flex ">
          <Image 
            src="/images/WebLogo.svg" // Updated path
            alt="Logo" 
            width={400} 
            height={400} 
          />
          <button
            onClick={toggleMenu}
            className="absolute bottom-0 right-0 mb-4 mr-[1230px] z-50 text-white p-2 rounded-md text-[50px] -top-[16px]"
          >
            ☰
          </button>
        </div>
        <SearchBar onSearch={(query) => console.log(query)} />
        <div className="w-[70px] h-[70px] bg-white rounded-full -mt-[60px] ml-[950px]">
          <Image 
            src="/images/Vectary texture.svg" // Updated path
            alt="user profile" 
            width={50} 
            height={50} 
            className="ml-[10px]"
          />
        </div>
      </div>
      
      <div className="relative w-[1100px] h-[288px] mx-auto mt-[50px] "> {/* Adjust height as needed */}
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={src} alt={`Slide ${index}`} layout="fill" objectFit="cover" />
          </div>
        ))}
        <button onClick={prevImage} className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2 rounded-r">
          ❮
        </button>
        <button onClick={nextImage} className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 rounded-l">
          ❯
        </button>
        <div className="flex mt-[350px]">
          <h1 className="text-[24px]">Categories</h1>
          <Link href="/shirtify/app/Seeall" className="text-background text-[24px] ml-[900px] text-[#FFD4E9] font-normal">
            See all
          </Link>
        </div>
      </div>
      
      <div className="flex mt-[120px] gap-8 items-center">
        <div className="w-[160px] h-[150px] bg-white ml-[200px] mb-8 drop-shadow-lg rounded-xl">
          <Image 
            src="/images/Vectary texture (1).svg" // Updated path
            alt="categories" 
            width={200} 
            height={200} 
          />
        </div>
        <div className="w-[160px] h-[150px] bg-white mb-8 drop-shadow-lg rounded-xl">
          <Image 
            src="/images/Vectary texture (1).svg" // Updated path
            alt="categories" 
            width={200} 
            height={200} 
          />
        </div>
        <div className="w-[160px] h-[150px] bg-white mb-8 drop-shadow-lg rounded-xl">
          <Image 
            src="/images/Vectary texture (1).svg" // Updated path
            alt="categories" 
            width={200} 
            height={200} 
          />
        </div>
        <div className="w-[160px] h-[150px] bg-white mb-8 drop-shadow-lg rounded-xl">
          <Image 
            src="/images/Vectary texture (1).svg" // Updated path
            alt="categories" 
            width={200} 
            height={200} 
          />
        </div>
        <div className="w-[160px] h-[150px] bg-white mb-8 drop-shadow-lg rounded-xl">
          <Image 
            src="/images/Vectary texture (1).svg" // Updated path
            alt="categories" 
            width={200} 
            height={200} 
          />
        </div>
        <div className="w-[160px] h-[150px] bg-white mb-8 drop-shadow-lg rounded-xl">
          <Image 
            src="/images/Vectary texture (1).svg" // Updated path
            alt="categories" 
            width={200} 
            height={200} 
          />
        </div>
      </div>
      
      <h1 className="text-[24px] text-black ml-[70px] ">Popular Fashion</h1>
      <div className="flex flex-row gap-[60px] ml-[90px]">
        <div className="w-[170px] h-[180px] bg-white  drop-shadow-lg rounded-xl mt-[50px] mb-[50px]">
          <Image 
            src="/images/Vectary texture (1).svg" // Updated path
            alt="categories" 
            width={200} 
            height={200} 
          />
        </div>
        <div className="w-[170px] h-[180px] bg-white  drop-shadow-lg rounded-xl mt-[50px] mb-8">
          <Image 
            src="/images/Vectary texture (1).svg" // Updated path
            alt="categories" 
            width={200} 
            height={200} 
          />
        </div>
        <div className="w-[170px] h-[180px] bg-white  drop-shadow-lg rounded-xl mt-[50px] mb-8">
          <Image 
            src="/images/Vectary texture (1).svg" // Updated path
            alt="categories" 
            width={200} 
            height={200} 
          />
        </div>
        <div className="w-[170px] h-[180px] bg-white  drop-shadow-lg rounded-xl mt-[50px] mb-8">
          <Image 
            src="/images/Vectary texture (1).svg" // Updated path
            alt="categories" 
            width={200} 
            height={200} 
          />
        </div>
        <div className="w-[170px] h-[180px] bg-white  drop-shadow-lg rounded-xl mt-[50px] mb-8">
          <Image 
            src="/images/Vectary texture (1).svg" // Updated path
            alt="categories" 
            width={200} 
            height={200} 
          />
        </div>
      </div>
      
    </main>
  );
};

export default Home;
