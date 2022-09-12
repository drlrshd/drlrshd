import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
  return (
    <div className="d-flex flex-column h-100 m-0">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
