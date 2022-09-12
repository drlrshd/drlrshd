import Head from 'next/head';
import CardGrid from '../components/cardgrid';

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Daryl Rashad</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="mb-auto mt-0 mx-5 px-3 pb-5">
        <CardGrid />
      </main>
    </>
  );
}
