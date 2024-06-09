import React, { useState } from 'react';
import { createUser } from '../lib/user';
import { useRouter } from 'next/router';

const Signup: React.FC = () => {
  const [errorMessages, setErrorMessages] = useState<{ name?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { uname, pass } = event.target as typeof event.target & {
      uname: { value: string };
      pass: { value: string };
    };

    try {
      await createUser(uname.value, pass.value);
      setIsSubmitted(true);
      router.push('/');
    } catch (error) {
      setErrorMessages({ name: 'uname', message: 'User creation failed' });
    }
  };

  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && <div>{errorMessages.message}</div>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" name="uname" required />
          {renderErrorMessage('uname')}
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="pass" required />
          {renderErrorMessage('pass')}
        </div>
        <button type="submit">Sign Up</button>
        {isSubmitted && <div>User is successfully signed up</div>}
      </form>
    </div>
  );
};

export default Signup;
