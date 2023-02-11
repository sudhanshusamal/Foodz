import React from 'react';
import Image from 'next/image';

const getRecipeDetails = async (id) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response = await res.json();
    return response;
}

const page = async ({ params }) => {
    const recipeDetails = await getRecipeDetails(params.id);
    const details = recipeDetails && recipeDetails.meals ? recipeDetails.meals[0] : {};
    const ingredients = Object.keys(details)
        .filter((key) => key.indexOf("Ingredient") > 0)
        .map((ingKey) => (details[ingKey]?.length ? details[ingKey] : undefined))
        .filter(Boolean);

    const videoId = details.strYoutube && details.strYoutube.split("watch?v=")[1];


  

    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <Image src={details.strMealThumb} width={500} height={500} alt={details.strMeal} className="w-full" />
            </div>
            <div className='p-5'>
                <h1 className='text-white font-bold text-2xl'> {details.strMeal} </h1>
                <h6 className='text-white'>Category: <span className='text-red-600'>{details.strCategory}</span></h6>
                <h3 className='text-white'>Instructions: </h3><p className='text-white'>{details.strInstructions}</p>
                <div className="tags mt-3 text-white">
                    <p className='mb-2'>ingredients List:</p>
                    {ingredients.map((ing, idx) => (
                        <span className='bg-red-500 text-white px-2 py-1 rounded inline-block mr-2 mb-2' key={idx}>{ing}</span>
                    ))}
                </div>
                {details.strYoutube && (
                    <div className='mt-3 relative overflow-hidden w-full'>
                        <iframe
                            width='420'
                            height="300"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        
                           
                                <p className='text-white bg-slate-500  px-2 py-1 rounded inline-block mb-2 text-center'>Read The Blog: <a
                                    target="_blank"
                                    rel="noreferrer"
                                    className='text-white'
                                    href={details.strSource}
                                >
                                    Click Here
                                </a></p>

                         
                       
                    </div>


                )}
            </div>

        </div>
    )
}

export default page;