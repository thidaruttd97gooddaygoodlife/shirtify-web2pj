"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const items = [
  { id: 1, name: "Mochi", type: "shirt", image: "/images/Rectangle 53 (1).svg" },
  { id: 2, name: "Mochi", type: "shirt", image: "/images/Rectangle 54.svg" },
  { id: 3, name: "Mochi", type: "shirt", image: "/images/Rectangle 55.svg" },
  { id: 4, name: "Mochi", type: "shirt", image: "/images/Rectangle 56.svg" },
  { id: 5, name: "Mochi", type: "shirt", image: "/images/Rectangle 56.svg" },
  { id: 6, name: "Mochi", type: "shirt", image: "/images/Rectangle 56.svg" },
  // Add more items as needed
];

export default function Home() {
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
    setIsSubmitted(false); // Reset submit state when new files are added
  }, [uploadedFiles]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
  };

  const handleLoginFailure = (response) => {
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

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <main className="flex flex-col min-h-screen justify-between bg-[#7BA0FF]">
        <div className="relative">
          <div className="absolute top-[100px] left-[1150px]">
            <div className="w-[700px] h-[700px] -ml-[200px]">
              <Image
                src="/images/Web_Logo.svg"
                alt="Logo"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
        <div className="w-[450px] h-[600px] bg-white mt-[250px] ml-[950px] rounded-xl flex flex-col items-center gap-4 pt-[50px] pl-[30px] text-[24px]">
          {!isSubmitted && (
            <>
              <div className="flex flex-row gap-4">
                <p className="font-semibold opacity-80">Total</p>
                <p className="text-[#D53E3E] font-semibold">300</p>
                <p className="font-semibold opacity-80">baht</p>
              </div>
              <div className="w-[380px] h-[3px] bg-[#000000] opacity-50 mt-[10px]"></div>
            </>
          )}
          {!isSubmitted && (
            <>
              <div className="mt-[10px] flex justify-center">
                <Image
                  src="/images/image 2 (1).svg"
                  alt="Logo"
                  width={170}
                  height={170}
                  style={{ position: 'relative' }}
                />
              </div>
              <div className="w-[250px] h-[180px] bg-white -mt-[10px] ml-[60px] drop-shadow-xl rounded-lg relative flex justify-center items-center">
                <div {...getRootProps()} className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-gray-400 p-6 rounded-md cursor-pointer text-[14px]">
                  <input {...getInputProps()} />
                  {uploadedFiles.length === 0 && (
                    isDragActive ? (
                      <p>Drop the files here ...</p>
                    ) : (
                      <p>Drag 'n' drop some files here, or click to select files</p>
                    )
                  )}
                  <div className="flex gap-4 flex-wrap mt-4">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className="w-[100px] h-[100px] object-cover mt-2"
                        />
                        <p className="text-center text-sm mt-1"></p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
          <button 
            onClick={handleSubmit} 
            className={`bg-[${isSubmitted ? '#26A823' : '#fd5ba1'}] text-white font-semibold py-2 px-4 rounded-full`}
          >
            {isSubmitted ? 'Thank you for your order' : 'Submit'}
          </button>
        </div>

        <div className="w-[800px] h-[800px] bg-[#bdd0ff] -mt-[750px] rounded-[40px] ml-[100px] relative mb-[100px]">
          <div className="w-[150px] h-[150px] rounded-full bg-white ml-[50px] mt-[50px]">
            <Image
              src="/images/Ellipse 19 (1).svg"
              alt="Logo"
              width={700}
              height={700}
              style={{ position: 'relative' }}
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
              onSuccess={handleLoginSuccess}
              onError={handleLoginFailure}
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
                src="/images/3359235 1 (1).svg"
                alt="Logo"
                width={40}
                height={40}
                style={{ position: 'relative' }}
              />
              <Image
                src="/images/in-progress-icon-510x512-mw0pz22p 1 (1).svg"
                alt="Logo"
                width={40}
                height={40}
                style={{ position: 'relative' }}
              />
              <Image
                src="/images/360_F_303721767_iNO49Cr0bPrcZT9eIuTr0VUa5QXuK1es-Photoroom 1 (1).svg"
                alt="Logo"
                width={80}
                height={80}
                style={{ position: 'relative' }}
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
                    alt="Logo"
                    width={100}
                    height={100}
                    style={{ position: 'relative' }}
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
        </div>
      </main>
    </GoogleOAuthProvider>
  );
}
