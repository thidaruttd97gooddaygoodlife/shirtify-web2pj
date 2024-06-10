"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from "next/image";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const items = [
  { id: 1, name: "Mochi", type: "shirt", image: "/Rectangle_53.svg" },
  { id: 2, name: "Mochi", type: "shirt", image: "/Rectangle_53.svg" },
  { id: 3, name: "Mochi", type: "shirt", image: "/Rectangle_53.svg" },
  { id: 4, name: "Mochi", type: "shirt", image: "/Rectangle_53.svg" },
  { id: 5, name: "Mochi", type: "shirt", image: "/Rectangle_53.svg" },
  { id: 6, name: "Mochi", type: "shirt", image: "/Rectangle_53.svg" },
  // Add more items as needed
];

export default function Home() {
  const router = useRouter();
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('total')) {
      setTotal(Number(params.get('total')));
    }
  }, []);

  const handleLoginSuccess = (response: any) => {
    console.log('Login Success:', response);
  };

  const handleLoginFailure = (response: any) => {
    console.log('Login Failed:', response);
  };

  const handleNext = () => {
    if (visibleStartIndex + 4 < items.length) {
      setVisibleStartIndex(visibleStartIndex + 4);
    }
  };

  const handlePrev = () => {
    if (visibleStartIndex > 0) {
      setVisibleStartIndex(visibleStartIndex - 4);
    }
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <main className="flex flex-col min-h-screen justify-between bg-[#7BA0FF]">
        <div className="relative">
          <div className="absolute top-[100px] left-[1150px]">
            <div className="w-[700px] h-[700px] -ml-[200px]">
              <Image
                src="/WebLogo.svg"
                alt="Logo"
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
        <div className="w-[450px] h-[750px] rounded-[40px] ml-[100px] relative mb-[100px]">
          <div className="w-[150px] h-[150px] rounded-full bg-white ml-[50px] mt-[50px]">
            <Image
              src="/Ellipse_19.svg"
              alt="Logo"
              width={150}
              height={150}
            />
          </div>
          <h1 className="text-[35px] text-black font-bold ml-[220px] -mt-[140px]">zom-yanisa</h1>

          <div className="flex">
            <h1 className="text-[16px] text-black font-bold ml-[220px] mt-[10px]">Email :</h1>
            <h1 className="text-[16px] text-black font-semibold mt-[10px]"> mikan120347@gmail.com</h1>
          </div>

          <div className="flex">
            <h1 className="text-[16px] text-black font-bold ml-[220px] mt-[10px]">Phone :</h1>
            <h1 className="text-[16px] text-black font-semibold mt-[10px]"> 0930594211</h1>
          </div>

          <div className="flex">
            <h1 className="text-[16px] text-black font-bold ml-[220px] mt-[10px]">Address:</h1>
            <h1 className="text-[16px] text-black font-semibold mt-[10px]"> 45/1 ถ. ประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพมหานคร 10140</h1>
          </div>

          <div className="flex ml-[220px] mt-[25px]">
            <GoogleLogin
              onSuccess={() => handleLoginSuccess}
              onError={() => handleLoginFailure}
            />
          </div>

          <div className="w-[680px] h-[95px] bg-white mt-[20px] ml-[60px] drop-shadow-xl flex items-center">
            <div className="flex ml-[25px]">
              <p className="text-black border-[#FF8D8D] bg-[#FF8D8D] w-[170px] h-[40px] flex items-center justify-center font-semibold rounded-full">
                Status
              </p>
            </div>
            <div className="flex gap-[70px] ml-[40px] -mt-[20px]">
              <Image
                src="/3359235.svg"
                alt="to pay"
                width={40}
                height={40}
              />
              <Image
                src="/in-progress-icon-510x512.svg"
                alt="in progress"
                width={40}
                height={40}
              />
              <Image
                src="/360_F_303721767.svg"
                alt="completed"
                width={80}
                height={80}
              />
              <div className="flex gap-[45px] mt-[70px]">
                <p className="-ml-[375px]">to pay</p>
                <p>in progress</p>
                <p>completed</p>
              </div>
            </div>
          </div>

          <div className="w-[680px] h-[287px] bg-white mt-[30px] ml-[60px] drop-shadow-xl rounded-lg relative">
            <div className="flex ml-[25px] pt-[20px]">
              <p className="text-black border-[#FDC93A] bg-[#FDC93A] w-[170px] h-[40px] flex items-center justify-center font-semibold rounded-full">
                My order history
              </p>
            </div>
            <button
              onClick={handlePrev}
              disabled={visibleStartIndex === 0}
              className="absolute left-[10px] top-1/2 transform -translate-y-1/2  rounded-full p-2 disabled:opacity-50"
            >
              {"<"}
            </button>
            <div className="flex mt-[30px] ml-[50px] gap-8">
              {items.slice(visibleStartIndex, visibleStartIndex + 4).map(item => (
                <div key={item.id} className="w-[120px] h-[120px] bg-white items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <p className="font-semibold text-black ml-[15px] mt-[8px] text-[18px]">{item.name}</p>
                  <p className="font-semibold text-[#000000] ml-[15px] mt-[5px] text-[14px] opacity-[49%]">{item.type}</p>
                </div>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={visibleStartIndex + 4 >= items.length}
              className="absolute right-[10px] top-1/2 transform -translate-y-1/2  rounded-full p-2 disabled:opacity-50"
            >
              {">"}
            </button>
          </div>

          {/* Display the total price */}
          <div className="flex justify-center mt-4">
            <h2 className="text-2xl font-bold text-black">Total Price: {total}</h2>
          </div>
        </div>
      </main>
    </GoogleOAuthProvider>
  );
}
