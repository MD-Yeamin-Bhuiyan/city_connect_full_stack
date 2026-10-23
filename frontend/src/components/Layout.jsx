import { Outlet, Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-ccsurface border-b border-ccborder p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-ccprimary">
            <Building2 size={28} />
            City Connect
          </Link>
          <nav className="flex gap-4 font-medium">
            <Link to="/" className="hover:text-ccprimary transition-colors">Home</Link>
            <Link to="/track" className="hover:text-ccprimary transition-colors">Track</Link>
            <Link to="/mayor/dashboard" className="hover:text-ccprimary transition-colors">Mayor Dashboard</Link>
            <Link to="/complaints/new" className="bg-ccprimary text-white px-4 py-2 rounded shadow hover:bg-opacity-90 transition-colors">Submit</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-6xl mx-auto w-full p-6">
        <Outlet />
      </main>
      <footer className="bg-ccsurface border-t border-ccborder p-6 mt-12 text-center text-sm text-gray-600">
        &copy; 2026 City Connect. All rights reserved.
      </footer>
    </div>
  );
}