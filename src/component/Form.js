import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [entry, setEntry] = useState([]);
  const submitform = (e) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = {
        id: new Date().getTime().toString(),
        email: email,
        password: password,
      };
      setEntry([...entry, newEntry]);
      setEmail("");
      setPassword("");
    }
    else{
      alert("please fill both fields")
    }
  };
  return (
    <>
      <form action="" onSubmit={submitform}>
        <label htmlFor="email">
          email:
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          password:
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(text) => setPassword(text.target.value)}
          />
        </label>
        <button type="submit">submit</button>
      </form>

      <div>
        {entry.map((val) => {
          return (
            <h1 key={val.id}>
              {" "}
              key={val.id} ,email:{val.email} pass:{val.password}
            </h1>
          );
        })}
      </div>
    </>
  );
};

export default Form;
