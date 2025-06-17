import React from 'react';
import recipes from '../data/recipes';
import RecipeCard from '../components/RecipeCard';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Website</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;
