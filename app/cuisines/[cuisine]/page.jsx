import React from 'react';
import RecipeList from '@/components/RecipeList';

const getRecipe = async (type) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`);
    const response = await res.json();
    return response;
}

const page = async ({params}) => {
    const recipes = await getRecipe(params.cuisine);
  return <RecipeList recipes={recipes.meals} type={params.cuisine}/>
}

export default page