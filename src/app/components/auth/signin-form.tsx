"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";


export const SigninForm = () => {
  const [email, setImail] = useState("");
  const [password, setPassword] = useState("");

  const handleButton = () => {
    alert("ola");
  };

  return (
   <>
     
      <Input
        placeholder="Digite seu email:"
        value={email}
        onChange={(t) => setImail(t)}
      />
      <Input
        placeholder="Digite a sua senha:"
        value={password}
        onChange={(t) => setPassword(t)}
        password
      />
      <Button label="Entrar" size={1} handleButton={handleButton} />

      
      </>
  );
};
