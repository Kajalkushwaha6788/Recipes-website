import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../data/recipes';

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default RecipeDetail;