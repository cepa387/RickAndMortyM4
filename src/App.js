import './App.css'
import { useState, useEffect  } from 'react';
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function App () {
  const username = 'mail@mail.com';
  const password = 'hola123';
  const navigate = useNavigate();
  const { pathname } = useLocation(); // {pathname = '/'}
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate('/');
  }, [access])

  function login(userData){
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
    }
  };

  function logout(){
    setAccess(false);
    navigate('/');
  };

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  };

  function onClose(id){
    const newCharacters = characters.filter((charac) => charac.id !== Number(id));
    setCharacters(newCharacters);
  }

  return (
    <div className='App'>
      {pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>}
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose}/>}
        />
        <Route 
          path='/about'
          element={<About/>}
        />
        <Route
          path='/favorites'
          element={<Favorites/>}
        />
        <Route
          path='/detail/:detailId'
          element={<Detail/>}
        />
        <Route
        path='*'
        element={<Error/>}
        />
      </Routes>
    </div>
  )
}


export default App