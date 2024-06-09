"use client"; // Add this line at the very top

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';


interface User {
  username: string;
  password: string;
}

const database: User[] = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' },
];

const errors = {
  uname: 'Invalid username',
  pass: 'Invalid password',
};

const Home: React.FC = () => {
  const [errorMessages, setErrorMessages] = useState<{ name?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { uname, pass } = event.target as typeof event.target & {
      uname: { value: string };
      pass: { value: string };
    };

    const userData = database.find(user => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: 'pass', message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: 'uname', message: errors.uname });
    }
  };

  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && <div className="text-red-500 text-sm">{errorMessages.message}</div>;

  return (
    <div className="flex items-center justify-center max-w-screen-ml min-h-screen bg-[#7BA0FF] ">
      <Head>
        <title>Sign in</title>
      </Head>
      <div className="w-[1100px] h-[800px] bg-[#FFD4E9] rounded-[38px] mt-[62px] p-[20px]">
      <div className="absolute top-4 left-4">
        <div className="ml-[513.5px] mt-[250px]">
        <Image 
      src="/images/violet_Model.png"
      alt="ld-block-3d-model"
      width={800} // Adjust width as needed
      height={600} // Adjust height as needed
      // Or "intrinsic" or "responsive"
    />
    <div className=" -mt-[460px] ml-[551px] ">
     <Image 
      src="/images/white-hoop.svg"
      alt="bk-box"
      width={168} // Adjust width as needed
      height={168} // Adjust height as needed
      // Or "intrinsic" or "responsive"
    />
    </div>
    <div className="ml-[665px] -mt-[125px]">
    <Image 
      src="/images/orange circle.svg"
      alt="box1"
      width={70} // Adjust width as needed
      height={70} // Adjust height as needed
      //1
    />
    </div>
<div className="ml-[525px] -mt-[20px] ">
    <Image 
      src="/images/yellow-cube-sq.svg"
      alt="box2"
      width={170} // Adjust width as needed
      height={119} // Adjust height as needed
      //2
    />
    </div>
<div className="ml-[540px] -mt-[180px]">
    <Image 
      src="/images/white circle.svg"
      alt="box3"
      width={62} // Adjust width as needed
      height={63} // Adjust height as needed
      //3
    />
    </div>

<div className="ml-[580px] -mt-[460px]">
    <Image 
      src="/images/painter-.svg"
      alt="box3"
      width={280} // Adjust width as needed
      height={430} // Adjust height as needed
      //4
    />
    </div>
    
    <div className=" ml-[250px] -mt-[50px]">
        <Image
      src="/images/Hoodie.svg"
      alt="hoodie-3D-model"
      width={300} // Adjust width as needed
      height={640}
      />
  </div>

    </div>
        </div>
      <div className="relative w-[350px] max-w-md p-7 bg-white bg-opacity-20 rounded-3xl shadow-md backdrop-blur-md  ml-[60px] mt-[80px]">
      <Image className='-ml-[30px]'
      src="/images/Web_Logo.svg"
      alt="Image description"
      width={200} // Adjust width as needed
      height={61} // Adjust height as needed
      // Or "intrinsic" or "responsive"
    />
    
    <form className=" space-y-6" onSubmit={handleSubmit}></form>
   <div className='-mt-[65px] ml-[50px]'>
    <h1 className='ml-[165px] text-[#3f7bf0] text-[13px] mt-[30px]'>No account? <a href="/Signup" className="text-blue-500 hover:underline text-loginco font-normal underline text-[13px] ">Sign Up</a></h1>  

    </div>
    <div className="text-2xl mb-10 text-center font-inter font-semibold text-[55px] mt-[50px] mr-[100px] font-Alata ">Sign in</div>
    
<div>
  
    <div className="mt-[45px] mr-[90px] mb-8 w-[285px] py-1.5 bg-[#3F7BF0] text-white rounded-lg hover:bg-pink-500  ">
      
    <div className="flex ml-[20px]">
    
  
       <button type="submit" className='flex'>
                <h1 className='font-bold text-[25px] ml-[30px] '> G</h1>
                 <h1 className='ml-[15px] mt-[8px] font-normal '> Sign in with Google</h1>
       </button>
            </div>
    </div>

    </div>

        {isSubmitted ? (
          <div className="text-center text-green-500">User is successfully logged in</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mt-[30px] mb-[40px]">
              <label className="block text-sm font-medium mb-1 text-[#A8A6A6]">Username or Email Address</label>
              <input
                type="text"
                name="uname"
                required
                className="w-full p-2 border border-gray-300 rounded-lg "
              />
              {renderErrorMessage('uname')}
            </div>
            
            <div className="flex justify-end mb-7  ">
          
                <a href="/components/ForgotPass" className="text-blue-500 hover:underline text-loginco font-normal text-[13px]  ">
                  Forget Password?
                </a>
            </div>
           
            <div className="mb-6 -mt-[50px]">
              <label className="block text-sm font-medium mb-1 text-[#A8A6A6]">Password</label>
              <input
                type="password"
                name="pass"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              {renderErrorMessage('pass')}
            </div>

            <div className="flex justify-center">
              <button type="submit" className="px-[119px] py-3 bg-black text-white rounded-lg hover:bg-pink-500 font-semibold">
                Sign in
              </button>
            </div>
          </form>
        )}
        
      </div>
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-3/4 h-3/4 bg-pink-300 rounded-tl-full rounded-tr-full shadow-lg" />
      </div>
    </div>
    </div>
  );
};

export default Home;