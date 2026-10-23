import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-12 animate-fade-in">
      <section className="text-center py-16 bg-ccsurface rounded-2xl border border-ccborder shadow-sm">
        <h1 className="text-5xl font-extrabold text-ccprimary mb-4">Your City. Your Voice.</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">A civic complaint platform where citizens can report local problems and track progress securely.</p>
        <div className="flex justify-center gap-4">
          <Link to="/complaints/new" className="flex items-center gap-2 bg-ccprimary text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
            <FileText size={20} />
            Submit a Complaint
          </Link>
          <Link to="/track" className="flex items-center gap-2 bg-ccaccent text-cctext px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
            <Search size={20} />
            Track a Complaint
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {['Submit & Route', 'Work in Progress', 'Resolution'].map((step, i) => (
          <div key={step} className="p-6 bg-white border border-ccborder rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-ccsurface rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">{i + 1}</div>
            <h3 className="font-bold text-lg mb-2">{step}</h3>
            <p className="text-gray-600 text-sm">Transparent and accountable process for every reported issue.</p>
          </div>
        ))}
      </section>
    </div>
  );
}