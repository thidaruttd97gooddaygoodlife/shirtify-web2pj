"use client"
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
    <div className="flex items-center justify-center min-h-screen bg-[#7BA0FF]">
      <Head>
<<<<<<< Updated upstream
        <title>Sign Up</title>
      </Head>

      <div className="w-[1410px] h-[800px] bg-[#FFD4E9] rounded-[38px] mt-[62px] p-[20px] relative">
        <div className="absolute top-4 left-4">
          <div className="ml-[528px] mt-[100px]">
            <Image
              src="/images/violet_Model.png"
              alt="ld-block-3d-model"
              width={1000} // Adjust width as needed
              height={200} // Adjust height as needed
            />
            <div className="-mt-[563px] ml-[700px]">
              <Image
                src="/images/white-hoop.svg"
                alt="bk-box"
                width={200} // Adjust width as needed
                height={168} // Adjust height as needed
              />
            </div>
            <div className="ml-[845px] -mt-[125px]">
              <Image
                src="/images/orange circle.svg"
                alt="box1"
                width={70} // Adjust width as needed
                height={70} // Adjust height as needed
              />
            </div>
            <div className="ml-[675px] -mt-[30px]">
              <Image
                src="/images/yellow-cube-sq.svg"
                alt="box2"
                width={170} // Adjust width as needed
                height={119} // Adjust height as needed
              />
            </div>
            <div className="ml-[685px] -mt-[180px]">
              <Image
                src="/images/white circle.svg"
                alt="box3"
                width={62} // Adjust width as needed
                height={63} // Adjust height as needed
              />
            </div>
            <div className="ml-[800px] -mt-[355px]">
              <Image
                src="/images/painter-.svg"
                alt="box3"
                width={220} // Adjust width as needed
                height={300} // Adjust height as needed
              />
            </div>
            <div className="ml-[360px] -mt-[150px]">
              <Image
                src="/images/hoodie-black.svg"
                alt="hoodie-3D-model"
                width={400} // Adjust width as needed
                height={640}
              />
            </div>
          </div>
        </div>

        <div className="relative w-1/3 h-6/8 p-7 bg-white bg-opacity-35 rounded-3xl shadow-2xl backdrop-blur-sm ml-[60px] mt-[43px]">
          <Image
            src="/images/Web_Logo.svg"
            alt="Image description"
            width={250} // Adjust width as needed
            height={61} // Adjust height as needed
          />

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="-mt-[65px] ml-[50px]">
              <h1 className="ml-[270px] text-[#3f7bf0] text-[13px] mt-[15px]">
                No account? <a href="/SignIn" className="text-blue-500 hover:underline text-loginco font-normal underline text-[15px] ">Sign In</a>
              </h1>
            </div>

            <div className="text-2xl mb-10 font-inter font-semibold text-[60px] mt-[50px] ml-[5px] font-Alata">Sign Up</div>

            <div className="flex space-x-4 mb-6">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1 text-[#A8A6A6]">Name</label>
                <input type="text" name="name" required className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1 text-[#A8A6A6]">Username</label>
                <input type="text" name="uname" required className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
            </div>

            <div className="flex justify-end mb-7">
              <a href="/components/ForgotPass" className="text-blue-500 hover:underline text-loginco font-normal text-[13px] ">
                Forget Password?
              </a>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1 text-[#A8A6A6]">Email Address</label>
              <input type="text" name="email" required className="w-full p-2 border border-gray-300 rounded-lg" />
              {renderErrorMessage('uname')}
            </div>

            <div className="mb-6">
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
              <button type="submit" className="px-[173px] py-2 bg-black text-white rounded-lg hover:bg-pink-500 font-semibold">
                Sign up
              </button>
            </div>
          </form>

          {isSubmitted && <div className="text-center text-green-500">User is successfully logged in</div>}
=======
        <title>Sign up</title>
      </Head>

      <div className="relative w-full max-w-screen-ml h-[800px] bg-[#FFD4E9] rounded-[38px] mt-[62px] p-[20px]">
        <div className="absolute top-4 left-4">
          <Image 
            src="/images/violet_Model.png"
            alt="ld-block-3d-model"
            width={800}
            height={600}
          />
          <div className="-mt-[460px] ml-[551px]">
            <Image 
              src="/images/white-hoop.svg"
              alt="bk-box"
              width={168}
              height={168}
            />
          </div>
          <div className="ml-[665px] -mt-[125px]">
            <Image 
              src="/images/orange circle.svg"
              alt="box1"
              width={70}
              height={70}
            />
          </div>
          <div className="ml-[525px] -mt-[20px]">
            <Image 
              src="/images/yellow-cube-sq.svg"
              alt="box2"
              width={170}
              height={119}
            />
          </div>
          <div className="ml-[540px] -mt-[180px]">
            <Image 
              src="/images/white circle.svg"
              alt="box3"
              width={62}
              height={63}
            />
          </div>
          <div className="ml-[580px] -mt-[460px]">
            <Image 
              src="/images/painter-.svg"
              alt="box3"
              width={280}
              height={430}
            />
          </div>
          <div className="ml-[250px] -mt-[50px]">
            <Image
              src="/images/hoodie-black.svg"
              alt="hoodie-3D-model"
              width={300}
              height={640}
            />
          </div>
        </div>

        <div className="relative w-full max-w-md p-7 bg-white bg-opacity-20 rounded-3xl shadow-md backdrop-blur-md ml-[60px] mt-[80px]">
          <Image
            src="/images/Web_Logo.svg"
            alt="Image description"
            width={200}
            height={61}
          />
          <form className="space-y-6 mt-10" onSubmit={handleSubmit}>
            <h1 className="text-[#3f7bf0] text-[13px] mt-[30px] ml-[165px]">Already have an account? <a href="/SignIn" className="text-blue-500 hover:underline text-loginco font-normal underline text-[13px]">Sign in</a></h1>
            <h1 className="text-2xl mb-10 text-center font-inter font-semibold text-[55px] mt-[50px] mr-[100px] font-Alata">Sign up</h1>
            
            <div className="mt-[45px] mr-[90px] mb-8 w-[285px] py-1.5 bg-[#3F7BF0] text-white rounded-lg hover:bg-pink-500">
              <div className="flex ml-[20px]">
                <button type="submit" className="flex">
                  <h1 className="font-bold text-[25px] ml-[30px]">G</h1>
                  <h1 className="ml-[15px] mt-[8px] font-normal">Sign in with Google</h1>
                </button>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center text-green-500">You are successfully sign up</div>
            ) : (
              <>
                <div className="-mt-[65px] ml-[50px]">
                  <label className="block text-sm font-medium mb-1 text-[#A8A6A6]">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div className="-mt-[65px] ml-[50px]">
                  <label className="text-sm font-medium mb-1 text-[#A8A6A6]">Username</label>
                  <input
                    type="text"
                    name="uname"
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                
                <div className="mb-6 -mt-[50px] ml-[50px]">
                  <label className="block text-sm font-medium mb-1 text-[#A8A6A6]">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  {renderErrorMessage('email')}
                </div>

                <div className="flex justify-end mb-7 ml-[140px]">
                  <a href="/components/ForgotPass" className="text-blue-500 hover:underline text-loginco font-normal text-[13px]">
                    Forget Password?
                  </a>
                </div>

                <div className="mb-6 -mt-[50px] ml-[50px]">
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
                    Create your Account
                  </button>
                </div>
              </>
            )}
          </form>
>>>>>>> Stashed changes
        </div>

        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <div className="w-3/4 h-3/4 bg-pink-300 rounded-tl-full rounded-tr-full shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
