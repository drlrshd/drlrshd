import Link from 'next/link';
import Head from 'next/head';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 :(</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main class="m-auto text-center">
        <h1 class="display-1">404 :(</h1>
        <p class="lead mb-0">Oh, no! You got lost somehow...</p>
        <p class="lead">
          Let&apos;s go back{' '}
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="text-primary">home</a>
          </Link>
          .
        </p>
      </main>
    </>
  );
}
