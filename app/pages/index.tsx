import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome to Next.js!</h1>
        <div>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </div>
        <div>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
