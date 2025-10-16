import React, { useEffect, useState } from 'react';
import PatientModal from '../components/PatientModal';
import AddPatientForm from '../components/AddPatientForm';

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        const mapped = data.map(u => ({
          id: u.id,
          name: u.name,
          phone: u.phone,
          age: Math.floor(Math.random()*60)+18,
          email: u.email,
          address: u.address.street + ', ' + u.address.city
        }));
        setPatients(mapped);
        setLoading(false);
      })
      .catch(() => { setError('Failed to fetch patients'); setLoading(false); });
  }, []);

  const filtered = patients.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

  if (loading) return <p style={{textAlign:'center'}}>Loading...</p>;
  if (error) return <p style={{textAlign:'center', color:'red'}}>{error}</p>;

  return (
    <div className="container">
      <h1 style={{textAlign:'center', marginBottom:'1rem'}}>Patient Records</h1>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'1rem'}}>
        <input type="text" placeholder="Search by name" value={query} onChange={e=>setQuery(e.target.value)} style={{padding:'0.5rem', width:'300px', borderRadius:'8px'}}/>
      </div>
      <AddPatientForm patients={patients} setPatients={setPatients}/>
      <div className="patients-grid">
        {filtered.map(p => (
          <div className="patient-card" key={p.id}>
            <h3>{p.name}</h3>
            <p><strong>Age:</strong> {p.age}</p>
            <p><strong>Contact:</strong> {p.phone}</p>
            <button onClick={()=>setSelected(p)}>View Details</button>
          </div>
        ))}
      </div>
      {selected && <PatientModal patient={selected} onClose={()=>setSelected(null)}/>}
    </div>
  );
}
