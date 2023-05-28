import { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar(props) {
   const { onSearch } = props;
   const [character, setCharacter] = useState('');

   const handleChange = (e) => {
      setCharacter(e.target.value);
   }
   return (
      <div className={style.div}>
         <input className={style.search} type='search' value={character} onChange={handleChange}/>
      <button className={style.buttonSearch} onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}