import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RecipeList = ({ recipes, type }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
            {recipes && recipes.map((recipes, idx) => {
                return (
                    <div className='rounded overflow-hidden bg-slate-300' key={idx}>
                        <Image alt={recipes.strMeal} src={recipes.strMealThumb} width={500} height={500} />
                        <div className='p-5'>
                            <h1 className='text-2xl font-bold'>{recipes.strMeal}</h1>
                            <Link className='text-white bg-red-500 rounded py-1 px-3 block mt-5 hover:bg-red-600 text-center' href={`/cuisines/${type}/${recipes.idMeal}`}>
                                Get Recipe Details
                            </Link>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default RecipeList