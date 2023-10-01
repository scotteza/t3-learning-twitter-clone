import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Head from "next/head";

export default function Home() {
  const user = useUser();
  return (
    <>
      <Head>
        <title>T3 Magic - Chirp!</title>
        <meta name="description" content="Let's learn T3!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div>
          {!user.isSignedIn && < SignInButton />}
          {!!user.isSignedIn && <SignOutButton />}
        </div>
      </main>
    </>
  );
}
