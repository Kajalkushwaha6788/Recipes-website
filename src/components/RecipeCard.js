import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', width: '200px' }}>
      <h3>{recipe.title}</h3>
      <p>{recipe.description.substring(0, 60)}...</p>
      <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
    </div>
  );
}

export default RecipeCard;
