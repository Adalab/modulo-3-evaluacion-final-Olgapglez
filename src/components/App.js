import '../styles/App.scss';
import headerImg from '../images/harry-potter-logo.png';
import { useEffect, useState } from 'react';
import getDataApi from './services/api';
import CharacterList from './CharacterList';
import Filters from './Filters/Filters';
import { Route, Routes, useLocation } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import { matchPath } from 'react-router-dom';


function App() {

  const [listCharacter, setListCharacter] = useState([]);
  const [houseFilter, setHouseFilter] = useState('Gryffindor');
  const [search, setSearch] = useState('');

  useEffect(() => {
    getDataApi().then((data => {
      console.log(data);
      setListCharacter(data);
    }));
  }, []);


  const placeholderImage = 'https://via.placeholder.com/210x295/ﬀﬀﬀ/666666/?text=TooMuggletosee'

    const onImageError = (e) => {
        e.target.src = placeholderImage
    }


  const handleFilterHouse = (value) => {
    setHouseFilter(value);
  };

  const handleSearch = (name) => {
    setSearch(name);
  }

  const charactersFiltered = listCharacter
    .filter((eachCharacter) => {
      return houseFilter === "all" ? true : eachCharacter.house === houseFilter;
    })
    .filter((eachCharacter) => {
      return eachCharacter.name.toLowerCase().includes(search.toLowerCase());
    });


    const { pathname } = useLocation();

    const infoUrl = matchPath('/personajes/:id', pathname);

    const characterId = infoUrl !== null ? infoUrl.params.id : null

    const characterFind = charactersFiltered.find((eachCharacter) => eachCharacter.id === characterId)
    console.log(characterFind)



  return (

    <>
      <header className='header'>
        <img src={headerImg} className='header-img' alt='Harry Potter logo'></img>
      </header>
      <main className='main'>

        <Routes>
          <Route
            path='/'
            element={
              <>
                <Filters handleFilterHouse={handleFilterHouse} handleSearch={handleSearch} search={search} />
                <CharacterList listCharacter={charactersFiltered} />
              </>
            }
          />
        <Route path='/personajes/:id' element={<CharacterDetail characterFind={characterFind} onImageError={onImageError} placeholderImage={placeholderImage}></CharacterDetail>} /> </Routes>
      </main>
    </>
  );
}

export default App;
