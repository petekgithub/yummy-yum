import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";



function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const {type} = useParams();

  //const params = useParams();


  useEffect(() => {
    getCusine(type);
    console.log(type)
  },[type]);


  const getCusine = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    if(!response.ok) {
      throw new Error("Failed fetching recipes")
    }
      const recipes = await response.json();
      setCuisine(recipes.results);
  }

  return (
    <Grid
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0 }}
      transition= {{duration: 0.5}}
    >
      {cuisine.map((item) => {
        return(
          <Card key={item.id}>
          <Link to={'/recipe/' + item.id}> 
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Link>
          </Card>
        )
      })}
    </Grid>
  )
}
 

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
`;

const Card = styled.div`
  img{
    width: 100%;
    border-radius: 1rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }

`;



export default Cuisine