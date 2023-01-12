import React, { useState, useEffect } from 'react';

import { FaChevronUp } from 'react-icons/fa';

import { Container, ButtonToTop } from './styles';

const Footer: React.FC = () => {
  const [year, setYear] = useState<string>();
  const [showButtonToTop, setShowButtonToTop] = useState<boolean>(false);

  useEffect(() => { 
    setYear( String( new Date().getFullYear() ) );

    const scrollListener = () => {

      const title = (document.getElementById('title')?.offsetTop || 0);
      if (window.scrollY > title) {
        setShowButtonToTop(true);
      } else {
        setShowButtonToTop(false);
      }

    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, []);

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <ButtonToTop isVisible={showButtonToTop} onClick={() => toTop()}>
        <FaChevronUp />
      </ButtonToTop>
      <p>MyPokeTeam {year}</p>
      <p>Desenvolvido por <span onClick={()=>{window.open('https://deyvid.dev.br')}}>Deyvid.dev</span></p>
    </Container>
  );
}

export default Footer;