import React, { useState } from "react";
import styled from "styled-components";

const Biodata = () => {
  const data = [
    { id: 0, name: "akash", age: "26" },
    {
      id: 1,
      name: "hritik",
      age: "22",
    },
    {
      id: 2,
      name: "hritik",
      age: "22",
    },
    { id: 4, name: "akash", age: "26" },
  ];
  const [back, setBack] = useState(data);
  const clearArr = () => {
    setBack([]);
  };
  const remove=(id)=>{
    
    const newarr=data.filter((value)=>{
      return value.id !== id
      
    })
  }
  return (
    <Container>
      <Content>
        {back.map((value) => {
          return (
            <h1 key={value.id}>
              Name:{value.name} &age:{value.age}
            <button onClick={(id)=>remove(value.id)}>remove</button></h1>
          );
        })}
        <button onClick={clearArr}>Clear</button>
      </Content>
    </Container>
  );
};

export default Biodata;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  h1 {
    border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    border-radius: 4px;
    margin-top: 4px;
  }
`;
