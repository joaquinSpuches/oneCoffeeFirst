import React, { useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import styled from 'styled-components';

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 999;
`;

const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // Cambia el estado del modo oscuro
    setDarkMode(!isDarkMode);

    // Aplica la inversión de colores a la página
    document.body.style.backgroundColor = isDarkMode ? '#ECDCC8' : '#132336';
    document.body.style.color = isDarkMode ? '#132336' : '#ECDCC8';
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.style.color = isDarkMode ? '#132336' : '#ECDCC8';
    });
    
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
headings.forEach(heading => {
  heading.style.color = isDarkMode ? '#132336' : '#ECDCC8';
});   
 const texts = document.querySelectorAll('p');
texts.forEach(heading => {
  heading.style.color = isDarkMode ? '#132336' : '#ECDCC8 ';
});


    // También podrías ajustar otros estilos según sea necesario
  };

  return (
    <ToggleButton onClick={toggleDarkMode}>
      {isDarkMode ? <IoSunnyOutline size={24} /> : <IoMoonOutline size={24} />}
    </ToggleButton>
  );
};

export default DarkModeToggle;