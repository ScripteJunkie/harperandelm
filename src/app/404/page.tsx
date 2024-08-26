import Head from "next/head";

export default function NotFound() {
  return (
    <main className="min-h-dvh bg-white flex justify-center items-center">
      <Head>
        <title>Page Not Found</title>
      </Head>
      <h1 className="text-2xl font-bold text-center h-fit">Page Not Found</h1>
    </main>
  );
}
