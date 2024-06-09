import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import LoginForm from './LoginForm';
import SignupLink from './SignupLink';
import ForgotPasswordForm from './ForgotPasswordForm';

const LoginLayout: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#7BA0FF]">
      <Head>
        <title>Sign in</title>
      </Head>
      <div className="w-[1100px] h-[800px] bg-[#FFD4E9] rounded-[38px] mt-[62px] p-[20px] relative">
        <div className="absolute top-4 left-4">
          <Image
            src="/images/violet_Model.png"
            alt="ld-block-3d-model"
            width={800}
            height={600}
          />
          <div className="-mt-[460px] ml-[551px] ">
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
          <div className="ml-[525px] -mt-[20px] ">
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
              src="/images/Hoodie.svg"
              alt="hoodie-3D-model"
              width={300}
              height={640}
            />
          </div>
        </div>
        <div className="relative w-[350px] max-w-md p-7 bg-white bg-opacity-20 rounded-3xl shadow-md backdrop-blur-md ml-[60px] mt-[80px]">
          <Image
            className="-ml-[30px]"
            src="/images/Web_Logo.svg"
            alt="Image description"
            width={200}
            height={61}
          />
          <LoginForm />
          <div className="space-y-6">
            <div className="ml-[165px] text-[#3f7bf0] text-[13px] mt-[30px]">
              No account?{' '}
              <a href="/signup" className="text-blue-500 hover:underline font-normal underline">
                Sign Up
              </a>
            </div>
            <div className="text-2xl mb-10 text-center font-inter font-semibold text-[55px] mt-[50px] mr-[100px] font-Alata">
              Sign in
            </div>
            <div>
              <div className="mt-[45px] mr-[90px] mb-8 w-[285px] py-1.5 bg-[#3F7BF0] text-white rounded-lg hover:bg-pink-500">
                <div className="flex ml-[20px]">
                  <button type="submit" className="flex">
                    <h1 className="font-bold text-[25px] ml-[30px] "> G</h1>
                    <h1 className="ml-[15px] mt-[8px] font-normal">
                      Sign in with Google
                    </h1>
                  </button>
                </div>
              </div>
            </div>
            <ForgotPasswordForm />
            <SignupLink />
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <div className="w-3/4 h-3/4 bg-pink-300 rounded-tl-full rounded-tr-full shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
