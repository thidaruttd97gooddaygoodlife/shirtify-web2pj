// app/components/Login/LoginForm.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { loginUser } from '../../lib/user';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [errorMessages, setErrorMessages] = useState<{ name?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { uname, pass } = event.target as typeof event.target & {
      uname: { value: string };
      pass: { value: string };
    };

    try {
      const response = await loginUser(uname.value, pass.value);

      if (response.success) {
        setIsSubmitted(true);
        router.push('/home'); // Redirect to dashboard after successful login
      } else {
        setErrorMessages(response.error || { name: 'login', message: 'Unknown error' });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessages({ name: 'login', message: 'Error logging in. Please try again later.' });
    }
  };

  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && <div className="text-red-500 text-sm">{errorMessages.message}</div>;

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="uname" className="block text-sm font-medium text-gray-700">Username</label>
        <input type="text" id="uname" name="uname" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        {renderErrorMessage('uname')}
      </div>
      <div>
        <label htmlFor="pass" className="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="pass" name="pass" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        {renderErrorMessage('pass')}
      </div>
      <div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Login
        </button>
      </div>
      {renderErrorMessage('login')}
    </form>
  );
};

export default LoginForm;
