import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Logo from './Logo';

function Home() {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Navega a la URL de búsqueda
      navigate(`/recipes/${busqueda}`);
    }
  };

  return (
    <div>
      <Logo/>
      <NavBar />
    </div>
  );
}

export default Home;