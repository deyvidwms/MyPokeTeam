import React, { useState, useEffect } from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  const [year, setYear] = useState<string>();

  useEffect(() => { 
    setYear( String( new Date().getFullYear() ) );
  }, []);

  return (
    <Container>
      <p>MyPokeTeam {year}</p>
      <p>Desenvolvido por <span onClick={()=>{window.open('https://deyvid.dev.br')}}>Deyvid.dev</span></p>
    </Container>
  );
}

export default Footer;