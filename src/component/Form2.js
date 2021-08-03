import React, { useState } from "react";
import styled from "styled-components";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Form2 = () => {
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    address: "",
  });
  let name,value
  const getUserData=(event)=>{
    name=event.target.name;
    value=event.target.value;
    setUser({...user,[name]:value})
 }
  
  return (
    <Form>
      <InputField>
        <FirstInput>
          <FirstName>
            <input
              type="text"
              name="name"
              
              placeholder="Name"
              value={user.name}
              onChange={getUserData}
              required
            />
          </FirstName>
          <Email>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={getUserData}
              value={user.email}
              
              required
            />
          </Email>
        </FirstInput>
      </InputField>
      <InputField>
        <input
          type="text"
          name="phone"
          onChange={getUserData}
          placeholder="Mobile No."
          value={user.phone}
          required
        />
      </InputField>
      <InputField>
        <input
          type="text"
          name="address"
          onChange={getUserData}
          placeholder="Address"
          value={user.address}
          required
        />
      </InputField>
      <InputField>
        <input
          type="text"
          name="message"
          onChange={getUserData}
          placeholder="message"
          value={user.message}
          required
        />
      </InputField>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default Form2;
const Form = styled.div`
  margin: 20px;
`;
const InputField = styled.div`
  margin: 20px;
`;
const FirstName = styled.div``;
const Email = styled.div``;
const FirstInput = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 50vh;
`;
