"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { User } from "@/app/types/user";

export const SignoutForm = () => {

  const [userForm,setUserForm] = useState<User>({
    nome: '',
    email: '',
    cpf: '',
    password: '',
    imagem: null ,
  })
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleButton = () => {
    alert("ola");
  };

  return (
    <>
      <Input
        placeholder="Digite seu nome:"
        value={userForm.nome}
        onChange={(t) => setUserForm({...userForm, nome: t})}
      />
      <Input
        placeholder="Digite seu email:"
        value={userForm.email}
        onChange={(t) => setUserForm({...userForm, email: t})}
      />
      <Input
        placeholder="Digite seu cpf:"
        value={userForm.cpf}
        onChange={(t) => setUserForm({...userForm, cpf: t})}
      />
      <div className="flex flex-col sm:flex-row">
        <Input
          placeholder="Digite a sua senha:"
          value={userForm.password}
          onChange={(t) => setUserForm({...userForm, password: t})}
          password
        />
        <Input
          placeholder="Confirme a sua senha:"
          value={confirmPassword}
          onChange={(t) => setConfirmPassword(t)}
          password
        />
      </div>
      <Input type="file" accept="image/jpeg,image/jpg , image/png" />
      <Button label="Entrar" size={1} handleButton={handleButton} />
    </>
  );
};
