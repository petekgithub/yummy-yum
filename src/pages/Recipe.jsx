import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";



function Recipe() {

  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  let params = useParams();
  

  useEffect(() => {
    fetchDetails('dsadas');
  });


  const fetchDetails = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await response.json();
    setDetails(detailData);
  }

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button className={activeTab === "instructions" ? "active" : ""} 
        onClick={() => setActiveTab("instructions")}
        >
        instructions</Button>
        <Button className={activeTab === "ingredients" ? "active" : ""} 
        onClick={() => setActiveTab("ingredients")}
        >
        ingredients</Button>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{__html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
        <ul>
          {details.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul> 
        )}
      </Info>
    </DetailWrapper>
  )
}


const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

.active {
  background: linear-gradient(35deg, #9cb4cc, #748DA6);
  color: black;
}

h2 {
  margin-bottom: 2rem;
}

li {
  font-size: 1.2rem;
  line-height: 2.5rem;
}

ul  {
  margin-top: 2rem;
}

`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;

`



export default Recipe 