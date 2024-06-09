import React from 'react';
import Link from 'next/link';

const SignupLink: React.FC = () => {
  return (
    <p>
      Don't have an account?{' '}
      <Link href="/signup">
        <a className="text-blue-500 hover:underline font-normal underline">
          Sign Up
        </a>
      </Link>
    </p>
  );
};

export default SignupLink;
