import React, { useState, useEffect } from 'react';

function CocktailApp() {
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => setCocktail(data.drinks[0]));
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {cocktail && (
        <div>
          <h1>{cocktail.strDrink || "Cocktail Name"}</h1>
          <img 
            src={cocktail.strDrinkThumb || ""} 
            alt="Cocktail" 
            width="200" 
          />
          <p>{cocktail.strInstructions || " No instructions"}</p>

          <h2>Ingredients</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {Array.from({ length: 15 }).map((_, i) => {
              const ingredient = cocktail[`strIngredient${i + 1}`];
              const measure = cocktail[`strMeasure${i + 1}`];
              return ingredient ? (
                <li key={i}>
                  {measure ? measure : ""} {ingredient}
                </li>
              ) : null;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CocktailApp;
