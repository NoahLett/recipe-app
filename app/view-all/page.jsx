'use client'

import { useState, useEffect } from "react";
import Card from "../components/Card";


const ViewAll = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);
  
    const handleFilter = async () => {
        try {
            const response = await fetch(`/api/recipe-finder/${search || 'all'}`, {
            method: 'GET',
        });

        if (response) {
          const recipes = await response.json();
          if (recipes) setRecipes(recipes.recipes);
          setLoading(false);
        }
  
        } catch (error) {
            console.error(error);
        }
    }
   
    useEffect(() => {
        handleFilter();
      }, [search])
  
    return (
      <div className="min-h-screen flex flex-col items-center pt-20">
        <h1 className="text-3xl font-semibold">All Recipes</h1>
          <input 
            className="bg-slate-100 my-6 px-5 py-1 sm:px-5 sm:py-3 rounded-3xl text-slate-800 border-[1px] border-slate-300 min-w-[17rem]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="i.e.: Chicken Piccatta"
          />
        <div className="flex flex-wrap items-center justify-center">
        {
          loading ? (
            <p className="my-5 text-2xl font-medium">Loading...</p>
          ) : (
            <div className="flex flex-wrap items-center justify-center">
              {recipes && recipes.length ? ( recipes.map((recipe) => {
                return (
                  <Card 
                    key={recipe.id}
                    id={recipe.id}
                    name={recipe.name}
                    image_src={recipe.image_src}
                    author={recipe.author}
                    ingredients={recipe.ingredients} 
                  />
                )
              })
              ) : (
                <div className="my-5"><h2 className="text-2xl font-medium">No Matching Results...</h2></div>
              )
              }
            </div>
          )
        }
        </div>
      </div>
    );
  };
  
  export default ViewAll;