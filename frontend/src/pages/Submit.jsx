import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Submit() {
  const [formData, setFormData] = useState({ title: '', description: '', category: 'Roads', anonymous: true });
  const [status, setStatus] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const res = await fetch('http://localhost:8000/api/complaints', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.success) {
        setToken(data.token);
        setStatus('Success!');
      }
    } catch (err) {
      setStatus('Error connecting to backend.');
    }
  };

  if (token) {
    return (
      <div className="max-w-xl mx-auto p-8 bg-white border border-ccborder rounded-xl shadow-sm text-center">
        <h2 className="text-2xl font-bold text-ccprimary mb-4">Complaint Submitted!</h2>
        <p className="mb-4">Your anonymous tracking token is:</p>
        <div className="text-3xl font-mono bg-ccsurface p-4 rounded mb-6 tracking-widest">{token}</div>
        <p className="text-sm text-red-600 mb-6 font-bold">Please save this token! You will need it to track your complaint.</p>
        <button onClick={() => navigate('/track')} className="bg-ccprimary text-white px-6 py-2 rounded">Track Now</button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-ccprimary">Submit a Complaint</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl border border-ccborder shadow-sm">
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input required type="text" className="w-full p-2 border border-ccborder rounded focus:outline-none focus:ring-2 focus:ring-ccaccent" 
            value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
        </div>
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select className="w-full p-2 border border-ccborder rounded focus:outline-none focus:ring-2 focus:ring-ccaccent"
            value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
            <option>Roads & Engineering</option>
            <option>Waste Management</option>
            <option>Health</option>
            <option>Transport</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea required rows="4" className="w-full p-2 border border-ccborder rounded focus:outline-none focus:ring-2 focus:ring-ccaccent"
            value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
        </div>
        <button disabled={status === 'Submitting...'} type="submit" className="w-full bg-ccprimary text-white py-3 rounded font-bold hover:bg-opacity-90">
          {status || 'Submit Securely'}
        </button>
      </form>
    </div>
  );
}