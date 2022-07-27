import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'




function Popular() {

  const [isLoading, setIsLoading] = useState(true);
  const [popular, setPopular] = useState([]);


  useEffect(() => {
    getPopular();
  },[]);
  
  const getPopular = async () => {
    const check = localStorage.getItem('popular');

    if(check) {
      setPopular(JSON.parse(check))
    }else {
      try {
        const response = await fetch (
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.RECIPE_APP_API_KEY}&number=10`
          );
          await sleep(2000);
          if (!response.ok) {
            throw new Error("Error fetching users");
          } 
        const result = await response.json();
        console.log(result);
        localStorage.setItem("popular", JSON.stringify(result.recipes));
        setPopular(result.recipes);
        console.log(result.recipes);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
  }


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  return (
    <div>
      <Wrapper> 
        <h2>Today's Top Recipies Here</h2>
        <Splide options={{
          perPage:4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: "9rem"
        }}>
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
        </Splide>
      </Wrapper>
      {isLoading && <div>Loading…</div>}

    </div>
  );
};

const Wrapper = styled.div `
  margin: 2rem 0rem;
`;


const Card = styled.div `
  min-height: 20rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%,0%);
    color: green;
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

  }

`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;


export default Popular;