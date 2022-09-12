import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" class="h-100 w-100">
      <Head />
      <body className="container-fluid d-flex bg-light m-0 px-0 h-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
