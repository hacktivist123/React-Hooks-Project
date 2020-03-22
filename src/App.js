import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [fullName, setFullName] = useState({
    name: 'name',
    surname: 'surname',
  });
  const [title, setTitle] = useState('BIO');

  useEffect(() => {
    setFullName({ name: 'Shedrack', surname: 'Akintayo' });
    setTitle('My Full Name');
  }, []);

  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Name: {fullName.name}</h3>
      <h3>Surname: {fullName.surname}</h3>
    </div>
  );
}
export default App;
