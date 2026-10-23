import { useState, useEffect } from 'react';
import { BarChart, Users, CheckCircle, Clock } from 'lucide-react';

export default function Dashboard() {
  const [stats, setStats] = useState({ total: 0, submitted: 0, resolved: 0 });

  useEffect(() => {
    fetch('http://localhost:8000/api/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-ccprimary">Mayor Dashboard</h2>
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Complaints', value: stats.total, icon: BarChart },
          { label: 'Pending Review', value: stats.submitted, icon: Clock },
          { label: 'In Progress', value: 0, icon: Users },
          { label: 'Resolved', value: stats.resolved, icon: CheckCircle },
        ].map(stat => (
          <div key={stat.label} className="bg-white p-6 rounded-xl border border-ccborder shadow-sm flex items-center gap-4">
            <div className="p-3 bg-ccsurface rounded-lg text-ccprimary"><stat.icon size={24} /></div>
            <div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-8 rounded-xl border border-ccborder shadow-sm h-64 flex items-center justify-center text-gray-400">
        [ Chart Placeholder: City-wide analytics ]
      </div>
    </div>
  );
}