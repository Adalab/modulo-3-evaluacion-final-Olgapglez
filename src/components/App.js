import '../styles/App.scss';
import headerImg from '../images/harry-potter-logo.png';
import { useEffect, useState} from 'react';
import getDataApi from './services/api';
import CharacterList from './CharacterList';


function App() {

  const [listCharacter, setListCharacter]= useState([])
  
  useEffect(()=> {
    getDataApi().then((selectData => {
      console.log(selectData);
      setListCharacter(selectData);
    }));
  }, []);
  
  
  
  return (

    <>
    <header className='header'>
      <img src={headerImg} className='header-img' alt='Harry Potter logo'></img>
    </header>
    <CharacterList listCharacter={listCharacter}/>
    

    <main className='main'></main>
    </>
  )
}

export default App;
