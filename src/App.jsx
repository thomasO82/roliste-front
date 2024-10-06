import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <main className="bg-main min-h-screen relative top-100">
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage: "url('/images/logo.png')",
            backgroundSize: "auto"
          }}
        ></div>
        <div className="relative z-10">
          <Outlet />
        </div>
      </main>
    </>
  );
}