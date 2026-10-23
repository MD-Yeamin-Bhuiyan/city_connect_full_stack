import { useState } from 'react';

export default function Track() {
  const [tokenInput, setTokenInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleTrack = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);
    try {
      const res = await fetch(`http://localhost:8000/api/complaints/track/${tokenInput}`);
      const data = await res.json();
      if(data.success) {
        setResult(data.complaint);
      } else {
        setError('Invalid token or complaint not found.');
      }
    } catch (err) {
      setError('Error connecting to backend.');
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-ccprimary text-center">Track Complaint</h2>
      <form onSubmit={handleTrack} className="flex gap-2 mb-8">
        <input required type="text" placeholder="Enter 16-character Token" 
          className="flex-1 p-3 border border-ccborder rounded focus:outline-none focus:ring-2 focus:ring-ccaccent font-mono"
          value={tokenInput} onChange={e => setTokenInput(e.target.value.toUpperCase())} />
        <button type="submit" className="bg-ccprimary text-white px-6 py-3 rounded font-bold">Track</button>
      </form>

      {error && <div className="p-4 bg-red-100 text-red-700 rounded text-center">{error}</div>}
      
      {result && (
        <div className="bg-white p-6 rounded-xl border border-ccborder shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">{result.title}</h3>
            <span className="bg-ccaccent px-3 py-1 rounded text-sm font-bold">{result.status}</span>
          </div>
          <p className="text-gray-600 mb-4">{result.description}</p>
          <div className="text-sm font-medium text-gray-500">Category: {result.category}</div>
        </div>
      )}
    </div>
  );
}