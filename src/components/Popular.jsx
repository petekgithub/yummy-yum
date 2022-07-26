import React, { useState } from 'react'


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function Popular() {

  const [isLoading, setIsLoading] = useState(true);
  
  const getPopular = async () => {
    try {
      const response = await fetch (
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.RECIPE_APP_API_KEY}&number=10`
        );
        await sleep(2000);
        if (!response.ok) {
          throw new Error("Error fetching users");
        } 
      const result = await response.json();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }

  return (
    <div>
    
    {isLoading && <div>Loading…</div>}


    
    </div>
  )
}
}
export default Popular;