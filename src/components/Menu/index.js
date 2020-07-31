import React from 'react';

//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

import logo from '../../assets/logo.png';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="Logo Wilhoflix"/>
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;