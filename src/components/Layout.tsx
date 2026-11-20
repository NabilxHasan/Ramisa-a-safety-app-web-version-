import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Footer } from './Sections';

export default function Layout() {
  return (
    <div className="min-h-screen bg-surface-bg flex flex-col font-sans">
      <Navbar />
      <main className="flex-1" id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
