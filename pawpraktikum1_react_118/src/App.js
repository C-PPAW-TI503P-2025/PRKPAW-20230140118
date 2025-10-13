import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const nama = "Sasa"; // ganti dengan nama kamu

  // Ambil pesan dari server Node.js saat pertama kali load
  useEffect(() => {
    fetch('http://localhost:5001')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Integrasi React & Node.js</h1>

      {/* Langsung tampilkan Hello [nama] */}
      <h2>Hello, {nama}!</h2>

      {/* Pesan dari Server Node.js */}
      <p style={{ marginTop: '20px', fontWeight: 'bold' }}>
        Pesan dari server: {message}
      </p>
    </div>
  );
}

export default App;
