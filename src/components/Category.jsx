import React from 'react'
import styled from 'styled-components'
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { Link } from 'react-router-dom'



function Category() {
  return (
    <List>
      <Slink>
      <FaPizzaSlice />
      <Link to={'/cuisine/Italian'}>
        <h3>Italian</h3>
      </Link>
      </Slink>

      <Slink>
      <FaHamburger />
      <Link to={'/cuisine/American'}>
        <h3>American</h3>
      </Link>
      </Slink>

      <Slink>
      <GiNoodles />
      <Link to={'/cuisine/Indian'}>
        <h3>Indian</h3>
      </Link>
      </Slink>

      <Slink>
      <GiChopsticks />
      <Link to={'/cuisine/Chinese'}>
        <h3>Chinese</h3>
      </Link>
      </Slink>

    </List>
  )
}

const List = styled.div `
  display: flex;
  justify-content: center;
  margin: 3rem 0rem;
`;

const Slink = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 3rem;
  text-decoration: none;
  background: #FFC4C4;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.9);

  h3 {
    color: black;
    font-size: 1rem;
  }

  svg {
    color: black;
    font-size: 2rem;
  }

  &.active {
    background: linear-gradient(to right, #9cb4cc, #747474);
  }

`;



export default Category