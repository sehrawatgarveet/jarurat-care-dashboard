import React, { useState } from 'react';

export default function AddPatientForm({ patients, setPatients }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newPatient = {
      id: Date.now(),
      name, age, phone, email, address
    };
    setPatients([newPatient, ...patients]);
    setName(''); setAge(''); setPhone(''); setEmail(''); setAddress('');
  };

  return (
    <div className="add-patient-card">
      <h2>Add New Patient</h2>
      <form onSubmit={handleSubmit} className="add-patient-form">
        <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
        <input type="number" placeholder="Age" value={age} onChange={e=>setAge(e.target.value)} required />
        <input type="text" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="text" placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)} required />
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
}
