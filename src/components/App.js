import '../styles/App.scss';
import headerImg from '../images/harry-potter-logo.png';
import { useEffect, useState} from 'react';
import getDataApi from './services/api';
import CharacterList from './CharacterList';
import Filters from './Filters/Filters';


function App() {

  const [listCharacter, setListCharacter]= useState([]);
  
  const [houseFilter, setHouseFilter] = useState('');


  useEffect(()=> {
    getDataApi().then((selectData => {
      console.log(selectData);
      setListCharacter(selectData);
    }));
  }, []);
  
  
  const handleFilterHouse = (value)=>{
    console.log(value);
    setHouseFilter(value);
  };


  const houseFiltered = listCharacter.filter((eachCharacter) => {

      return houseFilter === "all" ? true : eachCharacter.house === houseFilter;
  });

  return (

    <>
    <header className='header'>
      <img src={headerImg} className='header-img' alt='Harry Potter logo'></img>
    </header>
    <main className='main'>
    <Filters handleFilterHouse={handleFilterHouse}/>
    <CharacterList listCharacter={houseFiltered}/>
    
    </main>
    </>
  );
}

export default App;
