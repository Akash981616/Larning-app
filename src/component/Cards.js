import React, { useEffect } from "react";
import styled from "styled-components";

const Cards = () => {
    const getUsers = async () => {
        const response = await fetch('http://dummy.restapiexample.com/api/v1/employees');
        console.log(response)
       const data=await response.json
       console.log(data)
     
      };
  useEffect(() => {
    getUsers()
    return () => {};
  }, []);

  return (
    <Container>
      <Content>
        <h1>name:</h1>
      </Content>
    </Container>
  );
};

export default Cards;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  margin: 12px;
`;
