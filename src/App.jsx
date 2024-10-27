import { useState } from 'react';
import CocktailApp from './CocktailApp'; // Import CocktailApp
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CocktailApp /> {CocktailApp}
    </>
  );
}

export default App;
