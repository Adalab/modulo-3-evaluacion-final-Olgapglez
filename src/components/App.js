import '../styles/App.scss';
import headerImg from '../images/harry-potter-logo.png';
import { useEffect, useState} from 'react';
import getDataApi from './services/api';
import CharacterList from './CharacterList';
import Filters from './Filters/Filters';


function App() {

  const [listCharacter, setListCharacter]= useState([]);
  const [houseFilter, setHouseFilter] = useState('Gryffindor');
  // const [nameFilter, setNameFilter] = useState('');


  useEffect(()=> {
    getDataApi().then((data => {
      console.log(data);
      setListCharacter(data);
    }));
  }, []);
  

  const handleFilterHouse = (value) => {
    setHouseFilter(value);
  };

  // const handleFilterName = (input) => {
  //   setNameFilter(input);
  // }

  const charactersFiltered = listCharacter
      .filter((eachCharacter) => {
        return houseFilter === "all" ? true : eachCharacter.house === houseFilter;
      });
      /* .filter((eachCharacter) => {
         return eachCharacter.name.toLowerCase().includes(nameFilter.toLowerCase());
       })
      
      }*/


  return (

    <>
    <header className='header'>
      <img src={headerImg} className='header-img' alt='Harry Potter logo'></img>
    </header>
    <main className='main'>
    <Filters handleFilterHouse={handleFilterHouse} /*handleFilterName={handleFilterName}*/ />
    <CharacterList listCharacter={charactersFiltered}/>
    
    </main>
    </>
  );
}

export default App;
