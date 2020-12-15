import React from 'react';
import '../assets/Styles/components/Search.scss';

const titleMain = '¿Qué quieres ver hoy?';
const inputPlaceholder = 'Buscar...';
const Search = () => (
  <section className='main'>
    <h2 className='main__title'>{titleMain}</h2>
    <input type='text' className='input' placeholder={inputPlaceholder} />
  </section>
);

export default Search;
