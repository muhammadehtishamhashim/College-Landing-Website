import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;